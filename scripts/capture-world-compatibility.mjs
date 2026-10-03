import { navigate } from "./navigation.mjs";
import { chromium, webkit, firefox, devices } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
  baseURL,
  reportsRoot,
  auditMetadata,
  captureState,
} from "./audit-target.mjs";
const metadata = await auditMetadata("compatibility-capture", baseURL, {
  checkLocal: true,
});
const compatibilityDir = resolve(reportsRoot, "compatibility");
await mkdir(compatibilityDir, { recursive: true });
const results = [];
for (const [name, engine, launch, device] of [
  ["iphone-15-pro", webkit, {}, devices["iPhone 15 Pro"]],
  ["iphone-se", webkit, {}, devices["iPhone SE"]],
  ["ipad-mini", webkit, {}, devices["iPad Mini"]],
  [
    "android-pixel",
    chromium,
    { channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome" },
    devices["Pixel 5"],
  ],
  ["desktop-webkit", webkit, {}, { viewport: { width: 1440, height: 1100 } }],
  ["desktop-firefox", firefox, {}, { viewport: { width: 1440, height: 1100 } }],
]) {
  const browser = await engine.launch(launch);
  try {
    const page = await browser.newPage({ ...device });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await navigate(page, new URL("?view=world", baseURL).href);
    const state = await captureState(page);
    if (state === "ready") await page.locator("#motion-toggle").click();
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: resolve(compatibilityDir, `${name}-world.png`),
      scale: "css",
    });
    if (
      !(await page.getByRole("link", { name: "Work", exact: true }).isVisible())
    )
      await page.locator(".mobile-menu > summary").click();
    await page.getByRole("link", { name: "Work", exact: true }).click();
    if (state === "ready") await page.locator("#content-panel[open]").waitFor();
    else await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.screenshot({
      path: resolve(compatibilityDir, `${name}-work.png`),
      scale: "css",
    });
    await navigate(page, new URL("?view=read#projects", baseURL).href);
    await page.locator("#work-driftdoctor>summary").click();
    await page.locator("#driftdoctor").screenshot({
      path: resolve(compatibilityDir, `${name}-reading-project.png`),
      scale: "css",
    });
    const layouts = name.startsWith("desktop")
      ? [
          [320, 844],
          [390, 844],
          [768, 1000],
          [1440, 900],
          [667, 320],
          [720, 450],
        ]
      : [[device.viewport.width, device.viewport.height]];
    for (const [width, height] of layouts) {
      await page.setViewportSize({ width, height });
      await navigate(page, new URL("/", baseURL).href);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: resolve(
          compatibilityDir,
          `${name}-reading-${width}x${height}.png`,
        ),
        scale: "css",
      });
      await navigate(page, new URL("?view=world#about", baseURL).href);
      await captureState(page);
      await page.waitForTimeout(400);
      await page.screenshot({
        path: resolve(compatibilityDir, `${name}-panel-${width}x${height}.png`),
        scale: "css",
      });
    }
    results.push({
      name,
      engine: engine.name(),
      version: browser.version(),
      state,
      errors,
    });
  } finally {
    await browser.close();
  }
}
await writeFile(
  resolve(compatibilityDir, "findings.json"),
  JSON.stringify({ ...metadata, results }, null, 2) + "\n",
);
console.log(JSON.stringify(results, null, 2));
if (results.some((r) => r.errors.length)) process.exitCode = 1;
