# Aarya Mody — Personal Portfolio

Production-source portfolio for **Aarya Mody**, focused on data engineering, analytics engineering, business intelligence, governance, and automation.

**Production domain:** [aaryamody.app](https://aaryamody.app/)

## Why this repository exists

The portfolio is deliberately a dependency-light static site. The public presentation, SEO metadata, project links, resume asset, and accessibility baseline are all versioned here so the repository can be the source of truth for the production website rather than maintaining a separate app implementation.

## Portfolio positioning

The site presents current work around:

- Azure Databricks, Delta Lake, and Medallion Architecture;
- SQL and Python transformation/automation;
- Power BI semantic models, DAX, and reporting systems;
- schema/source-to-target validation and data governance;
- reproducible analytics, forecasting, and reliability engineering.

Featured public repositories currently include:

- [StockPulse](https://github.com/AaryaMody1301/StockPulse)
- [OriginKeep](https://github.com/AaryaMody1301/OriginKeep)
- [SQL Practice Project](https://github.com/AaryaMody1301/SQL_Practice_Project)
- [Sales Forecasting Using Time Series Analysis](https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis)
- [Face Detection Attendance System](https://github.com/AaryaMody1301/Face_Detection_Attendance_System)

## Architecture

```text
index.html                      semantic portfolio content + metadata + JSON-LD
style.css                       responsive presentation and accessibility states
404.html                        custom not-found page
.nojekyll                       plain-static GitHub Pages marker
profile_photo_optimized.jpg     local profile image
Aarya_Mody_Resume.pdf           downloadable resume
robots.txt                      crawler policy
sitemap.xml                     canonical sitemap
docs/GITHUB_PAGES_DEPLOYMENT.md preview, custom-domain, HTTPS, and rollback runbook
tests/test_static_site.py       dependency-free content/SEO/accessibility contracts
tests/test_pages_readiness.py   GitHub Pages deployment-boundary contracts
.github/workflows/portfolio-ci.yml
                               static tests + HTTP server smoke
```

There is no runtime framework, package manager, database, API key, analytics dependency, or JavaScript requirement for the core site.

## Local preview

Python is only needed as a convenient local static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Any equivalent static server works.

## Verification

Run the repository contracts locally:

```bash
python -m unittest discover -s tests -p "test_*.py" -v
python -c "import xml.etree.ElementTree as ET; ET.parse('sitemap.xml')"
```

CI additionally starts a real HTTP server and verifies that the page, stylesheet, resume, profile image, crawler files, custom 404 page, and `.nojekyll` marker are all servable.

The static contracts cover:

- one document H1 and an English language declaration;
- canonical URL and description metadata;
- Open Graph metadata;
- parseable `Person` JSON-LD matching the visible identity;
- skip navigation and labeled primary navigation;
- valid internal anchor targets;
- non-empty image alt text;
- `noopener noreferrer` on new-tab external links;
- local asset/link existence;
- absence of stale placeholder/Streamlit copy;
- specific GitHub URLs for flagship projects;
- GitHub Pages preview readiness and safe custom-domain boundaries.

## Accessibility baseline

The site uses semantic landmarks, a skip link, visible keyboard focus, generously sized interactive controls, responsive layouts, and `prefers-reduced-motion` handling. These are repository-enforced design boundaries rather than claims of formal WCAG certification.

## Search and sharing

`index.html` includes:

- canonical metadata;
- meta description;
- Open Graph metadata;
- Twitter card metadata;
- schema.org `Person` JSON-LD;
- public sitemap and crawler policy.

All structured-data claims should remain consistent with content users can actually see on the page.

## Deployment

The intended host is **GitHub Pages**, publishing the repository root directly from `master` with **Deploy from a branch**. No build step is required.

Deployment is deliberately gated:

1. publish and accept the GitHub-hosted project preview;
2. only then attach `aaryamody.app` and change DNS;
3. wait for GitHub's TLS provisioning and enable HTTPS;
4. complete the production acceptance checklist;
5. retain the previous DNS configuration as the rollback path until the cutover is verified.

See [`docs/GITHUB_PAGES_DEPLOYMENT.md`](docs/GITHUB_PAGES_DEPLOYMENT.md) for the exact Pages settings, preview URL, current GitHub DNS targets, HTTPS checks, and rollback instructions.

The repository intentionally does **not** include a `CNAME` file during the preview phase. That prevents a branch-published preview from attaching the production domain before visual and functional acceptance.

## Updating portfolio content

1. Edit `index.html`.
2. Keep claims evidence-based and avoid invented skill percentages.
3. Use specific repository URLs for public projects.
4. Update metadata/JSON-LD when professional positioning changes.
5. Run the static tests.
6. Open a pull request and merge only after Portfolio CI is green.

## License

MIT. See [`LICENSE`](LICENSE).
