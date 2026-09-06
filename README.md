# Personal Portfolio

A focused, reproducible portfolio for **Aarya Mody — Data Engineer & Data Analyst**.

**Production portfolio:** https://aaryamody.app  
**GitHub:** https://github.com/AaryaMody1301  
**LinkedIn:** https://linkedin.com/in/aarya-mody

This repository contains a lightweight Streamlit implementation of the portfolio. The production site remains the primary public experience; this repo provides an inspectable, runnable version of the same professional positioning and selected engineering work.

## What this portfolio emphasizes

- Data engineering: Azure Databricks, Delta Lake, PySpark, ETL/ELT, Medallion Architecture.
- Analytics: SQL, Python, forecasting, KPI design, semantic validation, and data storytelling.
- Business intelligence: Power BI, DAX, Power Query, semantic models, and dashboard delivery.
- Governance: schema validation, source-to-target mapping, audit trails, and data-quality controls.
- Engineering evidence: reproducible tests, CI, measured performance, explicit trust boundaries, and release discipline.

## Featured public projects

### StockPulse
Evidence-first equity research platform with PostgreSQL/Prisma persistence, SEC EDGAR ingestion, deterministic change intelligence, grounded optional AI, and a credential-free reviewer demo.

Repository: https://github.com/AaryaMody1301/StockPulse

### SQL Practice Project
PostgreSQL analytics-engineering case study with correctness contracts, reusable analytical models, reviewed outputs, and evidence-driven performance benchmarking.

Repository: https://github.com/AaryaMody1301/SQL_Practice_Project

### Sales Forecasting Using Time Series Analysis
Leakage-aware forecasting package with chronological evaluation, reproducible artifacts, explicit baselines, and a published v1 release.

Repository: https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis

### OriginKeep
Local-first file provenance system that records origin/context, SHA-256 identity, change evidence, version lineage, trust signals, and recoverable lifecycle actions.

Repository: https://github.com/AaryaMody1301/OriginKeep

## Architecture

```text
config.py
  |
  | structured portfolio content
  v
app.py
  |
  | Streamlit sections
  v
style.css
  |
  | responsive presentation + reduced-motion support
  v
Browser
```

The application deliberately keeps personal/project content in `config.py` instead of scattering it through UI code.

## Local development

### Requirements

- Python 3.11+
- pip

### Run

```bash
git clone https://github.com/AaryaMody1301/Personal-Portfolio.git
cd Personal-Portfolio

python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

streamlit run app.py
```

Open `http://localhost:8501`.

## Verification

The CI workflow installs the pinned runtime dependency, compiles the Python source, runs configuration tests, boots the real Streamlit application in headless mode, and verifies Streamlit's health endpoint.

Local checks:

```bash
python -m compileall app.py config.py
python -m unittest discover -s tests -v

streamlit run app.py --server.headless true --server.port 8501
curl --fail http://127.0.0.1:8501/_stcore/health
```

## Accessibility and performance direction

The current baseline avoids decorative JavaScript and percentage-based skill animations. Styling includes `prefers-reduced-motion` handling, readable contrast, responsive layout, and native Streamlit controls for links/downloads where possible.

The production portfolio should continue targeting WCAG 2.2 Level AA behavior, keyboard usability, clear focus states, descriptive link text, responsive layouts, and strong Core Web Vitals.

## Repository structure

```text
.
├── .github/workflows/portfolio-ci.yml
├── app.py
├── config.py
├── style.css
├── requirements.txt
├── tests/test_portfolio_config.py
├── profile_photo_optimized.jpg
├── Aarya_Mody_Resume.pdf
├── LICENSE
└── README.md
```

## Deployment

For this Streamlit implementation, Streamlit Community Cloud is the simplest deployment target:

1. Connect this repository.
2. Select `app.py` as the entry point.
3. Use a supported Python runtime.
4. Deploy.

The custom production site at `aaryamody.app` is treated separately from this Streamlit deployment path.

## Content updates

Most portfolio updates should only require editing `config.py`:

- professional title and focus;
- experience;
- featured projects;
- skills;
- education/certifications;
- contact links.

Avoid adding unverified performance or accuracy claims. Prefer measurements already documented in the linked project repositories or professional case studies.

## License

MIT. See [LICENSE](LICENSE).
