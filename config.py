"""Content and metadata for the portfolio application.

Keep portfolio facts in this module so the Streamlit UI stays presentation-focused.
"""

NAME = "Aarya Mody"
TITLE = "Data Engineer & Data Analyst"
TAGLINE = (
    "I build governed data pipelines, reliable analytical models, and decision-ready "
    "reporting systems with Python, SQL, Azure Databricks, and Power BI."
)
LOCATION = "Surat, India"
AVAILABILITY = "Open to data engineering and analytics opportunities"
CURRENT_FOCUS = "Azure Databricks migration, data quality governance, and analytics modernization"

EMAIL = "aaryamody5@gmail.com"
PHONE = "+91 80003 34499"
GITHUB_URL = "https://github.com/AaryaMody1301"
LINKEDIN_URL = "https://linkedin.com/in/aarya-mody"
SITE_URL = "https://aaryamody.app"
PROFILE_PHOTO = "profile_photo_optimized.jpg"
RESUME_FILE = "Aarya_Mody_Resume.pdf"

BIO = (
    "Data professional focused on turning operational data into trusted analytics. "
    "My work spans ingestion and transformation, SQL performance, semantic validation, "
    "forecasting, dashboard delivery, and automation. I care about reproducibility, "
    "clear evidence, and systems that remain understandable after they reach production."
)

PROOF_METRICS = [
    {"value": "4+ yrs", "label": "Analytics delivery"},
    {"value": "20+ hrs/wk", "label": "Manual work automated"},
    {"value": "<5%", "label": "Forecasting MAPE"},
    {"value": "40%", "label": "SQL performance gain"},
    {"value": "5", "label": "Governed data domains"},
]

SKILLS = {
    "Data Engineering": [
        "Azure Databricks",
        "Delta Lake",
        "Medallion Architecture",
        "PySpark",
        "ETL / ELT",
        "Data Modeling",
        "Direct Lake",
    ],
    "Analytics": [
        "SQL",
        "Python",
        "Pandas",
        "Forecasting",
        "KPI Design",
        "Statistical Analysis",
        "Data Storytelling",
    ],
    "Business Intelligence": [
        "Power BI",
        "DAX",
        "Power Query",
        "Semantic Models",
        "Dashboard Design",
        "Tableau",
    ],
    "Databases": ["PostgreSQL", "MySQL", "SQLite"],
    "Governance & Quality": [
        "Schema Validation",
        "Source-to-Target Mapping",
        "Audit Trails",
        "Data Quality Controls",
        "QA Cycles",
    ],
    "Engineering Tools": [
        "Git",
        "GitHub Actions",
        "Jupyter",
        "VS Code",
        "APIs",
        "Streamlit",
    ],
}

EXPERIENCE = [
    {
        "title": "Data Analyst | Analytics & Digital Intelligence",
        "company": "Brentwood Industries, Inc.",
        "location": "Vadodara, India",
        "duration": "Feb 2026 – Present",
        "highlights": [
            "Support migration of production reporting into Azure Databricks Bronze, Silver, and Gold layers.",
            "Validate Silver-to-Gold transformations, schemas, audit trails, and governance controls.",
            "Map legacy reporting metrics into performance-tuned equivalents for Direct Lake analytics.",
            "Own structured QA across Inventory, Quality, Planning, Purchases, and Production domains.",
        ],
        "stack": ["Azure Databricks", "PySpark", "SQL", "Delta Lake", "Power BI"],
    },
    {
        "title": "Data Analyst (Data Pipelines & Analytics)",
        "company": "IITS - Integrated IT Solutions",
        "location": "Surat, India",
        "duration": "Apr 2023 – Dec 2025",
        "highlights": [
            "Automated recurring reporting workflows with Python and SQL stored procedures.",
            "Improved SQL reporting pipeline performance by approximately 40%.",
            "Unified ERP and CRM sources into shared staging and reporting flows.",
            "Delivered Power BI dashboards used for daily operational and management reporting.",
        ],
        "stack": ["Python", "SQL", "Power BI", "ETL", "ERP / CRM"],
    },
    {
        "title": "Data Analyst Intern",
        "company": "IITS - Integrated IT Solutions",
        "location": "Surat, India",
        "duration": "Apr 2022 – Mar 2023",
        "highlights": [
            "Built SQL queries and Python cleaning scripts for analytical datasets.",
            "Documented data models, source-to-target mappings, and business transformations.",
            "Supported dashboard, validation, and reporting work that progressed into production use.",
        ],
        "stack": ["Python", "SQL", "Excel", "Power BI"],
    },
]

PROJECTS = [
    {
        "title": "StockPulse",
        "category": "Data Platform / Research Engineering",
        "description": (
            "Evidence-first equity research platform with PostgreSQL/Prisma persistence, SEC EDGAR ingestion, "
            "deterministic change intelligence, grounded optional AI, and a credential-free reviewer demo."
        ),
        "technologies": ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "SEC EDGAR"],
        "github": "https://github.com/AaryaMody1301/StockPulse",
        "proof": "Release-grade CI includes PostgreSQL migrations, tests, production smoke checks, and Chromium reviewer acceptance.",
    },
    {
        "title": "SQL Practice Project",
        "category": "Analytics Engineering",
        "description": (
            "PostgreSQL analytics-engineering case study with reusable analytical models, correctness contracts, "
            "reviewed expected outputs, and evidence-driven query optimization."
        ),
        "technologies": ["PostgreSQL", "SQL", "SQLFluff", "GitHub Actions"],
        "github": "https://github.com/AaryaMody1301/SQL_Practice_Project",
        "proof": "Includes deterministic correctness fixtures and a 200k-row performance workload with measured benchmark evidence.",
    },
    {
        "title": "Sales Forecasting Using Time Series Analysis",
        "category": "Forecasting / ML Engineering",
        "description": (
            "Leakage-aware forecasting package with chronological backtesting, reproducible artifacts, "
            "baseline comparisons, model adapters, and a manifest-backed dashboard."
        ),
        "technologies": ["Python", "ARIMA", "ETS", "XGBoost", "Streamlit"],
        "github": "https://github.com/AaryaMody1301/Sales-Forcasting-Using-Time-Series-Analysis",
        "proof": "Published v1 release with a reviewed real-data benchmark and checksum-verified artifacts.",
    },
    {
        "title": "OriginKeep",
        "category": "Trust / Provenance Engineering",
        "description": (
            "Local-first desktop and browser system that gives files a persistent provenance passport covering "
            "origin, SHA-256 identity, change evidence, version lineage, trust signals, and recovery."
        ),
        "technologies": ["Tauri", "React", "TypeScript", "Rust", "SQLite"],
        "github": "https://github.com/AaryaMody1301/OriginKeep",
        "proof": "Cross-platform release-candidate builds cover Windows NSIS, macOS DMG, Linux AppImage, and DEB.",
    },
]

EDUCATION = {
    "degree": "Bachelor of Science - Information Technology",
    "institution": "Parul University",
    "duration": "2020 – 2023",
    "gpa": "8.73/10",
}

CERTIFICATIONS = [
    "Microsoft Power BI Data Analyst Associate (PL-300)",
    "SQL for Data Analysis",
    "Deloitte Australia Data Analytics Job Simulation",
    "Learning Excel: Data Analysis",
]

LEADERSHIP = {
    "title": "Google Developer Student Club Lead",
    "description": "Organized a 100+ participant technology hackathon and led student developer initiatives.",
}

LANGUAGES = ["English (C2)", "German (A2)", "Hindi (Native)", "Gujarati (Native)"]
