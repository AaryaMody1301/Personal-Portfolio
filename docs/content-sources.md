# Portfolio content sources

Professional profile reviewed 2026-09-19; DriftDoctor, SQL, and forecasting case-study evidence reviewed 2026-10-06; StockPulse implementation reviewed 2026-10-09. The updated resume overrides older portfolio copy.

## Professional profile

Source: [AaryaMody_Resume.pdf](../assets/docs/AaryaMody_Resume.pdf), two pages.

SHA-256: `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`

- Page 1: contact information, Surat location, remote-from-India / on-site or hybrid-in-Surat availability, technical skills, employment titles, dates, locations, and responsibilities.
- Page 2: featured personal projects, education and GPA, GDSC leadership, professional development, and self-assessed languages.
- Brentwood title is Data Analyst I. Data Analytics & Engineering is portfolio positioning, not a substituted employment title.
- PL-300 is an exam-preparation course, not a claimed certification.
- dbt, DuckDB, SQLite, application engineering, and applied AI are explicitly presented as personal-project experience.
- Removed prior numerical claims about time savings, forecasting accuracy, SQL performance, governed domains, business-unit counts, stakeholder adoption, and budget impact. Removed relocation availability and German B2 study claim.
- Full LinkedIn profile content was inaccessible. LinkedIn remains a contact link, not an independent source of employment or credential claims.
- No private repository material is included.

## Featured projects

| Project / source | Supported story | Qualification retained |
| --- | --- | --- |
| [DriftDoctor README](https://github.com/AaryaMody1301/DriftDoctor/blob/0760ce3772678fdb7309b467f41f0371c1c10feb/README.md) | dbt contract drift diagnosis, deterministic skills, bounded candidate selection or abstention, sandboxed repairs, executable validation, reviewable changes | Final 12/12 score refers only to twelve frozen synthetic fixtures; the separate held-out ambiguity demonstration is not added to that score. |
| [SQL benchmark evidence](https://github.com/AaryaMody1301/SQL_Practice_Project/blob/b30114381d3e2a85e2de22bfa925de2e29d4c9c6/performance/BENCHMARK_RESULTS.md) | PostgreSQL 18.6; deterministic synthetic workload; medians of three warm-cache runs; targeted partial covering indexes; rejected speculative index | 19.198 to 0.105 ms and 99.5% reduction apply to one query, not the whole system or production. Original Luke Barousse course provenance is retained. |
| [StockPulse ingestion implementation](https://github.com/AaryaMody1301/StockPulse/blob/06b892f8ec5a22fa7da71de1b17c7728ab70bc9f/src/lib/sec/repository.ts) | Process-local serialized SEC requests with bounded retries; normalized source and period identity; stable keys; duplicate-skipping writes; actual inserted counts; success/partial/failed job reporting | Source review, not a live deployment test. The database test's repeated-write assertions were inspected, not rerun. Production configuration and release acceptance remain. Request client, normalization, integration test, and release-status links are pinned on the case page. |
| [Forecast release benchmark](https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis/blob/8e8f89947dee09edb3d5d0ef3345ab23320ee714/docs/RELEASE_BENCHMARK.md) | Weekly median selling-price target; 32 observed weeks; 24-week initial train; two four-week outer folds; no target imputation; nested chronological tuning | Mean fold RMSE is the arithmetic mean of per-fold RMSE, not pooled RMSE. ARIMA is 6.73% lower than naive only in this release check; the ensemble is 37.46% worse. No universal accuracy claim or LSTM result. |
| [CompatForge README](https://raw.githubusercontent.com/AaryaMody1301/CompatForge/main/README.md) | Identity/evidence ingestion, dbt transformations, provenance, schema contracts, configuration-specific resolver | Release preview; external acceptance remains before the first release-candidate tag. |
| [OriginKeep README](https://raw.githubusercontent.com/AaryaMody1301/OriginKeep/main/README.md) | Browser companion, desktop application, SHA-256 identity, SQLite provenance, portable passports, archive/restore | 2.0 implementation is release-candidate ready; clean-machine distribution acceptance remains. |

The repair diagram is a conceptual representation of the documented workflow. The forecast chart reproduces the exact displayed values from the linked release benchmark, with an equivalent accessible table. Repository benchmark evidence was read, not rerun, during the portfolio redesign. Source links in the case studies are pinned to the reviewed revisions.

## Additional public projects

| Display name | Source | Evidence used |
| --- | --- | --- |
| Sales Forecasting | [README](https://raw.githubusercontent.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis/main/README.md) | Chronological evaluation, leakage controls, baseline comparisons, reproducible artifacts; no universal model-performance claim |
| SQL Practice Project | [README](https://raw.githubusercontent.com/AaryaMody1301/SQL_Practice_Project/main/README.md) | Historical job-posting analysis, reusable models, correctness checks, measured tuning |
| StockPulse | [README](https://raw.githubusercontent.com/AaryaMody1301/StockPulse/main/README.md) | SEC ingestion, provenance, deterministic change detection, optional grounded AI |
| DeepTrail | [README](https://raw.githubusercontent.com/AaryaMody1301/deeptrail-webmcp/main/README.md) | Shared evidence workspace, WebMCP contracts, Zod, IndexedDB |
| ContextHalo | [README](https://raw.githubusercontent.com/AaryaMody1301/ContextHalo/main/README.md) | Windows screen/audio/context assistant, Electron, cloud and local providers; repository documents its derivative provenance |
| JobPilot Local | [README](https://raw.githubusercontent.com/AaryaMody1301/jobpilot-local/main/README.md) | Local discovery, evidence-backed tailoring, user-authorized application workflows; measured real-world pilot still pending |
| Sentiment Analysis | [README](https://raw.githubusercontent.com/AaryaMody1301/Sentiment-Analysis-for-Product-Reviews/main/README.md) | Label contracts, classical classifiers, evaluated and validated inference artifacts |
| Video Game Sales Dashboard | [README](https://raw.githubusercontent.com/AaryaMody1301/Video-Game-Sales-Dashboard/master/README.md) | Dash/Plotly analysis, regional/platform comparisons, export workflows |
| Movie Recommendation System | [README](https://raw.githubusercontent.com/AaryaMody1301/Movie-Recommendation-System/main/README.md) | Persistent accounts, ratings/watchlists, content/collaborative/hybrid recommendations |
| Face Detection Attendance System | [README](https://raw.githubusercontent.com/AaryaMody1301/Face_Detection_Attendance_System/main/README.md) | Local recognition and passive liveness, desktop UI, SQLite |
| Bingo Blog App | [README](https://raw.githubusercontent.com/AaryaMody1301/bingo-blog-app/main/README.md) | React bingo and task manager, Redux Toolkit, mock API |

Repository links were read during planning. No unverified demo or download links were added. The account README and portfolio repository are excluded from the project inventory. Project content is static and requires no GitHub API at runtime.

## Update policy

Recheck the linked project documentation before changing release status or adding measurable outcomes. Keep resume downloads, visible employment facts, metadata, and structured data consistent. Preserve the original PDF bytes unless a new resume is supplied.
