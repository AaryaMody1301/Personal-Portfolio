# Portfolio design review

Historical review of the graphite and orange design. The [dark technical redesign](dark-technical-redesign.md) replaces this layout; its verification scope applies to the current implementation.

Reviewed 9 October 2026. Audience: hiring managers assessing Aarya Mody for data analytics and analytics engineering work.

## Hiring perspective

The homepage should establish the role, current experience, strongest relevant work, and a way to continue the conversation. The case studies should explain the problem, Aarya's contribution, a decision, the evidence, and its limits. This is an editorial judgment adapted to a data portfolio; it is not a prediction of hiring outcomes.

The previous design repeated the selected-project evidence in the hero and gave three projects identical visual priority. The redesign replaces that repetition with the supplied portrait, makes SQL the leading feature, and separates professional experience from personal-project evidence.

## References and decisions

| Reference reviewed | Useful lesson | Application |
| --- | --- | --- |
| [Brittany Chiang](https://brittanychiang.com/) | A clear role and specific experience make a portfolio easy to orient in. | Exact current title and employer, dated experience, clear work and resume navigation. |
| [Rauno Freiberg](https://rauno.me/) | A distinctive composition can communicate personality. | Syne display typography, a restrained orange accent, and the authentic portrait. The navigation remains conventional for this audience. |
| [Emil Kowalski](https://emilkowal.ski/) | A small, deliberate set of projects is easier to assess. | Three selected cases lead; eleven other projects remain searchable in the archive. |
| [Julia Silge](https://juliasilge.com/) | Technical work benefits from a clear identity and useful explanation. | Plain-language introductions, readable evidence pages, and accessible data charts. |
| [Nielsen Norman Group: UX portfolios](https://www.nngroup.com/articles/ux-design-portfolios/) | Scannability, individual contribution, reasoning, constraints, and results matter to portfolio readers. | Outcome / decision / limit summaries, direct evidence shortcuts, source revisions, and explicit personal-project roles. This UX research informs the structure; it is not evidence about data-analyst hiring rates. |

## Visual system

The homepage uses graphite `#111318`, off-white text `#F4F5F7`, and orange `#FFAC7D`. Detailed case studies use a white reading canvas and a darker orange `#A33D1B` for links. Syne is already bundled locally; system fonts carry body text. No new dependency or externally loaded font is required.

The visual hierarchy changes as well as the palette: a portrait-led introduction, one full-width SQL feature, two supporting cases, dated professional experience, a compact archive, and a clear contact section. Native disclosures preserve access to all fourteen projects. The three case pages remain usable without JavaScript.

## Tools researched

| Tool / reference | Use for this portfolio |
| --- | --- |
| [Figma color combinations](https://www.figma.com/resource-library/color-combinations/) and [Coolors](https://coolors.co/) | Palette exploration and comparison; no account or paid tool was added. |
| [Typescale](https://typescale.com/) | Reference for responsive type hierarchy, body size, line height, and display scale. |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) and [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Contrast thresholds and manual checks for SVG chart text. |
| [Stark](https://www.getstark.co/for-designers/) | A useful ongoing design-review option for contrast and typography; it was researched, not installed. |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) | A future performance / accessibility / SEO audit option. No new Lighthouse score is claimed for this redesign. |
| Existing axe-core dependency | Ran accessibility checks in the managed browser on all four pages. |

## Verification

- Build and content-versioned asset checks pass. The seven release tests pass.
- Desktop review covers the homepage, selected work, professional experience, contact, and all three case studies.
- Phone-sized viewports at 320px and 390px cover navigation, selected work, archive search, empty state, reset, and case-study reading. Tables and full diagrams scroll within their own regions.
- Enlarged-text review at 200% and 320px found overflow in skills and case content. The fixes were verified: document width and scroll width both measure 305 CSS pixels in the scrollbar-bearing frames.
- Axe reports zero automated WCAG 2 A/AA and WCAG 2.1 A/AA violations across the homepage and three case pages. SVG text requires manual contrast review; those items were not treated as automated passes.
- Manually calculated contrast ratios: primary homepage text 17.03:1; muted text on cards 8.91:1; homepage accent 10.13:1; case body text 7.58:1; case links 6.48:1; contact text 9.21:1; preview chart labels 9.17:1. These color checks do not establish whole-site WCAG conformance.
- Project-link copying now uses the published Site's canonical address. Email and project copying both expose usable manual-copy feedback when clipboard access is unavailable.
- The resume is unchanged, with SHA-256 `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`. Browser download-event capture did not complete, so an end-to-end download pass is not claimed.
- The managed browser lacks WebGL2. The optional World's reading fallback was verified; GPU rendering and the full multi-engine Playwright suite were not verified for this version.

Professional and project claims remain grounded in [content-sources.md](content-sources.md). Project benchmarks were not rerun as part of the visual redesign.
