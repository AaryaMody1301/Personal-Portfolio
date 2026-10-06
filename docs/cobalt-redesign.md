# Cobalt portfolio redesign

The default portfolio uses a light reading layout: white/slate surfaces, `#111827` body text, `#475569` secondary text, and `#1d4ed8` actions. The optional World keeps its dark palette and interactions. This work is based on `portfolio/aaryas-world` (PR #11), with the redesign isolated on `portfolio/cobalt-case-studies`.

The homepage leads with Aarya's role and current employment, three featured projects, then professional experience and evidence-linked skills. Eleven further projects remain in a searchable collection. All fourteen native project disclosures, project URLs, resume bytes, contacts, professional qualifications, and third-party notices are retained.

Three static case studies explain the problem, approach, measured evidence, decisions, and limits:

- [DriftDoctor](../projects/driftdoctor.html): guarded repair, twelve frozen synthetic fixtures, and a separately reported ambiguity demonstration.
- [SQL Practice Project](../projects/sql-analytics.html): targeted query tuning, median timings, workload definition, index cost, and a rejected index.
- [Sales Forecasting](../projects/sales-forecasting.html): chronological evaluation, naive baseline, exact mean-fold RMSE results, and the unsuccessful ensemble comparison.

These pages need no client-side JavaScript. Their source links are pinned to the reviewed project commits. See [content provenance](content-sources.md) for the underlying evidence and professional facts.

`assets/css/reading.css` is the editable reading/case-study stylesheet; `scripts/build.mjs` combines it with the existing World styles into the generated stylesheet. `site-pages.json` is the shared page registry used by hashing, link checks, deployment verification, and upload packaging. New pages must be registered there and added to `sitemap.xml`.

The social card has an editable SVG source in `assets/images/og-source.svg`, rasterized to the existing 1200 × 630 JPG. The favicon uses the same cobalt accent. Neither asset adds a network dependency.

## Verification scope

CI rebuilds using the locked dependencies, checks all fourteen content-versioned assets and registered pages, exercises deployment rejection cases, and rejects any difference between the committed runtime and rebuilt output. Runtime artifacts retain the reproducible build separately from the upload package.

Four reading/focus references were captured and visually reviewed on Windows with Google Chrome 154.0.8037.98. The two World references remain unchanged. CI compares all six references in that browser separately from behavioral coverage, and captures the cobalt homepage and forecast case study for review.

Seventy case-study checks cover all seven browser/device profiles, including no-JavaScript navigation, native disclosures, small-screen overflow, source links, result-table parity, and WCAG scans. The World suite covers destination travel, samples, keyboard focus, history, delayed scripts, orientation, context loss, and reading fallback. Renderer-only tests verify WebGL capability before exercising World; a browser with WebGL2 must reach the ready state, and unexpected fallback still fails. Reading layout and accessibility retain independent coverage in every browser.

Mobile and other constrained devices keep World still between interactions while preserving animated travel, orbit, repair, evidence switching, and archive samples. Desktop ambient motion remains available. Driver creation and renderer setup yield separately. Hidden buffer warm-up uses a one-pixel target, then restores and renders the current viewport before exposing the scene. Camera routes skip animations when already at their destination. Paused World draws only after orbit, travel, resize, new scenery, or sample changes; tests verify that evidence changes still redraw and then become idle. A container size observer keeps the drawing buffer, camera, and labels aligned after header breakpoints and viewport units settle, including rotation during initialization. Orientation checks retain the two-pixel label tolerance and verify the drawing buffer against the actual container size.

Returning to World at the same size retains the drawing buffer; a browser integration check verifies that mode changes do not reassign the canvas dimensions. Actual container size changes still resize it. Named browser performance measurements record context creation, renderer setup, shader preparation, buffer uploads, and the first full frame; the startup profiler includes these stages.

Lighthouse retains three samples for mobile and desktop in both reading and World. It runs before the full browser suite to provide feedback while the remaining checks finish. A final acceptance step fails the job if the audit fails, so the existing median gates remain 90 Performance and 95 Accessibility, Best Practices, and SEO. Packaging remains blocked by a failed audit. The Windows packaging stage verifies every upload entry and the original resume bytes. Consult the current PR checks and downloadable reports for results at a particular revision. Project benchmark evidence was reviewed at pinned commits, not rerun.

CI produces reports and a ZIP without deploying the site. Local previews and emulated devices do not verify the live host or physical devices. PR #12 remains stacked on PR #11; follow the deployment runbook after reviewing the final revision.

Behavioral stages stop after four failures to preserve useful reports rather than exhaust the job limit on repeated symptoms. A successful run still executes every configured test.
