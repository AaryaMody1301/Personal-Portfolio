# Content and asset sources

Reviewed 24 October 2026. The supplied resume is authoritative for employment, education, contact details, availability and professional skills. The original resume SHA-256 is `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`. Both supplied portrait files retain their original bytes.

The actual title is Data Analyst I; Data Analytics & Engineering is positioning. Professional SQL/Python/Databricks/Power BI work is distinguished from personal-project technologies. PL-300 is an exam-preparation course; English C2 and German A2 are self-assessed. No new professional impact figures, credentials, testimonials or relocation claims are introduced.

## Frozen project demonstrations

The interactive panels are source-based portfolio implementations of selected workflows. They run on frozen data in the browser. Original application captures, source-derived conceptual diagrams and recorded execution outcomes are identified separately. No runtime GitHub, model, database or market-provider calls occur.

| Demonstration | Pinned revision | Evidence and qualification |
| --- | --- | --- |
| DriftDoctor | `0760ce3772678fdb7309b467f41f0371c1c10feb` | [Published ambiguity trajectory](https://github.com/AaryaMody1301/DriftDoctor/blob/0760ce3772678fdb7309b467f41f0371c1c10feb/evidence/phase9/agent-fallback-demo.json): before/after SQL, recorded build 2 → 0, one bounded model call and seven passing oracle checks. Held-out synthetic example outside the twelve-case primary benchmark; portfolio controls do not rerun dbt or a model. |
| StockPulse | `16f7dedd66af4d74d1f2fd3f68de255deaae1d5e` | [Synthetic seed](https://github.com/AaryaMody1301/StockPulse/blob/16f7dedd66af4d74d1f2fd3f68de255deaae1d5e/scripts/seed-demo.ts): three quarters, four USD metrics, concepts and deterministic metric/fact keys. Fictional DEMO company, demo-gaap taxonomy and example.com filing-like links. |
| Sales Forecasting | `8e8f89947dee09edb3d5d0ef3345ab23320ee714` | [32 observed weeks](https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis/blob/8e8f89947dee09edb3d5d0ef3345ab23320ee714/data/benchmarks/car_prices_weekly_median.csv) and [published benchmark](https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis/blob/8e8f89947dee09edb3d5d0ef3345ab23320ee714/docs/RELEASE_BENCHMARK.md). Weekly median vehicle price, 24 initial training weeks and two four-week holdouts. |
| Video Game Sales Dashboard | `6a843ac9b37283bf197b93fe12f8c1041abfb39a` | [Original sample generator and cleaning](https://github.com/AaryaMody1301/Video-Game-Sales-Dashboard/blob/6a843ac9b37283bf197b93fe12f8c1041abfb39a/src/data/data_loader.py): 30 synthetic seed-42 games; float32 sales, original cleaning and missing critic scores retained. |

Every fixture includes its source URL, revision, Git blob identity and raw-source SHA-256. [Fixture checksums](../src/fixtures/checksums.json) protect the checked-in browser inputs:

| Fixture | SHA-256 |
| --- | --- |
| drift.json | `83060bb1b05defc55faf963ca6a6c08f8fb2967b5eb4c02fec94596c661547a7` |
| stock.json | `57199389e10c2bf3b865d0ab2ca588c42751f3da5372489ee24edc8a5aa99412` |
| forecast.json | `5b65da8c516c391567019d7bd2ac9403a8e92207c19945e4b38cd1e24295e3ae` |
| games.json | `564160ab4b827a6286033c089989b19ea8868c9501aa3ef01f7a74710b811b71` |

### Interpretation

StockPulse's Q2-versus-Q1 revenue change is `(28.9 - 25.6) / 25.6 = 12.890625%`, displayed as +12.89%. Missing values, an absent earlier period and zero denominators yield unavailable comparisons. The source documents the [full application's separate PostgreSQL/migration/seeding workflow](https://github.com/AaryaMody1301/StockPulse/blob/16f7dedd66af4d74d1f2fd3f68de255deaae1d5e/docs/DEMO.md). The browser panel does not demonstrate a live SEC integration or make recommendations.

Forecasting bars reproduce published aggregates: ARIMA MAE 1426.29 / mean fold RMSE 1764.63; ETS 1400.45 / 1783.29; last-value naive 1550.00 / 1891.95. ARIMA wins RMSE and ETS wins MAE on this limited benchmark. RMSE is the arithmetic mean of two fold RMSEs, not pooled residual error. The fold chart uses actual observations and reproducible last-value predictions; ARIMA/ETS prediction curves are not invented. LSTM is outside the supported release.

Game sales are cumulative reported lifetime totals in millions, grouped by release dates. They are not transaction-period sales or causal evidence. The synthetic sample does not establish full-dataset coverage. Filtered exports contain the same rows as the active cohort.

The four original SVG diagrams remain labelled source-derived illustrations. Mobile pages provide readable HTML workflow compositions and full-size SVG links. DriftDoctor's separate case-study SQL excerpt is published evidence, not a locally executed benchmark.

### Reproducing one-time exports

Ordinary builds require only Node and the frozen JSON. To regenerate fixtures, obtain the five exact source files listed in `scripts/export-demo-fixtures.py` and run that script with their directory as its argument. It verifies every raw Git blob before exporting. The reviewed export environment was Python 3.14, numpy 2.5.4 and pandas 3.1.0. The original dashboard generation, cleaning and derived functions execute with JIT decorators disabled and an unused cache stub; this avoids adding Numba/cache infrastructure to the portfolio.

## Archive

Retain SQL Practice Project, CompatForge, OriginKeep, DeepTrail, ContextHalo, JobPilot Local, Sentiment Analysis, Movie Recommendation System, Face Detection Attendance System and Bingo Blog App, with direct repository links. Preserve SQL Practice's historical 2023 data; CompatForge's external acceptance; OriginKeep's distribution acceptance; ContextHalo's derivative provenance; JobPilot's pending real-world pilot; and Bingo's mock-API scope.

## Identity, type and redistributed notices

Newsreader and Inter are self-hosted. [Exact font sources](../assets/licenses/Font-Sources.txt), [Newsreader OFL](../assets/licenses/Newsreader-OFL.txt), [Inter OFL](../assets/licenses/Inter-OFL.txt) and [runtime notices](../assets/licenses/THIRD-PARTY-NOTICES.txt) accompany the release.

The uppercase AM geometry is original. `src/brand.mjs` and checked-in `src/brand-type.json` are the canonical identity inputs. Wordmark/social text outlines derive from bundled fonts using FontTools 4.67.0 with Brotli support; the one-time script records font hashes and axis settings. Newsreader uses weight 450/optical size 36; Inter uses weight 500. Wordmark spacing is optically adjusted. `scripts/outline-brand-type.py` reproduces the outline export; normal builds need no Python.

Node/Sharp generates the horizontal/compact/reversed SVGs, PNG/ICO favicons, Apple touch icon and five social previews from those paths. These exports do not depend on installed system fonts. Lucide imports remain narrow. GSAP 3.15.0/ScrollTrigger drives coordinated motion. Its npm package provides copyright headers and a standard-license URL rather than a separate LICENSE file; preserve those supplied notices verbatim in the combined notices and linked bundle notice. The official license URL redirected to GSAP's offline page during this review; no replacement legal text was fabricated.

Research included Motion/Lens Bloom, Landdding, Siteinspire, 60fps, Recent, Footer Design, Rauno Freiberg and the user's other supplied resources. No paid assets or templates were copied. Godly redirected to Recent; On.design required authentication. Reference-to-feature mapping is in the [redesign plan](portfolio-improvement-plan.md).

## Brag and engineering workflow

Brag 0.5.0 is installed and enabled. Node 24.20.0 satisfies its requirement; FFmpeg was absent from PATH, Hyperframes skills were absent and the CLI was not found in the repository or PATH. Its full render workflow is unverified. The user permits Brag if useful; it remains an optional launch-video aid. Required review recordings show actual browser interactions and do not introduce Brag/Hyperframes runtime dependencies.

Apply the confirmed plan with Karpathy Guidelines and Ponytail: explicit assumptions, scoped changes, shared code and observable verification. Update source records before changing any project release status or measured outcome.
