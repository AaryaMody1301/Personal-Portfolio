# Aarya Mody — Data Engineering & Applied AI

A static portfolio about reliable data pipelines and tools that make evidence easier to inspect. Built with semantic HTML, CSS, and a small JavaScript enhancement layer.

[Website](https://aaryamody.app/) · [Resume](assets/docs/AaryaMody_Resume.pdf) · [Content sources](docs/content-sources.md) · [Deployment guide](docs/hostinger-deploy.md)

![Preview of Aarya Mody's portfolio](assets/images/og-image.jpg)

## What is here

- Three detailed project stories: [DriftDoctor](https://github.com/AaryaMody1301/DriftDoctor), [CompatForge](https://github.com/AaryaMody1301/CompatForge), and [OriginKeep](https://github.com/AaryaMody1301/OriginKeep), with architecture diagrams and native expandable details.
- Eleven additional public projects, professional experience, skills, credentials, and contact links.
- Responsive layouts, a mobile menu that hides on downward scrolling, keyboard focus handling, reduced-motion support, and usable content/navigation without JavaScript.
- Locally hosted images and resume, content-versioned assets, metadata, structured profile data, and a sitemap.
- Browser, accessibility, asset-integrity, and deployment checks, plus a Hostinger upload packager.

No production framework, backend, database, authentication, or external API is required. Node.js packages are development tools. Optional analytics is disabled by default.

## Run locally

Use **Node.js 24 LTS**, npm, and Git. `.nvmrc` and `.node-version` select the Node major version.

```sh
git clone https://github.com/AaryaMody1301/Personal-Portfolio.git
cd Personal-Portfolio
npm ci
npm run serve
```

Open **http://127.0.0.1:4173/**. The server is a local development utility. `npm run serve` prepares the asset filenames before starting it.

After changing a stylesheet, script, or image while the preview is running, run `npm run assets:prepare` and refresh. Commit the editable source, generated copy, and updated `index.html` together. Text files use LF line endings so the hashes stay identical across operating systems.

## Check the site

Install browsers once for local verification. Tests use installed Google Chrome by default:

```sh
npx playwright install --with-deps chrome firefox webkit
npm run check
npm run test:release
npm test
```

| Command | Purpose |
| --- | --- |
| `npm run check` | Repository hygiene, syntax, pinned dependencies, and asset integrity |
| `npm run assets:prepare` | Regenerate content-versioned assets and their HTML references |
| `npm run assets:check` | Verify the generated files without changing them |
| `npm test` | Seven browser/device configurations, accessibility, interactions, and supported visual baselines |
| `npm run test:ci` | Browser checks without environment-specific screenshot comparisons |
| `npm run test:release` | Ensure stale or incorrect deployment assets are rejected |
| `npm run audit` | Lighthouse against an already running preview |
| `npm run audit:preview` | Start a dedicated preview, audit it, and stop it; port 4173 must be free |
| `npm run preview:capture` | Capture four layouts and regenerate the social image; run `assets:prepare` afterward |
| `npm run compatibility:capture` | Capture phone/tablet menu states and desktop browser layouts |
| `npm run package:hostinger` | Build and verify the upload ZIP; requires PowerShell 7 (`pwsh`) |
| `npm run verify:live` | Compare the public deployment with this checkout after uploading |

The test profiles cover Chrome desktop/Android emulation, WebKit desktop/iPhone/iPad emulation, and Firefox. The reviewed image baselines are for **Windows + Google Chrome**; other environments run the behavioral checks and skip those image comparisons. They do not certify physical iOS or Android hardware. See the [dated compatibility audit](docs/compatibility-verification.md) for results and limits.

To use Playwright's bundled Chromium instead, install `chromium firefox webkit` and set `PLAYWRIGHT_CHROMIUM_CHANNEL=chromium` in your shell. This is how CI runs. Browser installation on Linux may require permission to install system packages; see [Playwright's CI guide](https://playwright.dev/docs/ci-intro).

## GitHub Actions

[Portfolio CI](.github/workflows/portfolio-ci.yml) checks pull requests and pushes to `master` or `main` on **Windows and Linux**. It installs locked dependencies and browser engines, checks repository/asset integrity, runs the release and browser tests, and enforces Lighthouse targets of 90 Performance and 95 Accessibility, Best Practices, and SEO.

The Windows job also builds `portfolio-hostinger.zip`. Reports and the ZIP are downloadable workflow artifacts. CI does **not** publish the site, change DNS, or require deployment credentials. The workflow follows the standard [GitHub Node.js setup](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs). Dependabot checks development dependencies and Actions monthly.

## Deploy to Hostinger

```sh
npm run assets:prepare
npm run package:hostinger
```

Upload the contents of `output/portfolio-hostinger.zip` to Hostinger's `public_html`. The package contains only `index.html`, `robots.txt`, `sitemap.xml`, and `assets/`. It excludes development tools, repository metadata, reports, and local backups. Every packaged file is checked against its source bytes.

Upload the complete assets before replacing the HTML, clear the host's HTML cache, then run `npm run verify:live`. The public site can differ from a checkout until a package is uploaded. See the [Hostinger runbook](docs/hostinger-deploy.md) for the exact sequence.

## Repository layout

```text
index.html                      Content, navigation, metadata, JSON-LD
assets/css/style.css            Editable stylesheet
assets/js/                      Editable scripts and generated copies
assets/images/                  Portrait, favicon, social image and copies
assets/docs/AaryaMody_Resume.pdf Authoritative, unchanged resume
scripts/                        Preview, asset, verification and packaging tools
scripts/tests/                  Deployment-verification regression test
tests/                          Playwright/axe tests and reviewed image baselines
docs/                           Content sources, deployment and dated audits
.github/                        CI, dependency updates, issue and PR templates
```

Historical audit reports refer to the artifacts produced on their stated dates. Raw reports and local backups are ignored; they are not prerequisites for a fresh clone. `scripts/probe-compatibility.mjs` is an optional historical diagnostic that needs the saved public files described in its help output.

## Content and contributions

The supplied resume is the authority for professional details. Repository documentation supports personal-project descriptions; preview and release-candidate qualifications must remain visible. Keep metadata and source notes consistent with any content update. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE), retaining the existing repository license. If adapting this portfolio, replace Aarya's personal content, resume, and portrait with your own.
