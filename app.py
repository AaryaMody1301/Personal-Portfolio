import streamlit as st
from config import *
import base64
import time
from streamlit_toggle import st_toggle_switch

# Enhanced page configuration
st.set_page_config(
    page_title=f"{NAME} - Portfolio",
    page_icon="👨‍💻",
    layout="wide",
    initial_sidebar_state="collapsed",
    menu_items={
        'Get Help': None,
        'Report a bug': None,
        'About': f"Portfolio of {NAME} - {TITLE}"
    }
)

# Function to load CSS with caching
@st.cache_data
def load_css(file_name):
    with open(file_name, 'r', encoding='utf-8') as f:
        return f.read()

# Function to create the header
def create_header():
    nav_col1, nav_col2 = st.columns([8, 2])
    with nav_col1:
        st.markdown(f"""
        <div style="display: flex; align-items: center; gap: 1rem;">
            <h3 style="margin: 0; color: var(--accent-primary); font-weight: 900; letter-spacing: 0.02em; font-size: 2.2rem; text-shadow: 0 2px 8px var(--shadow-color);">{NAME}</h3>
            <span style="color: var(--accent-secondary); font-size: 1.1rem; font-weight: 700; letter-spacing: 0.03em;">Portfolio</span>
        </div>
        """, unsafe_allow_html=True)
    with nav_col2:
        try:
            with open("Aarya_Mody_Resume.pdf", "rb") as pdf_file:
                pdf_data = pdf_file.read()
            st.download_button(
                label="📄 Download Resume",
                data=pdf_data,
                file_name=f"{NAME.replace(' ', '_')}_Resume.pdf",
                mime="application/pdf",
                help="Download my latest resume",
                use_container_width=True,
                key="resume-download",
                disabled=False,
                type="primary"
            )
        except FileNotFoundError:
            st.error("Resume file not found")

# Function to create animated loading spinner
def show_loading_spinner(duration=1):
    placeholder = st.empty()
    with placeholder.container():
        st.markdown("""
        <div style="display: flex; justify-content: center; align-items: center; height: 100px;">
            <div class="spinner"></div>
        </div>
        """, unsafe_allow_html=True)
    time.sleep(duration)
    placeholder.empty()

# Load and apply CSS
css_content = load_css("style.css")
st.markdown(f'<style>{css_content}</style>', unsafe_allow_html=True)

# Optimize typography for readability and consistency
st.markdown("""
<style>
body, .stApp, .block-container {
    font-family: 'Poppins', 'Inter', sans-serif !important;
}
.section-title, .hero-title, .project-title, .skill-category-title, .experience-title, .contact-title {
    font-family: 'Playfair Display', 'Poppins', serif !important;
}
</style>
""", unsafe_allow_html=True)

# Create header
create_header()

# Add some spacing after navigation
st.markdown("<br>", unsafe_allow_html=True)

# === HERO SECTION ===
with st.container():
    st.markdown('<div class="section-container">', unsafe_allow_html=True)
    hero_col1, hero_col2 = st.columns([2, 3], gap="large")
    with hero_col1:
        try:
            st.markdown(f"""
            <div class="profile-image-container fade-in" style="box-shadow: 0 8px 32px var(--shadow-color); border-radius: 50%; background: var(--bg-tertiary); padding: 1.5em; display: flex; justify-content: center; align-items: center;">
                <img src="data:image/jpg;base64,{base64.b64encode(open(PROFILE_PHOTO, 'rb').read()).decode()}" 
                     class="profile-image"
                     alt="{NAME}" style="border: 4px solid var(--accent-primary); box-shadow: 0 4px 16px var(--shadow-color); width: 140px; height: 140px; object-fit: cover; background: #fff;">
            </div>
            """, unsafe_allow_html=True)
        except:
            st.info("Profile photo not found. Please add your photo to display here.")
    with hero_col2:
        st.markdown(f"""
        <div class="hero-text slide-in" style="padding-left: 0.5rem;">
            <h1 class="hero-title" style="font-size:2.5rem; color:var(--accent-primary); font-weight:900; margin-bottom:0.2em; letter-spacing:0.01em;">👋 Hello, I'm<br><span class="hero-name">{NAME}</span></h1>
            <h2 class="hero-subtitle" style="color:var(--accent-secondary); font-size:1.4rem; font-weight:700; margin-bottom:0.5em;">{TITLE}</h2>
            <p class="hero-bio" style="color:var(--text-secondary); font-size:1.1rem; margin-bottom:1em;">{BIO}</p>
        </div>
        <div class="social-links-container fade-in" style="display:flex; gap:1.2em; margin-top:0.5em;">
            <a href="{GITHUB_URL}" target="_blank" class="social-link" style="background:var(--accent-primary); color:#fff; padding:0.6em 1.2em; border-radius:var(--border-radius-md); font-weight:700; text-decoration:none; box-shadow:0 2px 8px var(--shadow-color);">🔗 GitHub</a>
            <a href="{LINKEDIN_URL}" target="_blank" class="social-link" style="background:var(--accent-secondary); color:#fff; padding:0.6em 1.2em; border-radius:var(--border-radius-md); font-weight:700; text-decoration:none; box-shadow:0 2px 8px var(--shadow-color);">💼 LinkedIn</a>
            <a href="mailto:{EMAIL}" class="social-link" style="background:var(--bg-tertiary); color:var(--accent-primary); padding:0.6em 1.2em; border-radius:var(--border-radius-md); font-weight:700; text-decoration:none; box-shadow:0 2px 8px var(--shadow-color);">✉️ Email Me</a>
        </div>
        """, unsafe_allow_html=True)

