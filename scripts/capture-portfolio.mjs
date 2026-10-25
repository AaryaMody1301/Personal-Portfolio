import { chromium } from "@playwright/test";
import sharp from "sharp";
import { mkdir,writeFile,readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pagePaths,pageURL } from "../src/content.mjs";
import { baseURL,reportsRoot,auditMetadata,captureState } from "./audit-target.mjs";
const metadata=await auditMetadata("visual-and-interaction-review",baseURL,{checkLocal:true});
const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHROMIUM_CHANNEL||"chrome"});
const folder=resolve(reportsRoot,"preview"),captures=[],recordings=[];
await mkdir(folder,{recursive:true});
const slugs=pagePaths.slice(1).map(path=>path.split("/")[1]);
async function prepare(page){await captureState(page);for(const root of await page.locator("[data-demo]").all()){await root.scrollIntoViewIfNeeded();await root.locator(".demo-controls").waitFor({state:"visible"});}await page.evaluate(async()=>{for(const image of document.images){image.loading="eager";await image.decode().catch(()=>{});}window.scrollTo({top:0,behavior:"instant"});});}
try{
 for(const width of [320,390,768,1440]){
  const context=await browser.newContext({viewport:{width,height:width<600?844:900},deviceScaleFactor:1,reducedMotion:"reduce"}),page=await context.newPage();
  for(const path of pagePaths){const response=await page.goto(new URL(pageURL(path),baseURL).href);if(!response.ok())throw new Error("Capture HTTP "+response.status());await prepare(page);const label=path==="index.html"?"home":path.split("/")[1],name=`${label}-${width}.png`;await page.screenshot({path:resolve(folder,name),fullPage:true,animations:"disabled"});captures.push({path,width,file:name});if(path==="index.html"){await page.screenshot({path:resolve(folder,`home-${width}-viewport.png`),animations:"disabled"});if(width===390||width===1440)for(const [i,chapter] of (await page.locator(".project-chapter").all()).entries())await chapter.screenshot({path:resolve(folder,`chapter-${i+1}-${width}.png`),animations:"disabled",style:".site-header,.work-rail{visibility:hidden}"});}}
  if(width===390||width===1440){
   for(const slug of slugs){await page.goto(new URL(`/projects/${slug}/#demo`,baseURL).href);await captureState(page);const demo=page.locator("[data-demo]");await demo.locator(".demo-controls").waitFor({state:"visible"});const options={animations:"disabled",style:".site-header{visibility:hidden}"};await demo.screenshot({...options,path:resolve(folder,`${slug}-${width}-before.png`)});
    if(slug==="driftdoctor")await demo.locator('[data-step="3"]').click();
    else if(slug==="stockpulse")await demo.getByLabel("Financial metric").selectOption("operating_cash_flow");
    else if(slug==="sales-forecasting"){await demo.getByRole("button",{name:"MAE",exact:true}).click();await demo.getByLabel("Chronological fold").selectOption("1");await demo.getByLabel("Inspect observed week").selectOption("31");}
    else await demo.getByLabel("Platform",{exact:true}).selectOption("NS");
    await demo.screenshot({...options,path:resolve(folder,`${slug}-${width}-after.png`)});
    if(width===390){await page.locator(".case-figure").screenshot({...options,path:resolve(folder,`${slug}-390-diagram.png`)});await page.locator("#evidence").screenshot({...options,path:resolve(folder,`${slug}-390-evidence.png`)});}
   }
   await page.goto(baseURL);await captureState(page);for(let stage=0;stage<4;stage++){await page.locator(`[data-hero-stage="${stage}"]`).click();await page.locator(".interactive-pipeline").screenshot({path:resolve(folder,`hero-${width}-stage-${stage+1}.png`),animations:"disabled",style:".site-header{visibility:hidden}"});}
   if(width===390){await page.locator("#archive>summary").click();await page.locator("#archive").screenshot({path:resolve(folder,"archive-390-expanded.png"),animations:"disabled",style:".site-header{visibility:hidden}"});}
  }
  await context.close();console.log(`Captured five pages at ${width}px.`);
 }
 for(const width of [1440,390]){
  const height=width===390?844:900,context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,reducedMotion:"no-preference",recordVideo:{dir:resolve(folder,"video-source"),size:{width,height}}}),page=await context.newPage(),video=page.video();
  const hold=()=>page.waitForTimeout(1100);
  await page.goto(baseURL);await captureState(page);await hold();await page.locator('[data-hero-stage="3"]').click();await hold();
  for(const slug of slugs){await page.goto(new URL(`/projects/${slug}/#demo`,baseURL).href);await captureState(page);const root=page.locator("[data-demo]");await root.locator(".demo-controls").waitFor({state:"visible"});await hold();
   if(slug==="driftdoctor"){await root.locator('[data-step="2"]').click();await hold();await root.locator('[data-step="3"]').click();}
   else if(slug==="stockpulse")await root.getByLabel("Financial metric").selectOption("net_income");
   else if(slug==="sales-forecasting"){await root.getByRole("button",{name:"MAE",exact:true}).click();await hold();await root.getByLabel("Chronological fold").selectOption("1");}
   else{await root.getByLabel("Platform",{exact:true}).selectOption("NS");await hold();await root.getByRole("button",{name:/Reset filters/}).click();}
   await hold();
  }
  await page.goto(baseURL);await captureState(page);await hold();await context.close();const name=`portfolio-${width===390?"mobile":"desktop"}-interactions.webm`;await video.saveAs(resolve(folder,name));recordings.push({width,height,file:name});console.log(`Recorded ${width}px working interactions.`);
 }
 const light=await sharp(await readFile("assets/brand/logo.svg")).resize(740,140,{fit:"inside"}).png().toBuffer(),dark=await sharp(await readFile("assets/brand/logo-reversed.svg")).resize(740,140,{fit:"inside"}).png().toBuffer();
 const board=Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="650"><rect width="1100" height="650" fill="#F7F5EF"/><rect x="45" y="240" width="1010" height="230" rx="6" fill="#244B3B"/><g font-family="Arial,sans-serif" font-size="15" fill="#5C655E"><text x="70" y="45">AARYA MODY / CANONICAL IDENTITY</text><text x="70" y="530">16px</text><text x="190" y="530">32px</text><text x="330" y="530">48px</text><text x="510" y="530">Apple touch icon / 180px</text></g></svg>');
 const layers=[{input:light,left:70,top:75},{input:dark,left:70,top:285}];for(const [i,size] of [16,32,48].entries())layers.push({input:await readFile(`assets/brand/favicon-${size}.png`),left:[70,190,330][i],top:555});layers.push({input:await sharp(await readFile("assets/brand/apple-touch-icon.png")).resize(80,80).toBuffer(),left:510,top:550});await sharp(board).composite(layers).png().toFile(resolve(folder,"logo-review.png"));
}finally{await browser.close();}
await writeFile(resolve(folder,"captures.json"),JSON.stringify({...metadata,captures,recordings},null,2)+"\n");console.log(`Saved review images, logo board and two actual browser recordings in ${folder}`);
