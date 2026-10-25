const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const { createHash } = require("node:crypto");
const routes=["/","/projects/driftdoctor/","/projects/stockpulse/","/projects/sales-forecasting/","/projects/video-game-sales-dashboard/"];
const labels=["Aarya Mody","DriftDoctor","StockPulse","Sales Forecasting","Video Game Sales Dashboard"];
async function stable(page){await page.evaluate(()=>document.fonts.ready);}
for(const [index,route] of routes.entries())test(`static page, resources, metadata and accessibility: ${labels[index]}`,async({page})=>{
 const errors=[],removed=[];page.on("pageerror",error=>errors.push(error.message));page.on("request",request=>{if(/\.(glb|hdr)|\/world[.\-]|world-poster/.test(request.url()))removed.push(request.url());});
 const response=await page.goto(route);expect(response.status()).toBe(200);await stable(page);await expect(page.locator("h1")).toHaveCount(1);await expect(page.locator("h1")).toBeVisible();await expect(page).toHaveTitle(new RegExp(labels[index]));
 if(index===0)await expect(page.locator("h1")).toHaveText("From complex data to clear decisions.");
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href","https://aaryamody.app"+route);await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content",/https:\/\/aaryamody\.app\/assets\/images\/og-.*\.jpg/);
 const scan=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21aa"]).analyze();expect(scan.violations).toEqual([]);expect(errors).toEqual([]);expect(removed).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
});
test("four case studies, ten archived projects, native disclosure and old archive links",async({page})=>{
 await page.goto("/");await expect(page.locator(".project-card")).toHaveCount(4);await expect(page.locator(".archive-item")).toHaveCount(10);await expect(page.locator("#archive")).not.toHaveAttribute("open","");
 await page.locator("#archive>summary").click();await expect(page.locator("#work-sql-practice-project")).toBeVisible();await expect(page.locator("#archive")).not.toContainText("StockPulse");
 await page.goto("/?view=world#island-originkeep");await expect(page).toHaveURL(/\/#work-originkeep$/);await expect(page.locator("#work-originkeep")).toBeVisible();await expect(page.locator("#archive")).toHaveAttribute("open","");
});
test("project navigation, refresh, return and native history",async({page})=>{
 await page.goto("/");await page.getByRole("heading",{name:"StockPulse",exact:true}).getByRole("link").click();await expect(page).toHaveURL(/\/projects\/stockpulse\/$/);await page.reload();await expect(page.locator("h1")).toContainText("StockPulse");
 await page.getByRole("link",{name:"← Selected work",exact:true}).click();await expect(page).toHaveURL(/\/#projects$/);await page.goBack();await expect(page).toHaveURL(/\/projects\/stockpulse\/$/);await page.goForward();await expect(page).toHaveURL(/\/#projects$/);
});
test("legacy selected routes preserve campaign data without redirect loops",async({page})=>{
 for(const [hash,slug] of [["island-driftdoctor","driftdoctor"],["work-stockpulse","stockpulse"],["work-sales-forecasting","sales-forecasting"],["work-video-game-sales-dashboard","video-game-sales-dashboard"]]){
  await page.goto(`/?view=world&utm_source=resume#${hash}`);await expect(page).toHaveURL(new RegExp(`/projects/${slug}/\\?utm_source=resume$`));await expect(page.locator("h1")).toBeVisible();
 }
 await page.goto("/?view=read#%E0%A4%A");await expect(page.locator("h1")).toBeVisible();
});
test("no JavaScript keeps all projects, anchors, case studies and resume usable",async({browser,page})=>{
 const context=await browser.newContext({javaScriptEnabled:false,viewport:page.viewportSize()});const noJS=await context.newPage();
 try{await noJS.goto("/");await expect(noJS.locator("#archive")).toHaveAttribute("open","");await expect(noJS.locator("#work-sql-practice-project")).toBeVisible();await noJS.goto("/#island-compatforge");await expect(noJS.locator("#work-compatforge")).toBeVisible();for(const route of routes.slice(1)){await noJS.goto(route);await expect(noJS.locator("#limitations")).toBeVisible();await expect(noJS.locator('a[href="/assets/docs/AaryaMody_Resume.pdf"]').first()).toHaveAttribute("download","");}}finally{await context.close();}
});
test("copy email reports success and denial provides a selectable fallback",async({page})=>{
 await page.addInitScript(()=>Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async value=>{window.copiedEmail=value;}}}));await page.goto("/#contact");await page.locator("[data-copy-email]").click();await expect(page.locator("#copy-status")).toHaveText("Email address copied.");expect(await page.evaluate(()=>window.copiedEmail)).toBe("aaryamody5@gmail.com");
 await page.locator("#copy-dismiss").click();await expect(page.locator("[data-copy-email]")).toBeFocused();
 await page.addInitScript(()=>Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async()=>{throw new Error("Denied");}}}));await page.reload();await page.locator("[data-copy-email]").click();await expect(page.locator("#copy-fallback input")).toBeFocused();await expect(page.locator("#copy-fallback input")).toHaveValue("aaryamody5@gmail.com");
});
test("mobile menu, Escape, skip link, resume bytes and missing routes",async({page,request,browserName})=>{
 await page.setViewportSize({width:390,height:844});await page.goto("/");
 const skip=page.getByRole("link",{name:"Skip to content"});
 // Windows WebKit's default Tab preference skips anchors. Exercise the same
 // keyboard activation after focusing the native link in that engine.
 if(browserName==="webkit")await skip.focus();else await page.keyboard.press("Tab");
 await expect(skip).toBeFocused();await page.keyboard.press("Enter");await expect(page.locator("main")).toBeFocused();
 await page.locator(".mobile-menu>summary").click();await expect(page.getByRole("navigation",{name:"Mobile navigation"})).toBeVisible();await page.keyboard.press("Escape");await expect(page.locator(".mobile-menu>summary")).toBeFocused();await expect(page.locator(".mobile-menu")).not.toHaveAttribute("open","");
 const resume=await request.get("/assets/docs/AaryaMody_Resume.pdf");expect(resume.headers()["content-type"]).toContain("application/pdf");expect(createHash("sha256").update(await resume.body()).digest("hex")).toBe("15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8");expect((await request.get("/not-a-page/")).status()).toBe(404);
});
test("responsive pages, landscape and 200 percent reflow layout",async({page},testInfo)=>{
 test.skip(testInfo.project.name!=="desktop","Covered once at all target widths");
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:844});for(const route of routes){await page.goto(route);await stable(page);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${route} at ${width}`).toBeTruthy();}}
 await page.setViewportSize({width:667,height:320});for(const route of routes){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();}
 await page.setViewportSize({width:1440,height:450});await page.goto("/");expect(await page.locator(".chapter-media").first().evaluate(node=>getComputedStyle(node).position)).toBe("static");
 // A 720 CSS-pixel viewport exercises the reflow of a 1440px window at 200%.
 await page.setViewportSize({width:720,height:450});for(const route of routes){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();}
 await page.setViewportSize({width:390,height:844});await page.goto("/projects/sales-forecasting/");const diagram=page.locator(".case-graphic");await expect(diagram.locator("img")).toBeHidden();await expect(diagram.locator(".mobile-workflow")).toBeVisible();await expect(diagram.locator(".mobile-workflow li")).toHaveCount(3);
});
test("reduced motion and failed script, fonts and images keep core content usable",async({page})=>{
 await page.emulateMedia({reducedMotion:"reduce"});await page.route(/\.(?:woff2|svg|jpg|js)(?:\?|$)/,route=>route.abort());await page.goto("/");await expect(page.locator("h1")).toBeVisible();await expect(page.locator("#archive")).toHaveAttribute("open","");expect(await page.locator("html").evaluate(node=>getComputedStyle(node).scrollBehavior)).toBe("auto");await page.getByRole("heading",{name:"DriftDoctor",exact:true}).getByRole("link").click();await expect(page.locator("#limitations")).toBeVisible();
});
test("previous case-study paths redirect once and retain campaign parameters",async({page,request},testInfo)=>{
 test.skip(testInfo.project.name!=="desktop","HTTP compatibility is covered once");
 for(const [source,target] of [["driftdoctor.html","/projects/driftdoctor/"],["stockpulse.html","/projects/stockpulse/"],["sales-forecasting.html","/projects/sales-forecasting/"],["sql-analytics.html","/#work-sql-practice-project"],["sql-practice/","/#work-sql-practice-project"]]){
  const response=await request.get(`/projects/${source}?utm_source=resume`,{maxRedirects:0});
  expect(response.status()).toBe(301);
  const expected=new URL(target,"http://localhost");expected.search="?utm_source=resume";
  expect(response.headers().location).toBe(expected.pathname+expected.search+expected.hash);
  await page.goto(`/projects/${source}?utm_source=resume`);
  expect(new URL(page.url()).pathname).toBe(expected.pathname);expect(new URL(page.url()).search).toBe(expected.search);expect(new URL(page.url()).hash).toBe(expected.hash);
  if(expected.hash)await expect(page.locator("#archive")).toHaveAttribute("open","");
 }
 expect((await request.get("/projects/unknown.html",{maxRedirects:0})).status()).toBe(404);
});
test("visual baseline: homepage and StockPulse",async({page},testInfo)=>{
 test.skip(process.platform!=="win32"||!["desktop","mobile"].includes(testInfo.project.name),"Reviewed Windows Chrome baselines");
 await page.emulateMedia({reducedMotion:"reduce"});
 await page.goto("/");await stable(page);await expect(page).toHaveScreenshot("portfolio-home.png");await page.goto("/projects/stockpulse/");await stable(page);await expect(page).toHaveScreenshot("stockpulse-case.png");
});
