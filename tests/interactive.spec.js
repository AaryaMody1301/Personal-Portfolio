const {test,expect}=require("@playwright/test");
const AxeBuilder=require("@axe-core/playwright").default;
const {readFile}=require("node:fs/promises");

async function ready(page,slug){const root=page.locator(`[data-demo="${slug}"]`);await root.scrollIntoViewIfNeeded();await expect(root).toHaveAttribute("data-ready","true");return root;}
test("hero stages respond to keyboard, scroll and explicit motion preferences",async({page})=>{
  await page.goto("/");const stage=page.locator("[data-hero-story]");
  await page.getByLabel("Motion preference").selectOption("reduced");await expect(page.locator("html")).toHaveAttribute("data-motion","reduced");
  for(let i=0;i<4;i++){const button=page.locator(`[data-hero-stage="${i}"]`);await button.focus();await button.press("Enter");await expect(stage).toHaveAttribute("data-stage",String(i));await expect(button).toHaveAttribute("aria-pressed","true");}
  await page.reload();await expect(page.getByLabel("Motion preference")).toHaveValue("reduced");
  await page.getByLabel("Motion preference").selectOption("full");await expect(page.locator("html")).toHaveAttribute("data-motion","full");
  await page.getByLabel("Motion preference").selectOption("system");await page.emulateMedia({reducedMotion:"reduce"});await expect(page.locator("html")).toHaveAttribute("data-motion","reduced");
});
test("all four homepage demos change real visible results",async({page})=>{
  await page.goto("/");
  const drift=await ready(page,"driftdoctor");await drift.locator('[data-choice="stg_orders_archive"]').click();await expect(drift.locator(".decision")).toContainText("Escalate");await drift.locator('[data-choice="stg_orders_v2"]').click();await expect(drift.locator(".decision")).toContainText("matches");
  const stock=await ready(page,"stockpulse");await expect(stock.locator(".stock-change strong")).toHaveText("+12.89%");await stock.getByLabel("Financial metric").selectOption("net_income");await expect(stock.locator(".stock-change strong")).toHaveText("+20.00%");
  const forecast=await ready(page,"sales-forecasting");await forecast.getByRole("button",{name:"MAE",exact:true}).click();await expect(forecast.locator(".model-winner")).toHaveText(/ETS/);
  const games=await ready(page,"video-game-sales-dashboard");await games.getByLabel("Platform",{exact:true}).selectOption("NS");await expect(games.locator("[data-game-count]")).toHaveText("8 / 30");await games.getByRole("button",{name:/Reset filters/}).click();await expect(games.locator("[data-game-count]")).toHaveText("30 / 30");
});
test("chapter progress follows scrolling and storage denial leaves motion controls usable",async({page})=>{
  await page.addInitScript(()=>Object.defineProperty(window,"localStorage",{get(){throw new Error("Storage denied");}}));
  await page.goto("/");await page.getByLabel("Motion preference").selectOption("full");
  await page.locator("#work-stockpulse").scrollIntoViewIfNeeded();await expect(page.locator("[data-work-current]")).toHaveText("02");await expect(page.locator("[data-work-title]")).toHaveText("StockPulse");
  if(page.viewportSize().width>=900&&page.viewportSize().height>=650)await expect(page.locator("[data-hero-story]")).toHaveAttribute("data-stage","3");
  await page.locator("#work-driftdoctor").scrollIntoViewIfNeeded();await expect(page.locator("[data-work-current]")).toHaveText("01");
  await page.getByLabel("Motion preference").selectOption("reduced");await expect(page.locator("html")).toHaveAttribute("data-motion","reduced");
});
test("DriftDoctor stages preserve recorded evidence and distinguish an escalation",async({page})=>{
  await page.goto("/projects/driftdoctor/#demo");const root=await ready(page,"driftdoctor");
  await root.locator('[data-step="3"]').click();await expect(root.locator(".demo-results")).toContainText("7 / 7");await expect(root.locator(".demo-results")).toContainText("does not rerun dbt");
  await root.locator('[data-choice="stg_orders_archive"]').click();await expect(root.locator(".demo-results")).toContainText("No validation is run here");
  await root.locator('[data-step="4"]').click();await expect(root.locator(".demo-results")).toContainText("unresolved dependency");
});
test("StockPulse period selection follows deterministic fictional provenance",async({page})=>{
  await page.goto("/projects/stockpulse/#demo");const root=await ready(page,"stockpulse");
  await expect(root.locator(".demo-source-badge")).toHaveText("Fictional data");await expect(root.locator(".stock-change strong")).toHaveText("+12.89%");
  await root.getByLabel("Reporting period").selectOption("0");await expect(root.locator(".stock-change strong")).toHaveText("Comparison unavailable");
  await root.getByLabel("Reporting period").selectOption("2");await root.getByLabel("Financial metric").selectOption("capex");await expect(root.locator(".stock-change strong")).toHaveText("+19.35%");await expect(root.locator(".evidence-trace")).toContainText("DemoCapitalExpenditure");await expect(root.locator(".evidence-trace")).toContainText("DEMO-2026-Q2");
  await root.locator('[data-period="1"]').focus();await root.locator('[data-period="1"]').press("Enter");await expect(root.locator('[data-period="1"]')).toBeFocused();
});
test("forecasting score, fold and observation controls retain truthful target and baseline",async({page})=>{
  await page.goto("/projects/sales-forecasting/#demo");const root=await ready(page,"sales-forecasting");
  await root.getByRole("button",{name:"MAE",exact:true}).click();await expect(root.locator(".model-winner")).toContainText("ETS");
  await root.getByLabel("Chronological fold").selectOption("1");await expect(root.locator(".fold-panel")).toContainText("28 train / 4 holdout");await expect(root.locator(".fold-panel")).toContainText("$13,800.00");
  await root.getByLabel("Inspect observed week").selectOption("31");await expect(root.locator(".week-reading")).toHaveText("2015-07-26$9,100.00");
});
test("dashboard filters, comparisons, empty state and CSV export share the same data",async({page})=>{
  await page.goto("/projects/video-game-sales-dashboard/#demo");const root=await ready(page,"video-game-sales-dashboard");
  await root.getByLabel("Platform",{exact:true}).selectOption("NS");await expect(root.locator("[data-game-count]")).toHaveText("8 / 30");
  const downloadPromise=page.waitForEvent("download");await root.getByRole("button",{name:/Export filtered CSV/}).click();const download=await downloadPromise,csv=await readFile(await download.path(),"utf8");expect(csv.trimEnd().split("\r\n")).toHaveLength(9);expect(download.suggestedFilename()).toBe("video-game-sales-filtered.csv");
  await root.getByLabel("Genre",{exact:true}).selectOption("Adventure");
  await root.getByLabel("Release year",{exact:true}).selectOption("2000");await expect(root.locator(".demo-empty")).toBeVisible();
  await root.getByRole("button",{name:/Reset filters/}).click();await expect(root.locator("[data-game-count]")).toHaveText("30 / 30");
  await root.getByLabel("Compare platform A").selectOption("NS");await expect(root.locator(".platform-comparison")).toContainText("8 sample games");
});
test("expanded interactive controls pass accessibility after changing state",async({page})=>{
  test.setTimeout(60000);
  for(const slug of ["driftdoctor","stockpulse","sales-forecasting","video-game-sales-dashboard"]){await page.goto(`/projects/${slug}/#demo`);const root=await ready(page,slug);await root.locator(".demo-source>summary").click();const scan=await new AxeBuilder({page}).include("#demo").withTags(["wcag2a","wcag2aa","wcag21aa"]).analyze();expect(scan.violations).toEqual([]);}
});
test("small-screen hero reaches selected work promptly and static figures recompose",async({page},testInfo)=>{
  test.skip(testInfo.project.name!=="desktop","One dedicated layout measurement");await page.setViewportSize({width:390,height:844});await page.goto("/");expect(await page.locator("#projects").evaluate(el=>el.getBoundingClientRect().top+scrollY)).toBeLessThanOrEqual(844*1.5);await expect(page.locator(".motion-control>span")).toBeVisible();for(const link of await page.getByRole("link",{name:"Aarya Mody — Home",exact:true}).all()){const box=await link.boundingBox();expect(box.width).toBeGreaterThanOrEqual(44);expect(box.height).toBeGreaterThanOrEqual(44);}
  await page.goto("/projects/sales-forecasting/");await expect(page.locator(".mobile-workflow")).toBeVisible();await expect(page.locator(".case-graphic>img")).toBeHidden();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
});
