# Aarya Mody — Data Analytics & Engineering

An ivory-and-forest interactive portfolio for data engineering and analytics hiring managers. Five static pages combine an original AM identity, a transforming data-pipeline hero, four working project demonstrations, professional experience and a ten-project archive.

[Website](https://aaryamody.app/) · [Resume](assets/docs/AaryaMody_Resume.pdf) · [Redesign plan](docs/portfolio-improvement-plan.md) · [Sources](docs/content-sources.md) · [Verification](docs/redesign-verification.md) · [Deployment](docs/hostinger-deploy.md)

## Develop

Use Node.js 24 and npm. Run `npm ci`, then `npm run serve`, and open http://127.0.0.1:4173/. The serve command builds before starting the local server. Rebuild and refresh after source edits.

The canonical profile/projects live in `src/content.mjs`; shared markup in `src/render.mjs`; styles in `src/styles.css`; controls and motion in `src/main.mjs`, `src/demos.mjs` and `src/motion.mjs`. `src/demo-state.mjs` contains calculations shared by initial HTML and browser updates. `src/routes.mjs` preserves legacy destinations.

The build generates the homepage, four real case-study directory indexes, the sitemap, versioned assets and manifest version 2. It also generates logo exports, favicon formats, five social previews and third-party notices from canonical vectors and bundled font outlines. Include generated pages/assets with source changes; do not edit hashed files directly.

Four source-based demonstrations work on both the homepage and their case studies:

- DriftDoctor: dependency choice, repair reasoning, recorded validation and human review.
- StockPulse: three fictional seeded quarters, four metrics, deterministic changes and provenance.
- Sales Forecasting: published RMSE/MAE comparisons, two chronological folds and observed weekly median vehicle prices.
- Video Game Sales Dashboard: deterministic sample filters, regional totals, platform comparisons and filtered CSV export.

The deployed portfolio uses browser-local state and frozen fixtures. There is no framework, production server, database, analytics, market request or live AI call. SQL Practice stays in the archive. Navigation, evidence tables, native disclosures, resume and contact remain usable without JavaScript. Motion defaults to the operating system and supports an explicit System/Full/Reduced preference.

## Verify

Install browsers once with `npx playwright install --with-deps chrome firefox webkit`. CI uses bundled Chromium through `PLAYWRIGHT_CHROMIUM_CHANNEL=chromium`.

| Command | Purpose |
| --- | --- |
| `npm run build` | Generate identity/social assets, five pages, bundles and final resource/page hashes |
| `npm run check` | Syntax, LF text, dependency pins, repository hygiene and generated integrity |
| `npm run build:check` | Compare every release file across two successive builds |
| `npm run test:release` | Fixture calculations/checksums, favicon decoding, corruption/MIME/route/rollback regressions |
| `npm run test:ci` | Seven browser/device configurations, interactions, accessibility and fallbacks |
| `npm test` | Browser checks plus reviewed Windows Chrome visual baselines |
| `npm run preview:capture` | All five pages at 320, 390, 768 and 1440 CSS pixels, plus demo states |
| `npm run audit:preview` | Dedicated preview; three Lighthouse samples per page and form factor |
| `npm run links:check` | Resources, fragments, contacts, documentation and external destinations |
| `npm run navigation:check` | Fresh contexts, initial HTTP status and expected destinations |
| `npm run redirects:check` | SQL archive redirect status, preserved queries and intact fragments; run against Apache or the public host |
| `npm run verify:live` | Served pages/resource bytes, MIME types and expected routes |
| `npm run package:hostinger` | Complete byte-verified static upload |
| `npm run social:prepare` | Regenerate canonical brand assets and notices; rebuild afterward |

Reports use ignored `reports/local/` or `reports/live/` folders. Set `PORTFOLIO_REPORTS_DIR` to a unique directory under `reports/`. Targeted checks remain separate from final full-suite evidence. Review visual changes before updating Windows Chrome baselines; CI never approves new screenshots automatically.

Target-aware tools accept `PORTFOLIO_BASE_URL` (default http://127.0.0.1:4173/) and `PORTFOLIO_REFERENCE_DIR` for an extracted rollback. Verification reads both version-1 historical manifests and version-2 multi-page manifests.

## Sources and identity

Newsreader and Inter are self-hosted WOFF2 files. The original uppercase AM geometry, outlined Aarya Mody wordmark, horizontal/reversed lockups, SVG/PNG/ICO favicons and Apple touch icon share a canonical identity source. Lucide is imported narrowly; GSAP/ScrollTrigger coordinates motion. Runtime assets require no CDN.

The demonstrations use pinned public project evidence and clearly labelled fixtures. They are portfolio implementations of selected flows. Source-derived diagrams and recorded execution outcomes are identified separately from actual browser captures. Frozen fixture checksums, source revisions, optional one-time exporters and data limitations are documented in [content sources](docs/content-sources.md). Normal builds require Node only.

The resume and both portrait files retain their supplied bytes. Professional responsibilities, personal projects, courses, self-assessed languages and release qualifications retain their distinctions. Original code is [MIT](LICENSE); redistributed font/icon/animation notices accompany the release.

## Delivery

Prepare the verified Hostinger package using the [runbook](docs/hostinger-deploy.md). Production publication is separate. Recheck the recorded hosting HTTP 403 before live acceptance; local performance and browser emulation do not certify the public deployment or physical devices.

GitHub Actions checks Windows/Linux, browser engines, deterministic generation, retained Lighthouse thresholds and Hostinger packaging. It does not publish. Brag is available for an optional separate launch video; it is not a website dependency.
