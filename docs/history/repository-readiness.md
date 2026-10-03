> Historical results, not current release acceptance. Original source, JSON results and logs are in the local recovery archive; superseded generated images and report payloads were discarded. See [current verification](../aaryas-world-verification.md).

# GitHub repository preparation — September 27, 2026

Prepared for [AaryaMody1301/Personal-Portfolio](https://github.com/AaryaMody1301/Personal-Portfolio).

## Git history and scope

The local `.git` directory was empty. It was initialized and connected to the existing public repository, its history fetched, and local branch `chore/github-ready` based on `origin/master` at `97ff187` (the phase-three merge). Working files were preserved. The existing MIT license was restored unchanged.

This branch brings the local editorial redesign and mobile compatibility fixes into the repository alongside the new repository tooling. Compared with the old `master` tree, the root stylesheet/resume/photo are replaced by the current `assets/` structure. Old GitHub Pages instructions, Pages marker/not-found page, and Python checks are superseded by the Hostinger runbook and Playwright/release checks. Their earlier versions remain in Git history.

Repository preparation does not publish the website, change DNS, merge into `master`, or push a branch. GitHub-hosted CI can only be evaluated after the prepared changes are pushed.

## Repository support

- README with a local preview, setup requirements, architecture, commands, deployment instructions, and real preview image.
- Contribution guide, bug-report form, and pull-request template.
- Node.js 24 version files, pinned development dependencies, matching npm lockfile, and retained MIT license.
- Ignore rules for dependencies, Python environments, agent/editor state, local backups, reports, upload ZIPs, and credential files. Public portfolio assets, the resume, and reviewed visual baselines remain included.
- LF text via `.gitattributes` and `.editorconfig`, preserving content hashes across Windows/Linux checkouts. Generated asset copies are marked as generated for GitHub diffs.
- Repository check for syntax, generated assets, dependency/lock consistency, ignore rules, and common credential patterns. This pattern check is not a full security audit.

## CI behavior

`Portfolio CI` runs on pull requests, pushes to `master`/`main`, and manual dispatch. Windows and Linux jobs use Node.js 24, `npm ci`, and the browser versions installed by the locked Playwright package. Both run repository checks, deployment-verification regression checks, the browser/accessibility suite, and Lighthouse. Windows also creates the verified Hostinger ZIP. Reports and package artifacts are retained for 14 days.

No deployment credentials are required; workflow permissions are read-only. CI skips environment-specific image comparisons. The existing Windows/Google Chrome visual baselines remain available for local review; other platforms and bundled Chromium do not pretend to match them.

## Verification evidence

Local verification on Windows, September 27, 2026:

- `npm ci --ignore-scripts --no-audit --no-fund`: installed the locked development dependencies successfully.
- `npm run check`: passed for all 53 repository files, including ignore rules, LF text, syntax, dependency pins, credential patterns, and generated assets.
- `npm run test:release`: passed the regression test covering matching assets, stale JavaScript, HTML error responses, and obsolete asset references.
- `CI=true PLAYWRIGHT_CHROMIUM_CHANNEL=chromium npm run test:ci` (variables set using PowerShell syntax): **118 passed, 22 intentionally skipped, zero failures or flaky results**, across seven browser/device profiles.
- Final `CI=true npm test` using installed Google Chrome, WebKit, and Firefox: **120 passed, 27 intentionally skipped**, including both unchanged, reviewed Windows visual baselines.
- `npm run audit:preview` with bundled Chromium: **100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO**, with no Lighthouse warnings. Its owned preview server stopped afterward.
- `npm run package:hostinger`: verified all 18 ZIP entries against their source bytes. The package is 664,769 bytes; SHA-256 `546e64ecb67449b48bdd6f4983957b72f57d716e5d1fc427e6d0a1a7acd0c919`.
- Exported the staged Git index into an empty directory. Its seven content-versioned assets and deployment regression test passed, without relying on ignored local files.
- `git diff --cached --check`: passed. The workflow passed actionlint 1.7.12, using the official binary after verifying its published SHA-256.
- Local documentation links resolve; no ignored files or unexpected untracked files are included in the commit. The original resume hash remains unchanged.

The final dependency audit identified vulnerable development dependencies beneath Lighthouse 13.4.0. Updated the exact Lighthouse pin to [13.5.0](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.5.0) and regenerated the lockfile. This resolves the reported [OpenTelemetry memory-allocation advisory](https://github.com/advisories/GHSA-8988-4f7v-96qf) and [brace-expansion advisory](https://github.com/advisories/GHSA-rgw5-rvv9-x895); npm's updated dependency audit reports **zero vulnerabilities**. These packages are local verification tools and are excluded from the Hostinger upload.

Hosted Linux/GitHub runner results are not claimed until the workflow actually runs there. Browser emulation does not certify a physical iPhone 15 Pro running iOS 27. Earlier visual-baseline review and device behavior findings are documented in the [compatibility audit](compatibility-verification.md); this repository-only change did not regenerate those baselines.

The authoritative resume remains byte-for-byte unchanged: SHA-256 `15476b1a5a2b94611d5f867aa1d64826a2b0978279c4053585794b9908fcf9f8`.

Reproduce the fast checks with `npm run check` and `npm run test:release`. Use `npm run test:ci` for browser checks, `npm run audit:preview` for a dedicated Lighthouse preview on a free port 4173, and `npm run package:hostinger` for the final ZIP. On Windows, the Firefox launch may require execution outside a restricted sandbox.
