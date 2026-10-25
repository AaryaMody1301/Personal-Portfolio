# Interactive portfolio release verification

Verified locally on 25 October 2026 against the [approved implementation plan](portfolio-improvement-plan.md). The redesign and Hostinger upload package are complete. Production has not been changed.

## Release identity

- Five public pages: the homepage and four dedicated case studies.
- Four featured projects: DriftDoctor, StockPulse, Sales Forecasting and Video Game Sales Dashboard.
- Ten archived projects, including SQL Practice Project, with maturity qualifications preserved.
- Manifest version 2: five page records and 30 versioned asset records, with final hashes and byte counts. Version-1 rollback references remain supported.
- Homepage SHA-256: `bebeb930f38d31075bd30ac3cee8b4f9aaedac2774c9bb7cef078810d69f7cb6`.
- Manifest SHA-256: `b87ed128ae625798acba23d1cc3311e56afbc11ca48091a0df1d706363d3a559`.
- Combined release fingerprint: `25ff125271f6413838b6dbe9e16c88367bb622e86709669f901165878694410e`.

Final evidence is in `reports/local/interactive-20261024-release-final/`. The separately identified browser runs below record their exact release fingerprints. The [editorial verification](editorial-redesign-verification.md) is historical evidence for the saved intermediate release.

## Implemented experience

The ivory and forest design uses self-hosted Newsreader and Inter. An original AM monogram and outlined Aarya Mody wordmark share canonical vector geometry across header/footer identities, reversed variants, favicons, the Apple touch icon and social previews. The [logo review board](../reports/local/interactive-20261024-release-final/preview/logo-review.png) includes 16/32/48px checks. Both linked logo targets are at least 44px.

The four-stage hero responds to buttons and desktop scrolling. Selected work pairs native scrolling with sticky previews, chapter progress and restrained GSAP motion. Experience and education disclosures, evidence-linked capability selection, archive expansion, copy-email feedback and System/Full/Reduced motion preferences work with keyboard access. Small or short screens return to ordinary document flow. Supported browsers use native cross-document View Transitions with normal navigation fallbacks.

All four projects have shared compact and expanded demonstrations:

| Project | Verified interaction and evidence boundary |
| --- | --- |
| DriftDoctor | Dependency selection, guarded repair/escalation, SQL changes, recorded validation and human review. Published synthetic outcomes are displayed; the browser does not execute dbt or a model. |
| StockPulse | Three fictional periods, four metrics, deterministic comparisons and source provenance. The default revenue comparison is +12.89%; missing, earliest-period and zero-denominator comparisons remain unavailable. The synthetic DEMO banner stays visible. |
| Sales Forecasting | RMSE/MAE comparison, two chronological folds, 32 observed weeks and reproducible last-value predictions. ARIMA/ETS figures are published aggregates for weekly median vehicle prices, with limited evaluation coverage explained. |
| Video Game Sales Dashboard | The original deterministic 30-game sample, filters, platform comparison, table, empty/reset states and exact filtered CSV export. Missing critic scores and cumulative lifetime-sales qualifications are retained. |

Fixtures are frozen to source revisions and checksums in [content-sources.md](content-sources.md). These are labelled source-based portfolio demonstrations. Original application screenshots were not substituted with unlabelled reconstructions. The static portfolio requires no runtime API, database, market credentials or AI key; StockPulse's original PostgreSQL demo workflow remains separately documented.

Complete content, readable tables/figures, the expanded archive, navigation, resume and direct contact links are present without JavaScript. Legacy World/reading/island links preserve unrelated parameters and history behavior. Removed World scenes, models, posters and lighting assets receive zero requests.

## Completed checks

