import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import { createServer } from "node:net";
import { mkdir, writeFile } from "node:fs/promises";

// Let Playwright own Chrome's lifecycle: Lighthouse CLI cleanup is unreliable
// on Windows when its temporary profile is still locked after taskkill.
const reservation = createServer();
await new Promise((resolve, reject) => {
  reservation.once("error", reject);
  reservation.listen(0, "127.0.0.1", resolve);
});
const port = reservation.address().port;
await new Promise((resolve, reject) => reservation.close((error) => error ? reject(error) : resolve()));
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome", args: ["--remote-debugging-port=" + port] });
try {
  const result = await lighthouse("http://127.0.0.1:4173/", {
    port,
    hostname: "127.0.0.1",
    output: ["html", "json"],
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    logLevel: "error"
  });
  if (!result || result.lhr.runtimeError) throw new Error(result?.lhr.runtimeError?.message || "Lighthouse returned no result.");
  await mkdir("reports", { recursive: true });
  await writeFile("reports/lighthouse.report.html", result.report[0]);
  await writeFile("reports/lighthouse.report.json", result.report[1]);
  const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([key, category]) => [key, Math.round(category.score * 100)]));
  console.log(JSON.stringify({ scores, warnings: result.lhr.runWarnings }, null, 2));
  const minimums = { performance: 90, accessibility: 95, "best-practices": 95, seo: 95 };
  if (Object.entries(minimums).some(([key, minimum]) => scores[key] < minimum)) process.exitCode = 1;
} finally {
  await browser.close();
}
