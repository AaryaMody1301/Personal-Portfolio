import { chromium } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { readFile,writeFile,mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath,pathToFileURL } from "node:url";
import { root } from "./prepare-assets.mjs";
import { baseURL,reportsRoot,auditMetadata } from "./audit-target.mjs";
export function parseLink(value,base){try{return new URL(value,base);}catch{return null;}}
export function decodeLinkPart(value){try{return decodeURIComponent(value);}catch{return null;}}
export async function checkLinks(){
 const metadata=await auditMetadata("links",baseURL,{checkLocal:true});
 const manifest=JSON.parse(await readFile(resolve(root,"assets/manifest.json"),"utf8"));
 const entries=new Map(),ids=new Map(),origin=new URL(baseURL).origin;
 function add(value,source,base=baseURL,file=false){if(!value||value.startsWith("data:"))return;let url=parseLink(value,base);if(url?.origin==="https://aaryamody.app")url=new URL(url.pathname+url.search+url.hash,baseURL);const href=url?.href||value,key=(file?"file:":"")+href;if(!entries.has(key))entries.set(key,{url:href,file,sources:[]});entries.get(key).sources.push(source);}
 const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHROMIUM_CHANNEL||"chrome"});
 try{
  const page=await browser.newPage({javaScriptEnabled:false});
  for(const item of manifest.pages){const url=new URL(item.path.replace(/index\.html$/,""),baseURL);const response=await page.goto(url.href);if(!response.ok())throw new Error(`${item.path}: HTTP ${response.status()}`);
   const data=await page.evaluate(()=>({ids:[...document.querySelectorAll("[id]")].map(n=>n.id),urls:[...document.querySelectorAll("[href],[src],[srcset]")].flatMap(n=>[n.getAttribute("href"),n.getAttribute("src"),...(n.getAttribute("srcset")||"").split(",").map(v=>v.trim().split(/\s+/)[0])]).filter(Boolean),meta:[...document.querySelectorAll('meta[property="og:image"],meta[property="og:url"],meta[name="twitter:image"]')].map(n=>n.content)}));
   if(new Set(data.ids).size!==data.ids.length)throw new Error("Duplicate IDs on "+item.path);ids.set(url.pathname,data.ids);for(const value of [...data.urls,...data.meta])add(value,item.path,url);add(url.href,item.path);
  }
  for(const item of manifest.assets){add(item.path,"manifest");if(item.path.endsWith(".css")){const url=new URL(item.path,baseURL),css=await readFile(resolve(root,item.path),"utf8");for(const match of css.matchAll(/url\(\s*["']?([^"'\s)]+)["']?\s*\)/g))add(match[1],item.path,url);}}
  for(const path of ["assets/manifest.json","robots.txt","sitemap.xml","assets/docs/AaryaMody_Resume.pdf","assets/js/app.js.LEGAL.txt"])add(path,"release");
  const files=execFileSync("git",["ls-files","--cached","--others","--exclude-standard","-z"],{cwd:root,encoding:"utf8"}).split("\0");
  for(const path of new Set(files.filter(p=>p.endsWith(".md")))){let text;try{text=await readFile(resolve(root,path),"utf8");}catch(error){if(error.code==="ENOENT")continue;throw error;}for(const match of text.matchAll(/!?\[[^\]]*\]\((<?[^\s)]+>?)(?:\s+"[^"]*")?\)/g)){const value=match[1].replace(/^<|>$/g,"");if(/^[a-z]+:/i.test(value))add(value,path);else add(value,path,pathToFileURL(resolve(root,path)).href,true);}}
  async function check(entry){const url=parseLink(entry.url),result={...entry,sources:[...new Set(entry.sources)]};if(!url)return {...result,status:"broken",reason:"Malformed URL"};
   if(entry.file){try{await readFile(fileURLToPath(url));return {...result,status:"working",kind:"repository"};}catch{const optional=/\/(?:archive|reports|output)\//.test(url.pathname);return {...result,status:optional?"unverified":"broken",kind:"repository",reason:optional?"Historical local evidence unavailable":"Missing local documentation target"};}}
   if(["mailto:","tel:"].includes(url.protocol)){const valid=url.protocol==="mailto:"?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(decodeLinkPart(url.pathname)||""):/^\+?[\d() .-]{7,20}$/.test(url.pathname);return {...result,status:valid?"working":"broken",kind:"contact",reason:"Syntax checked; no message or call sent"};}
   if(!["http:","https:"].includes(url.protocol))return {...result,status:"unverified",reason:"Unsupported scheme"};
   const internal=url.origin===origin,kind=internal?"portfolio":"external";
   if(internal&&url.hash&&ids.has(url.pathname))return {...result,kind,status:ids.get(url.pathname).includes(decodeLinkPart(url.hash.slice(1)))?"working":"broken",reason:"Static page fragment checked"};
   try{const response=await fetch(url,{redirect:"follow",signal:AbortSignal.timeout(15000)}),type=response.headers.get("content-type")||"";const text=type.includes("text/html")?(await response.text()).slice(0,200000):"";if(!text)await response.body?.cancel();const blocked=[401,403,407,429,999].includes(response.status)||/\/(?:login|authwall|checkpoint|signin)/i.test(response.url)||/<title>[^<]*(?:just a moment|access denied|security check|captcha)/i.test(text);return {...result,kind,status:blocked?"blocked":response.ok?"working":[404,410].includes(response.status)?"broken":"unverified",httpStatus:response.status,finalURL:response.url};}catch(error){return {...result,kind,status:"unverified",reason:error.message};}
  }
  const pending=[...entries.values()],results=[];await Promise.all(Array.from({length:6},async()=>{while(pending.length)results.push(await check(pending.shift()));}));
  results.sort((a,b)=>a.url.localeCompare(b.url));const counts=Object.fromEntries(["working","broken","blocked","unverified"].map(status=>[status,results.filter(r=>r.status===status).length]));
  await mkdir(reportsRoot,{recursive:true});await writeFile(resolve(reportsRoot,"links.json"),JSON.stringify({...metadata,counts,results},null,2)+"\n");console.log(JSON.stringify({counts,attention:results.filter(r=>r.status!=="working")},null,2));if(counts.broken||results.some(r=>r.kind==="portfolio"&&r.status!=="working"))process.exitCode=1;
 }finally{await browser.close();}
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))await checkLinks();
