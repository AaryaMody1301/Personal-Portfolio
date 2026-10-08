const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const { createHash } = require("node:crypto");
const titles = [
  "SQL analysis & query tuning",
  "DriftDoctor",
  "Vehicle-price forecasting",
  "Video Game Sales Dashboard",
  "CompatForge",
  "OriginKeep",
  "StockPulse",
  "DeepTrail",
  "ContextHalo",
  "JobPilot Local",
  "Sentiment Analysis",
  "Movie Recommendation System",
  "Face Detection Attendance System",
  "Bingo Blog App",
];
const resumeHash =
  "15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8";
test.beforeEach(async ({ page, baseURL }) => {
  const goto = page.goto.bind(page);
  page.goto = async (url, options) => {
    const previousURL = page.url();
    const requestedURL = new URL(url, baseURL).href,
      response = await goto(url, options);
    const { navigationRecord } = await import("../scripts/navigation.mjs");
    const record = navigationRecord(
      requestedURL,
      page.url(),
      response?.status() ?? null,
      {
        sameDocument:
          !response && previousURL.split("#")[0] === requestedURL.split("#")[0],
      },
    );
    expect(record.problems, JSON.stringify(record)).toEqual([]);
    return response;
  };
});
// Exercise permanent-navigation cleanup between successful cases. Explicit
// navigation releases the GPU before WebKit closes its isolated page context.
// Leave failed pages intact so the reporter preserves the actual failure.
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === "passed") {
    // Release the renderer before browser-context teardown, independently of
    // pagehide/BFCache behavior. Failure pages retain their renderer and trace.
    await page.evaluate(() => {
      document.querySelector("#world-stage canvas")?.dispatchEvent(
        new Event("webglcontextlost", { cancelable: true }),
      );
    });
    await page.evaluate(() => { location.href = "about:blank"; });
    await page.waitForURL("about:blank");
  }
});
async function clickNav(page, name) {
  if (
    !(await page.getByRole("link", { name, exact: true }).first().isVisible())
  )
    await page.locator(".mobile-menu > summary").click();
  await page.getByRole("link", { name, exact: true }).first().click();
}
async function switchView(page) {
  // Locator.click may scroll a sticky header's original layout box into view.
  // Real pointer clicks preserve the reading position before switching modes.
  const click = async (control) => {
    await expect(control).toBeVisible();
    const box = await control.boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  };
  const toggle = page.locator("#reading-toggle");
  if (await toggle.isVisible()) {
    await click(toggle);
  } else {
    const menu = page.locator(".mobile-menu");
    if ((await menu.getAttribute("open")) === null)
      await click(menu.locator("summary"));
    await click(menu.locator("a[data-world]"));
  }
}
async function ready(page, url = "/?view=world") {
  await page.goto(url);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    /ready|fallback/,
    { timeout: 20000 },
  );
}
async function requireWorld(page, url) {
  await ready(page, url);
  const capable = await page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  });
  if (capable)
    await expect(
      page.locator("body"),
      "WebGL2 is available; unexpected application fallback is a failure",
    ).toHaveAttribute("data-world-state", "ready");
  test.skip(
    (await page.locator("body").getAttribute("data-world-state")) ===
      "fallback",
    "This browser has no working WebGL2 renderer; fallback is checked separately.",
  );
}
test("reading layout fits narrow screens in every browser", async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/?view=read");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("reading view preserves all fourteen projects and professional facts", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/?view=read");
  await expect(page).toHaveTitle(/Aarya Mody.*Data Analyst/);
  await expect(page.locator("h1")).toHaveText(/Aarya\s*Mody\./);
  await expect(page.locator(".work-cell")).toHaveCount(14);
  for (const [i, title] of titles.entries())
    await expect(page.locator(".work-cell>summary").nth(i)).toContainText(
      title,
    );
  await expect(page.locator("#experience")).toContainText("Data Analyst I");
  await expect(page.locator("#skills")).toContainText(
    "Exam-preparation course",
  );
  await expect(page.locator("#skills")).toContainText("self-assessed");
  await expect(page.locator(".work-cell article a[target=_blank]")).toHaveCount(
    14,
  );
  await expect(page.locator("body")).not.toContainText(
    /20\+ hrs|40% faster|<5% MAPE|Open to relocate|pursuing B2/,
  );
  expect(errors).toEqual([]);
});

