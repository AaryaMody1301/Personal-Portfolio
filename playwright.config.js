const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: 2,
  timeout: 30_000,
  expect: {
    timeout: 8_000,
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixelRatio: 0.01
    }
  },
  reporter: [["list"], ["html", { open: "never", outputFolder: "reports/playwright" }]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  webServer: {
    command: "node scripts/static-server.cjs",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 15_000,
    gracefulShutdown: {
      signal: "SIGTERM",
      timeout: 1_000
    }
  },
  projects: [
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
        viewport: { width: 1440, height: 1100 },
        deviceScaleFactor: 1
      }
    },
    {
      name: "mobile",
      use: {
        ...devices["Pixel 5"],
        browserName: "chromium",
        channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome"
      }
    },
    { name: "iphone", use: { ...devices["iPhone 15 Pro"], browserName: "webkit" } },
    { name: "iphone-small", use: { ...devices["iPhone SE"], browserName: "webkit" } },
    { name: "ipad", use: { ...devices["iPad Mini"], browserName: "webkit" } },
    { name: "safari", use: { browserName: "webkit", viewport: { width: 1440, height: 1100 } } },
    { name: "firefox", use: { browserName: "firefox", viewport: { width: 1440, height: 1100 } } }
  ]
});
