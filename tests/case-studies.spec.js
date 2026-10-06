const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

const cases = [
  ["driftdoctor", "DriftDoctor", "12 / 12", "synthetic"],
  ["sql-analytics", "SQL Practice Project", "19.198 → 0.105 ms", "one controlled synthetic workload"],
  ["sales-forecasting", "Sales Forecasting", "6.73% lower", "two outer folds"],
];

test("three selected projects link to distinct case studies and preserve the archive", async ({ page }) => {
  await page.goto("/?view=read#projects");
  await expect(page.locator(".selected-work")).toHaveCount(3);
  await expect(page.locator(".work-cell")).toHaveCount(14);
  await expect(page.locator(".archive-divider")).toContainText("11 more explorations");
  for (const [slug, name] of cases) {
    const link = page.locator(`.selected-work .case-study-link[href='projects/${slug}.html']`);
    await expect(link).toHaveCount(1);
    const response = await page.request.get(`/projects/${slug}.html`);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(name);
  }
});

for (const [slug, name, result, limit] of cases) {
  test.describe(`${name} case study without JavaScript`, () => {
    test.use({ javaScriptEnabled: false });
    test.afterEach(async ({ page }, info) => {
      if (info.status === "passed") await page.goto("about:blank");
    });
    test("content and navigation work", async ({ page }) => {
      const response = await page.goto(`/projects/${slug}.html`);
      expect(response.status()).toBe(200);
      await expect(page).toHaveTitle(`${name} · Case study | Aarya Mody`);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("#results")).toContainText(result);
      await expect(page.locator("#tradeoffs")).toContainText(limit);
      await expect(page.locator("#sources")).toContainText("not rerun");
      await expect(page.locator("script[src]")).toHaveCount(0);
      await page.locator(".case-toc a[href='#tradeoffs']").click();
      await expect(page).toHaveURL(/#tradeoffs$/);
      await page.locator(".case-next a").first().click();
      await expect(page.locator("#projects-title")).toBeVisible();
    });
  });

  test(`${name} case study passes accessibility checks`, async ({ page }) => {
    await page.goto(`/projects/${slug}.html`);
    expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze()).violations).toEqual([]);
  });

  test(`${name} case study fits small screens and links to the next case`, async ({ page }) => {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/projects/${slug}.html`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const styles = await page.locator("body").evaluate((body) => ({
        background: getComputedStyle(body).backgroundColor,
        scheme: getComputedStyle(body).colorScheme,
      }));
      expect(styles).toEqual({ background: "rgb(248, 250, 252)", scheme: "light" });
    }
    await page.locator(".case-next a").last().click();
    await expect(page).toHaveURL(/\/projects\/.*\.html$/);
    await expect(page.locator("h1")).toBeVisible();
  });
}

test("capture cobalt reading portfolio and case-study previews", async ({ page }, info) => {
  test.skip(!["desktop", "mobile"].includes(info.project.name), "Chromium captures cover desktop and mobile; all engines run behavioral checks.");
  for (const [path, label] of [["/?view=read", "homepage"], ["/projects/sales-forecasting.html", "forecast-case"]]) {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    const screenshot = await page.screenshot({ path: info.outputPath(`cobalt-${label}.png`), fullPage: true, animations: "disabled" });
    await info.attach(`cobalt-${label}`, { body: screenshot, contentType: "image/png" });
  }
});