| Check | Result | Evidence |
| --- | --- | --- |
| Repository integrity | Syntax, pinned dependencies, text hygiene, source/generated integrity and credential-pattern checks pass | `npm run check` |
| Deterministic generation | Two successive builds produce identical bytes for all 37 generated release files | `npm run build:check` |
| Complete browser regression suite | 142 passed; 12 duplicate layout sweeps intentionally skipped | [Full browser report](../reports/local/interactive-20261024-release-final/browser-release.json) |
| Final CSS regression matrix | 51 passed; 12 duplicate sweeps intentionally skipped; all five pages and all seven browser profiles | [Final CSS report](../reports/local/interactive-20261024-header-final/browser-release.json) |
| Visual baseline comparison | Two passed, comparing four reviewed desktop/phone homepage and StockPulse screenshots | [Visual comparison](../reports/local/interactive-20261025-visual-compare/browser-release.json) |
| Release and calculation regressions | 13 passed, including fixture checksums, deterministic calculations, export rows, logo exports and deployment failures | `npm run test:release` |
| Cold navigation | Nine fresh Chromium contexts passed initial HTTP status and explicit destination checks | [Navigation report](../reports/local/interactive-20261024-release-final/cold-navigation.json) |
| Links | No broken links; automated access was blocked for three external destinations | [Link report](../reports/local/interactive-20261025-pr-final/links.json) |
| Served release | Five pages and 40 requested release files passed status, MIME and exact-byte comparisons | [Deployment report](../reports/local/interactive-20261025-pr-final/deployment.json) |
| Hostinger package | All 41 entries byte-compared to source, including the original resume, compatibility redirects and required notices | [Package report](../reports/local/interactive-20261025-pr-compatibility/package.json) |
| Original World rollback | Real version-1 archive: one page and 21 HTTP resources verified | [Version-1 rollback](../reports/local/interactive-20261024-release-final/rollback-v1-verification.json) |
| Intermediate editorial rollback | Real version-2 archive: five pages and 30 HTTP resources verified | [Version-2 rollback](../reports/local/interactive-20261024-release-final/rollback-v2-verification.json) |

The full browser run has fingerprint `e29e2ca561c1aa8d747c78eaac09d296e6e08e75848ac0822c7498dacb632e68`. Subsequent changes only adjusted header targets, the visible mobile motion label and short-screen CSS. Comparing its saved manifest with the final manifest found only `assets/css/style.css` changed; substituting that CSS reference reproduces the earlier HTML hashes for all five pages. JavaScript, fixtures and every other versioned asset are identical. The 51-test final matrix and the visual comparison cover the final release fingerprint above; these counts are separate runs, not 193 unique tests.

The browser matrix covers Chromium desktop/phone, Firefox and WebKit desktop/iPhone/iPhone SE/iPad emulation on Windows. Automated axe scans pass on all five pages in each profile. Checks cover direct loading and refresh, demos, filtering/export, storage denial, preference persistence and system changes, archive destinations, clipboard success/denial, mobile menu/focus, original resume bytes, Back/Forward, interrupted transitions, resizing, disabled JavaScript, failed scripts/fonts/images, reduced motion and true unknown-route 404s. Deployment regressions reject stale pages/resources, missing case studies, incorrect MIME types, HTML returned as assets and unexpected redirects; explicitly intended redirects are verified.

Layouts were reviewed at 320/390/768/1440px, 667x320 landscape, 1440x450 short desktop and 720x450 for the reflow equivalent of a 1440px window at 200% zoom. The phone chart has readable HTML labels; architecture diagrams have keyboard-scrollable regions and full-size source links. Native browser zoom was not separately certified. Keyboard skip-link traversal is checked in Chromium and Firefox; WebKit additionally checks activation after explicit focus because its Windows default Tab preference skips anchors. Engine emulation does not certify physical Safari/iOS devices.

## Lighthouse and delivery

Thirty audits completed: three samples for each page and form factor. All median release gates pass: performance at least 90; accessibility, best practices and SEO at least 95.

| Page | Mobile performance | Desktop performance | Accessibility / best practices / SEO |
| --- | --- | --- | --- |
| Homepage | 94 | 100 | 100 / 100 / 100 |
| DriftDoctor | 97 | 100 | 100 / 100 / 100 |
| StockPulse | 97 | 100 | 100 / 100 / 100 |
| Sales Forecasting | 97 | 100 | 100 / 100 / 100 |
| Video Game Sales Dashboard | 97 | 100 | 100 / 100 / 100 |

