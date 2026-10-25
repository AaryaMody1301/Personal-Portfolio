import { createHash } from "node:crypto";
import { readFile, writeFile, readdir, unlink } from "node:fs/promises";
import { dirname, basename, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { featured, pagePaths } from "../src/content.mjs";
export const root = fileURLToPath(new URL("../", import.meta.url));
export const digest = bytes => createHash("sha256").update(bytes).digest("hex");
const leaves = ["assets/fonts/inter-latin-variable.woff2","assets/fonts/newsreader-latin-variable.woff2","assets/images/portrait.webp","assets/images/portrait-small.webp","assets/images/favicon.svg","assets/images/og-image.jpg",...featured.flatMap(p=>[`assets/images/projects/${p.slug}.svg`,`assets/images/og-${p.slug}.jpg`]),...['monogram.svg','monogram-reversed.svg','wordmark.svg','logo.svg','logo-reversed.svg','favicon-16.png','favicon-32.png','favicon-48.png','favicon.ico','apple-touch-icon.png'].map(file=>`assets/brand/${file}`),"assets/licenses/THIRD-PARTY-NOTICES.txt","assets/licenses/Inter-OFL.txt","assets/licenses/Newsreader-OFL.txt","assets/licenses/Font-Sources.txt"];
const parents = ["assets/css/style.css", "assets/js/app.js"];
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = source => {const ext=extname(source);return new RegExp(`${escape(source.slice(0,-ext.length))}(?:\\.[a-f0-9]{12})?${escape(ext)}`,"g");};
const named=(source,hash)=>{const ext=extname(source);return `${source.slice(0,-ext.length)}.${hash.slice(0,12)}${ext}`;};
export async function prepareAssets({check=false}={}) {
 const documents = new Map(await Promise.all(pagePaths.map(async path=>[path,await readFile(resolve(root,path),"utf8")])));
 const assets=[];
 for(const source of [...leaves,...parents]) {
  let bytes=await readFile(resolve(root,source));
  if(source.endsWith(".css")) {let css=bytes.toString("utf8");for(const item of assets)css=css.replace(pattern("../"+item.source.slice(7)),"../"+item.path.slice(7));bytes=Buffer.from(css);}
  const hash=digest(bytes),path=named(source,hash);
  if(check) {if(digest(await readFile(resolve(root,path)))!==hash)throw new Error(`Corrupt or stale asset: ${path}`);} else await writeFile(resolve(root,path),bytes);
  for(const [page,html] of documents) {const refs=[...html.matchAll(pattern(source))].map(m=>m[0]);if(check&&refs.some(ref=>ref!==path))throw new Error(`Stale ${source} on ${page}`);documents.set(page,html.replace(pattern(source),path));}
  assets.push({source,path,hash,bytes:bytes.length});
 }
 const available = new Set([...assets.map(item=>item.path),"assets/docs/AaryaMody_Resume.pdf","assets/js/app.js.LEGAL.txt"]);
 for (const [page,html] of documents) for (const match of html.matchAll(/\/assets\/[\w./-]+/g)) {
  if(!available.has(match[0].slice(1)))throw new Error(`Unmanifested resource ${match[0]} on ${page}`);
 }
 const pages=[];
 for(const [path,html] of documents) {pages.push({path,hash:digest(Buffer.from(html)),bytes:Buffer.byteLength(html)});if(!check)await writeFile(resolve(root,path),html);}
 const result={version:2,pages,assets},json=JSON.stringify(result,null,2)+"\n";
 if(check) {if(await readFile(resolve(root,"assets/manifest.json"),"utf8")!==json)throw new Error("Stale asset manifest.");}
 else {
  await writeFile(resolve(root,"assets/manifest.json"),json);
  for(const {source,path} of assets) {
   const folder=resolve(root,dirname(source));if(!folder.startsWith(resolve(root,"assets")+sep))throw new Error("Asset outside workspace");
   const ext=extname(source),rx=new RegExp(`^${escape(basename(source,ext))}\\.[a-f0-9]{12}${escape(ext)}$`);
   for(const file of await readdir(folder))if(rx.test(file)&&file!==basename(path))await unlink(resolve(folder,file));
  }
 }
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {const manifest=await prepareAssets({check:process.argv.includes("--check")});console.log(`Verified ${manifest.pages.length} pages and ${manifest.assets.length} content-versioned assets.`);}
