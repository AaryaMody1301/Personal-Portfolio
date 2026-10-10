> Historical results, not current release acceptance. Original source, JSON results and logs are in the local recovery archive; superseded generated images and report payloads were discarded. See [current verification](../aaryas-world-verification.md).

# Editorial redesign verification

Historical September 19 baseline. The current September 20 release, mobile fixes, cross-browser results, Lighthouse scores, and package hash are documented in [compatibility-verification.md](compatibility-verification.md).

Verified 2026-09-19 against http://127.0.0.1:4173/.

- Full Playwright suite: **23 passed**, with 5 intentional project-specific skips (mobile-only navigation and duplicate viewport cases). Desktop and Pixel 5 visual baselines passed after review.
- Responsive layouts inspected at 320, 390, 768, and 1440 pixels, including open project disclosures. No horizontal overflow.
- Keyboard navigation, skip link, mobile menu, Escape focus restoration, legacy anchors, contact destinations, native disclosures, reduced motion, and JavaScript-disabled behavior passed.
- No runtime errors or failed page assets in the browser checks.
- Automated WCAG A / AA checks passed with project disclosures open.
- Final Lighthouse mobile simulation: **100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**. No run warnings. Cumulative layout shift: 0.000662. Scores are local lab results, not production field measurements.
- Reviewed the desktop/mobile full-page baselines, hero at all four widths, project diagrams, contact layout, and the 1200x630 social preview.
- Supplied resume unchanged: SHA-256 `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`.
- Hostinger ZIP: all **11 files** match the final source bytes. Only the three root site files and assets are included.
- ZIP SHA-256: `3e5ead06a63ff89566fdf3cf50d53dd432e45eb0928257ea6fea1ea481af1046`.

## Evidence

- `reports/playwright/index.html`
- `reports/lighthouse.report.html` and `reports/lighthouse.report.json`
- `reports/preview/`
- `tests/portfolio.spec.js-snapshots/`
- `output/portfolio-hostinger.zip`
- `docs/content-sources.md`

Lighthouse uses Playwright to manage its temporary Chrome process, avoiding the Windows cleanup error encountered with Lighthouse's CLI launcher. No dependency changes were needed.

Production has not been changed. Run `npm run verify:live` only after publishing to validate the redesigned content, canonical URL, and live resume bytes.
