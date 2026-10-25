import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { root,digest } from "./prepare-assets.mjs";
import { resolve } from "node:path";
async function snapshot(){const bytes=await readFile(resolve(root,"assets/manifest.json"));const manifest=JSON.parse(bytes);return Object.fromEntries(await Promise.all(["assets/manifest.json","sitemap.xml",...manifest.pages.map(p=>p.path),...manifest.assets.map(a=>a.path)].map(async path=>[path,digest(await readFile(resolve(root,path)))])));}
const build=()=>execFileSync(process.execPath,["scripts/build.mjs"],{cwd:root,stdio:"pipe"});
const assets=()=>execFileSync(process.execPath,["scripts/prepare-assets.mjs"],{cwd:root,stdio:"pipe"});
build();assets();const first=await snapshot();build();assets();const second=await snapshot();if(JSON.stringify(first)!==JSON.stringify(second))throw new Error("Successive builds differ");console.log(`Two builds match: ${Object.keys(first).length} release files.`);
