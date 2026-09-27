import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

await mkdir("reports/preview", { recursive: true });
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome" });
try {
  for (const width of [320, 390, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width > 1000 ? 1100 : 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.locator(".profile img").evaluate((img) => img.decode());
    await page.screenshot({ path: "reports/preview/portfolio-" + width + ".png", fullPage: true });
    await page.screenshot({ path: "reports/preview/hero-" + width + ".png" });
    if (width === 1440 || width === 390) {
      for (const id of ["driftdoctor", "compatforge", "originkeep", "contact"]) {
        await page.locator("#" + id).screenshot({ path: "reports/preview/" + id + "-" + width + ".png", style: ".site-header { visibility: hidden; }" });
      }
    }
    await page.close();
  }
  // Social preview is a real browser rendering of the redesigned introduction.
  const social = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
  await social.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await social.locator(".profile img").evaluate((img) => img.decode());
  // Use the real introduction content in a clean social-card composition.
  await social.addStyleTag({ content: ".site-header, main > section:not(.hero), .site-footer, .hero-actions, .hero-email, .hero-footnote, .profile figcaption { display: none !important; } .hero { padding-top: 78px; column-gap: 64px; } .hero h1 { font-size: 76px; } .hero-copy { padding-top: 12px; } .profile { margin-top: 0; }" });
  await social.screenshot({ path: "assets/images/og-image.jpg", type: "jpeg", quality: 90 });
  await social.close();
} finally {
  await browser.close();
}
console.log("Captured four layouts, featured projects, contact sections, and the 1200x630 social image.");
