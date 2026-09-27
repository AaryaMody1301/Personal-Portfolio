# Local preview and Hostinger deployment

This is a static HTML/CSS/JavaScript portfolio. Hostinger serves the files directly; there is no backend or required environment variable. A local preparation command copies assets to content-versioned filenames to prevent stale cached CSS or JavaScript from breaking a new page.

## Review locally

1. Use Node.js 24 LTS and run `npm ci` if quality-check dependencies are not installed. See the repository README for the GitHub CI workflow and command reference.
2. Install browser engines once with `npx playwright install --with-deps chrome firefox webkit`. Tests use Google Chrome by default; CI sets `PLAYWRIGHT_CHROMIUM_CHANNEL=chromium` and installs Playwright's bundled Chromium instead.
3. Run `npm run serve` and open http://127.0.0.1:4173. The command prepares asset filenames before starting the preview. After editing CSS, JavaScript, or images while it is running, run `npm run assets:prepare` and refresh.
4. Run `npm test` for Chrome desktop / Android emulation, WebKit desktop / iPhone / iPad emulation, and Firefox checks. This includes accessibility, responsive layouts, menu scrolling, orientation changes, reduced motion, absent/delayed scripts, metadata, and resume integrity. Run `npm run test:release` to check rejection of stale deployment assets.
5. Run `npm run preview:capture` to capture four viewport sizes and regenerate the social preview. Then run `npm run assets:prepare` to update its content-versioned URL. `npm run compatibility:capture` captures phone and tablet menu/scroll states and desktop engines.
6. Inspect `reports/preview/` and `reports/compatibility/`. For intentional visual changes, run `npm run test:update -- --project=desktop --project=mobile --grep "visual baseline"`, review the baselines, then run `npm test`.
7. Run `npm run audit` while the server is running. Target at least 90 Performance and 95 Accessibility, Best Practices, and SEO. These are local lab checks; physical iOS/Android devices require a separate live review.

The content-source record is `docs/content-sources.md`. The supplied resume is preserved byte for byte and its expected hash is covered by the download test.

## Prepare the upload package

On Windows with PowerShell 7, run:

```powershell
pwsh -File scripts/package-hostinger.ps1
```

The script creates `output/portfolio-hostinger.zip` and verifies that it contains only:

- `index.html`
- `robots.txt`
- `sitemap.xml`
- `assets/`

It first rejects stale generated asset references, then checks every packaged file against its source hash, including the unchanged resume. Development tools, tests, reports, documentation, backups, and private workspace folders are not packaged. Keep the editable `style.css` and `main.js` sources; the generated names referenced in `index.html` must also be uploaded.

## Publish when ready

The September 20 compatibility fixes are prepared for local review and have not been published by this task. The public site was observed serving the September 19 HTML/CSS alongside June 27 JavaScript, which breaks the mobile navigation. The replacement package avoids those cached URLs.

1. Back up the current Hostinger `public_html` contents using hPanel.
2. Open Websites > Manage > Files > File Manager > `public_html`.
3. Upload and extract the ZIP so `index.html` sits directly in `public_html`, alongside `robots.txt`, `sitemap.xml`, and `assets/`.
4. Replace all corresponding files, including the entire packaged `assets/` content. If uploading individual files, upload assets first and `index.html` last. Do not upload only HTML/CSS or omit filenames containing hashes.
5. Clear Hostinger's site/CDN cache after the replacement so the updated HTML is served. If Cloudflare is configured, purge its cache too. New asset filenames avoid the previous seven-day cached responses.
6. Run `npm run verify:live` to verify current content/metadata, asset references, MIME types, and the exact bytes of all eight referenced assets (including the resume), plus robots.txt and sitemap.xml. A successful page load or a 200 response alone is insufficient. For the local preview use `node scripts/verify-live.mjs http://127.0.0.1:4173/`.
7. Review the live desktop/mobile page, resume download, and social preview. Run PageSpeed Insights and request updated indexing in Google Search Console if needed.

A live verification failure before publishing is expected. After uploading, confirm on the reported iPhone 15 Pro / iOS 27: reload the page, open/close Menu, scroll down/up, rotate, open each project disclosure, and download the resume. Repeat the scroll/menu check on Android. Browser-engine emulation cannot certify a specific physical OS build or its browser toolbar behavior.

## Optional analytics

Cloudflare Web Analytics remains disabled while `data-cf-analytics-token` is empty on the opening HTML element. A public site token enables the existing beacon. No secret keys belong in this static site.

## Backup

On the original development machine, pre-redesign files are preserved in `archive/backups/pre-editorial-20260919-portfolio/`. That local backup directory is ignored and is not part of a fresh Git clone. Earlier repository versions remain available through Git history.