test("project disclosures respond to pointer and touch in reading view and Work", async ({
  page,
  isMobile,
}) => {
  test.setTimeout(90000);
  const activate = async (locator) => {
    if (isMobile) await locator.tap();
    else await locator.click();
  };
  for (const reading of [true, false]) {
    if (reading) await page.goto("/?view=read#projects");
    else {
      await requireWorld(page);
      await clickNav(page, "Work");
      await expect(page.locator("#content-panel")).toBeVisible();
    }
    for (const [i] of titles.entries()) {
      const cell = page.locator(".work-cell").nth(i);
      await activate(cell.locator(":scope > summary"));
      await expect(cell).toHaveAttribute("open", "");
      const implementation = cell.locator(".project-details");
      if (await implementation.count()) {
        await activate(implementation.locator(":scope > summary"));
        await expect(implementation).toHaveAttribute("open", "");
        await expect(implementation.locator(".detail-grid")).toBeVisible();
        await activate(implementation.locator(":scope > summary"));
        await expect(implementation).not.toHaveAttribute("open", "");
      }
      await activate(cell.locator(":scope > summary"));
      await expect(cell).not.toHaveAttribute("open", "");
    }
  }
});
test("native disclosures expand by keyboard and preserve release qualifications", async ({
  page,
}) => {
  await page.goto("/?view=read#projects");
  for (const [id, qualification] of [
    ["driftdoctor", "neither establishes general repair accuracy"],
    ["compatforge", "external release-acceptance gates"],
    ["originkeep", "clean-machine acceptance checks"],
  ]) {
    const summary = page.locator(`#work-${id}>summary`);
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(`#work-${id}`)).toHaveAttribute("open", "");
    const implementation = page.locator(`#${id} .project-details summary`);
    await implementation.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(`#${id} .detail-grid`)).toContainText(
      qualification,
    );
    await expect(page.locator(`#${id} .detail-grid`)).toBeVisible();
  }
});
test("resume bytes, metadata, licenses and contact destinations remain valid", async ({
  page,
  request,
}) => {
  await page.goto("/?view=read#contact");
  const response = await request.get("/assets/docs/AaryaMody_Resume.pdf");
  expect(response.status()).toBe(200);
  expect(
    createHash("sha256")
      .update(await response.body())
      .digest("hex"),
  ).toBe(resumeHash);
  const promise = page.waitForEvent("download");
  await clickNav(page, "Resume");
  expect((await promise).suggestedFilename()).toBe("AaryaMody_Resume.pdf");
  await expect(page.locator('#contact a[href^="mailto:"]')).toHaveAttribute(
    "href",
    "mailto:aaryamody5@gmail.com",
  );
  await expect(page.locator('#contact a[href^="tel:"]')).toHaveAttribute(
    "href",
    "tel:+918000334499",
  );
  await expect(
    page.locator('#contact a[href*="linkedin.com"]'),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/aarya-mody");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    await page.title(),
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    await page.title(),
  );
  const graph = JSON.parse(
    await page.locator('script[type="application/ld+json"]').textContent(),
  )["@graph"];
  expect(graph.find((n) => n["@type"] === "Person").jobTitle).toBe(
    "Data Analyst I",
  );
  await expect(page.locator("#credits")).toContainText("HTML5 UP");
  const notice = await request.get(
    await page.locator('#credits a[href^="assets/"]').getAttribute("href"),
  );
  expect(await notice.text()).toContain("Permission is hereby granted");
});
test("world travel, orbit, reset and panel focus work", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await requireWorld(page);
  const destination = page.locator(".island-labels [data-island=driftdoctor]");
  await destination.click();
  await expect(page.locator("#content-panel")).toBeVisible();
  await expect(page.locator("#driftdoctor")).toBeVisible();
  await expect(page.locator("#panel-title")).toBeFocused();
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-destination",
    "driftdoctor",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#content-panel")).not.toBeVisible();
  await expect(destination).toBeFocused();
  const point = await page.locator("canvas").evaluate((canvas) => {
    const r = canvas.getBoundingClientRect();
    for (const fx of [0.1, 0.3, 0.5, 0.7, 0.9])
      for (const fy of [0.2, 0.4, 0.6, 0.8]) {
        const x = r.x + r.width * fx,
          y = r.y + r.height * fy;
        if (
          [-24, 0, 24].every((dx) =>
            [-24, 0, 24].every(
              (dy) => document.elementFromPoint(x + dx, y + dy) === canvas,
            ),
          )
        )
          return { x, y };
      }
    throw new Error("No unobstructed canvas area for orbit gesture");
  });
  await page.mouse.move(point.x, point.y);
  await page.mouse.down();
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-orbit",
    "dragging",
  );
  await page.mouse.move(point.x + 20, point.y - 20, { steps: 8 });
  await page.mouse.up();
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-orbit",
    "idle",
  );
  await page.locator("#reset-view").click();
  await expect(page).toHaveURL(/#hero$/);
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-destination",
    "home",
  );
  expect(errors).toEqual([]);
});
test("all illustrative demonstrations update with rapid repeat actions", async ({
  page,
}) => {
  await requireWorld(page);
  await page.locator(".island-labels [data-island=driftdoctor]").click();
  await page.getByRole("button", { name: "Assemble & validate" }).click();
  await expect(page.locator("#driftdoctor .demo-result")).toContainText(
    "diff ready for human review",
  );
  await page.getByRole("button", { name: "Reset sample", exact: true }).click();
  await expect(page.locator("#driftdoctor .demo-result")).toContainText(
    "broken a contract",
  );
  await page.locator("#close-panel").click();
  await page.locator(".island-labels [data-island=compatforge]").click();
  for (const state of ["Unknown", "Conflicting", "Supported"]) {
    await page.getByRole("button", { name: state, exact: true }).click();
    await expect(page.locator("#compatforge .demo-result")).toContainText(
      state + ":",
    );
  }
  await page.locator("#close-panel").click();
  await page.locator(".island-labels [data-island=originkeep]").click();
  await page
    .getByRole("button", { name: "Archive sample", exact: true })
    .click();
  await expect(page.locator("#originkeep .demo-result")).toContainText(
    "Archived:",
  );
  await page
    .getByRole("button", { name: "Restore sample", exact: true })
    .click();
  await expect(page.locator("#originkeep .demo-result")).toContainText(
    "Restored:",
  );
  await expect(page.locator("#originkeep .demo")).toContainText(
    "predetermined sample",
  );
});
test("direct links, rapid changes and browser history preserve destinations", async ({
  page,
}) => {
  await requireWorld(page, "/?view=world#compatforge");
  await expect(page.locator("#compatforge")).toBeVisible();
  await expect(page.locator("#content-panel")).toBeVisible();
  await page.locator('#content-panel .panel-footer a[href="#about"]').click();
  await expect(page.locator("#about")).toBeVisible();
  await page.locator('#content-panel .panel-footer a[href="#contact"]').click();
  await expect(page.locator("#contact")).toBeVisible();
  await page.goBack();
  await expect(page.locator("#about")).toBeVisible();
  await page.goBack();
  await expect(page.locator("#compatforge")).toBeVisible();
  await page.goForward();
  await expect(page.locator("#about")).toBeVisible();
  await page.locator("#content-panel [data-read]").click();
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("#content-panel")).not.toBeVisible();
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#skills")).toBeVisible();
  for (const alias of [
    "proof",
    "systems",
    "cases",
    "credentials",
    "more-projects",
  ]) {
    await page.goto("/?view=read#" + alias);
    await expect(page.locator("#" + alias)).toBeAttached();
  }
});

