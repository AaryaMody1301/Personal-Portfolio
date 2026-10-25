import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { root, digest, prepareAssets } from "./prepare-assets.mjs";
import { baseURL, reportsRoot, referenceRoot, auditMetadata } from "./audit-target.mjs";
const mimeTypes = {html:"text/html",json:"application/json",css:"text/css",js:/(?:java|ecma)script/,pdf:"application/pdf",woff2:"font/woff2",ttf:/font\/ttf|application\/(?:octet-stream|x-font-ttf)/,webp:"image/webp",jpg:"image/jpeg",png:"image/png",ico:/image\/(?:vnd\.microsoft\.icon|x-icon)/,svg:"image/svg+xml",xml:/(?:text|application)\/xml/,txt:"text/plain",glb:/model\/gltf-binary|application\/octet-stream/,hdr:"application/octet-stream"};
export async function verifyDeployment(siteUrl=baseURL,{referenceDir=root}={}) {
 if(resolve(referenceDir)===resolve(root)) await prepareAssets({check:true});
 const manifestBytes=await readFile(resolve(referenceDir,"assets/manifest.json"));
 const manifest=JSON.parse(manifestBytes);
 if(![1,2].includes(manifest.version)||!Array.isArray(manifest.assets)||(manifest.version===2&&(!Array.isArray(manifest.pages)||!manifest.pages.length)))throw new Error("Unsupported or malformed release manifest");
 const pages=manifest.version===2?manifest.pages:[{path:"index.html"}];
 const legal=manifest.assets.filter(a=>a.source?.endsWith(".js")).map(a=>a.source+".LEGAL.txt");
 const paths=[...new Set([...pages.map(p=>p.path),...manifest.assets.map(a=>a.path),...legal,"assets/manifest.json","assets/docs/AaryaMody_Resume.pdf","robots.txt","sitemap.xml"])];
 const resources=[],problems=[];
 for(const path of paths) {
  const localPath=resolve(referenceDir,path);
  if(!/^[\w./-]+$/.test(path)||path.startsWith("/")||path.split("/").includes("..")||!localPath.startsWith(resolve(referenceDir)+sep))throw new Error("Unsafe release path");
  const local=await readFile(localPath),record=[...pages,...manifest.assets].find(item=>item.path===path);
  if(record?.hash&&(record.hash!==digest(local)||record.bytes!==local.length))problems.push(path+": reference bytes do not match manifest");
  const requestPath=pages.some(p=>p.path===path)?path.replace(/index\.html$/,""):path;
  const expectedURL=new URL(requestPath,siteUrl);
  try {
   const response=await fetch(expectedURL,{redirect:"follow",signal:AbortSignal.timeout(30000)});
   if(!response.ok){problems.push(path+": HTTP "+response.status);continue;}
   const contentType=response.headers.get("content-type")||"",mime=mimeTypes[path.split(".").pop()];
   if(mime&&!(mime instanceof RegExp?mime.test(contentType):contentType.includes(mime)))problems.push(path+": wrong content type "+contentType);
   const finalURL=new URL(response.url);
   if(finalURL.origin!==expectedURL.origin||finalURL.pathname!==expectedURL.pathname)problems.push(path+": unexpected redirect destination");
   const bytes=Buffer.from(await response.arrayBuffer());
   if(digest(bytes)!==digest(local))problems.push(path+": served bytes differ from reference release");
   resources.push({path,status:response.status,contentType,bytes:bytes.length,hash:digest(bytes),expectedHash:digest(local),cacheControl:response.headers.get("cache-control")});
  } catch(error){problems.push(path+": "+error.message);}
 }
 const result={...(await auditMetadata("deployment",siteUrl)),url:siteUrl,referenceDir,manifestVersion:manifest.version,pages:pages.length,assets:paths.length,problems,resources};
 if(problems.length){const error=new Error("Deployment verification failed:\n- "+problems.join("\n- "));error.report=result;throw error;}
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
 try {const result=await verifyDeployment(process.argv[2]||baseURL,{referenceDir:referenceRoot});await mkdir(reportsRoot,{recursive:true});await writeFile(resolve(reportsRoot,"deployment.json"),JSON.stringify(result,null,2)+"\n");console.log(`Verified ${result.pages} pages and ${result.assets} release files at ${result.url}`);}
 catch(error){if(error.report){await mkdir(reportsRoot,{recursive:true});await writeFile(resolve(reportsRoot,"deployment.json"),JSON.stringify(error.report,null,2)+"\n");}console.error(error.message);process.exitCode=1;}
}
