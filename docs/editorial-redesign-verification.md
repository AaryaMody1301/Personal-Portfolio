# Editorial portfolio release verification

Historical evidence for the earlier editorial release. The interactive redesign uses `docs/redesign-verification.md` for its own release identity and results.

Verified locally on 24 October 2026. This is a prepared Hostinger release; production has not been changed. The approved implementation plan is [portfolio-improvement-plan.md](portfolio-improvement-plan.md).

## Release identity

- Five public HTML pages: the homepage and four dedicated case studies.
- Four featured projects: DriftDoctor, StockPulse, Sales Forecasting, Video Game Sales Dashboard.
- Ten archived projects, including SQL Practice Project, with maturity qualifications preserved.
- Manifest version 2: five page records and twenty asset records, each with path, SHA-256 and byte count.
- Homepage SHA-256: `1ace0f19be30c0533c00c01d3088bd3ff83eedbf62773313927eba82b40d9256`.
- Manifest SHA-256: `bb0c656a6d91e72fb2c3af01fcd321308e8808562709c0ffc5f0293fee1d9fb5`.
- Combined release fingerprint: `7ca62d9e49e75ec72e5e4f872db1454565561723d7f3268569df83f8ec610ceb`.

The final evidence directory is `reports/local/editorial-redesign-20261024-release/`. Earlier timestamped runs are development evidence and are superseded by this record.

## Completed checks

| Check | Result | Evidence |
| --- | --- | --- |
| Repository checks | Syntax, pinned dependencies, LF text, ignored local files, generated asset integrity; no credential pattern matches | `npm run check` |
| Deterministic generation | Two successive builds produced identical bytes for all 27 generated release files | `npm run build:check` |
| Browser regression suite | 85 passed; six duplicate responsive sweeps intentionally skipped | [Browser release report](../reports/local/editorial-redesign-20261024-release/browser-release.json) |
| Visual baseline comparison | Two passed, comparing four reviewed Windows Chrome screenshots | [Visual comparison](../reports/local/editorial-redesign-20261024-visual-compare/browser-release.json) |
| Release regressions | Eight passed, including missing case pages, stale page/script/font bytes, wrong MIME with correct bytes, HTML returned as a script, explicit redirect destinations, and v1 references | `npm run test:release` |
| Cold navigation | Nine fresh Chromium contexts; initial HTTP 200 and explicit expected destinations | [Navigation report](../reports/local/editorial-redesign-20261024-release/cold-navigation.json) |
| Links | No broken links; LinkedIn (999) and Siteinspire (429) blocked automated access | [Link report](../reports/local/editorial-redesign-20261024-release/links.json) |
| Served release | Five pages and thirty HTTP resources passed status, MIME and exact-byte comparisons | [Deployment report](../reports/local/editorial-redesign-20261024-release/deployment.json) |
| Hostinger package | 31 entries; every archived byte matches its source, including `.htaccess`, notices and the original resume | [Package report](../reports/local/editorial-redesign-20261024-release/package.json) |
| Original rollback | Real saved version-1 release: one page and 21 HTTP resources passed byte and MIME verification | [Rollback report](../reports/local/editorial-redesign-20261024-release/rollback.json) |

The browser matrix covers Chromium desktop/phone, Firefox, and WebKit desktop/iPhone/iPhone SE/iPad emulation on Windows. Every page passes the automated WCAG 2.1 AA axe scan in every profile, with one H1, unique metadata, canonical/social assets, and no horizontal document overflow. Removed World scripts, posters, models and lighting resources receive zero requests in the new release.

Behavior checks cover direct loading, refresh, return links, Back/Forward, legacy query and island normalization, campaign-parameter retention, archive disclosure, copy success/denial and focus return, mobile-menu Escape, original resume bytes, and genuine unknown-route 404 responses. Core navigation, all case-study content, the expanded archive, resume and direct contact links work with JavaScript disabled. Script, font and image failures and reduced motion are exercised across the matrix.

Keyboard Tab-to-skip-link is checked in Chromium and Firefox. Windows WebKit's default Tab preference skips anchors; that engine verifies native keyboard activation after explicitly focusing the skip link, plus menu Escape/focus restoration. This is not physical Safari or iOS certification.

