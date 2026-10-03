import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";
import { navigationRecord } from "./navigation.mjs";
const metadata = await auditMetadata("cold-navigation", baseURL, {
  checkLocal: true,
});
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
});
const results = [];
try {
  for (const path of [
    "/",
    "/#projects",
    "/?view=read#work-sales-forecasting",
    "/?view=world#about",
    "/#island-driftdoctor",
  ]) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const requestedURL = new URL(path, baseURL).href;
    try {
      const response = await page.goto(requestedURL, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForTimeout(1500);
      results.push({
        ...navigationRecord(
          requestedURL,
          page.url(),
          response?.status() ?? null,
        ),
        browser: browser.version(),
        state: await page.locator("body").getAttribute("data-world-state"),
      });
    } catch (error) {
      results.push({ requestedURL, error: error.message });
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
await mkdir(reportsRoot, { recursive: true });
await writeFile(
  resolve(reportsRoot, "cold-navigation.json"),
  JSON.stringify({ ...metadata, results }, null, 2) + "\n",
);
console.log(JSON.stringify(results, null, 2));
if (results.some((r) => r.error || r.problems.length)) process.exitCode = 1;