test("direct panel links keep the first heading below sticky controls", async ({
  page,
}) => {
  await requireWorld(page);
  for (const id of [
    "projects",
    "about",
    "contact",
    "driftdoctor",
    "compatforge",
    "originkeep",
  ]) {
    await page.goto(`/?view=world#${id}`);
    await expect(page.locator("#content-panel")).toBeVisible();
    await expect(page.locator("body")).toHaveAttribute(
      "data-world-state",
      "ready",
      { timeout: 20000 },
    );
    await page.evaluate(async () => {
      await document.fonts.ready;
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      );
    });
    const top = await page.locator(".panel-top").boundingBox();
    const heading = await page
      .locator("#panel-content h2, #panel-content h3")
      .first()
      .boundingBox();
    expect(heading, id).not.toBeNull();
    expect(heading.y, id).toBeGreaterThanOrEqual(top.y + top.height + 8);
  }
});
test("reduced motion, unavailable WebGL, bundle failure and context loss recover to reading view", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/?view=world");
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator("#projects")).toBeVisible();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.route(/assets\/js\/world\.[a-f0-9]{12}\.js/, (r) => r.abort());
  await page.goto("/?view=world");
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await expect(page.locator("#projects")).toBeVisible();
  await clickNav(page, "Work");
  await page.goBack();
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("#projects")).toBeVisible();
  await page.unrouteAll();
  await page.route(/assets\/js\/app\.[a-f0-9]{12}\.js/, (r) => r.abort());
  await page.goto("/?view=world");
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator(".project-discovery")).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/js/);
  await page.unrouteAll();
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.startsWith("webgl")
        ? null
        : original.call(this, type, ...args);
    };
  });
  await page.goto("/?view=world");
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await expect(page.locator("#contact")).toBeVisible();
});
test("renderer context loss restores content and failed optional assets stay navigable", async ({
  page,
}) => {
  await page.route(/assets\/(models|environment)\//, (r) => r.abort());
  await requireWorld(page);
  await page.locator(".island-labels [data-island=originkeep]").click();
  await expect(page.locator("#originkeep")).toBeVisible();
  await page.locator("#close-panel").click();
  await page
    .locator("canvas")
    .evaluate((canvas) =>
      canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true })),
    );
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await expect(page.locator("#projects")).toBeVisible();
});
test("reading view pauses rendering and the map is keyboard accessible", async ({
  page,
}) => {
  await requireWorld(page);
  await page.locator("#map-toggle").click();
  await expect(page.locator("#world-map")).toBeVisible();
  await expect(page.locator("#world-map button").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("#map-toggle")).toBeFocused();
  await page.locator("#motion-toggle").click();
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-motion",
    "paused",
  );
  await page.locator("#world-stage canvas").evaluate((canvas) => {
    window.__canvasAllocations = 0;
    new MutationObserver((changes) => { window.__canvasAllocations += changes.length; })
      .observe(canvas, { attributes: true, attributeFilter: ["width", "height"] });
  });
  await switchView(page);
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-rendering",
    "paused",
  );
  await switchView(page);
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-rendering",
    "active",
  );
  expect(await page.evaluate(() => window.__canvasAllocations)).toBe(0);
});
test("paused World becomes idle and redraws an evidence change", async ({ page }, info) => {
  test.setTimeout(60_000);
  await requireWorld(page);
  await page.locator("canvas").evaluate((canvas) => {
    const gl = canvas.getContext("webgl2");
    window.__pausedDrawCount = 0;
    for (const name of ["drawElements", "drawArrays", "drawElementsInstanced", "drawArraysInstanced"]) {
      const original = gl[name];
      gl[name] = function (...args) {
        window.__pausedDrawCount++;
        return original.apply(this, args);
      };
    }
  });
  const idle = async () => {
    const before = await page.evaluate(() => window.__pausedDrawCount);
    await page.waitForTimeout(300);
    return (await page.evaluate(() => window.__pausedDrawCount)) - before;
  };
  if ((await page.locator("#world-stage").getAttribute("data-quality")) === "low")
    await expect.poll(idle, { timeout: 20_000 }).toBe(0);
  await page.locator("#motion-toggle").click();
  await expect(page.locator("#world-stage")).toHaveAttribute("data-motion", "paused");
  await page.locator(".island-labels [data-island=compatforge]").click();
  await expect.poll(idle, { timeout: 20_000 }).toBe(0);
  const before = await page.evaluate(() => window.__pausedDrawCount);
  await page.getByRole("button", { name: "Unknown", exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__pausedDrawCount), { timeout: 8_000 }).toBeGreaterThan(before);
  await expect.poll(idle, { timeout: 20_000 }).toBe(0);
  if (["desktop", "mobile"].includes(info.project.name))
    await page.screenshot({ path: info.outputPath("world-paused-evidence.png") });
});
test("context loss while initializing keeps the reading fallback", async ({
  page,
}) => {
  await requireWorld(page);
  await page.route(
    /assets\/models\/birch\.[a-f0-9]{12}\.glb/,
    async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.continue();
    },
  );
  await page.goto("/?view=world");
  await page.locator("canvas").waitFor({ state: "attached" });
  await page
    .locator("canvas")
    .evaluate((canvas) =>
      canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true })),
    );
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await page.waitForTimeout(1200);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await expect(page.locator("#projects")).toBeVisible();
});
test("scene readiness never dismisses the current dialog", async ({ page }) => {
  await requireWorld(page);
  // Changing only the hash would retain the initialized module and bypass
  // the route gate. Start from a new document before delaying the World.
  await page.goto("/?view=read");
  let releaseBundle;
  const bundleGate = new Promise((resolve) => {
    releaseBundle = resolve;
  });
  await page.route(/assets\/js\/world\.[a-f0-9]{12}\.js/, async (route) => {
    await bundleGate;
    await route.continue();
  });
  await page.goto("/?view=world#about", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#about")).toBeVisible();
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "loading",
  );
  const panel = page.locator("#content-panel");
  await panel.evaluate((node) => {
    node.dataset.dismissals = "0";
    node.addEventListener("close", () => {
      node.dataset.dismissals = String(Number(node.dataset.dismissals) + 1);
    });
  });
  releaseBundle();
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    /ready|fallback/,
    { timeout: 20000 },
  );
  test.skip(
    (await page.locator("body").getAttribute("data-world-state")) ===
      "fallback",
    "This browser has no working WebGL2 renderer; fallback is checked separately.",
  );
  // Let queued native close events reach the accessibility/UI layer.
  await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      ),
  );
  await expect(panel).toHaveAttribute("data-dismissals", "0");
  await expect(page.locator("#about")).toBeVisible();
  await page.locator('#content-panel .panel-footer a[href="#contact"]').click();
  await expect(page.locator("#contact")).toBeVisible();
});