All five pages are checked at 320, 390, 768 and 1440 CSS pixels, at 667×320 landscape, and at 720×450 for the reflow equivalent of a 1440px window at 200% zoom. Native browser zoom was not separately certified. Case-study diagrams retain an 800px minimum rendering width inside keyboard-scrollable regions so mobile chart labels remain legible; full-size SVG links and readable HTML evidence remain available.

## Lighthouse

Three samples per page and form factor: thirty successful audits. The retained release thresholds are performance ≥90 and accessibility/best practices/SEO ≥95. No runtime errors or layout shifts were reported.

| Page | Mobile performance | Desktop performance | Accessibility / best practices / SEO |
| --- | --- | --- | --- |
| Homepage | 99 | 100 | 100 / 100 / 100 |
| DriftDoctor | 99 | 100 | 100 / 100 / 100 |
| StockPulse | 99 | 100 | 100 / 100 / 100 |
| Sales Forecasting | 99 | 100 | 100 / 100 / 100 |
| Video Game Sales Dashboard | 99 | 100 | 100 / 100 / 100 |

These are local medians, not measurements of the public Hostinger deployment. Individual HTML/JSON audits and [the summary](../reports/local/editorial-redesign-20261024-release/lighthouse/summary.json) are preserved.

## Review captures

There are twenty full-page captures: every page at each target width, plus four homepage viewport captures, phone diagram/evidence captures and the expanded phone archive. The supplemental element captures hide the sticky header only during screenshot capture to prevent it overlapping a tall element; full-page and viewport captures show the actual header.

- [Desktop homepage](../reports/local/editorial-redesign-20261024-release/preview/home-1440-viewport.png)
- [Phone homepage](../reports/local/editorial-redesign-20261024-release/preview/home-390-viewport.png)
- [320px homepage](../reports/local/editorial-redesign-20261024-release/preview/home-320-viewport.png)
- [Tablet homepage](../reports/local/editorial-redesign-20261024-release/preview/home-768-viewport.png)
- [StockPulse case study](../reports/local/editorial-redesign-20261024-release/preview/stockpulse-1440.png)
- [DriftDoctor repair evidence](../reports/local/editorial-redesign-20261024-release/preview/driftdoctor-390-evidence.png)
- [Forecasting diagram on a phone](../reports/local/editorial-redesign-20261024-release/preview/sales-forecasting-390-diagram.png)
- [Expanded archive](../reports/local/editorial-redesign-20261024-release/preview/archive-390-expanded.png)
- [Capture inventory and release identity](../reports/local/editorial-redesign-20261024-release/preview/captures.json)

## Delivery and limits

The verified upload is [portfolio-hostinger.zip](../output/portfolio-hostinger.zip), 658,281 bytes. Its exact SHA-256 is recorded in the package report. The [deployment runbook](hostinger-deploy.md) describes upload order and rollback. Publication remains a separate action.

The preserved original upload is [portfolio-before-editorial-20261024.zip](../archive/portfolio-before-editorial-20261024.zip), 2,118,343 bytes, SHA-256 `22225faeabc263d158319a6252a7cbff66175d00df950e38b13fb6515ca84f93`. Its original notice and resource bytes remain available for rollback. The resume and both portrait source files are unchanged.

StockPulse and dashboard application screenshots were not reproduced in this environment. The approved source-derived diagram fallback is used and visibly labelled. DriftDoctor's SQL excerpt and reported oracle checks are genuine published synthetic evidence, not a locally rerun repair. Forecasting values and all benchmark/data qualifications are explained in [content-sources.md](content-sources.md).

The [hosting-access recheck](../reports/local/editorial-redesign-20261024-release/hosting-access.json) distinguishes plain HTTP fetches from fresh browser navigation. Plain apex/www requests returned 200, with www ending at the apex. Fresh desktop, phone and Lighthouse-mobile-user-agent contexts loading the existing reading URL received an initial HTTP 403 browser challenge; a separate fresh desktop load of the plain homepage also returned 403. The initial error remains a failure even if a later challenge redirect succeeds. Live acceptance therefore remains outstanding; hosting configuration was not changed and no challenge was bypassed. Local Node serving and package verification do not certify the remote Apache/CDN configuration.

Reports and packages are intentionally ignored local artifacts. CI is updated for five-page generation, deterministic output, browser checks, release tests, Lighthouse gates and packaging; the hosted CI run itself has not been executed from this workspace.
