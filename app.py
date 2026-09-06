from pathlib import Path

import streamlit as st

from config import (
    AVAILABILITY,
    BIO,
    CERTIFICATIONS,
    CURRENT_FOCUS,
    EDUCATION,
    EMAIL,
    EXPERIENCE,
    GITHUB_URL,
    LANGUAGES,
    LEADERSHIP,
    LINKEDIN_URL,
    LOCATION,
    NAME,
    PHONE,
    PROFILE_PHOTO,
    PROJECTS,
    PROOF_METRICS,
    RESUME_FILE,
    SITE_URL,
    SKILLS,
    TAGLINE,
    TITLE,
)


st.set_page_config(
    page_title=f"{NAME} | {TITLE}",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed",
)


def load_css() -> None:
    css_path = Path("style.css")
    if css_path.exists():
        st.markdown(f"<style>{css_path.read_text(encoding='utf-8')}</style>", unsafe_allow_html=True)


def section_intro(eyebrow: str, title: str, body: str) -> None:
    st.markdown(
        f"""
        <div class="section-heading">
            <p class="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        """,
        unsafe_allow_html=True,
    )


def render_hero() -> None:
    left, right = st.columns([1.45, 0.55], gap="large", vertical_alignment="center")

    with left:
        st.markdown('<p class="eyebrow">DATA ENGINEERING · ANALYTICS · GOVERNANCE</p>', unsafe_allow_html=True)
        st.markdown(f"# {NAME}")
        st.markdown(f"## {TITLE}")
        st.markdown(f"<p class='hero-copy'>{TAGLINE}</p>", unsafe_allow_html=True)
        st.caption(f"{LOCATION} · {AVAILABILITY}")

        action_a, action_b, action_c = st.columns([1, 1, 1.15])
        with action_a:
            st.link_button("View live portfolio", SITE_URL, use_container_width=True)
        with action_b:
            st.link_button("GitHub", GITHUB_URL, use_container_width=True)
        with action_c:
            resume_path = Path(RESUME_FILE)
            if resume_path.exists():
                st.download_button(
                    "Download resume",
                    data=resume_path.read_bytes(),
                    file_name=resume_path.name,
                    mime="application/pdf",
                    use_container_width=True,
                )
            else:
                st.button("Resume unavailable", disabled=True, use_container_width=True)

        st.info(f"Current focus: {CURRENT_FOCUS}", icon="↗")

    with right:
        photo_path = Path(PROFILE_PHOTO)
        if photo_path.exists():
            st.image(str(photo_path), caption=NAME, use_container_width=True)
        else:
            st.info("Profile image is not available in this checkout.")


def render_proof_metrics() -> None:
    st.markdown("### Delivery signals")
    cols = st.columns(len(PROOF_METRICS))
    for col, metric in zip(cols, PROOF_METRICS):
        with col:
            st.metric(metric["label"], metric["value"])


def render_about() -> None:
    section_intro(
        "PROFILE",
        "Building data systems people can trust",
        "I work across ingestion, transformation, validation, analytics, reporting, and automation rather than treating them as isolated tasks.",
    )
    left, right = st.columns([1.35, 0.65], gap="large")
    with left:
        st.write(BIO)
        st.markdown(
            "My strongest work combines **data engineering discipline** with **analytics usability**: "
            "clear contracts, reproducible transformations, measurable quality, and decision-ready outputs."
        )
    with right:
        st.markdown("#### Working principles")
        st.markdown(
            "- Evidence before claims\n"
            "- Reproducible pipelines\n"
            "- Explicit data-quality boundaries\n"
            "- Performance measured, not assumed\n"
            "- Analytics that explain their source"
        )


def render_experience() -> None:
    section_intro(
        "EXPERIENCE",
        "Analytics modernization and pipeline quality",
        "Hands-on delivery across lakehouse migration, SQL and Python automation, data quality, semantic validation, and reporting systems.",
    )

    for role in EXPERIENCE:
        with st.container(border=True):
            title_col, date_col = st.columns([1.5, 0.5])
            with title_col:
                st.markdown(f"### {role['title']}")
                st.markdown(f"**{role['company']}** · {role['location']}")
            with date_col:
                st.markdown(f"**{role['duration']}**")

            for highlight in role["highlights"]:
                st.markdown(f"- {highlight}")
            st.caption(" · ".join(role["stack"]))