test("slow lighting leaves navigation usable and cannot revive a lost renderer", async ({
  page,
}) => {
  // Exercise HDR initialization on software CI adapters too. Only the adapter
  // label is controlled; the renderer, HDR bytes and context loss are real.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "hardwareConcurrency", { get: () => 8 });
    const original = WebGL2RenderingContext.prototype.getParameter;
    WebGL2RenderingContext.prototype.getParameter = function (key) {
      return key === 0x9246 ? "Test hardware-quality adapter" : original.call(this, key);
    };
  });
  // Probe capability in reading view. A preliminary high-quality World would
  // spend the test's budget drawing on a software adapter before the actual case.
  await page.goto("/?view=read");
  const capable = await page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl2");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  });
  test.skip(!capable, "This browser has no working WebGL2 renderer; fallback is checked separately.");
  const lightingURL = /assets\/environment\/.*\.hdr/;
  let lightingRequested, releaseLighting;
  const lightingRequest = new Promise((resolve) => { lightingRequested = resolve; });
  const lightingGate = new Promise((resolve) => { releaseLighting = resolve; });
  await page.route(lightingURL, async (route) => {
    const response = await route.fetch();
    lightingRequested();
    await lightingGate;
    await route.fulfill({ response });
  });
  await page.goto("/?view=world");
  // Mobile emulation uses a wide layout viewport until the page's viewport
  // metadata is applied, so quality must be checked after navigation.
  await expect(page.locator("#world-stage")).toHaveAttribute("data-quality", /low|high/);
  test.skip(
    (await page.locator("#world-stage").getAttribute("data-quality")) === "low",
    "Environment lighting runs only when desktop quality is available.",
  );
  await lightingRequest;
  await expect(page.locator("body")).toHaveAttribute("data-world-state", "loading");
  await clickNav(page, "About");
  await expect(page.locator("#content-panel")).toBeVisible();
  await expect(page.locator("#panel-content #about")).toBeVisible();
  await page.locator("#close-panel").click();
  await switchView(page);
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await page
    .locator("canvas")
    .evaluate((canvas) =>
      canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true })),
    );
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  // Deliver the real HDR only after disposal. Its late completion must not
  // restore the renderer or dismiss the reading fallback.
  const lightingResponse = page.waitForResponse(lightingURL);
  releaseLighting();
  const response = await lightingResponse;
  expect(response.ok()).toBe(true);
  await response.finished();
  await page.evaluate(() => new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  ));
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "fallback",
  );
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.locator("#world-stage")).toHaveAttribute("data-rendering", "disposed");
  await expect(page.locator("#world-stage")).not.toHaveAttribute("data-lighting", "environment");
  await expect(page.locator("#projects")).toBeVisible();
});

