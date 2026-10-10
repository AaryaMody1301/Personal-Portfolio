# Aarya's World - issue ledger

Updated October 3, 2026 for the reading-first UI release. [Current verification](aaryas-world-verification.md) is the sole authority for counts, checksums and acceptance. Prior World-only evidence remains historical. The user-published reading-first release now matches the current build; the seven completed live browser profiles pass their UI checks; cold navigation/Lighthouse acceptance remains open.

| Issue | Local status | Published status / remaining work |
| --- | --- | --- |
| Read portfolio leaves a frozen scene/poster/instructions | Fixed: reading hides the complete stage; default visits load no World assets | Published; tested live interactions/layouts pass |
| Close icon is below center | Fixed: 44px control, 20px block SVG, fixed header and separately scrolling body; geometry regression <=1px | Published; tested live interactions/layouts pass |
| World link does not change mode | Fixed: explicit World mode, URL/history and legacy island mapping | Published; tested live interactions/layouts pass |
| Tiny crowded phone navigation | Fixed: native menu below 960px, 44px targets, readable labels | Published; tested live interactions/layouts pass |
| Sparse project cards and poor discovery | Fixed: four selected projects, purposes/tools/qualifications, search/categories/counts/empty/reset | Published; tested live interactions/layouts pass |
| Current-role badge runs into location | Fixed: separate career metadata and pill; actual titles retained | Published; tested live interactions/layouts pass |
| Copy actions fail without clipboard permission | Fixed: live feedback and selectable-text fallback; no contact messages sent | Published; tested live interactions/layouts pass |
| Resize while hidden / repeated mode changes lose state | Fixed: zero-size guard, layout refresh, camera/sample/history/reading restoration | Published; tested live interactions/layouts pass |
| Destination label intercepts island clicks | Fixed: decorative indicator ignores pointer events | Published; tested live interactions/layouts pass |
| Search startup shifts project cards | Fixed: reserve the enhanced form layout before loading; absent without JS | Published; tested live interactions/layouts pass |
| Explicit World poster / scene startup delays paint | Fixed: conditional poster preload and paint before 3D compilation; compressed local transfers mirror deployed compression | Published; startup/interaction checks pass; live Lighthouse remains blocked by 403 |
| Main bundle failure leaves World markup | Fixed: load-error restores the complete native reading document | Published; tested live interactions/layouts pass |
| Landscape status copy overlaps the main action | Fixed: extra status copy hidden in short layouts; dedicated regression | Published; tested live interactions/layouts pass |
| Clipped project-card keyboard focus | Fixed: inset copper outline stays inside rounded cards; nested disclosure selectors scoped | Published; tested live interactions/layouts pass |
| Repeated WebKit visits exhaust GPU contexts | Permanent departure explicitly releases the GPU; cached Back/Forward pauses/resumes. Successful tests navigate away before closing contexts. One worker avoids concurrent GPU workloads; earlier failed evidence is retained | Final acceptance and physical-device limits are in the verification report |
| Rollback verification assumes the new title | Tooling fixed: title is taken from the selected reference; alternate-title regression passes | Prior published bytes verified against saved rollback |
| Delayed-import test deadlocks on WebKit load event | Tooling fixed: deliberately delayed navigation waits for DOM readiness | Final browser report identifies accepted rerun; earlier failures retained |
| GLB/HDR MIME, www redirect, Twitter metadata, social-image bytes | Prepared rules retained | Resolved on current published reading-first release; exact live bytes and headers verified October 3 |
| Cold automated browser navigation gets HTTP 403 | New checks record initial status plus requested/settled route and fail challenges | OPEN: five engine-default cold routes and four Lighthouse attempts receive 403; standard en-US contexts pass. Language alone is not proven causal. Request-ID packet prepared; hosting/CDN logs unavailable |
| Live full run interrupted by DNS resolution errors | Ten navigations failed before page load; retained raw evidence | Completed four profiles retained; all cases of remaining three profiles rerun successfully. Combined 233 passes / 33 documented skips; not one uninterrupted run |
| Obsolete live-only sample-sync skip | Removed from audit tests after publication | All seven profiles exercise reading-to-World sample synchronization; runtime unchanged |
| Screenshot capture selector mismatch | One-off audit script used incorrect selector; corrected to actual #close-panel | All 36 final images captured/reviewed; 18 close-center probes show 0px deviation. Earlier audit error retained |
| Physical devices / manual screen-reader / Linux CI | Automated browser engines and emulation only | OPEN until performed |
| LinkedIn / Uiverse links | Syntax/destination preserved | Block automation (999 / 403), not certified working |

Ponytail's [audit guidance](https://raw.githubusercontent.com/DietrichGebert/ponytail/main/skills/ponytail-audit/SKILL.md) was previously applied manually to unnecessary complexity. No global plugin or hooks were installed. Its correctness/performance exclusions were respected; those checks use normal review and tests.

The earlier maximum cleanup removed two direct dependencies and 14 installed packages, consolidated asset/style preparation and removed obsolete scripts/environments. Its verified recovery ZIP and per-entry inventory remain in `archive/`; no transitive packages or global caches were manually pruned. The October 3 report consolidation deleted 877 inventoried files (973,915,132 bytes), retaining 93 selected evidence copies (7,626,406 bytes). Its net payload reduction is 966,288,726 bytes; this excludes new report growth and temporary exports. A second consolidation deleted 2,888 superseded run files (344,711,296 bytes), retaining 88 selected evidence copies (35,085,292 bytes), for another 309,626,004 bytes reclaimed. The local accepted suite has 233 passes, 33 documented skips and zero failures. The live combined completed-profile coverage also has 233 passes / 33 documented skips after a DNS interruption and rerun; raw errors and scope are identified in the verification report. Temporary clean-build exports are removed after byte verification. Source/hash asset pairs, local dependencies, current evidence and Git history remain intentional.

The user has published the verified upload ZIP. Live byte/header, interaction and screenshot checks pass in the documented test contexts. Configuration-dependent cold 403 responses still block live Lighthouse acceptance. Preserve rollback assets until live acceptance completes. Physical-device and hosting-log checks remain open.

GitHub delivery cleanup removed six checksum-identical, unreferenced report duplicates / 127,404 bytes after verifying retained copies and workspace paths. Current evidence and recovery remain intact. The local removal inventory is `reports/local/github-delivery-20261003/cleanup.json`. A compact [release evidence summary](release-evidence.json) is committed so GitHub readers can review the audit without downloading local report trees.
