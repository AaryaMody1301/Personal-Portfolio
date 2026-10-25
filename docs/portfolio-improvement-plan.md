# Portfolio redesign: interactive storytelling and custom identity

Rechecked 24 October 2026. Build an immersive portfolio for data engineering and analytics hiring managers, with a custom logo and working project demonstrations on the homepage and four case studies. This replaces the earlier restrained editorial plan, including its instructions to remove GSAP and demos.

The existing repository check and eight release regression tests passed during the plan review. Those results cover the existing editorial baseline; the new interactions require their own implementation and verification. Historical verification evidence remains labelled for the release it actually tested.

## 1. Direction, references and engineering guidelines

Confirmed choices: immersive storytelling; a hero where data becomes decisions; small usable browser demonstrations; compact demos on the homepage and expanded demos in case studies.

| References | Application |
| --- | --- |
| [Motion / Lens Bloom](https://www.motionin.design/gallery/lens-bloom) | Hero transformation and coordinated project transitions |
| [60fps](https://60fps.design/) | Selection states, responsive controls and mobile interaction feedback |
| [Landdding](https://landdding.com/c/portfolio), [Siteinspire](https://www.siteinspire.com/), Recent/Godly | Editorial composition, project hierarchy and typography |
| Modulify and Wonderlist | Layout exploration and section composition |
| Font In Logo and Iconly | Wordmark proportions and consistent icon treatment |
| Backgrounds Supply | Original, restrained atmospheric surfaces |
| [Footer Design](https://www.footer.design/) and [Rauno Freiberg](https://rauno.me/) | Contact composition and interaction feedback |

Godly's reviewed destination was Recent. On.design required authentication, so authenticated content is outside the reviewed material. Create original assets and retain licensed fonts/icons. No subscriptions or platform migration are required.

Apply Karpathy Guidelines alongside Ponytail throughout implementation:

- State assumptions and material tradeoffs before coding. Use the confirmed choices in this plan; raise only ambiguities that exploration cannot resolve.
- Reuse the existing layout, canonical content, build pipeline and checks. Use native HTML/CSS/DOM/SVG for controls and demonstrations; reserve GSAP for coordinated motion.
- Implement all confirmed interactions with the minimum necessary code. Add abstractions only when the homepage and case-study implementations actually share behavior.
- Keep changes within this redesign. Match existing conventions, preserve unrelated work, and remove only code or assets made obsolete by the redesign.
- Give each stage an observable success criterion, run the relevant checks, and fix failures before completing it. Add meaningful regression cases for demo calculations, navigation and asset delivery.
- Report tested behavior and remaining limitations accurately. Keep source-derived demonstrations, recorded execution evidence and current browser recordings distinguishable.

Defaults: retain the domain, Hostinger, static Node/esbuild delivery, fixed light appearance, direct contact links and analytics off. World stays retired. Production publication remains a separate action.

## 2. Identity and homepage

Use self-hosted Newsreader headings and Inter body text. Palette: ivory `#F7F5EF`, charcoal `#202A24`, forest `#244B3B`, secondary text `#5C655E`, sage `#E8EEE6`, dividers `#DADFD7`.

### Custom logo

- Draw an original uppercase AM monogram as SVG paths, using shared strokes and negative space while keeping both initials recognizable.
- Pair it with an optically adjusted Aarya Mody wordmark based on Newsreader, exported as vector outlines.
- Deliver horizontal and standalone versions, forest and reversed ivory treatments, SVG masters, an SVG favicon, 16/32/48px favicon exports and ICO, and a 180px Apple touch icon.
- Use the horizontal identity on desktop and in the footer; use the compact mark where mobile space requires it.
- Apply a restrained 180-220ms hover/focus highlight. Keep the complete mark visible throughout and disable decorative motion under reduced motion.
- Generate all logo variants, favicons and social-preview branding from one canonical source and bundled typography. Update the old text-based favicon generator.

### Homepage composition

| Area | Experience |
| --- | --- |
| Navigation | Sticky navigation, new logo, active-section indicator, reading progress, accessible mobile menu, motion preference, resume and contact |
| Introduction | Name, actual Data Analyst I title, analytics/engineering positioning, "From complex data to clear decisions," View my work and Download resume |
| Interactive hero | Synthetic records transform through source, validation, model and decision. Four labelled buttons select stages; desktop scrolling advances the composition. A manual selection holds until scrolling resumes. |
| Selected work | DriftDoctor, StockPulse, Sales Forecasting, then Video Game Sales Dashboard. Each chapter has a working preview, project context, case-study link and Try demo action. Desktop visuals stay beside their chapter during scrolling. |
| Experience | Animated chronological timeline; selecting a role reveals sourced responsibilities. Current employment starts open. |
| About and capabilities | Actual portrait with modest pointer depth; capability selection highlights supporting evidence. Education and development use accessible disclosures. |
| Archive | One expandable ten-project section with animated expansion, repository links, technologies and maturity qualifications |
| Contact | Forest closing section, reversed logo, prominent email, animated link feedback, copy success/failure messages, LinkedIn, GitHub, resume, availability and credits |

Mobile uses vertical chapters, tap controls, responsive diagrams and all four working previews. At 390x844, selected work begins within 1.5 viewport heights. Small or short screens use ordinary document flow for project chapters. Remove the search panel.

The ten archived projects remain SQL Practice Project, CompatForge, OriginKeep, DeepTrail, ContextHalo, JobPilot Local, Sentiment Analysis, Movie Recommendation System, Face Detection Attendance System, and Bingo Blog App. Preserve their existing maturity/provenance qualifications.

## 3. Project pages and evidence

Reuse each demonstration in compact homepage and expanded case-study modes. Together with the homepage, these routes form exactly five public pages.

| Route | Homepage preview | Expanded demonstration |
| --- | --- | --- |
| `/projects/driftdoctor/` | Select the current or historical dependency and inspect repair/escalation reasoning. | Incident, dependency selection, before/after SQL, recorded validation evidence and human-review handoff |
| `/projects/stockpulse/` | Change metrics and inspect quarter-over-quarter results. Default: synthetic Q2-versus-Q1 revenue +12.89%. | Three seeded periods, four metrics, reporting dates, source concepts, accessions and evidence identifiers |
| `/projects/sales-forecasting/` | Toggle RMSE/MAE and update the published ARIMA, ETS and baseline comparison. | Two chronological folds, 32 observed weeks, actual prices, last-value predictions and published model aggregates |
| `/projects/video-game-sales-dashboard/` | Filter the deterministic 30-game sample by platform and genre. | Add release-year/publisher filters, two-platform comparison, filtered table, CSV export, reset and empty states |

Accuracy requirements:

- Freeze fixtures with source revisions, attribution and checksums. Export the dashboard's existing seed-42 sample once; ordinary builds require Node only.
- Label every reconstructed interaction as a source-based portfolio demonstration. Identify original application captures separately.
- DriftDoctor shows recorded execution outcomes. Preserve the distinction between the twelve-case synthetic benchmark and the separate ambiguity example. Browser choices explain the documented rules; they do not execute dbt or a model.
- StockPulse retains its fictional DEMO banner. The earliest period shows an unavailable comparison; missing values and zero denominators must not produce invented percentages. These browser fixtures require no PostgreSQL service. The original application's PostgreSQL/migration/seeding workflow stays documented as a separate way to reproduce its full demo.
- Forecasting describes weekly median vehicle prices. ARIMA wins the reviewed RMSE comparison; ETS wins MAE. Plot observed values and reproducible last-value predictions; present ARIMA/ETS as published aggregates. Preserve the limited evaluation coverage and mean-fold RMSE interpretation.
- Game sales are cumulative lifetime sales grouped by release timing. Preserve missing critic scores; exported rows and totals must match the active filters.
- Preserve all project maturity, provenance and evaluation qualifications. Introduce no invented employment outcomes, credentials, testimonials or benchmark claims.

All portfolio demonstrations run in the browser without runtime APIs, databases, market credentials or AI keys.

Every case study follows overview and demo, problem, contribution, approach, evidence, limitations, and repository/contact actions. Include a consistent `#demo` destination, case-section navigation and a return to selected work. StockPulse replaces SQL Practice in selected work; SQL Practice remains in the archive.

## 4. Browser implementation and compatibility

- Retain the shared five-page layout and canonical content module. Share demonstration implementations between homepage and case studies.
- Use GSAP 3.15.0 with ScrollTrigger for coordinated sequences, DOM/SVG for demonstrations and CSS for control feedback. Use supported native cross-document View Transitions with ordinary navigation fallbacks.
- Keep one application bundle. Initialize sections near the viewport and embed only relevant fixtures on each page. Retain narrowly imported Lucide icons.
- Preserve native scrolling, visible keyboard focus, original resume bytes, project/section aliases, unrelated query parameters and Back/Forward behavior.
- Normalize legacy reading/World links once without history loops. Featured aliases reach case studies; archived aliases reveal their entries. Without JavaScript, aliases land on visible homepage content.
- Render complete content, readable figures/tables and the expanded archive in base HTML. Enhancement-only controls become visible when functional.
- Retain nested directory indexes and genuine unknown-path 404s. Add PNG/ICO support to the local server, Hostinger configuration, asset preparation, MIME verifier and regression fixtures.
- Retain manifest version 2 with final page/asset hashes and byte counts, case-only asset coverage, complete notices including GSAP, and version-1 rollback verification.
- Generate logo/social assets before dependent assets; resolve font/CSS references before parent hashes; rewrite page asset references before final HTML hashes. Update metadata, canonical URLs, social previews, structured data, sitemap, documentation and CI generated-file checks.

Motion and accessibility:

- Entrance sequence at most 900ms with essential content immediately available; controls 160-220ms; charts about 300ms; project transitions 350-450ms.
- Keep transitions interruptible and reversible. Limit fine-pointer depth to about 8px/2 degrees. Pause animation work off-screen and in hidden tabs.
- Provide System, Full and Reduced motion preferences. Default to System; persist explicit choices when storage is available. Storage failure leaves the page usable; system changes apply while System is selected.
- Reduced motion retains every control and result. Preserve focus during updates, announce meaningful results concisely and provide keyboard-accessible chart values.
- Recompose graphics for mobile width with readable labels. Preserve navigation, resume, source evidence and contact when scripts, fonts or images fail.

## 5. Execution checks, Brag and delivery

| Stage | Work | Verification before completion |
| --- | --- | --- |
| 1 | Preserve the current verified release; create and integrate the canonical logo. | Rollback bytes remain available; logo is clear at favicon/header sizes; variants derive from one source. |
| 2 | Build the interactive hero, first project chapter and DriftDoctor preview; share an early playable preview. | Four hero stages respond; dependency choices show correct reasoning; source qualifications remain visible; keyboard and reduced-motion behavior work. |
| 3 | Complete all four compact/expanded demos and project transitions. | Fixture calculations, unavailable comparisons, filtering, exports, resets, empty states and evidence labels pass meaningful checks. |
| 4 | Finish experience, capabilities, archive, contact, responsive behavior and accessibility. | Every interaction works at the target sizes with keyboard/touch, failed assets and disabled JavaScript fallbacks. |
| 5 | Update documentation, notices, captures, tests and release evidence; package the release. | Browser checks, Lighthouse, deterministic builds, byte/MIME verification and rollback checks pass. |

Acceptance criteria:

- Exactly five pages, four featured projects and ten archived projects. Zero requests for removed World resources.
- Test direct loading, refreshing, links, archive destinations, clipboard success/denial, original resume downloads, Back/Forward, interrupted transitions and resizing.
- Review 320/390/768/1440px, landscape, 200% zoom, keyboard, touch, reduced motion, disabled JavaScript and failed assets across Chromium, Firefox and WebKit. Distinguish browser-engine emulation from physical-device certification.
- Check contrast, headings, alternatives, chart labels and touch targets. Test logo clarity at 16/32/48px and header sizes, reversed use, mobile fit, accessible Home naming and a minimum 44px interactive target.
- Retain Lighthouse gates: performance at least 90; accessibility/best practices/SEO at least 95. Target at most 100KB compressed application JavaScript.
- Verify two successive builds produce identical release files. Package and byte-verify every page, resource, notice and the original resume.
- Retain regressions for missing pages, stale page/resource bytes, incorrect MIME, HTML returned as assets, explicit intended redirects and version-1 rollback references. Initial HTTP errors and unexpected route changes remain failures.
- Recheck the recorded browser-specific hosting HTTP 403 before publication. Local success does not establish remote hosting acceptance.

### Brag: optional presentation aid

The local Brag 0.5.0 plugin is present and enabled. It creates short launch videos with Hyperframes. Node 24.20.0 meets its requirement. FFmpeg was absent from PATH; required Hyperframes skills were not found; the CLI was not found in the repository or PATH. Full rendering readiness is unverified.

The user initially selected check plugin only, then permitted Brag if useful. Use it for a separate launch film only when that adds value after functional acceptance. Keep Brag/Hyperframes outside the website runtime and avoid installing video tooling without a concrete video task. Required review recordings show actual browser interactions. Record whether the optional workflow was used and its verified readiness.

Deliver the logo export set, desktop/mobile screenshots and browser interaction recordings, updated documentation, and a verified Hostinger ZIP with rollback evidence. Keep production publication separate.

Record implementation evidence and remaining limitations in `docs/redesign-verification.md`; keep primary source and qualification records in `docs/content-sources.md`.