# === PROJECTS SECTION ===
with st.container():
    st.markdown('<div class="section-container">', unsafe_allow_html=True)
    st.markdown("""
    <div class="fade-in">
        <h2 class="section-title" style="color:var(--accent-primary); font-size:2rem; font-weight:900; letter-spacing:0.01em; margin-bottom:1.2em;">🚀 Featured Projects</h2>
    </div>
    """, unsafe_allow_html=True)
    
    # Enhanced project display
    projects = [PROJECT_1, PROJECT_2, PROJECT_3, PROJECT_4]
    
    for i in range(0, len(projects), 2):
        proj_col1, proj_col2 = st.columns(2, gap="large")
        for j, col in enumerate([proj_col1, proj_col2]):
            if i + j < len(projects):
                project = projects[i + j]
                with col:
                    demo_button = ""
                    if project.get("demo"):
                        demo_button = f'<a href="{project["demo"]}" target="_blank" class="cta-button">🌐 Live Demo</a>'
                    st.markdown(f"""
                    <div class="project-card fade-in">
                        <h3 class="project-title">{project['title']}</h3>
                        <p class="project-description">{project['description']}</p>
                        <div class="tech-stack">
                            <h4 class="tech-stack-title">🛠️ Technologies</h4>
                            <div class="tech-tags">
                                {' '.join([f'<span class=\"tech-tag\">{tech}</span>' for tech in project['technologies']])}
                            </div>
                        </div>
                        <div class="project-links">
                            <a href="{project['github']}" target="_blank" class="cta-button">📂 View Code</a>
                            {demo_button if demo_button else ''}
                        </div>
                    </div>
                    """, unsafe_allow_html=True)

# === EXPERIENCE SECTION ===
with st.container():
    st.markdown('<div class="section-container">', unsafe_allow_html=True)
    st.markdown("""
    <div class="fade-in">
        <h2 class="section-title" style="color:var(--accent-primary); font-size:2rem; font-weight:900; letter-spacing:0.01em; margin-bottom:1.2em;">💼 Professional Experience</h2>
    </div>
    """, unsafe_allow_html=True)
    
    experiences = [EXPERIENCE_1, EXPERIENCE_2]
    
    for i, exp in enumerate(experiences):
        st.markdown(f"""
        <div class="glass-card experience-card fade-in" style="border:2px solid var(--accent-secondary); box-shadow:0 4px 24px var(--shadow-color); border-radius:var(--border-radius-lg);">
            <div class="experience-header">
                <h3 class="experience-title" style="color:var(--accent-primary); font-size:1.2rem; font-weight:800;">{exp['title']}</h3>
                <h4 class="experience-company" style="color:var(--accent-secondary); font-size:1.05rem; font-weight:700;">{exp['company']}</h4>
                <p class="experience-duration" style="color:var(--text-muted); font-size:0.98rem;">📅 {exp['duration']}</p>
            </div>
            <p class="experience-description" style="color:var(--text-secondary); font-size:1.05rem;">{exp['description']}</p>
            <div class="achievements-container">
                <h4 class="achievements-title" style="color:var(--accent-primary); font-size:1.05rem; font-weight:700;">🎯 Key Achievements</h4>
                <ul class="achievements-list" style="color:var(--text-secondary); font-size:1.01rem;">
                    {"".join(f'<li class="achievement-item" style="color:var(--accent-primary); font-weight:600;">{achievement}</li>' for achievement in exp['achievements'])}
                </ul>
            </div>
        </div>
        """, unsafe_allow_html=True)

