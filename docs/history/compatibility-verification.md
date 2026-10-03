> Historical results, not current release acceptance. Original source, JSON results and logs are in the local recovery archive; superseded generated images and report payloads were discarded. See [current verification](../aaryas-world-verification.md).

# Mobile compatibility audit — September 20, 2026

Historical verification record. Package hashes and byte counts below describe the September 20 artifact. Regenerate the current upload with `npm run package:hostinger`; repository preparation and later checks are recorded in [repository-readiness.md](repository-readiness.md).

The reported devices were an iPhone 15 Pro with iOS 27 and Android, where the header should hide while scrolling down. Changes are implemented and verified locally at http://127.0.0.1:4173/. This task did not publish to Hostinger.

## Confirmed problems and fixes

1. **Mixed public assets.** A fresh direct fetch of aaryamody.app returned the redesigned September 19 HTML/CSS but an old `assets/js/main.js` response with `Last-Modified: Sat, 27 Jun 2026 05:58:55 GMT` and `Cache-Control: public, max-age=604800`. That script uses different menu classes and never unhides the new toggle. Replaying those exact public files in WebKit and Chrome reproduced an invisible menu button and inert navigation links. The body itself remained visible in this reproduction; a completely blank screen on the reported physical iPhone was not reproduced.
2. **Cache-safe releases.** HTML now references content-versioned CSS, JavaScript, favicon, portrait, and social-preview filenames. `npm run assets:prepare` regenerates those copies from editable sources. The resume remains at its original URL with identical bytes. Package preparation rejects stale generated assets. Live verification now checks all referenced asset hashes and MIME types, plus HTML references, robots.txt, and sitemap.xml; it no longer accepts the mixed deployment just because the title and PDF match.
3. **Scrolling header.** The header hides after downward travel and returns on upward travel, near the page top, or on keyboard navigation. It stays visible while the menu is open or a keyboard user is interacting with it. iOS rubber-band overscroll is clamped before determining direction.
4. **Mobile menu geometry.** The dropdown overlays the page without moving its contents. It scrolls within short landscape viewports using a dynamic viewport height with a `vh` fallback. Safe-area insets protect controls from screen cutouts. Menu and resume controls have at least 44-pixel heights. Escape restores focus; selecting a section closes the menu and focuses its content; selecting Resume closes the menu.
5. **Rendering resilience.** Main JavaScript is deferred, so slow or blocked script downloads cannot hold the entire main page behind a parser-blocking script. Native navigation, content, and project disclosures remain usable without JavaScript. The mobile fallback uses a horizontally scrollable row with native link focus, keeping the header height stable when enhancement arrives. Media-query listeners support the older Safari listener API, and observer APIs are optional.
6. **Enlarged text.** The audit reproduced horizontal overflow at 200% text size. Long text now wraps within the layout. Normal typography and spacing remain intact.

## Verification results

- **118 behavioral, responsive, accessibility, and asset checks passed**, zero failures; 22 intentional skips avoid applying touch-only cases to desktop projects or repeating width sweeps for every device profile.
- **2 desktop/mobile visual baseline checks passed** after reviewing captures. The existing approved full-page baselines remain within the configured visual tolerance. After refining the fallback row, all 14 no-JavaScript/delayed-script cases and both baselines passed again. Every fallback destination was additionally checked on all seven configurations with reduced motion, avoiding a test race between sequential clicks and native smooth anchor scrolling; all seven passed.
- Engines/configurations: Chrome 153 desktop and Pixel 5 emulation; WebKit 26.5 desktop, iPhone 15 Pro, iPhone SE, and iPad Mini emulation; Firefox 151 desktop.
- Widths **320, 390, 768, 1440** tested with open project disclosures on all three engines. Short landscape menus tested at **667×320**, followed by **932×430** and **390×844** orientation/breakpoint transitions. No horizontal overflow in these checks.
- Header direction, keyboard access, mobile tap interactions, outside dismissal, Escape, downloads, local/legacy anchors, 200% text, simulated nonzero safe-area insets, reduced motion, disabled/delayed JavaScript, missing observer APIs, and media listener fallback passed.
- Axe checks with disclosures open and with mobile navigation open found **no automated WCAG A/AA violations**. This is not a complete manual assistive-technology certification.
- No console/runtime errors in six additional browser screenshot sessions; portrait decoding succeeded on every engine. Normal page tests found no failed HTTP assets.
- All **14 project repository links plus the GitHub profile** returned HTTP 200. Contact URI destinations match the source record.
- Deployment verification regression test passed: a matching fixture is accepted; stale JS bytes, a 200 HTML error page served as JS, and obsolete HTML asset references are rejected.
- Local deployment verification passed for HTML, eight referenced asset hashes, robots.txt, and sitemap.xml. Public verification correctly failed because this release has not been uploaded.
- Final Lighthouse mobile simulation: **99 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**, no run warnings and **0 cumulative layout shift**. These are local lab measurements, not production field measurements.
- Hostinger ZIP: **18 files**, all matching source bytes, containing only `index.html`, `robots.txt`, `sitemap.xml`, and `assets/`. ZIP size: **664,783 bytes**; SHA-256: `7c7bf4ccb723b684d9eb3c181e470926ebf9f48b50b6f4180a43aab6c850c8f4`.
- Resume SHA-256 unchanged: `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`.

## Limits and delivery

WebKit on Windows with an iPhone device profile is engine/viewport emulation, not a physical iPhone or iOS 27 installation. It does not reproduce the actual browser toolbar, hardware notch, VoiceOver, OS download UI, or a device's existing cache. Nonzero safe areas were exercised separately through the CSS variables. WebKit's Windows port skips native links in its default Tab navigation; its skip-link test verifies explicit focus and keyboard activation, while Chrome and Firefox additionally verify initial Tab order. Safari's keyboard-access setting is described by [Apple](https://support.apple.com/en-hk/guide/safari/cpsh003/mac); safe-area behavior is documented by [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env).

The full blank-screen symptom on the reported iPhone remains unconfirmed. The deterministic mixed-asset defect and parser-blocking loading behavior have been addressed. After uploading this complete package and clearing the host's HTML cache, check the actual iPhone 15 Pro/iOS 27 and Android device using the steps in [hostinger-deploy.md](../hostinger-deploy.md).

## Evidence and commands

- Full cross-browser results: `reports/playwright-cross-browser/index.html`
- Latest focused regression results: `reports/playwright/index.html`; approved visual baselines: `tests/portfolio.spec.js-snapshots/`
- Before/after captures, copied public files, engine versions, link status: `reports/compatibility/`
- Four-width captures and individual project/contact sections: `reports/preview/`
- Lighthouse: `reports/lighthouse.report.html` and `.json`
- Upload artifact: `output/portfolio-hostinger.zip`

Run `npm test`, `npm run test:release`, `npm run compatibility:capture`, and `npm run audit` to repeat the checks. Firefox required running outside this Windows sandbox to launch correctly. See [hostinger-deploy.md](../hostinger-deploy.md) for preparation and upload instructions.
