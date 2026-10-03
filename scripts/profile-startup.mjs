import { navigate } from "./navigation.mjs";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";

const metadata = await auditMetadata("fresh-process-startup", baseURL, {
  checkLocal: true,
});
const results = [];
for (let run = 1; run <= 3; run++) {
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1100 },
    });
    await page.addInitScript(() => {
      window.startupProbe = { states: [], longTasks: [] };
      new PerformanceObserver((list) =>
        window.startupProbe.longTasks.push(
          ...list.getEntries().map((entry) => ({
            start: entry.startTime,
            duration: entry.duration,
          })),
        ),
      ).observe({ type: "longtask", buffered: true });
      document.addEventListener("DOMContentLoaded", () => {
        new MutationObserver(() =>
          window.startupProbe.states.push({
            time: performance.now(),
            state: document.body.dataset.worldState,
          }),
        ).observe(document.body, {
          attributes: true,
          attributeFilter: ["data-world-state"],
        });
      });
    });
    await navigate(page, new URL("?view=world", baseURL).href);
    await page
      .locator("body[data-world-state=ready]")
      .waitFor({ timeout: 20000 });
    await page.waitForTimeout(1000);
    results.push({
      run,
      browser: browser.version(),
      viewport: { width: 1440, height: 1100 },
      ...(await page.evaluate(() => window.startupProbe)),
    });
  } catch (error) {
    results.push({ run, error: error.message });
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}
await mkdir(reportsRoot, { recursive: true });
await writeFile(
  resolve(reportsRoot, "startup.json"),
  JSON.stringify(
    {
      ...metadata,
      method:
        "Three independent fresh Chrome processes; local network, no CPU throttling. GPU driver caches are not purged. This is separate from active interaction profiling.",
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log(JSON.stringify(results, null, 2));