# === SKILLS SECTION ===
with st.container():
    st.markdown('<div class="section-container">', unsafe_allow_html=True)
    st.markdown("""
    <div class="fade-in">
        <h2 class="section-title" style="color:var(--accent-primary); font-size:2rem; font-weight:900; letter-spacing:0.01em; margin-bottom:1.2em;">🛠️ Technical Expertise</h2>
    </div>
    """, unsafe_allow_html=True)
    
    # Enhanced skills organization
    skills_data = [
        ("💻 Programming Languages", PROGRAMMING_LANGUAGES, "🔥"),
        ("🌐 Web Development", WEB_DEVELOPMENT, "⚡"),
        ("📊 Data Science", DATA_SCIENCE, "📈"),
        ("🤖 AI/ML", AI_ML, "🧠"),
        ("🗄️ Databases", DATABASES, "💾"),
        ("🔧 Tools & Technologies", TOOLS_TECHNOLOGIES, "⚙️")
    ]
    
    # Display skills in responsive grid
    for i in range(0, len(skills_data), 2):
        skill_col1, skill_col2 = st.columns(2, gap="large")
        for j, col in enumerate([skill_col1, skill_col2]):
            if i + j < len(skills_data):
                category, skills, icon = skills_data[i + j]
                with col:
                    st.markdown(f"""
                    <div class="skill-category fade-in">
                        <div class="skill-category-header" style="display: flex; align-items: center; gap: 0.5em; margin-bottom:0.7em;">
                            <span class="skill-category-icon">{icon}</span>
                            <h4 class="skill-category-title" style="margin: 0;">{category}</h4>
                        </div>
                        <div class="skill-pills" style="display:flex; flex-wrap:wrap; gap:0.5em;">
                            {' '.join([f'<span class=\"skill-pill\">{skill.strip()}</span>' for skill in skills])}
                        </div>
                    </div>
                    """, unsafe_allow_html=True)

# === CONTACT SECTION ===
with st.container():
    st.markdown('<div class="section-container">', unsafe_allow_html=True)
    st.markdown("""
    <div class="fade-in">
        <h2 class="section-title" style="color:var(--accent-primary); font-size:2rem; font-weight:900; letter-spacing:0.01em; margin-bottom:1.2em;">📬 Let's Connect</h2>
    </div>
    """, unsafe_allow_html=True)
    
    # Centered contact card
    contact_col1, contact_col2, contact_col3 = st.columns([1, 2, 1])
    
    with contact_col2:
        st.markdown(f"""
        <div class="glass-card contact-card fade-in" style="border:2px solid var(--accent-secondary); box-shadow:0 4px 24px var(--shadow-color); border-radius:var(--border-radius-lg);">
            <h3 class="contact-title" style="color:var(--accent-primary); font-size:1.2rem; font-weight:800;">Ready to collaborate?</h3>
            <p class="contact-description" style="color:var(--text-secondary); font-size:1.05rem;">I'm always excited about new opportunities and interesting projects. Let's discuss how we can work together to bring your ideas to life!</p>
            <div class="contact-details">
                <div class="contact-item"><span class="contact-icon" style="color:var(--accent-primary);">📧</span> <a href="mailto:{EMAIL}" class="contact-link" style="color:var(--accent-primary); font-weight:700;">{EMAIL}</a></div>
                <div class="contact-item"><span class="contact-icon" style="color:var(--accent-primary);">📱</span> <span class="contact-info" style="color:var(--text-secondary);">{PHONE}</span></div>
                <div class="contact-item"><span class="contact-icon" style="color:var(--accent-primary);">📍</span> <span class="contact-info" style="color:var(--text-secondary);">{LOCATION}</span></div>
            </div>
            <div class="contact-buttons" style="display:flex; gap:1em; margin-top:1em;">
                <a href="mailto:{EMAIL}" class="cta-button" style="background:var(--accent-primary); color:#fff; font-weight:700; border-radius:var(--border-radius-md); padding:0.5em 1.2em;">✉️ Send Email</a>
                <a href="{LINKEDIN_URL}" target="_blank" class="cta-button" style="background:var(--accent-secondary); color:#fff; font-weight:700; border-radius:var(--border-radius-md); padding:0.5em 1.2em;">💼 LinkedIn</a>
                <a href="{GITHUB_URL}" target="_blank" class="cta-button" style="background:var(--accent-primary); color:#fff; font-weight:700; border-radius:var(--border-radius-md); padding:0.5em 1.2em;">🔗 GitHub</a>
            </div>
        </div>
        """, unsafe_allow_html=True)

# === FOOTER ===
st.markdown(f"""
<div class="footer fade-in">
    <div class="footer-content">
        <p class="footer-text">Built with passion using Streamlit & Python 🚀</p>
        <div class="footer-divider"></div>
        <p class="footer-credits">© 2025 {NAME}. Crafted with ❤️ and lots of ☕</p>
    </div>
</div>
""", unsafe_allow_html=True)

# Back to Top Button
st.markdown("""
<a href="#" class="back-to-top">
    <span style="font-size: 1.5rem;">⬆️</span>
</a>
""", unsafe_allow_html=True)


# Enhanced JavaScript for better UX
st.markdown("""
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });
    
    // Back to top button visibility
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
</script>
""", unsafe_allow_html=True)