def render_projects() -> None:
    section_intro(
        "PUBLIC ENGINEERING",
        "Selected GitHub projects",
        "A focused set of repositories that demonstrate data engineering, analytical rigor, reproducibility, provenance, and release discipline.",
    )

    for row_start in range(0, len(PROJECTS), 2):
        cols = st.columns(2, gap="large")
        for col, project in zip(cols, PROJECTS[row_start : row_start + 2]):
            with col:
                with st.container(border=True):
                    st.caption(project["category"].upper())
                    st.markdown(f"### {project['title']}")
                    st.write(project["description"])
                    st.markdown(f"**Stack:** {' · '.join(project['technologies'])}")
                    st.success(project["proof"], icon="✓")
                    st.link_button("Open repository", project["github"], use_container_width=True)

    st.link_button("See all GitHub repositories", f"{GITHUB_URL}?tab=repositories")


def render_skills() -> None:
    section_intro(
        "SKILL ARCHITECTURE",
        "Tools grouped by delivery outcome",
        "The portfolio emphasizes systems and outcomes instead of percentage-based skill bars.",
    )

    categories = list(SKILLS.items())
    for row_start in range(0, len(categories), 3):
        cols = st.columns(3, gap="large")
        for col, (category, skills) in zip(cols, categories[row_start : row_start + 3]):
            with col:
                with st.container(border=True):
                    st.markdown(f"#### {category}")
                    st.write(" · ".join(skills))


def render_credentials() -> None:
    section_intro(
        "CREDENTIALS",
        "Education, certifications, and leadership",
        "Supporting context for the engineering and analytics work shown above.",
    )

    education_col, cert_col, leadership_col = st.columns(3, gap="large")
    with education_col:
        with st.container(border=True):
            st.markdown("#### Education")
            st.markdown(f"**{EDUCATION['degree']}**")
            st.write(EDUCATION["institution"])
            st.caption(f"{EDUCATION['duration']} · GPA {EDUCATION['gpa']}")

    with cert_col:
        with st.container(border=True):
            st.markdown("#### Certifications")
            for certification in CERTIFICATIONS:
                st.markdown(f"- {certification}")

    with leadership_col:
        with st.container(border=True):
            st.markdown("#### Leadership")
            st.markdown(f"**{LEADERSHIP['title']}**")
            st.write(LEADERSHIP["description"])

    st.markdown("#### Languages")
    st.write(" · ".join(LANGUAGES))


def render_contact() -> None:
    section_intro(
        "CONTACT",
        "Open to data engineering and analytics conversations",
        "For recruiter screens, analytics roles, data-platform work, or collaboration, email and LinkedIn are the fastest ways to reach me.",
    )

    contact_cols = st.columns(4)
    with contact_cols[0]:
        st.link_button("Email", f"mailto:{EMAIL}", use_container_width=True)
    with contact_cols[1]:
        st.link_button("LinkedIn", LINKEDIN_URL, use_container_width=True)
    with contact_cols[2]:
        st.link_button("GitHub", GITHUB_URL, use_container_width=True)
    with contact_cols[3]:
        st.link_button("Live site", SITE_URL, use_container_width=True)

    st.caption(f"{EMAIL} · {PHONE}")


def main() -> None:
    load_css()
    render_hero()
    st.divider()
    render_proof_metrics()
    st.divider()
    render_about()
    st.divider()
    render_experience()
    st.divider()
    render_projects()
    st.divider()
    render_skills()
    st.divider()
    render_credentials()
    st.divider()
    render_contact()
    st.markdown(
        f"<p class='footer'>© 2026 {NAME}. Built as a lightweight, reproducible portfolio application.</p>",
        unsafe_allow_html=True,
    )


if __name__ == "__main__":
    main()
