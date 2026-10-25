# Local preview and Hostinger deployment

This portfolio ships five static pages with browser-local interactive demonstrations, shared versioned assets, the original resume, font/icon/GSAP notices, logo exports, robots.txt and a sitemap. There is no application server in production.

## Local review

Use Node.js 24, run `npm ci`, then `npm run serve`. Open http://127.0.0.1:4173/. Rebuild and refresh after source edits. All four `/projects/<slug>/` directories must load directly as well as through homepage links. Unknown routes return 404.

Run repository/release/browser checks and `npm run build:check`. Run `npm run preview:capture` for the five pages at four widths. Run `npm run audit:preview` after stopping any existing server on port 4173; it owns a dedicated preview and enforces median Lighthouse scores of 90 Performance and 95 Accessibility, Best Practices and SEO, using three samples per page/device pair. For an already running preview, `npm run audit` uses its configured target.

Use unique `PORTFOLIO_REPORTS_DIR` paths within `reports/`. Reports from a targeted run do not replace full-suite evidence. Browser/device emulation is not physical hardware certification. The narrow viewport check approximates zoom layout; actual browser toolbar zoom is recorded separately when available.

## Build and package

Run `npm run build`, `npm run check`, `npm run test:release`, `npm run test:ci`, and `npm run package:hostinger` using PowerShell 7. The package is `output/portfolio-hostinger.zip`.

Manifest version 2 lists every generated HTML page plus the hashed runtime assets. The packager verifies the page/asset manifest, rejects unsafe/duplicate paths, compares each ZIP entry with its source bytes, and atomically replaces the completed package. It excludes development code, reports, credentials, backups and source media not needed at runtime.

The ZIP contains the homepage, four case-study directory indexes, `.htaccess`, robots.txt, sitemap.xml, the manifest, resume, bundled icon notice and the referenced font/image/CSS/JS/license files. No World resources are included.

The previous `/projects/driftdoctor.html`, `/projects/stockpulse.html` and `/projects/sales-forecasting.html` paths redirect to their directory routes. `/projects/sql-analytics.html` and `/projects/sql-practice/` redirect to the SQL archive entry. Verify these HTTP 301 responses, including retained query parameters, when accepting the Apache deployment.

## Production upload, when explicitly requested

1. Back up the complete current `public_html` release. Keep the previous HTML, manifest and all its matching assets together.
2. Upload/extract the new package so `index.html`, `projects/`, `assets/`, `.htaccess`, robots.txt and sitemap.xml sit directly in `public_html`. Preserve hidden files.
3. Upload assets before switching HTML. Upload all five HTML pages and then the manifest; avoid a partial mixed release. Merge `.htaccess` with existing host rules where necessary.
4. Clear the host/CDN HTML cache. Confirm WOFF2 is `font/woff2`, PNG is `image/png`, ICO is `image/vnd.microsoft.icon` (or the accepted `image/x-icon` equivalent), every case-study directory serves its index, and unknown paths remain 404s.
5. Set `PORTFOLIO_BASE_URL=https://aaryamody.app/` and run `npm run verify:live`, `npm run navigation:check`, the browser suite, link check and Lighthouse with fresh report directories.
6. Keep rollback until all public acceptance passes. If cold browser navigation returns 403, retain timestamps and request IDs and investigate the matching hosting/CDN logs. A later redirect to a working homepage must not turn an initial failure into a pass. Do not broadly disable protections.

Verification compares response status, destination, MIME and the exact bytes of all five pages and resources. A 200 HTML error body returned for a script or case study fails verification. Configure `PORTFOLIO_REFERENCE_DIR` to an extracted previous release to verify a rollback; the verifier supports historical manifest version 1 without requiring current source files.

The historical 403 issue is configuration-dependent and remains a production acceptance concern until fresh browser evidence closes it. A local pass does not close that issue. No hosting settings are changed by development, CI or packaging.

## Rollback

Two matching releases are preserved locally: `archive/portfolio-before-editorial-20261024.zip` holds the original World runtime with manifest version 1; `archive/portfolio-before-interactive-20261024.zip` holds the verified editorial runtime with manifest version 2. Archives are ignored and not needed by fresh clones or normal builds. Packaging reports include every entry and SHA-256 checksums. Restore an entire matching release rather than mixing versions.
