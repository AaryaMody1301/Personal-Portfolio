const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const { createHash } = require("node:crypto");

const resumeHash = "15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8";
const additionalProjects = [
  "Sales Forecasting", "SQL Practice Project", "StockPulse", "DeepTrail", "ContextHalo",
  "JobPilot Local", "Sentiment Analysis", "Video Game Sales Dashboard",
  "Movie Recommendation System", "Face Detection Attendance System", "Bingo Blog App"
];

test("presents the current profile and all fourteen public projects without runtime errors", async ({ page }) => {
  const errors = [];
  const failedAssets = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("response", (response) => { if (response.status() >= 400) failedAssets.push(response.url()); });
  await page.goto("/");
  await expect(page).toHaveTitle("Aarya Mody | Data Engineering & Applied AI");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Data engineering.Applied AI.");
  await expect(page.getByRole("link", { name: "View projects", exact: true })).toHaveAttribute("href", "#projects");
  await expect(page.getByText("Open to remote roles from India", { exact: false })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Data Analyst I", exact: true })).toBeVisible();
  for (const name of ["DriftDoctor", "CompatForge", "OriginKeep"]) {
    await expect(page.getByRole("article", { name, exact: true })).toBeVisible();
  }
  await expect(page.locator("#more-projects h3 a")).toHaveCount(additionalProjects.length);
  for (const [index, name] of additionalProjects.entries()) {
    await expect(page.locator("#more-projects h3 a").nth(index)).toHaveAccessibleName(name);
  }
  await expect(page.locator("#projects a[target='_blank'], #more-projects article a")).toHaveCount(14);
  await expect(page.locator("#skills")).toContainText("Exam-preparation course");
  await expect(page.locator("#skills")).toContainText("(self-assessed)");
  await expect(page.locator("body")).not.toContainText(/20\+ hrs|40% faster|<5% MAPE|Open to relocate|pursuing B2|5 domains/);
  expect(errors).toEqual([]);
  expect(failedAssets).toEqual([]);
});

test("project details work by keyboard and preserve release qualifications", async ({ page }) => {
  await page.goto("/#projects");
  for (const id of ["driftdoctor", "compatforge", "originkeep"]) {
    const details = page.locator("#" + id + " details");
    const summary = details.locator("summary");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).toHaveAttribute("open", "");
    await expect(details.locator(".detail-grid")).toBeVisible();
    await page.keyboard.press("Space");
    await expect(details).not.toHaveAttribute("open", "");
  }
  await page.locator("#compatforge summary").click();
  await expect(page.getByText("external release-acceptance gates", { exact: false })).toBeVisible();
  await page.locator("#originkeep summary").click();
  await expect(page.getByText("clean-machine acceptance checks", { exact: false })).toBeVisible();
});

test("resume download preserves the supplied PDF and contact destinations", async ({ page, request }) => {
  await page.goto("/");
  const resume = page.getByRole("link", { name: "Download resume", exact: true }).first();
  const downloadPromise = page.waitForEvent("download");
  await resume.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("AaryaMody_Resume.pdf");
  expect(await download.failure()).toBeNull();
  const response = await request.get("/assets/docs/AaryaMody_Resume.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect(createHash("sha256").update(await response.body()).digest("hex")).toBe(resumeHash);
  await expect(page.getByRole("link", { name: "Email Aarya", exact: true })).toHaveAttribute("href", "mailto:aaryamody5@gmail.com");
  await expect(page.getByRole("link", { name: "LinkedIn", exact: true })).toHaveAttribute("href", "https://www.linkedin.com/in/aarya-mody");
  await expect(page.getByRole("link", { name: "+91 80003 34499", exact: true })).toHaveAttribute("href", "tel:+918000334499");
});

test("skip link and every local anchor lead to existing visible content", async ({ page, browserName }) => {
  await page.goto("/");
  // WebKit's Windows port does not enable full keyboard access to native links.
  // Verify activation after focus there; Chromium/Firefox also verify tab order.
  if (browserName === "webkit") await page.getByRole("link", { name: "Skip to content" }).focus();
  else await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  const missing = await page.locator('a[href^="#"]').evaluateAll((links) =>
    links.map((link) => link.hash).filter((hash) => !document.getElementById(hash.slice(1)))
  );
  expect(missing).toEqual([]);
  for (const alias of ["proof", "systems", "cases"]) {
    await page.goto("/#" + alias);
    await expect(page).toHaveURL(new RegExp("#" + alias + "$"));
    await expect.poll(() => page.locator("#" + alias).evaluate((node) => node.getBoundingClientRect().top)).toBeLessThan(180);
    expect(await page.locator("#" + alias).evaluate((node) => node.getBoundingClientRect().top)).toBeGreaterThanOrEqual(75);
  }
});

test("has no detectable WCAG A or AA violations with project details open", async ({ page }) => {
  await page.goto("/");
  for (const summary of await page.locator(".project-details summary").all()) await summary.click();
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("honors reduced motion and has no continuously animated canvas", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator("html").evaluate((el) => getComputedStyle(el).scrollBehavior)).toBe("auto");
  expect(await page.locator(".hero-copy").evaluate((el) => getComputedStyle(el).animationName)).toBe("none");
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator("#projects")).toBeVisible();
});

