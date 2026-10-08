# Cobalt portfolio redesign

The default portfolio uses a light reading layout: white/slate surfaces, `#111827` body text, `#475569` secondary text, and `#1d4ed8` actions. The optional World keeps its dark palette and interactions. PR #12 targets `master`; its `portfolio/cobalt-case-studies` branch includes the predecessor World changes from the closed PR #11.

The homepage leads with Aarya's role and current employment, three featured projects, then professional experience and evidence-linked skills. SQL analysis leads the selected work, followed by DriftDoctor and vehicle-price forecasting. Case-study links are always visible outside disclosures. Professional experience, skills, and the authentic portrait precede the searchable eleven-project archive. Filters apply only to that archive, leaving the three selected projects visible. Mobile navigation promotes the resume, and the hero exposes availability and contact. All fourteen native project disclosures, project URLs, resume bytes, contacts, professional qualifications, and third-party notices are retained.

Three static case studies explain the problem, approach, measured evidence, decisions, and limits:

- [DriftDoctor](../projects/driftdoctor.html): guarded repair, twelve frozen synthetic fixtures, and a separately reported ambiguity demonstration.
- [SQL analysis & query tuning](../projects/sql-analytics.html): targeted query tuning, median timings, workload definition, index cost, and a rejected index.
- [Vehicle-price forecasting](../projects/sales-forecasting.html): chronological evaluation, naive baseline, exact mean-fold RMSE results, and the unsuccessful ensemble comparison.

These pages need no client-side JavaScript. Their source links are pinned to the reviewed project commits. See [content provenance](content-sources.md) for the underlying evidence and professional facts.

`assets/css/reading.css` is the editable reading/case-study stylesheet; `scripts/build.mjs` combines it with the existing World styles into the generated stylesheet. `site-pages.json` is the shared page registry used by hashing, link checks, deployment verification, and upload packaging. New pages must be registered there and added to `sitemap.xml`.

The social card has an editable SVG source in `assets/images/og-source.svg`, rasterized to the existing 1200 × 630 JPG. The favicon uses the same cobalt accent. Neither asset adds a network dependency.

## Verification scope

CI rebuilds using the locked dependencies, checks all fourteen content-versioned assets and registered pages, exercises deployment rejection cases, and rejects any difference between the committed runtime and rebuilt output. Runtime artifacts retain the reproducible build separately from the upload package.

All six reading, focus, and World references are refreshed and reviewed on Linux in Playwright-pinned Chromium headless shell 149.0.7827.55. CI compares the same six references on Linux in that pinned browser, with unchanged 1% reading/focus and 2% World pixel tolerances. This replaces the rolling Windows Chrome dependency. Windows still runs every behavioral and accessibility profile. CI also captures desktop/mobile reading and forecast previews for review.

Seventy case-study checks cover all seven browser/device profiles, including no-JavaScript navigation, native disclosures, small-screen overflow, source links, result-table parity, and WCAG scans. The World suite covers destination travel, samples, keyboard focus, history, delayed scripts, orientation, context loss, and reading fallback. Renderer-only tests verify WebGL capability before exercising World; a browser with WebGL2 must reach the ready state, and unexpected fallback still fails. Reading layout and accessibility retain independent coverage in every browser.

Mobile, low-core-count, and software-rendered devices keep World still between interactions while preserving animated travel, orbit, repair, evidence switching, and archive samples. Desktop ambient motion remains available. Driver creation and renderer setup yield separately. Hidden buffer warm-up uses a one-pixel target and twelve-mesh batches on constrained devices. Native WebGL2 fences yield until real GPU work completes, including the first full-size frame, before dismissing the poster. This prevents deferred GPU work from blocking the compositor on reveal. The canvas stays opaque behind the poster instead of animating a second opacity layer. Constrained rendering uses a one-pixel-ratio cap, simpler geometry and lighting, and island foliage on demand; hardware-accelerated desktops keep their full environment and ambient motion. Desktop foliage is prepared before shader/buffer warm-up. Each case study also begins with an Outcome / Decision / Limit summary. Camera routes skip animations when already at their destination. Paused World draws only after orbit, travel, resize, new scenery, or sample changes; tests verify that evidence changes still redraw and then become idle. A container size observer keeps the drawing buffer, camera, and labels aligned after header breakpoints and viewport units settle, including rotation during initialization. Orientation checks retain the two-pixel label tolerance and verify the drawing buffer against the actual container size.

Returning to World at the same size retains the drawing buffer; a browser integration check verifies that mode changes do not reassign the canvas dimensions. Actual container size changes still resize it. Named browser performance measurements record context creation, renderer setup, shader preparation, buffer uploads, and the first full frame; the startup profiler includes these stages.

Container observation starts after hidden buffer preparation. Its initial notification therefore cannot expand the one-pixel target. An integration check pauses preparation after a real draw, rotates the viewport, waits for two paint frames, verifies that the drawing buffer stays at one pixel, then releases preparation and checks the final viewport and map navigation.

Lighthouse retains three samples for mobile and desktop in both reading and World. The audit browser explicitly uses no reduced-motion preference so Windows system settings cannot select reading instead of World. Each World sample must include the measured first full frame from its cold navigation; a reading fallback or unfinished initialization is recorded as an audit error even if its scores are high. It runs before the full browser suite to provide feedback while the remaining checks finish. A final acceptance step fails the job if the audit fails, so the existing median gates remain 90 Performance and 95 Accessibility, Best Practices, and SEO. Packaging remains blocked by a failed audit. The Windows packaging stage verifies every upload entry and the original resume bytes. Consult the current PR checks and downloadable reports for results at a particular revision. Project benchmark evidence was reviewed at pinned commits, not rerun.

CI produces reports and a ZIP without deploying the site. Local previews and emulated devices do not verify the live host or physical devices. PR #12 targets `master`; follow the deployment runbook after reviewing the final revision.

Behavioral stages stop after four failures to preserve useful reports rather than exhaust the job limit on repeated symptoms. A successful run still executes every configured test.

## Disclosure regression

A controlled same-turn opening of two projects reproduced the old race: the queued first toggle closed the newest project. A regression fails on the old bundle and passes after replacing the document toggle handler with native `details.name` grouping. Grouping is applied when JavaScript starts, so the no-JavaScript document retains all fourteen expanded projects and accessible nested disclosures. World Work moves both selected work and the archive into its dialog and restores both on exit.