test("reading view has no detectable WCAG A/AA violations", async ({
  page,
}) => {
  await page.goto("/?view=read");
  await page.locator("#work-driftdoctor>summary").click();
  await page.locator("#driftdoctor .project-details summary").click();
  const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];
  expect(
    (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
  ).toEqual([]);
});
test("world project panels have no detectable WCAG A/AA violations", async ({ page }) => {
  await requireWorld(page, "/?view=world#originkeep");
  const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];
  await expect(page.locator("#content-panel")).toBeVisible();
  expect(
    (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
  ).toEqual([]);
});
test("content and every native disclosure work without JavaScript", async ({
  browser,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto(info.project.use.baseURL);
  await expect(page.locator(".work-cell")).toHaveCount(14);
  await expect(page.locator("#driftdoctor")).toBeVisible();
  await page.locator("#driftdoctor summary").click();
  await expect(
    page.getByText("Approach · bounded by design", { exact: true }),
  ).toBeVisible();
  await clickNav(page, "About");
  await expect(page.locator("#about")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await context.close();
});
test("skip link focuses main content and all legacy anchors resolve", async ({
  page,
  browserName,
}) => {
  await page.goto("/?view=read");
  if (browserName === "webkit") await page.locator(".skip-link").focus();
  else await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  expect(
    await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((l) => l.hash)
          .filter((h) => !document.getElementById(h.slice(1))),
      ),
  ).toEqual([]);
});
for (const width of [320, 390, 768, 1440])
  test(`fits ${width}px in world, panels and reading view`, async ({
    page,
  }, info) => {
    test.skip(
      !["desktop", "safari", "firefox"].includes(info.project.name),
      "Widths covered by the three desktop engines",
    );
    await page.setViewportSize({ width, height: 1000 });
    await requireWorld(page);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await clickNav(page, "Work");
    await expect(page.locator("#content-panel")).toBeVisible();
    await page.locator("#work-originkeep>summary").click();
    expect(
      await page
        .locator(".panel-body")
        .evaluate((p) => p.scrollWidth <= p.clientWidth + 1),
    ).toBe(true);
    await page.locator("#content-panel [data-read]").click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
test("mobile landscape retains navigation and readable sheets", async ({
  page,
}) => {
  await page.setViewportSize({ width: 667, height: 320 });
  await requireWorld(page);
  await expect(page.locator(".world-bottom > p").nth(1)).toBeHidden();
  await expect(page.locator(".world-controls")).toBeVisible();
  await expect(page.locator("#reset-view")).toBeVisible();
  await clickNav(page, "About");
  await expect(page.locator("#about")).toBeVisible();
  expect(
    await page
      .locator("#content-panel")
      .evaluate((p) => p.scrollWidth <= p.clientWidth + 1),
  ).toBe(true);
});
test("matches the reviewed world visual baseline", async ({ page }, info) => {
  test.skip(
    process.platform !== "linux" || process.env.PLAYWRIGHT_CHROMIUM_CHANNEL !== "chromium-headless-shell" ||
      !["desktop", "mobile"].includes(info.project.name),
    "Reviewed Linux baselines in pinned Playwright Chromium headless shell",
  );
  await requireWorld(page);
  await page.locator("#motion-toggle").click();
  await page.waitForTimeout(1800);
  await expect(page).toHaveScreenshot("aaryas-world.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.02,
  });
});

test("hidden introduction never receives keyboard focus after island travel", async ({
  page,
}) => {
  // Sixteen native Tab operations plus scene startup can exceed 30 seconds on
  // the Windows software renderer. Retain every focus assertion and allow 60.
  test.setTimeout(60_000);
  await requireWorld(page);
  await page.locator("#motion-toggle").click();
  await page.locator(".island-labels [data-island=driftdoctor]").click();
  await page.locator("#close-panel").click();
  await page.waitForTimeout(500);
  await page.locator(".brand").focus();
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => {
        let node = document.activeElement;
        while (node && node !== document.body) {
          if (getComputedStyle(node).opacity === "0") return true;
          node = node.parentElement;
        }
        return false;
      }),
    ).toBe(false);
  }
  await page.locator("#reset-view").click();
  await expect(page.locator(".hero-enter")).not.toHaveAttribute("inert", "");
  await expect(page.locator(".world-copy")).not.toHaveAttribute("inert", "");
});

