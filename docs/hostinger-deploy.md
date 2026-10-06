# Local preview and Hostinger deployment

This is a static HTML/CSS/JavaScript portfolio. Hostinger serves the files directly; there is no backend or required environment variable. A local preparation command copies assets to content-versioned filenames to prevent stale cached CSS or JavaScript from breaking a new page.

## Review locally

1. Use Node.js 24 LTS and run `npm ci` if quality-check dependencies are not installed. See the repository README for the GitHub CI workflow and command reference.
2. Install browser engines once with `npx playwright install --with-deps chrome firefox webkit`. Tests use Google Chrome by default; CI sets `PLAYWRIGHT_CHROMIUM_CHANNEL=chromium` and installs Playwright's bundled Chromium instead.
3. Run `npm run serve` and open http://127.0.0.1:4173. The command prepares asset filenames before starting the preview. It negotiates gzip for text/fonts; the published Hostinger/CDN bundle was observed using Brotli. After editing CSS, JavaScript, or images while it is running, run `npm run build` and refresh.
4. Run `npm test` for Chrome desktop / Android emulation, WebKit desktop / iPhone / iPad emulation, and Firefox checks. This includes accessibility, responsive layouts, destination travel, orbit/reset, panels and history, orientation changes, reduced motion, absent/delayed scripts, metadata, and resume integrity. Run `npm run test:release` to check rejection of stale deployment assets.
5. Run `npm run preview:capture` to capture four viewport sizes without changing source images. Use `-- --refresh-social` to update only the reading social card, or `-- --refresh-assets` only to intentionally regenerate posters/social images against localhost; rebuild afterward. `npm run compatibility:capture` captures phone and tablet world/panel states and desktop engines.
6. Use a unique `PORTFOLIO_REPORTS_DIR` inside `reports/local/` and inspect its `preview/` and `compatibility/` folders; the default is a dated run folder. For intentional visual changes, run `npm run test:update -- --project=desktop --project=mobile --grep "visual baseline"`, review the baselines, then run `npm test`.
7. Stop the preview, then run `npm run audit:preview` for a dedicated server and release preflight. It retains three mobile and desktop samples for each of default reading and explicit World. Target at least 90 Performance and 95 Accessibility, Best Practices, and SEO. These are local lab checks; physical iOS/Android devices require a separate live review.

The content-source record is `docs/content-sources.md`. The supplied resume is preserved byte for byte and its expected hash is covered by the download test.

## Prepare the upload package

On Windows with PowerShell 7, run:

```powershell
pwsh -File scripts/package-hostinger.ps1
```

The script creates `output/portfolio-hostinger.zip` and verifies that it contains only:

- Every HTML page registered in `site-pages.json`: `index.html` and the three case studies under `projects/`
- `site-pages.json`
- `.htaccess` (GLB/HDR/font MIME mappings, optional text/font compression and cache directives)
- `robots.txt`
- `sitemap.xml`
- Only required hashed runtime files, manifest, resume and legal notices under `assets/`

It first rejects stale generated asset references, then checks every packaged file against its source hash, including all registered pages and the unchanged resume. Development tools, tests, reports, documentation, backups, and private workspace folders are not packaged. Keep the locally bundled runtime assets, manifest, models, fonts, lighting maps and notices; upload every generated name referenced by the registered pages.

## Publish when ready

The October 3 reading-first release is the published predecessor, with recorded runtime fingerprint `ea07471665862669e410828b14192a5cff1ad525a8383c3b1a62e2fa576efc31`. The cobalt redesign and case studies in PR #12 have not been deployed. PR #12 is stacked on PR #11; review and merge the predecessor first, then retarget the redesign to the production branch and check its final revision before packaging. CI packages immutable asset names, registered pages, and transitive resources without changing hosting.

