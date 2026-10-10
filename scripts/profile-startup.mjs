import { navigate } from "./navigation.mjs";
import { chromium, devices } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";

const metadata = await auditMetadata("fresh-process-startup", baseURL, {
  checkLocal: true,
});
const results = [];
const mobile = process.argv.includes("--mobile");
const viewport = mobile ? { width: 393, height: 851 } : { width: 1440, height: 1100 };
for (let run = 1; run <= 3; run++) {
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
  });
  try {
    const page = await browser.newPage({
      ...(mobile ? devices["Pixel 5"] : {}),
      viewport,
    });
    if (mobile) {
      const session = await page.context().newCDPSession(page);
      await session.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    }
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
      .waitFor({ timeout: mobile ? 60000 : 20000 });
    await page.waitForTimeout(1000);
    results.push({
      run,
      browser: browser.version(),
      viewport,
      cpuThrottlingRate: mobile ? 4 : 1,
      ...(await page.evaluate(() => ({
        ...window.startupProbe,
        stages: performance.getEntriesByType("measure")
          .filter((entry) => entry.name.startsWith("World "))
          .map(({ name, startTime, duration }) => ({ name, startTime, duration })),
      }))),
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
  resolve(reportsRoot, mobile ? "startup-mobile.json" : "startup.json"),
  JSON.stringify(
    {
      ...metadata,
      method:
        `Three independent fresh Chrome processes; local network, ${mobile ? "Pixel 5 emulation and 4× CDP CPU throttling" : "desktop viewport and no CPU throttling"}. GPU driver caches are not purged. This is separate from Lighthouse simulated throttling and active interaction profiling.`,
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log(JSON.stringify(results, null, 2));
