const { test, expect } = require("@playwright/test");
const { readFileSync } = require("node:fs");
const { createHash } = require("node:crypto");

test("header hides down, returns up, and stays reachable by keyboard", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const header = page.locator("#site-header");
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect(header).toHaveClass(/is-hidden/);
  await expect.poll(() => header.evaluate((el) => el.getBoundingClientRect().bottom)).toBeLessThanOrEqual(1);
  await page.evaluate(() => window.scrollTo(0, 560));
  await expect(header).not.toHaveClass(/is-hidden/);
  await expect.poll(() => header.evaluate((el) => el.getBoundingClientRect().top)).toBe(0);
  await page.evaluate(() => window.scrollTo(0, 800));
  await expect(header).toHaveClass(/is-hidden/);
  await page.keyboard.press("Tab");
  await expect(header).not.toHaveClass(/is-hidden/);
  await page.locator(".brand").focus();
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect(header).not.toHaveClass(/is-hidden/);
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(header).not.toHaveClass(/is-hidden/);
});

test("touch menu stays open while scrolling, dismisses outside, and downloads the resume", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.use.isMobile, "Touch navigation");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const toggle = page.locator("#nav-toggle");
  await toggle.tap();
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect(page.locator("#site-header")).not.toHaveClass(/is-hidden/);
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const axe = require("@axe-core/playwright").default;
  expect((await new axe({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze()).violations).toEqual([]);
  await page.locator("#nav-menu a[download]").tap();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await page.evaluate(() => window.scrollTo(0, 700));
  await expect(page.locator("#site-header")).toHaveClass(/is-hidden/);
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect(page.locator("#site-header")).not.toHaveClass(/is-hidden/);
  await toggle.tap();
  await page.locator("main").dispatchEvent("click");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("short landscape menu scrolls to every link and survives rotation", async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 320 });
  await page.goto("/");
  await page.locator("#nav-toggle").click();
  const menu = page.locator("#nav-menu");
  expect(await menu.evaluate((el) => el.scrollHeight > el.clientHeight)).toBe(true);
  expect(await menu.evaluate((el) => el.getBoundingClientRect().bottom <= innerHeight + 1)).toBe(true);
  const resume = menu.locator("a[download]");
  await resume.scrollIntoViewIfNeeded();
  const box = await resume.boundingBox();
  expect(box.y + box.height).toBeLessThanOrEqual(321);
  await page.setViewportSize({ width: 932, height: 430 });
  await expect(page.locator("#nav-toggle")).toBeHidden();
  await expect(menu).not.toHaveAttribute("inert", "");
  await expect(page.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator("#nav-toggle")).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("slow or blocked JavaScript cannot prevent the content or native navigation from rendering", async ({ page }) => {
  let release;
  const delay = new Promise((resolve) => { release = resolve; });
  await page.route(/\/assets\/js\/main[.\w-]*\.js$/, async (route) => {
    await delay;
    await route.abort();
  });
  try {
    await page.goto("/", { waitUntil: "commit" });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
    await expect(page.locator("#nav-toggle")).toBeHidden();
    await page.locator("#driftdoctor summary").click();
    await expect(page.getByText("Bounded by design", { exact: true })).toBeVisible();
  } finally { release(); }
  await page.waitForLoadState("load");
  await expect(page.locator("#contact")).toBeVisible();
});

test("navigation works with legacy media listeners and without observer APIs", async ({ page }) => {
  await page.addInitScript(() => {
    const match = window.matchMedia.bind(window);
    window.matchMedia = (query) => {
      const media = match(query);
      media.addEventListener = undefined;
      return media;
    };
    delete window.IntersectionObserver;
    delete window.ResizeObserver;
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("#nav-toggle").click();
  await page.getByRole("link", { name: "Skills", exact: true }).click();
  await expect(page.locator("#skills")).toBeFocused();
  await page.setViewportSize({ width: 1100, height: 800 });
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
});

test("cache-safe asset filenames load the correct bytes and portrait on every engine", async ({ page, request }) => {
  await page.goto("/");
  const assets = await page.locator('script[src], link[rel="stylesheet"]').evaluateAll((nodes) => nodes.map((el) => el.getAttribute("src") || el.getAttribute("href")));
  for (const asset of assets) {
    expect(asset).toMatch(/\.[a-f0-9]{12}\.(css|js)$/);
    const response = await request.get("/" + asset);
    expect(response.ok()).toBe(true);
    const hash = createHash("sha256").update(await response.body()).digest("hex");
    expect(asset).toContain(hash.slice(0, 12));
    expect(await response.body()).toEqual(readFileSync(asset));
  }
  await page.locator(".profile img").evaluate((img) => img.decode());
  expect(await page.locator(".profile img").evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
});

test("safe-area insets and enlarged text retain readable, reachable content", async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 390 });
  await page.goto("/");
  // Browser emulation does not reproduce a hardware notch. Exercise the same CSS
  // variables with nonzero insets, then separately exercise 200% text sizing.
  await page.addStyleTag({ content: ":root { --safe-top: 20px; --safe-bottom: 21px; --safe-left: 47px; --safe-right: 47px; }" });
  await page.locator("#nav-toggle").click();
  expect(await page.locator(".brand").evaluate((el) => el.getBoundingClientRect().left)).toBeGreaterThanOrEqual(47);
  expect(await page.locator("#nav-menu").evaluate((el) => el.getBoundingClientRect().bottom <= innerHeight + 1)).toBe(true);
  await page.locator("#nav-toggle").click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addStyleTag({ content: ":root { --safe-top: 0px; --safe-bottom: 0px; --safe-left: 0px; --safe-right: 0px; }" });
  await page.evaluate(() => {
    const elements = [...document.querySelectorAll("body *")];
    const sizes = elements.map((el) => parseFloat(getComputedStyle(el).fontSize));
    elements.forEach((el, index) => { el.style.fontSize = sizes[index] * 2 + "px"; });
  });
  await page.locator("#nav-toggle").click();
  await page.getByRole("link", { name: "Contact", exact: true }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