1. Back up the current Hostinger `public_html` contents using hPanel.
2. Open Websites > Manage > Files > File Manager > `public_html`.
3. Upload and extract the ZIP so `index.html` sits directly in `public_html`, alongside `projects/`, `site-pages.json`, `.htaccess`, `robots.txt`, `sitemap.xml`, and `assets/`. Show hidden files in hPanel and merge these rules with any existing host configuration.
4. Replace all corresponding files, including the entire packaged `assets/` content and every case-study page. If uploading individual files, upload assets first, then case studies and metadata, and `index.html` last. Do not upload only HTML/CSS or omit filenames containing hashes.
5. Clear Hostinger's site/CDN cache after the replacement so the updated HTML is served. If Cloudflare is configured, purge its cache too. New asset filenames avoid the previous seven-day cached responses.
6. Set `PORTFOLIO_BASE_URL=https://aaryamody.app/` and run `npm run verify:live` to verify every registered page, current content/metadata, asset references, MIME types, and the exact bytes of all referenced and transitive resources (including the resume, models, fonts, environment, manifest and legal notices), plus the page registry, robots.txt and sitemap.xml. A successful page load or a 200 response alone is insufficient. For the local preview use `node scripts/verify-live.mjs http://127.0.0.1:4173/`.
7. Run `npm run navigation:check` to record cold HTTP statuses and route preservation. Repeat the full browser suite and link check against the live origin in a fresh `PORTFOLIO_REPORTS_DIR`, review desktop/mobile pages, resume download and social preview, then rerun Lighthouse. Keep the rollback assets until acceptance passes.
8. If Lighthouse returns 403, retain timestamps and `x-hcdn-request-id` values from successful preflight requests and inspect hosting/CDN blocked-request logs. Do not disable security broadly; apply only a confirmed, narrowly justified correction. Hosting log access is required to identify the rule.

The predecessor's October 3 audit passed HTML, all 18 asset hashes, GLB/HDR MIME types, canonical redirects, Twitter metadata, exact social-image bytes and the original resume. Those results describe that release; they do not verify the cobalt redesign on the live host. Seven completed live profiles pass the UI checks, assembled after a DNS-interrupted run and rerun. Some engine-default cold requests return HTTP 403 while standard en-US test contexts pass; request logs are unavailable, so the blocking rule and live Lighthouse acceptance remain open. See [current verification](aaryas-world-verification.md) and the [request-ID investigation packet](../reports/live/published-20261003T073708/hosting-issue.json). Do not treat a challenge followed by a homepage as a successful route. For physical-device acceptance, confirm on the reported iPhone 15 Pro / iOS 27: reload the page, select destinations, drag/orbit and reset, open/close panels, rotate, switch to reading view and download the resume. Repeat on Android. Browser-engine emulation cannot certify a specific physical OS build or its browser toolbar behavior.

## Host configuration

The ZIP includes explicit `.glb`, `.hdr` and `.ttf` MIME mappings. Confirm response headers after upload. `no-transform` requests that image bytes remain unchanged, but Hostinger CDN image optimization is managed separately in hPanel and may override this intent. If the social image still differs, inspect the origin/CDN image-processing settings, apply the smallest available exception or correction for this asset, and purge its cache. Preserve strict hash checks for scripts, models, fonts and the resume.

References: [Hostinger MIME instructions](https://www.hostinger.com/support/1583371-how-to-add-file-extension-to-mime-types-at-hostinger/), [Hostinger CDN optimization](https://www.hostinger.com/support/7935917-hostinger-cdn-website-optimization/). This task does not change the public host configuration.

## Analytics for this release

The inactive analytics loader was removed. No secret keys belong in this static site.

## Backup

The verified [recovery archive](../archive/recovery-20261002.zip) preserves the initial uncommitted source, previous source backup, complete published rollback, retired tools, unused Python environment, old agent references and selected historical JSON/log evidence. Its [inventory](../archive/recovery-inventory.json) records checksums and actual removals. These local files are ignored and are not fresh-clone prerequisites. Git history remains intact.