test("rotation during hidden buffer preparation retains the one-pixel target", async ({ page }) => {
  test.setTimeout(60_000);
  await page.addInitScript(() => {
    const timeout = window.setTimeout.bind(window),
      getContext = HTMLCanvasElement.prototype.getContext;
    let held = false, release;
    window.__releaseWarmup = () => release?.();
    Object.defineProperty(window, "scheduler", {
      configurable: true,
      value: { yield: () => new Promise((resolve) => {
        if (window.__warmupStarted && !held) {
          held = true;
          window.__warmupHeld = true;
          release = resolve;
        } else timeout(resolve, 0);
      }) },
    });
    HTMLCanvasElement.prototype.getContext = function (...args) {
      const gl = getContext.apply(this, args), canvas = this;
      if (args[0] === "webgl2" && gl && !gl.__warmupHook) {
        gl.__warmupHook = true;
        for (const name of ["drawElements", "drawArrays", "drawElementsInstanced", "drawArraysInstanced"]) {
          const draw = gl[name];
          gl[name] = function (...values) {
            if (canvas.parentElement?.id === "world-stage" && canvas.width === 1 && canvas.height === 1)
              window.__warmupStarted = true;
            return draw.apply(this, values);
          };
        }
      }
      return gl;
    };
  });
  await page.goto("/?view=world");
  const capable = await page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl2");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return !!gl;
  });
  test.skip(!capable, "No working WebGL2 renderer; fallback is checked separately.");
  await page.waitForFunction(() => window.__warmupHeld, undefined, { timeout: 20_000 });
  const viewport = page.viewportSize();
  await page.setViewportSize({ width: viewport.height, height: viewport.width });
  // Give responsive layout and observer delivery two actual paint frames.
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  expect(await page.locator("#world-stage canvas").evaluate((canvas) => [canvas.width, canvas.height])).toEqual([1, 1]);
  await page.evaluate(() => window.__releaseWarmup());
  await expect(page.locator("body")).toHaveAttribute("data-world-state", "ready", { timeout: 20_000 });
  await expect.poll(() => page.evaluate(() => {
    const mount = document.querySelector("#world-stage"), canvas = mount.querySelector("canvas"),
      ratio = Math.min(devicePixelRatio, mount.dataset.quality === "low" ? 1 : 1.5);
    return canvas.width === Math.floor(mount.clientWidth * ratio) && canvas.height === Math.floor(mount.clientHeight * ratio);
  })).toBe(true);
  await page.locator("#map-toggle").click();
  await expect(page.locator("#world-map")).toBeVisible();
});

test("resize and orientation changes preserve the selected camera view", async ({
  page,
}) => {
  await requireWorld(page);
  await page.locator("#motion-toggle").click();
  await page.locator(".island-labels [data-island=driftdoctor]").click();
  await page.locator("#close-panel").click();
  await page.waitForTimeout(200);
  const label = page.locator(".island-labels [data-island=driftdoctor]");
  const drawingBufferDelta = () => page.evaluate(() => {
    const mount = document.querySelector("#world-stage"),
      canvas = mount.querySelector("canvas"),
      ratio = Math.min(devicePixelRatio, mount.dataset.quality === "low" ? 1 : 1.5);
    return {
      width: canvas.width - Math.floor(mount.clientWidth * ratio),
      height: canvas.height - Math.floor(mount.clientHeight * ratio),
    };
  });
  await expect.poll(drawingBufferDelta).toEqual({ width: 0, height: 0 });
  const before = await label.boundingBox(),
    viewport = page.viewportSize();
  await page.setViewportSize({
    width: viewport.height,
    height: viewport.width,
  });
  await expect.poll(drawingBufferDelta).toEqual({ width: 0, height: 0 });
  await page.setViewportSize(viewport);
  await expect.poll(drawingBufferDelta).toEqual({ width: 0, height: 0 });
  const after = await label.boundingBox();
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
  expect(Math.abs(after.y - before.y)).toBeLessThan(2);
});

test("reading sample states synchronize when the world first starts", async ({
  page,
}) => {
  await requireWorld(page);
  await page.goto("/?view=read");
  for (const [id, action] of [
    ["driftdoctor", "Assemble & validate"],
    ["compatforge", "Conflicting"],
    ["originkeep", "Archive sample"],
  ]) {
    await page.locator(`#work-${id}>summary`).click();
    await page
      .locator(`#${id}`)
      .getByRole("button", { name: action, exact: true })
      .click();
  }
  await switchView(page);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "ready",
    { timeout: 20000 },
  );
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-repair-state",
    "true",
  );
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-evidence-state",
    "conflicting",
  );
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-archive-state",
    "true",
  );
});

test("rapid project selection keeps the newest disclosure open", async ({ page }) => {
  await page.goto("/?view=read");
  const result = await page.evaluate(async () => {
    const [first, second] = document.querySelectorAll(".work-cell");
    // Toggle events are queued: two openings can arrive before either handler.
    const settled = new Promise((resolve) =>
      second.addEventListener("toggle", resolve, { once: true }),
    );
    first.open = true;
    second.open = true;
    await settled;
    return { first: first.open, second: second.open };
  });
  expect(result).toEqual({ first: false, second: true });
});

