import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";
import { navigationRecord } from "./navigation.mjs";
import { featured, legacyDestinations } from "../src/content.mjs";
import { canonicalLegacyURL } from "../src/routes.mjs";
const metadata=await auditMetadata("cold-navigation",baseURL,{checkLocal:true});
const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHROMIUM_CHANNEL||"chrome"});
const results=[];
try {
 for(const path of ["/",...featured.map(p=>`/projects/${p.slug}/`),"/?view=world#about","/#island-driftdoctor","/?view=read#work-stockpulse","/#work-sql-practice-project"]) {
  const context=await browser.newContext(),page=await context.newPage(),requestedURL=new URL(path,baseURL).href;
  const expectedURL=canonicalLegacyURL(requestedURL,legacyDestinations).href;
  try {const response=await page.goto(requestedURL,{waitUntil:"domcontentloaded"});await page.waitForURL(expectedURL);await page.locator("h1").waitFor();results.push({...navigationRecord(requestedURL,page.url(),response?.status()??null,{expectedURL}),browser:browser.version()});}
  catch(error){results.push({requestedURL,expectedURL,error:error.message});}finally{await context.close();}
 }
}finally{await browser.close();}
await mkdir(reportsRoot,{recursive:true});await writeFile(resolve(reportsRoot,"cold-navigation.json"),JSON.stringify({...metadata,results},null,2)+"\n");
console.log(JSON.stringify(results,null,2));if(results.some(r=>r.error||r.problems.length))process.exitCode=1;