These are local medians, not public Hostinger measurements. One cold homepage mobile sample scored 88; the other two scored 94. The [summary and individual audits](../reports/local/interactive-20261024-release-final/lighthouse/summary.json) preserve variation and layout-shift measurements. Application JavaScript is 139,435 bytes, 54,609 bytes gzip, below the 100KB compressed target. The production dependency audit reports zero vulnerabilities; no unrelated development-toolchain upgrade was attempted.

The verified upload is [portfolio-hostinger.zip](../output/portfolio-hostinger.zip), 794,846 bytes, SHA-256 `bb8e558017b6e84736146f2eb45e703b8755b4c03e83023f641c03272a2733de`. Follow the [deployment runbook](hostinger-deploy.md) for a separately authorized publication.

PR preparation uses current `master` (`47a4eb1e38187c4c732cb54e66b944cf890337e2`) as its base. Existing Sites project metadata, ignore rules and historical design records are retained. The previous flat case-study URLs redirect to the new directory pages; SQL analysis and `/projects/sql-practice/` redirect to the visible SQL archive entry. Query parameters survive these HTTP 301 redirects, unknown paths remain 404s, and the same rules are configured in the local server and Hostinger `.htaccess`. Seven targeted [page, accessibility and compatibility checks](../reports/local/interactive-20261025-pr-final/browser-release.json) pass. This packaging/server integration does not alter any page, JavaScript, CSS or fixture bytes used by the recorded visual and Lighthouse checks. Apache execution remains a live-hosting acceptance check.

Both saved rollbacks remain available:

- [Original World release](../archive/portfolio-before-editorial-20261024.zip): 2,118,343 bytes, SHA-256 `22225faeabc263d158319a6252a7cbff66175d00df950e38b13fb6515ca84f93`.
- [Intermediate editorial release](../archive/portfolio-before-interactive-20261024.zip): 658,281 bytes, SHA-256 `2002a1105f927161bfae0f7e2da57ae829e6eddc266b9c6aca55cc54c2f3d325`.

The original resume and both portrait files are byte-unchanged. Full GSAP package license metadata and source copyright/license headers, bundled-font licenses, Lucide notices and source attribution are packaged.

## Review artifacts and publication limits

The refreshed review set contains 66 PNG images and two browser interaction recordings: twenty full-page captures at the four target widths, four homepage viewports, eight project chapters, sixteen demo before/after images, eight phone diagrams/evidence images, eight hero states, the expanded phone archive and the logo board. Supplemental element captures temporarily hide the sticky header to avoid covering tall evidence; full-page and viewport captures show the actual header.

- [Desktop homepage](../reports/local/interactive-20261024-release-final/preview/home-1440-viewport.png)
- [Phone homepage](../reports/local/interactive-20261024-release-final/preview/home-390-viewport.png)
- [Desktop interactions](../reports/local/interactive-20261024-release-final/preview/portfolio-desktop-interactions.webm)
- [Phone interactions](../reports/local/interactive-20261024-release-final/preview/portfolio-mobile-interactions.webm)
- [Capture inventory](../reports/local/interactive-20261024-release-final/preview/captures.json)
- [Horizontal logo master](../assets/brand/logo.svg), [monogram](../assets/brand/monogram.svg) and [reversed logo](../assets/brand/logo-reversed.svg)

Karpathy Guidelines and Ponytail informed the implementation. Brag 0.5.0 was reviewed as requested; its optional Hyperframes launch-film workflow was not needed for the actual browser recordings, and full rendering readiness remains unverified. No video tooling or backend was added to the website runtime.

The [hosting-access recheck](../reports/local/interactive-20261024-release-final/hosting-access.json) returned HTTP 200 for the apex and an intentional www-to-apex 301 followed by 200. The historical browser-specific HTTP 403 is not certified resolved: manual Windows browser control stopped because the tool could not confidently identify the active URL. No further UI input or challenge bypass was attempted. The isolated repository browser tests, captures and audits validate localhost; they do not certify remote Apache/CDN behavior. Production acceptance remains a deployment step.

Reports, recordings and ZIP packages are ignored local artifacts. CI is configured for the five-page generation, browser matrix, release tests, deterministic output, Lighthouse gates and packaging; hosted CI was not run from this workspace.