test("all Work disclosures and six panels remain keyboard accessible", async ({
  page,
}) => {
  // Eight full accessibility scans share this budget on software-rendered CI.
  test.setTimeout(120000);
  await requireWorld(page);
  await page.locator("#motion-toggle").click();
  const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];
  expect(
    (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
  ).toEqual([]);
  await clickNav(page, "Work");
  for (let i = 0; i < 14; i++) {
    const summary = page.locator(".work-cell>summary").nth(i);
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".work-cell").nth(i)).toHaveAttribute("open", "");
    await expect(page.locator(".work-cell[open]")).toHaveCount(1);
  }
  expect(
    (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
  ).toEqual([]);
  await page.locator("#close-panel").click();
  for (const island of ["home", "driftdoctor", "compatforge", "originkeep"]) {
    await page.locator(`.island-labels [data-island=${island}]`).click();
    expect(
      (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
    ).toEqual([]);
    await page.locator("#close-panel").click();
  }
  await clickNav(page, "Contact");
  expect(
    (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
  ).toEqual([]);
});

test("map destination dismissal restores focus to a visible control", async ({
  page,
}) => {
  await requireWorld(page);
  await page.locator("#map-toggle").click();
  await page.locator("#world-map [data-island=driftdoctor]").click();
  await page.locator("#close-panel").click();
  await expect(page.locator("#map-toggle")).toBeFocused();
});

test("destination labels stay separated in the required layouts", async ({
  page,
}, info) => {
  // Five fresh scenes each retain the existing 20-second readiness deadline.
  test.setTimeout(120000);
  test.skip(
    !["desktop", "safari", "firefox"].includes(info.project.name),
    "Required widths are covered by all three desktop engines.",
  );
  for (const [width, height] of [
    [320, 1000],
    [390, 1000],
    [768, 1000],
    [1440, 1100],
    [667, 320],
  ]) {
    await page.setViewportSize({ width, height });
    await requireWorld(page);
    await page.locator("#motion-toggle").click();
    await page.waitForTimeout(150);
    const overlaps = await page
      .locator(".island-labels button")
      .evaluateAll((nodes) => {
        const rects = nodes.map((n) => ({
            id: n.dataset.island,
            rect: n.getBoundingClientRect(),
          })),
          result = [];
        for (let i = 0; i < rects.length; i++)
          for (let j = i + 1; j < rects.length; j++) {
            const a = rects[i].rect,
              b = rects[j].rect;
            if (
              Math.min(a.right, b.right) > Math.max(a.left, b.left) &&
              Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top)
            )
              result.push([rects[i].id, rects[j].id]);
          }
        return result;
      });
    expect(overlaps, `${width}x${height}`).toEqual([]);
  }
});

test("hidden tabs pause rendering and resumed tabs recover", async ({
  page,
}) => {
  await requireWorld(page);
  // Override the visibility getter and dispatch the same browser event; headless engines
  // do not consistently report background-tab visibility on every OS.
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-rendering",
    "paused",
  );
  await page.evaluate(() => {
    delete document.hidden;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-rendering",
    "active",
  );
});

test("default reading visit requests no world resources and exposes selected work immediately", async ({
  page,
}, info) => {
  if (info.project.name === "mobile")
    await page.setViewportSize({ width: 390, height: 844 });
  const requests = [],
    errors = [];
  page.on("request", (r) => requests.push(r.url()));
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "idle",
  );
  await expect(page.locator("#world-stage")).toBeHidden();
  await expect(page.locator("canvas")).toHaveCount(0);
  await page.evaluate(() => document.fonts.ready);
  expect(
    requests.filter((u) =>
      /world\.[a-f0-9]+\.js|world-poster|\.glb|\.hdr/.test(u),
    ),
  ).toEqual([]);
  expect(errors).toEqual([]);
  if (["desktop", "mobile"].includes(info.project.name)) {
    const r = await page.locator(".card-title").first().boundingBox();
    expect(r.y + r.height).toBeLessThan(page.viewportSize().height);
  }
});

test("search, categories, empty results and filtered direct links reveal the right projects", async ({
  page,
}) => {
  await page.goto("/");
  const search = page.locator("#project-search"),
    shown = page.locator("#more-projects .work-cell:visible");
  for (const [category, count] of [
    ["engineering", 1],
    ["analytics", 3],
    ["applications", 7],
    ["all", 11],
  ]) {
    await page.locator(`[data-filter=${category}]`).click();
    await expect(shown).toHaveCount(count);
    await expect(page.locator("#project-count")).toHaveText(
      `${count} of 11 archive projects`,
    );
  }
  await search.fill("Tauri");
  await expect(shown).toContainText(["OriginKeep"]);
  await page.locator("[data-filter=analytics]").click();
  await expect(page.locator("#project-empty")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(shown).toHaveCount(11);
  await search.fill("does-not-exist");
  await expect(shown).toHaveCount(0);
  await expect(page.locator(".selected-work:visible")).toHaveCount(3);
  await expect(page.locator("#project-empty")).toBeVisible();
  await page.evaluate(() => (location.hash = "work-originkeep"));
  await expect(page.locator("#work-originkeep")).toBeVisible();
  await expect(page.locator("#work-originkeep")).toHaveAttribute(
    "open",
    "",
  );
  await expect(search).toHaveValue("");
  expect(new URL(page.url()).search).toBe("");
});

test("copy controls give accessible success and selectable fallback on clipboard denial", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.copiedText = text;
        },
      },
    }),
  );
  await page.goto("/#contact");
  await page.locator("[data-copy-email]").click();
  await expect(page.locator("#copy-status")).toHaveText(
    "Email address copied.",
  );
  expect(await page.evaluate(() => window.copiedText)).toBe(
    "aaryamody5@gmail.com",
  );
  await page.locator("#copy-dismiss").click();
  await expect(page.locator("[data-copy-email]")).toBeFocused();
  await page.evaluate(
    () =>
      (navigator.clipboard.writeText = async () => {
        throw new Error("Denied");
      }),
  );
  await page.locator("#work-driftdoctor > summary").click();
  await page.locator('[data-copy-project="driftdoctor"]').click();
  await expect(page.locator("#copy-fallback")).toBeFocused();
  await expect(page.locator("#copy-fallback")).toHaveValue(
    "https://aaryamody.app/?view=read#driftdoctor",
  );
  expect(
    await page
      .locator("#copy-fallback")
      .evaluate((el) => el.selectionEnd - el.selectionStart),
  ).toBeGreaterThan(20);
});

