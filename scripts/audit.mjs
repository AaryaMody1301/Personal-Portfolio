import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import { createServer } from "node:net";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";
const metadata = await auditMetadata("lighthouse", baseURL, {
  checkLocal: true,
});

// Let Playwright own Chrome's lifecycle: Lighthouse CLI cleanup is unreliable
// on Windows when its temporary profile is still locked after taskkill.
const reservation = createServer();
await new Promise((resolve, reject) => {
  reservation.once("error", reject);
  reservation.listen(0, "127.0.0.1", resolve);
});
const port = reservation.address().port;
await new Promise((resolve, reject) =>
  reservation.close((error) => (error ? reject(error) : resolve())),
);
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
  args: ["--remote-debugging-port=" + port],
});
try {
  const runs = [];
  const count = Number(process.env.PORTFOLIO_AUDIT_RUNS || 3);
  if (!Number.isInteger(count) || count < 1 || count > 10)
    throw new Error("PORTFOLIO_AUDIT_RUNS must be 1–10.");
  await mkdir(resolve(reportsRoot, "lighthouse"), { recursive: true });
  for (const view of ["read", "world"])
    for (const device of ["mobile", "desktop"])
      for (let run = 1; run <= count; run++) {
        const result = await lighthouse(
          new URL(view === "read" ? "/" : "?view=world", baseURL).href,
          {
            port,
            hostname: "127.0.0.1",
            output: ["html", "json"],
            onlyCategories: [
              "performance",
              "accessibility",
              "best-practices",
              "seo",
            ],
            logLevel: "error",
            ...(process.env.PORTFOLIO_AUDIT_NATIVE_UA === "1"
              ? { emulatedUserAgent: false }
              : {}),
          },
          device === "desktop" ? desktopConfig : undefined,
        );
        if (!result) throw new Error("Lighthouse returned no result.");
        await writeFile(
          resolve(reportsRoot, `lighthouse/${view}-${device}-${run}.html`),
          result.report[0],
        );
        await writeFile(
          resolve(reportsRoot, `lighthouse/${view}-${device}-${run}.json`),
          result.report[1],
        );
        if (result.lhr.runtimeError) {
          const record = { view, device, run, error: result.lhr.runtimeError };
          runs.push(record);
          console.log(JSON.stringify(record));
          continue;
        }
        const scores = Object.fromEntries(
          Object.entries(result.lhr.categories).map(([key, category]) => [
            key,
            Math.round(category.score * 100),
          ]),
        );
        const record = {
          view,
          device,
          run,
          requestedURL: result.lhr.requestedUrl,
          settledURL: result.lhr.finalDisplayedUrl,
          scores,
          warnings: result.lhr.runWarnings,
          userAgent: result.lhr.userAgent,
          metrics: {
            lcp: result.lhr.audits["largest-contentful-paint"].numericValue,
            tbt: result.lhr.audits["total-blocking-time"].numericValue,
            cls: result.lhr.audits["cumulative-layout-shift"].numericValue,
          },
        };
        runs.push(record);
        console.log(JSON.stringify(record));
      }
  const median = (numbers) =>
    numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
  const medians = Object.fromEntries(
    ["read", "world"].flatMap((view) =>
      ["mobile", "desktop"].map((device) => [
        `${view}-${device}`,
        Object.fromEntries(
          ["performance", "accessibility", "best-practices", "seo"].map(
            (key) => [
              key,
              median(
                runs
                  .filter(
                    (r) => r.view === view && r.device === device && r.scores,
                  )
                  .map((r) => r.scores[key]),
              ),
            ],
          ),
        ),
      ]),
    ),
  );
  await writeFile(
    resolve(reportsRoot, "lighthouse/summary.json"),
    JSON.stringify(
      {
        ...metadata,
        browser: browser.version(),
        nativeUserAgent: process.env.PORTFOLIO_AUDIT_NATIVE_UA === "1",
        runs,
        medians,
      },
      null,
      2,
    ) + "\n",
  );
  console.log(JSON.stringify({ medians }));
  const minimums = {
    performance: 90,
    accessibility: 95,
    "best-practices": 95,
    seo: 95,
  };
  if (
    runs.some((r) => r.error) ||
    Object.values(medians).some((scores) =>
      Object.entries(minimums).some(([key, minimum]) => scores[key] < minimum),
    )
  )
    process.exitCode = 1;
} finally {
  await browser.close();
}
