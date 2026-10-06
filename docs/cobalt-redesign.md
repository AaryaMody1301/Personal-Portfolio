# Cobalt portfolio redesign

The default portfolio uses a light reading layout: white/slate surfaces, `#111827` body text, `#475569` secondary text, and `#1d4ed8` actions. The optional World keeps its existing dark palette and renderer. This work is based on `portfolio/aaryas-world` (PR #11), with the redesign isolated on `portfolio/cobalt-case-studies`.

The homepage leads with Aarya's role and current employment, three featured projects, then professional experience and evidence-linked skills. Eleven further projects remain in a searchable collection. All fourteen native project disclosures, project URLs, resume bytes, contacts, professional qualifications, and third-party notices are retained.

Three static case studies explain the problem, approach, measured evidence, decisions, and limits:

- [DriftDoctor](../projects/driftdoctor.html): guarded repair, twelve frozen synthetic fixtures, and a separately reported ambiguity demonstration.
- [SQL Practice Project](../projects/sql-analytics.html): targeted query tuning, median timings, workload definition, index cost, and a rejected index.
- [Sales Forecasting](../projects/sales-forecasting.html): chronological evaluation, naive baseline, exact mean-fold RMSE results, and the unsuccessful ensemble comparison.

These pages need no client-side JavaScript. Their source links are pinned to the reviewed project commits. See [content provenance](content-sources.md) for the underlying evidence and professional facts.

`assets/css/reading.css` is the editable reading/case-study stylesheet; `scripts/build.mjs` combines it with the existing World styles into the generated stylesheet. `site-pages.json` is the shared page registry used by hashing, link checks, deployment verification, and upload packaging. New pages must be registered there and added to `sitemap.xml`.

The social card has an editable SVG source in `assets/images/og-source.svg`, rasterized to the existing 1200 × 630 JPG. The favicon uses the same cobalt accent. Neither asset adds a network dependency.

## Verification scope

Local navigation unit tests passed. Available asset hashes and local page targets were checked; JavaScript syntax, dependency pins, and repository hygiene were also examined. The workspace could not install all pinned dependencies or retrieve the two large pre-existing lighting blobs. Local CSS was compiled with cached esbuild 0.28.0, which reproduced the previous pinned stylesheet byte for byte before compiling the combined sources. CI must verify the final output using the repository's pinned esbuild 0.28.2.

Four reading/focus references were captured and visually reviewed on Windows with Google Chrome 154.0.8037.98. The two World references remain unchanged. CI compares the reading references in that browser separately from behavioral coverage, and captures the cobalt homepage and forecast case study for review.

The first full CI run passed builds, repository checks, and deployment regression tests on both operating systems, but reached its time limit in browser checks. No-JavaScript case-study tests use Playwright-managed device contexts, separate from accessibility scans; renderer-only tests verify WebGL capability before exercising the optional World. Reading layout and accessibility retain independent coverage in every browser. A browser with WebGL2 must reach the ready state; unexpected fallback still fails.

CI remains responsible for the full build, asset-integrity checks, deployment regression tests, seven browser/device profiles, WCAG scans, Lighthouse, and Windows upload-package verification. CI produces reports and a ZIP; it does not deploy the site. No new live-site verification has been claimed for this branch.

Behavioral stages stop after four failures to preserve useful reports rather than exhaust the job limit on repeated symptoms. A successful run still executes every configured test.
