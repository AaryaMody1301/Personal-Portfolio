import { chromium, webkit, firefox, devices } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const directory = "reports/compatibility";
await mkdir(directory, { recursive: true });
const results = [];
for (const [name, engine, launch, device] of [
  ["iphone-15-pro", webkit, {}, devices["iPhone 15 Pro"]],
  ["iphone-se", webkit, {}, devices["iPhone SE"]],
  ["ipad-mini", webkit, {}, devices["iPad Mini"]],
  ["android-pixel", chromium, { channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome" }, devices["Pixel 5"]],
  ["desktop-webkit", webkit, {}, { viewport: { width: 1440, height: 1100 } }],
  ["desktop-firefox", firefox, {}, { viewport: { width: 1440, height: 1100 } }]
]) {
  const browser = await engine.launch(launch);
  try {
    const page = await browser.newPage({ ...device, reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.locator(".profile img").evaluate((img) => img.decode());
    const capture = (state) => page.screenshot({ path: `${directory}/${name}-${state}.png`, scale: "css" });
    await capture("home");
    if (device.isMobile) {
      await page.locator("#nav-toggle").tap();
      await capture("menu");
      await page.getByRole("link", { name: "Work", exact: true }).tap();
      await page.locator("#driftdoctor summary").tap();
      await page.locator("#driftdoctor").screenshot({ path: `${directory}/${name}-project.png`, scale: "css" });
      await page.evaluate(() => window.scrollTo(0, 600));
      await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
      await page.evaluate(() => window.scrollTo(0, 900));
      await page.waitForFunction(() => document.querySelector("#site-header").classList.contains("is-hidden"));
      await capture("scroll-down");
      await page.evaluate(() => window.scrollTo(0, 800));
      await page.waitForFunction(() => !document.querySelector("#site-header").classList.contains("is-hidden"));
      await capture("scroll-up");
      await page.setViewportSize({ width: 667, height: 320 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator("#nav-toggle").tap();
      await page.locator("#nav-menu a[download]").scrollIntoViewIfNeeded();
      await capture("landscape-menu");
    }
    results.push({ name, engine: engine.name(), version: browser.version(), errors });
    console.log(`${name}: captured; ${errors.length} console/runtime errors.`);
  } finally { await browser.close(); }
}
await writeFile(`${directory}/after-findings.json`, JSON.stringify(results, null, 2));
if (results.some((result) => result.errors.length)) process.exitCode = 1;
