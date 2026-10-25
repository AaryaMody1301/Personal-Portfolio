import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile,writeFile,mkdtemp,mkdir,rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve,extname } from "node:path";
import { root,digest } from "../prepare-assets.mjs";
import { verifyDeployment } from "../verify-live.mjs";
test("release verification detects missing pages, stale bytes, bad MIME and supports v1 rollback",async()=>{
 let servedRoot=root,fault="none";
 const legacy=await mkdtemp(resolve(tmpdir(),"portfolio-legacy-"));
 const mime={".html":"text/html",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webp":"image/webp",".txt":"text/plain",".json":"application/json",".xml":"application/xml",".pdf":"application/pdf"};
 const server=createServer(async(req,res)=>{let path=new URL(req.url,"http://localhost").pathname.slice(1);if(!path||path.endsWith("/"))path+="index.html";try{if(fault==="missing"&&path==="projects/stockpulse/index.html"){res.writeHead(404).end();return;}let bytes=await readFile(resolve(servedRoot,path)),type=mime[extname(path)];if(path==="projects/stockpulse/index.html"&&fault==="page")bytes=Buffer.from("Stale case study");if(/\/app\.[a-f0-9]{12}\.js$/.test(path)){if(fault==="script")bytes=Buffer.from("/* stale */");if(fault==="html"){bytes=Buffer.from("<html>Host error</html>");type="text/html";}}if(fault==="mime"&&path.endsWith(".woff2"))type="application/octet-stream";if(fault==="png"&&path.endsWith(".png"))type="application/octet-stream";if(fault==="ico"&&path.endsWith(".ico"))type="text/plain";if(fault==="logo"&&path.startsWith("assets/brand/monogram."))bytes=Buffer.from("<svg/>");if(fault==="font"&&path.endsWith(".woff2"))bytes=Buffer.from("stale");if(fault==="manifest"&&path==="assets/manifest.json")bytes=Buffer.from("{}");res.writeHead(200,{"Content-Type":type||"application/octet-stream"}).end(bytes);}catch{res.writeHead(404).end();}});
 await new Promise(done=>server.listen(0,"127.0.0.1",done));const url=`http://127.0.0.1:${server.address().port}/`;
 try{
  assert.equal((await verifyDeployment(url)).pages,5);
  for(const [mode,pattern] of [["missing",/HTTP 404/],["page",/served bytes differ/],["script",/served bytes differ/],["html",/wrong content type/],["font",/served bytes differ/],["mime",/wrong content type/],["manifest",/served bytes differ/],["png",/wrong content type/],["ico",/wrong content type/],["logo",/served bytes differ/]]){fault=mode;await assert.rejects(verifyDeployment(url),pattern);}
  fault="none";await mkdir(resolve(legacy,"assets/js"),{recursive:true});await mkdir(resolve(legacy,"assets/docs"),{recursive:true});const js=Buffer.from("/* Earlier release */"),asset={source:"assets/js/legacy.js",path:"assets/js/legacy."+digest(js).slice(0,12)+".js",hash:digest(js),bytes:js.length};
  await writeFile(resolve(legacy,asset.path),js);await writeFile(resolve(legacy,asset.source+".LEGAL.txt"),"Earlier license\n");await writeFile(resolve(legacy,"index.html"),`<!doctype html><html><head><title>Earlier release</title></head><body><h1>Earlier portfolio</h1><script src="/${asset.path}"></script></body></html>`);await writeFile(resolve(legacy,"assets/manifest.json"),JSON.stringify({version:1,assets:[asset]}));await writeFile(resolve(legacy,"assets/docs/AaryaMody_Resume.pdf"),await readFile(resolve(root,"assets/docs/AaryaMody_Resume.pdf")));await writeFile(resolve(legacy,"robots.txt"),"User-agent: *\n");await writeFile(resolve(legacy,"sitemap.xml"),"<urlset/>\n");servedRoot=legacy;
  const result=await verifyDeployment(url,{referenceDir:legacy});assert.equal(result.manifestVersion,1);assert.equal(result.pages,1);
 }finally{await new Promise(done=>server.close(done));await rm(legacy,{recursive:true,force:true});}
});