test("mode switching during loading pauses the scene and retains sample state", async ({
  page,
}) => {
  await requireWorld(page);
  let release;
  const gate = new Promise((r) => (release = r));
  await page.route(/assets\/js\/world\.[a-f0-9]{12}\.js/, async (r) => {
    await gate;
    await r.continue();
  });
  await page.goto("/");
  await switchView(page);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "loading",
  );
  await switchView(page);
  release();
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "ready",
    { timeout: 20000 },
  );
  await expect(page.locator("#world-stage")).toBeHidden();
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-rendering",
    "paused",
  );
  for (let i = 0; i < 3; i++) {
    await switchView(page);
    await expect(page.locator("#world-stage")).toBeVisible();
    await switchView(page);
    await expect(page.locator("#world-stage")).toBeHidden();
  }
});

test("history, hidden resize and returning from a project preserve view and reading position", async ({
  page,
}) => {
  test.setTimeout(60000);
  await requireWorld(page);
  await page.goto("/#projects");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(100);
  const position = await page.evaluate(() => scrollY);
  await switchView(page);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "ready",
    { timeout: 20000 },
  );
  await page.locator("#motion-toggle").click();
  await page.locator(".island-labels [data-island=driftdoctor]").click();
  await page.locator("#close-panel").click();
  await page.waitForTimeout(400);
  const label = page.locator(".island-labels [data-island=driftdoctor]"),
    before = await label.boundingBox(),
    viewport = page.viewportSize();
  await switchView(page);
  await expect(page.locator("#work-driftdoctor")).toHaveAttribute("open", "");
  await expect(page.locator("#world-stage")).toBeHidden();
  await page.setViewportSize({
    width: viewport.height,
    height: viewport.width,
  });
  await page.setViewportSize(viewport);
  await switchView(page);
  await page.waitForTimeout(150);
  const after = await label.boundingBox();
  expect(Math.abs(after.x - before.x)).toBeLessThan(2);
  expect(Math.abs(after.y - before.y)).toBeLessThan(2);
  await page.goBack();
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await page.goBack();
  await expect(page.locator("body")).toHaveClass(/world-mode/);
  await page.goto("/#projects");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  const actualPosition = await page.evaluate(() => scrollY);
  await switchView(page);
  await page.goBack();
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(actualPosition);
});

test("close control remains centered through long titles, scrolling, landscape and 200 percent layout zoom", async ({
  page,
}) => {
  test.setTimeout(60000);
  await requireWorld(page, "/?view=world#about");
  await expect(page.locator("#content-panel")).toBeVisible();
  await page.waitForTimeout(350);
  const check = async () => {
    const b = await page.locator("#close-panel").boundingBox(),
      i = await page.locator("#close-panel svg").boundingBox();
    expect(b.width).toBeGreaterThanOrEqual(43.9);
    expect(b.height).toBeGreaterThanOrEqual(43.9);
    expect(i.width).toBeCloseTo(20, 0);
    expect(Math.abs(b.x + b.width / 2 - i.x - i.width / 2)).toBeLessThanOrEqual(
      1,
    );
    expect(
      Math.abs(b.y + b.height / 2 - i.y - i.height / 2),
    ).toBeLessThanOrEqual(1);
    expect(b.y).toBeGreaterThanOrEqual(0);
    expect(b.y + b.height).toBeLessThanOrEqual(page.viewportSize().height);
  };
  await check();
  await page
    .locator(".panel-body")
    .evaluate((el) => (el.scrollTop = el.scrollHeight));
  await check();
  await page
    .locator("#panel-title")
    .evaluate(
      (el) =>
        (el.textContent =
          "A very long project heading that wraps over multiple lines without covering the close control"),
    );
  await check();
  await page.setViewportSize({ width: 667, height: 320 });
  await check();
  await page.setViewportSize({ width: 720, height: 450 });
  await check();
  expect(
    await page
      .locator(".panel-body")
      .evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.locator("#content-panel")).toBeHidden();
});

test("bare island links enter World while reduced motion maps to reading content", async ({
  page,
}) => {
  await requireWorld(page);
  await page.goto("/#island-originkeep");
  await expect(page.locator("body")).toHaveClass(/world-mode/);
  await expect(page.locator("body")).toHaveAttribute(
    "data-world-state",
    "ready",
    { timeout: 20000 },
  );
  await expect(page.locator("#world-stage")).toHaveAttribute(
    "data-destination",
    "originkeep",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page).toHaveURL(/view=read/);
  await page.goto("/#island-originkeep");
  await expect(page.locator("body")).toHaveClass(/reading-mode/);
  await expect(page.locator("#work-originkeep")).toHaveAttribute("open", "");
  await expect(page.locator("#originkeep")).toBeVisible();
});

test("matches the reviewed reading visual baseline", async ({ page }, info) => {
  test.skip(
    process.platform !== "linux" || process.env.PLAYWRIGHT_CHROMIUM_CHANNEL !== "chromium-headless-shell" ||
      !["desktop", "mobile"].includes(info.project.name),
    "Reviewed Linux baselines in pinned Playwright Chromium headless shell",
  );
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page).toHaveScreenshot("reading-portfolio.png", {
    fullPage: false,
  });
  const summary = page.locator("#work-sql-practice-project > summary");
  await summary.focus();
  await expect(summary).toHaveScreenshot("project-focus.png");
});
