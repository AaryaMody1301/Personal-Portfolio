const { defineConfig, devices } = require("@playwright/test");
const baseURL = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:4173";
const live = !["localhost", "127.0.0.1", "[::1]"].includes(
  new URL(baseURL).hostname,
);
const { resolve, sep } = require("node:path");
const { existsSync } = require("node:fs");
let reportsRoot =
  process.env.PORTFOLIO_REPORTS_DIR ||
  `reports/${live ? "live" : "local"}/${new Date().toISOString().replace(/[:.]/g, "-")}-browser`;
if (!resolve(reportsRoot).startsWith(resolve("reports") + sep))
  throw new Error("PORTFOLIO_REPORTS_DIR must be inside reports/");
// Preserve completed full-suite evidence even when a later targeted command
// explicitly reuses the same release directory.
if (
  existsSync(resolve(reportsRoot, "browser-tests.json")) ||
  existsSync(resolve(reportsRoot, "browser-release.json"))
)
  reportsRoot = resolve(
    reportsRoot,
    `browser-${new Date().toISOString().replace(/[:.]/g, "-")}`,
  );
process.env.PORTFOLIO_REPORTS_DIR = reportsRoot;

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "world.spec.js",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // WebKit shares GPU resources on Windows; isolate renderer/context-loss tests.
  workers: 1,
  timeout: 30_000,
  expect: {
    timeout: 8_000,
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixelRatio: 0.01,
    },
  },
  reporter: [
    ["./scripts/browser-reporter.cjs"],
    ["list"],
    ["html", { open: "never", outputFolder: `${reportsRoot}/playwright` }],
    ["json", { outputFile: `${reportsRoot}/browser-tests.json` }],
  ],
  outputDir: `${reportsRoot}/test-results`,
  use: {
    baseURL,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: live
    ? undefined
    : {
        command: "node scripts/static-server.cjs",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 15_000,
        gracefulShutdown: {
          signal: "SIGTERM",
          timeout: 1_000,
        },
      },
  projects: [
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
        viewport: { width: 1440, height: 1100 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Pixel 5"],
        browserName: "chromium",
        channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
      },
    },
    {
      name: "iphone",
      use: { ...devices["iPhone 15 Pro"], browserName: "webkit" },
    },
    {
      name: "iphone-small",
      use: { ...devices["iPhone SE"], browserName: "webkit" },
    },
    { name: "ipad", use: { ...devices["iPad Mini"], browserName: "webkit" } },
    {
      name: "safari",
      use: { browserName: "webkit", viewport: { width: 1440, height: 1100 } },
    },
    {
      name: "firefox",
      use: { browserName: "firefox", viewport: { width: 1440, height: 1100 } },
    },
  ],
});
