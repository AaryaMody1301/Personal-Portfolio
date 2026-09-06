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
profile_photo_optimized.jpg     local profile image
Aarya_Mody_Resume.pdf           downloadable resume
robots.txt                      crawler policy
sitemap.xml                     canonical sitemap
tests/test_static_site.py       dependency-free content/SEO/accessibility contracts
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

CI additionally starts a real HTTP server and verifies that the page, stylesheet, resume, profile image, `robots.txt`, and sitemap are all publicly servable.

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
- specific GitHub URLs for flagship projects.

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

The repository is deployable to any static host. A release/deployment should publish the repository root without a build step and preserve these public paths:

```text
/
/style.css
/profile_photo_optimized.jpg
/Aarya_Mody_Resume.pdf
/robots.txt
/sitemap.xml
```

Before changing the production domain to a new deployment, verify HTTPS, canonical redirects, the downloadable resume, social previews, and all external project links.

## Updating portfolio content

1. Edit `index.html`.
2. Keep claims evidence-based and avoid invented skill percentages.
3. Use specific repository URLs for public projects.
4. Update metadata/JSON-LD when professional positioning changes.
5. Run the static tests.
6. Open a pull request and merge only after Portfolio CI is green.

## License

MIT. See [`LICENSE`](LICENSE).
