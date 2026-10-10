# Contributing

Keep the site static, accessible, and easy to review. Small, focused changes are welcome.

## Development

1. Create a branch from the current `master` branch.
2. Use Node.js 24 and `npm ci` to install the locked development tools.
3. Run `npm run serve` for the local preview. Install the browsers listed in the README before browser checks.
4. Edit HTML, `src/` modules and the source stylesheets, then run `npm run build`. Include the generated files and updated HTML in the same change. Do not edit the hashed copies directly.
5. Run `npm run check`, `npm run test:release`, and relevant Playwright tests. For a complete behavioral run use `npm run test:ci`.
6. For layout changes, inspect 320, 390, 768, and 1440 pixels, keyboard focus, open disclosures, destination travel, orbit/reset, responsive panels and history, landscape rotation, reduced motion, and no-JavaScript behavior. Run Lighthouse using the README commands.

Windows Chrome image baselines are committed. Regenerate only intentional changes with `npm run test:update -- --project=desktop --project=mobile --grep "visual baseline"`, inspect the resulting images, and rerun the comparison. CI deliberately excludes image comparisons across operating systems; it never accepts new screenshots automatically.

## Content changes

- Link new professional claims to the supplied resume and personal-project claims to repository documentation in `docs/content-sources.md`.
- Preserve preview/release qualifications and benchmark limitations. Distinguish professional responsibilities from personal-project skills.
- Keep every resume link on the same supplied PDF. A deliberately updated resume requires updating its source record and the expected hash in the download test.
- Update `dateModified` and the sitemap together when page content changes.
- Keep sound and analytics off for this version. No secrets belong in static files.

## Pull requests and issues

Describe the problem and resulting behavior, list checks run, and attach screenshots for visible changes. For bugs, include the page URL, device, OS/browser versions, orientation, and reproduction steps. Do not include credentials or private documents in reports.

The `.gitignore` keeps local environments, agent/editor state, historical backups, test reports, and upload packages out of commits. It intentionally retains the public resume, the generated assets referenced by the HTML, and reviewed visual baselines.

Publishing is separate from code review. The workflow produces a verified Hostinger artifact; it does not deploy it. Follow `docs/hostinger-deploy.md` when the owner is ready to publish.
