import { navigate } from "./navigation.mjs";
import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { resolve } from "node:path";
import {
  baseURL,
  reportsRoot,
  live,
  auditMetadata,
  captureState,
} from "./audit-target.mjs";
const metadata = await auditMetadata("visual-capture", baseURL, {
  checkLocal: true,
});
const results = [];
const previewDir = resolve(reportsRoot, "preview");
await mkdir(previewDir, { recursive: true });
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
});
async function worldPage(width, height) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await navigate(page, new URL("?view=world", baseURL).href);
  const state = await captureState(page);
  results.push({ width, height, state, browser: browser.version() });
  await page.evaluate(() => document.fonts.ready);
  if (state === "ready") await page.locator("#motion-toggle").click();
  await page.waitForTimeout(1700);
  return page;
}
try {
  if (
    process.argv.includes("--refresh-assets") ||
    process.argv.includes("--refresh-social")
  ) {
    if (live)
      throw new Error("Refreshing source images requires a local target.");
    // Export posters from the real scene with UI hidden, avoiding a fake preview.
    if (process.argv.includes("--refresh-assets"))
      for (const [width, height, path] of [
        [1600, 1084, "assets/images/world-poster.webp"],
        [390, 1004, "assets/images/world-poster-mobile.webp"],
      ]) {
        const page = await worldPage(width, height);
        if (
          (await page.locator("body").getAttribute("data-world-state")) !==
          "ready"
        )
          throw new Error("Source posters require a working renderer");
        await page.addStyleTag({
          content:
            ".world-hero>*:not(.world-stage):not(.world-sky){visibility:hidden!important}",
        });
        const png = await page.locator("canvas").screenshot();
        await sharp(png).webp({ quality: 82 }).toFile(path);
        await page.close();
      }
    // Social preview reflects the default reading introduction.
    const social = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });
    await navigate(social, new URL("/", baseURL).href);
    await social.evaluate(() => document.fonts.ready);
    await social.addStyleTag({
      content:
        ".site-header,.hero-actions{display:none!important}.reading-mode .world-hero{height:630px!important;display:flex;align-items:center}.reading-mode .world-copy{width:1050px}.reading-mode .world-copy h1{font-size:96px}.reading-mode .hero-discipline{font-size:28px}.reading-mode .hero-lede{font-size:24px;max-width:50ch}.reading-mode .world-copy .eyebrow{font-size:14px;margin-bottom:28px}",
    });
    await social
      .locator("#hero")
      .screenshot({
        path: "assets/images/og-image.jpg",
        type: "jpeg",
        quality: 88,
      });
    await social.close();
  }
  for (const width of [320, 390, 768, 1440]) {
    const page = await worldPage(width, width === 1440 ? 1100 : 1000);
    await page.screenshot({ path: resolve(previewDir, `world-${width}.png`) });
    if (width === 390 || width === 1440) {
      for (const id of [
        "driftdoctor",
        "compatforge",
        "originkeep",
        "about",
        "projects",
        "contact",
      ]) {
        await navigate(page, new URL("?view=world#" + id, baseURL).href);
        if (
          (await page.locator("body").getAttribute("data-world-state")) !==
          "fallback"
        )
          await page.locator("#content-panel[open]").waitFor();
        else await page.locator(`#${id}`).scrollIntoViewIfNeeded();
        await page.waitForTimeout(1500);
        await page.screenshot({
          path: resolve(previewDir, `${id}-${width}.png`),
        });
      }
    }
    await navigate(page, new URL("?view=read", baseURL).href);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: resolve(previewDir, `reading-${width}.png`),
      fullPage: false,
    });
    if (width === 390 || width === 1440) {
      await page.locator("#work-driftdoctor > summary").click();
      await page.locator("#driftdoctor .project-details summary").click();
      await page.screenshot({
        path: resolve(previewDir, `reading-project-${width}.png`),
      });
    }
    await page.close();
  }
  const landscape = await worldPage(667, 320);
  await landscape.screenshot({
    path: resolve(previewDir, "world-landscape.png"),
  });
  await landscape.close();
} finally {
  await browser.close();
}
await writeFile(
  resolve(previewDir, "findings.json"),
  JSON.stringify({ ...metadata, results }, null, 2) + "\n",
);
console.log(
  "Captured four layouts, panels and landscape; source posters change only with --refresh-assets.",
);
