import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { createServer } from "node:net";
import { mkdir,writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { baseURL,reportsRoot,auditMetadata } from "./audit-target.mjs";
import { pagePaths,pageURL } from "../src/content.mjs";
const metadata=await auditMetadata("lighthouse",baseURL,{checkLocal:true});
const reservation=createServer();await new Promise((done,reject)=>{reservation.once("error",reject);reservation.listen(0,"127.0.0.1",done);});const port=reservation.address().port;await new Promise(done=>reservation.close(done));
const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHROMIUM_CHANNEL||"chrome",args:["--remote-debugging-port="+port]});
try{
 const runs=[],count=Number(process.env.PORTFOLIO_AUDIT_RUNS||3);if(!Number.isInteger(count)||count<1||count>10)throw new Error("PORTFOLIO_AUDIT_RUNS must be 1–10");
 await mkdir(resolve(reportsRoot,"lighthouse"),{recursive:true});
 for(const path of pagePaths)for(const device of ["mobile","desktop"])for(let run=1;run<=count;run++){
  const view=path==="index.html"?"home":path.split("/")[1];
  const result=await lighthouse(new URL(pageURL(path),baseURL).href,{port,hostname:"127.0.0.1",output:["html","json"],onlyCategories:["performance","accessibility","best-practices","seo"],logLevel:"error",...(process.env.PORTFOLIO_AUDIT_NATIVE_UA==="1"?{emulatedUserAgent:false}:{})},device==="desktop"?desktopConfig:undefined);
  if(!result)throw new Error("Lighthouse returned no result");
  await writeFile(resolve(reportsRoot,`lighthouse/${view}-${device}-${run}.html`),result.report[0]);await writeFile(resolve(reportsRoot,`lighthouse/${view}-${device}-${run}.json`),result.report[1]);
  const record=result.lhr.runtimeError?{view,device,run,error:result.lhr.runtimeError}:{view,device,run,requestedURL:result.lhr.requestedUrl,settledURL:result.lhr.finalDisplayedUrl,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([key,category])=>[key,Math.round(category.score*100)])),metrics:{lcp:result.lhr.audits["largest-contentful-paint"].numericValue,tbt:result.lhr.audits["total-blocking-time"].numericValue,cls:result.lhr.audits["cumulative-layout-shift"].numericValue}};
  runs.push(record);console.log(JSON.stringify(record));
 }
 const median=values=>values.sort((a,b)=>a-b)[Math.floor(values.length/2)],medians={};
 for(const view of ["home",...pagePaths.slice(1).map(p=>p.split("/")[1])])for(const device of ["mobile","desktop"]){const matching=runs.filter(r=>r.view===view&&r.device===device&&r.scores);medians[`${view}-${device}`]=Object.fromEntries(["performance","accessibility","best-practices","seo"].map(key=>[key,matching.length?median(matching.map(r=>r.scores[key])):null]));}
 await writeFile(resolve(reportsRoot,"lighthouse/summary.json"),JSON.stringify({...metadata,browser:browser.version(),runs,medians},null,2)+"\n");console.log(JSON.stringify({medians}));const minimums={performance:90,accessibility:95,"best-practices":95,seo:95};if(runs.some(r=>r.error)||Object.values(medians).some(scores=>Object.entries(minimums).some(([key,min])=>scores[key]===null||scores[key]<min)))process.exitCode=1;
}finally{await browser.close();}
