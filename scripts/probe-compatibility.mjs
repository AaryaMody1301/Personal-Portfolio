import { chromium, webkit, devices } from "@playwright/test";
import { readFile, mkdir, writeFile, access } from "node:fs/promises";
const capturedFiles = ["live-index.html", "live-style.css", "live-main.js"];
if (process.argv.includes("--help")) {
  console.log("Historical diagnostic: replay the September 20 captured public bundle against the local preview. Requires a running server on 4173 and reports/compatibility/{live-index.html,live-style.css,live-main.js}. These local captures are intentionally not committed. Use npm run compatibility:capture for current layouts.");
  process.exit(0);
}
for (const file of capturedFiles) {
  try { await access("reports/compatibility/" + file); }
  catch { throw new Error("Missing historical capture " + file + ". Run this script with --help; a fresh clone should use npm run compatibility:capture instead."); }
}
await mkdir("reports/compatibility", { recursive: true });
const results = [];
for (const [name, engine, launch, device] of [
  ["iphone-webkit", webkit, {}, devices["iPhone 15 Pro"]],
  ["android-chrome", chromium, {channel: "chrome"}, devices["Pixel 5"]]
]) {
  const browser = await engine.launch(launch);
  try {
    for (const bundle of ["local", "live-bundle"]) {
      const page = await browser.newPage({ ...device, reducedMotion: "reduce" });
      if (bundle === "live-bundle") {
        for (const [url, file, type] of [
          ["http://127.0.0.1:4173/", "live-index.html", "text/html"],
          ["**/assets/css/style.css", "live-style.css", "text/css"],
          ["**/assets/js/main.js", "live-main.js", "text/javascript"]
        ]) {
          const body = await readFile("reports/compatibility/" + file, "utf8");
          await page.route(url, (route) => route.fulfill({body,contentType:type}));
        }
      }
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto("http://127.0.0.1:4173/", {waitUntil:"networkidle"});
      await page.locator(".profile img").evaluate(img=>img.decode());
      results.push({name,bundle,errors,state:await page.evaluate(()=>({
        title:document.title,viewport:innerWidth,width:document.documentElement.scrollWidth,
        menuButtonVisible:!!document.querySelector("#nav-toggle").getBoundingClientRect().width,
        menuInert:document.querySelector("#nav-menu").inert,
        mainVisible:getComputedStyle(document.querySelector("main")).visibility,
        background:getComputedStyle(document.body).backgroundColor,
        hero:document.querySelector("h1").getBoundingClientRect().toJSON()
      }))});
      await page.screenshot({path:"reports/compatibility/"+name+"-"+bundle+".png"});
      await page.close();
    }
  } finally { await browser.close(); }
}
await writeFile("reports/compatibility/before-findings.json",JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