test("content, navigation, and disclosures work without JavaScript", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await expect(page.locator("#nav-toggle")).toBeHidden();
  await expect(page.locator("#more-projects h3")).toHaveCount(11);
  await page.locator("#driftdoctor summary").click();
  await expect(page.getByText("Bounded by design", { exact: true })).toBeVisible();
  for (const [name, hash] of [["Work", "projects"], ["Experience", "experience"], ["Skills", "skills"], ["Contact", "contact"]]) {
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp("#" + hash + "$"));
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

test("mobile navigation closes accessibly and recovers when resizing", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.use.isMobile, "Touch-device navigation behavior");
  await page.goto("/");
  const toggle = page.locator("#nav-toggle");
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await page.setViewportSize({ width: 1024, height: 800 });
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await expect(page.locator("#nav-menu")).not.toHaveAttribute("inert", "");
  await expect(toggle).toBeHidden();
});

test("metadata matches the visible profile", async ({ page }) => {
  await page.goto("/");
  const graph = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent())["@graph"];
  expect(graph.find((node) => node["@type"] === "Person").jobTitle).toBe("Data Analyst I");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://aaryamody.app");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", await page.title());
  const invalidExternalLinks = await page.locator('a[target="_blank"]').evaluateAll((links) =>
    links.filter((link) => !link.rel.includes("noopener") || !link.rel.includes("noreferrer")).map((link) => link.href)
  );
  expect(invalidExternalLinks).toEqual([]);
});

for (const width of [320, 390, 768, 1440]) {
  test("fits " + width + "px without horizontal overflow", async ({ page }, testInfo) => {
    test.skip(!["desktop", "safari", "firefox"].includes(testInfo.project.name), "Each width runs on all three desktop browser engines");
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    for (const summary of await page.locator(".project-details summary").all()) await summary.click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const overflowing = await page.locator("main *").evaluateAll((elements) =>
      elements.filter((el) => {
        const box = el.getBoundingClientRect();
        return box.width > 0 && (box.right > innerWidth + 1 || box.left < -1);
      }).map((el) => el.tagName + "." + el.className)
    );
    expect(overflowing).toEqual([]);
  });
}

test("matches the reviewed editorial visual baseline", async ({ page }, testInfo) => {
  test.skip(process.platform !== "win32" || (process.env.PLAYWRIGHT_CHROMIUM_CHANNEL && process.env.PLAYWRIGHT_CHROMIUM_CHANNEL !== "chrome"), "Reviewed baselines use Windows and installed Google Chrome");
  test.skip(!["desktop", "mobile"].includes(testInfo.project.name), "Cross-engine captures are inspected separately");
  await page.goto("/");
  await page.locator(".profile img").evaluate((img) => img.decode());
  await expect(page).toHaveScreenshot("portfolio-home.png", { fullPage: true });
});
