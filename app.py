import streamlit as st
import base64
from PIL import Image
import requests
from pathlib import Path
import os
from config import *
import streamlit.components.v1 as components

# Page Configuration
st.set_page_config(
    page_title=f"{NAME} | Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Load and Apply Custom CSS
def load_css():
    # Add Font Awesome for icons
    st.markdown("""
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    """, unsafe_allow_html=True)
    
    # Load custom CSS
    with open("style.css") as f:
        st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

# Function to convert image to base64 for CSS background
def get_img_as_base64(file_path):
    with open(file_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode()

# Function to create a download link for the resume
def get_pdf_download_link(pdf_file, link_text):
    with open(pdf_file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode()
    href = f'<a href="data:application/pdf;base64,{base64_pdf}" download="{pdf_file.name}" class="btn">{link_text}</a>'
    return href

# Add JavaScript functionality
def add_js_functionality():
    # JavaScript for animations and effects
    js_code = """
    // Hero section animations and effects
    document.addEventListener('DOMContentLoaded', function() {
        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const heroSection = document.querySelector('.hero-section');
            
            if (heroSection) {
                // Create a subtle parallax effect
                const translateY = scrollY * 0.2;
                heroSection.style.backgroundPosition = `center ${translateY}px`;
            }
        });

        // Typewriter effect
        const titleElement = document.querySelector('.typewriter-text');
        if (titleElement) {
            const text = titleElement.textContent;
            titleElement.textContent = '';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    titleElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }

            // Start typing
            setTimeout(typeWriter, 500);
        }

        // Add smooth scrolling for all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Image loading effect
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    # Add animation when elements come into view
    window.addEventListener('scroll', function() {
        const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
        
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
        
        // Animate counters when in viewport
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
        
        // Animate stats when in viewport
        const statNumbers = document.querySelectorAll('.stat-number-animated');
        statNumbers.forEach(stat => {
            if (isInViewport(stat) && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                animateStatNumber(stat);
            }
        });
    });
    
    // Counter animation function
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };
        
        updateCounter();
    }
    
    // Stat number animation function
    function animateStatNumber(element) {
        const target = parseFloat(element.style.getPropertyValue('--target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateStat = () => {
            current += increment;
            if (current < target) {
                element.style.setProperty('--num', Math.floor(current * 10) / 10);
                requestAnimationFrame(updateStat);
            } else {
                element.style.setProperty('--num', target);
            }
        };
        
        updateStat();
    }
    """
    
    # Add the JavaScript code
    components.html(f"""
    <script>
    {js_code}
    </script>
    """, height=0)

# Main Function
def main():
    # Apply the CSS
    load_css()
    
    # Navigation Bar
    with st.container():
        st.markdown("""
        <div class="navbar flex-between">
            <div class="logo">
                <h2>Portfolio</h2>
            </div>
            <div class="nav-links">
                <a href="#about">Home</a>
                <a href="#about-detailed">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        """, unsafe_allow_html=True)

    # Hero Section
    with st.container():
        st.markdown('<div class="hero-section" id="about">', unsafe_allow_html=True)
        
        col1, col2 = st.columns([3, 2])
        
        with col1:
            st.markdown(f"""
            <div class="hero-content">
                <h1 class="hero-name">{NAME}</h1>
                <div class="typewriter">
                    <h3 class="hero-title typewriter-text">{TITLE}</h3>
                </div>
                <div class="hero-location">
                    <span>📍</span> <span>{LOCATION}</span>
                </div>
                <div class="hero-tagline">
                    <strong>Transforming complex data into actionable insights</strong> through innovative AI solutions and cutting-edge analytics. Specialized in building intelligent systems that drive business growth and operational excellence.
                </div>
                
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">{STATS['projects_completed']}</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{STATS['best_accuracy']}</span>
                        <span class="stat-label">Best Accuracy</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">{STATS['technologies']}</span>
                        <span class="stat-label">Technologies</span>
                    </div>
                </div>
                
                <div class="hero-actions">
                    <a href="#contact" class="hero-cta primary">Get In Touch</a>
                    <a href="#projects" class="hero-cta secondary">View Projects</a>
                </div>
                
                <div class="hero-download">
                    {get_pdf_download_link(Path("Aarya_Mody_Resume.pdf"), "📄 Download Resume")}
                </div>
                
                <div class="hero-social-links">
                    <a href="{SOCIAL_LINKS['github']}" target="_blank" class="hero-social-icon" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="{SOCIAL_LINKS['linkedin']}" target="_blank" class="hero-social-icon" title="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="{SOCIAL_LINKS['email']}" class="hero-social-icon" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="{SOCIAL_LINKS['phone']}" class="hero-social-icon" title="Phone">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            </div>
            """, unsafe_allow_html=True)
        
        with col2:
            # Profile Image with Loading Animation and Error Handling
            st.markdown("""
            <div class="profile-wrapper">
                <div class="profile-image-container">
                    <div class="image-loader" id="imageLoader">
                        <div class="loader-spinner"></div>
                        <p>Loading...</p>
                    </div>
            """, unsafe_allow_html=True)
            
            # Load and display the image within the container
            try:
                image = Image.open(PROFILE_PHOTO)
                # Optimize image for web display
                image.thumbnail((400, 400), Image.Resampling.LANCZOS)
                st.image(image, output_format="JPEG", use_container_width=True, clamp=True)
                
                # Add JavaScript to hide loader once image is loaded
                st.markdown("""
                <script>
                setTimeout(function() {
                    const loader = document.getElementById('imageLoader');
                    if (loader) {
                        loader.style.display = 'none';
                    }
                }, 1000);
                </script>
                """, unsafe_allow_html=True)
                
            except Exception as e:
                st.markdown("""
                <div class="image-error-state">
                    <i class="fas fa-user-circle" style="font-size:4rem;color:#64748b;"></i>
                    <p style="color:#64748b;margin-top:10px;">Profile Image Unavailable</p>
                    <p style="color:#94a3b8;font-size:0.9rem;">Please check the image file</p>
                </div>
                """, unsafe_allow_html=True)
            
            st.markdown("""
                </div>
            </div>
            """, unsafe_allow_html=True)

        # Add scroll indicator
        st.markdown("""
        <div class="scroll-indicator">
            <span>Scroll to explore</span>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)

    # About Section
    with st.container():
        st.markdown('<div class="section about-section fade-in" id="about-detailed">', unsafe_allow_html=True)
        
        # About Hero
        st.markdown(f"""
        <div class="about-hero fade-in-up">
            <h2 class="section-title">About Me</h2>
            <p class="about-intro">Welcome to my digital portfolio! I'm a passionate data scientist and Python developer with a mission to transform complex data into actionable insights that drive business success.</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Main About Content
        about_col1, about_col2 = st.columns([2, 1])
        
        with about_col1:
            st.markdown(f"""
            <div class="about-text fade-in-left">
                <p>With over a year of hands-on experience in data science and analytics, I've developed a deep passion for uncovering hidden patterns in data and building intelligent solutions that solve real-world problems. My journey began during my Bachelor's in Information Technology at Parul University, where I achieved an 8.73/10.0 GPA while specializing in machine learning and computer vision.</p>
                
                <p>Throughout my career, I've worked on diverse projects ranging from sales forecasting using time series analysis to building facial recognition systems with 95% accuracy. My expertise spans across Python programming, machine learning algorithms, data visualization, and web development using modern frameworks like Streamlit and Flask.</p>
                
                <p>Currently working as a Data Research Trainee at TRANSFORM Solutions, I focus on conducting comprehensive web research, data collection, and analysis using advanced tools like Excel and SQL. I'm also expanding my skill set in cloud technologies and advanced AI applications to stay at the forefront of technological innovation.</p>
                
                <p>When I'm not coding or analyzing data, you'll find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea. I believe in continuous learning and am always excited to take on new challenges that push the boundaries of what's possible with data.</p>
            </div>
            """, unsafe_allow_html=True)
            
            # Mission Statement
            st.markdown(f"""
            <div class="mission-statement fade-in-up">
                <h3>My Mission</h3>
                <p class="mission-text">To leverage the power of data science and artificial intelligence to create innovative solutions that not only solve complex business problems but also contribute to making the world a more efficient and connected place.</p>
            </div>
            """, unsafe_allow_html=True)
        
        with about_col2:
            # Years of Experience Counter
            st.markdown(f"""
            <div class="experience-counter fade-in-right">
                <div class="counter-number" data-target="1">1+</div>
                <div class="counter-label">Years Experience</div>
            </div>
            """, unsafe_allow_html=True)
            
            # Achievement Badges
            achievements = [
                {"icon": "fas fa-trophy", "text": "95% accuracy in Face Detection Attendance System"},
                {"icon": "fas fa-chart-bar", "text": "MAPE <5% in Sales Forecasting Model"},
                {"icon": "fas fa-brain", "text": "92% accuracy in Sentiment Analysis NLP Pipeline"},
                {"icon": "fas fa-graduation-cap", "text": "8.73/10.0 GPA in Information Technology"},
                {"icon": "fas fa-code", "text": "4+ Projects in Machine Learning & AI"}
            ]
            
            st.markdown('<div class="achievement-badges fade-in-right">', unsafe_allow_html=True)
            st.markdown('<h4>Key Achievements</h4>', unsafe_allow_html=True)
            
            for achievement in achievements:
                st.markdown(f"""
                <div class="achievement-badge">
                    <i class="{achievement['icon']} achievement-icon"></i>
                    <span>{achievement['text']}</span>
                </div>
                """, unsafe_allow_html=True)
            
            st.markdown('</div>', unsafe_allow_html=True)
            
            # Fun Facts
            fun_facts = [
                {"icon": "☕", "text": "Can't start coding without a perfect cup of coffee"},
                {"icon": "🌐", "text": "Fluent in 4 languages: Gujarati, Hindi, English, and German"},
                {"icon": "🎯", "text": "Achieved 98% on-time delivery rate at Amazon DSP"},
                {"icon": "🚀", "text": "Built a voice assistant with <2-second response time"},
                {"icon": "📊", "text": "Analyzed 50,000+ product reviews for sentiment analysis"},
                {"icon": "🔍", "text": "Optimized algorithms to reduce computation time by 40%"}
            ]
            
            st.markdown('<div class="fun-facts fade-in-right">', unsafe_allow_html=True)
            st.markdown('<h4>Fun Facts</h4>', unsafe_allow_html=True)
            
            for fact in fun_facts:
                st.markdown(f"""
                <div class="fun-fact">
                    <span class="fun-fact-icon">{fact['icon']}</span>
                    <span class="fun-fact-text">{fact['text']}</span>
                </div>
                """, unsafe_allow_html=True)
            
            st.markdown('</div>', unsafe_allow_html=True)
        
        # Animated Statistics
        st.markdown('<div class="stats-animation fade-in-up">', unsafe_allow_html=True)
        
        stats_data = [
            {"value": 4, "label": "Projects Completed"},
            {"value": 95, "label": "Best Model Accuracy"},
            {"value": 4, "label": "Programming Languages"},
            {"value": 15, "label": "Tools & Technologies"},
            {"value": 8.73, "label": "University GPA"},
            {"value": 1, "label": "Years Experience"}
        ]
        
        stats_cols = st.columns(len(stats_data))
        
        for i, stat in enumerate(stats_data):
            with stats_cols[i]:
                st.markdown(f"""
                <div class="stat-item-about">
                    <div class="stat-number-animated" style="--target: {stat['value']};">{stat['value']}</div>
                    <div class="stat-label">{stat['label']}</div>
                </div>
                """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Personal Values
        values = [
            {"title": "Innovation", "icon": "fas fa-lightbulb", "description": "Always seeking creative solutions and embracing new technologies to solve complex problems."},
            {"title": "Precision", "icon": "fas fa-crosshairs", "description": "Attention to detail and accuracy in every project, ensuring high-quality deliverables."},
            {"title": "Collaboration", "icon": "fas fa-users", "description": "Working effectively with diverse teams to achieve common goals and share knowledge."},
            {"title": "Growth", "icon": "fas fa-chart-line", "description": "Committed to continuous learning and professional development in emerging technologies."}
        ]
        
        st.markdown('<div class="fade-in-up">', unsafe_allow_html=True)
        st.markdown('<h3 style="text-align: center; margin-bottom: 30px;">My Core Values</h3>', unsafe_allow_html=True)
        st.markdown('<div class="values-grid">', unsafe_allow_html=True)
        
        for value in values:
            st.markdown(f"""
            <div class="value-card">
                <div class="value-icon">
                    <i class="{value['icon']}"></i>
                </div>
                <h4 class="value-title">{value['title']}</h4>
                <p class="value-description">{value['description']}</p>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Expandable Sections
        st.markdown('<div class="fade-in-up">', unsafe_allow_html=True)
        
        # Interests & Hobbies Expander
        with st.expander("🎯 Interests & Hobbies", expanded=False):
            interests = ["Machine Learning Research", "Open Source Contributing", "Tech Blogging", "Data Visualization", "Cloud Computing", "Artificial Intelligence Ethics", "Photography", "Travel & Cultural Exchange"]
            
            st.markdown(f"""
            <p>Beyond my professional work, I'm passionate about:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                {' '.join([f'<span class="skill-tag">{interest}</span>' for interest in interests])}
            </div>
            """, unsafe_allow_html=True)
        
        # Certifications Expander
        with st.expander("🏆 Certifications & Learning", expanded=False):
            certifications = [
                {"name": "Python for Data Science", "issuer": "Coursera", "year": "2023", "icon": "fab fa-python"},
                {"name": "Machine Learning Specialization", "issuer": "Stanford Online", "year": "2023", "icon": "fas fa-robot"},
                {"name": "SQL for Data Analysis", "issuer": "Udacity", "year": "2022", "icon": "fas fa-database"}
            ]
            
            for cert in certifications:
                st.markdown(f"""
                <div class="achievement-badge">
                    <i class="{cert['icon']} achievement-icon"></i>
                    <div>
                        <strong>{cert['name']}</strong><br>
                        <small>{cert['issuer']} • {cert['year']}</small>
                    </div>
                </div>
                """, unsafe_allow_html=True)
        
        # Professional Philosophy Expander
        with st.expander("💡 Professional Philosophy", expanded=False):
            st.markdown(f"""
            <div class="expandable-content">
                <p>I believe that technology should serve humanity, not the other way around. My approach to data science and development is grounded in these principles:</p>
                <ul>
                    <li><strong>Ethical AI:</strong> Ensuring that AI systems are fair, transparent, and beneficial to society</li>
                    <li><strong>Data Privacy:</strong> Respecting user privacy and implementing robust security measures</li>
                    <li><strong>Continuous Learning:</strong> Staying updated with the latest technologies and best practices</li>
                    <li><strong>Collaborative Innovation:</strong> Working with diverse teams to create impactful solutions</li>
                    <li><strong>Problem-Solving:</strong> Focusing on real-world applications that make a difference</li>
                </ul>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        # Quick Stats
        st.markdown("<div class='section'><h3>Quick Stats</h3></div>", unsafe_allow_html=True)
        stats_cols = st.columns(4)
        
        with stats_cols[0]:
            st.markdown(f"""
            <div class="stat-card card">
                <div class="stat-number">{STATS['projects_completed']}</div>
                <div class="stat-label">Projects</div>
            </div>
            """, unsafe_allow_html=True)
            
        with stats_cols[1]:
            st.markdown(f"""
            <div class="stat-card card">
                <div class="stat-number">{STATS['years_experience']}</div>
                <div class="stat-label">Years Experience</div>
            </div>
            """, unsafe_allow_html=True)
            
        with stats_cols[2]:
            st.markdown(f"""
            <div class="stat-card card">
                <div class="stat-number">{STATS['technologies']}</div>
                <div class="stat-label">Technologies</div>
            </div>
            """, unsafe_allow_html=True)
            
        with stats_cols[3]:
            st.markdown(f"""
            <div class="stat-card card">
                <div class="stat-number">{STATS['best_accuracy']}</div>
                <div class="stat-label">Best Model Accuracy</div>
            </div>
            """, unsafe_allow_html=True)

        st.markdown('</div>', unsafe_allow_html=True)

    # Dynamic Skills Section
    with st.container():
        st.markdown('<div class="section skills-section fade-in" id="skills">', unsafe_allow_html=True)
        
        # Skills Header
        st.markdown("""
        <div class="skills-header">
            <h2 class="section-title">Skills & Technologies</h2>
            <p class="skills-intro">
                A comprehensive overview of my technical skills, tools, and technologies I work with. 
                Each skill represents hands-on experience gained through projects, professional work, and continuous learning.
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        # Skills Filter Buttons
        filter_options = ["All", "Programming", "Web Dev", "Data Science", "AI/ML", "Databases", "Tools"]
        
        # Create filter buttons
        st.markdown('<div class="skills-filter">', unsafe_allow_html=True)
        filter_cols = st.columns(len(filter_options))
        
        # Use session state to track selected filter
        if 'selected_filter' not in st.session_state:
            st.session_state.selected_filter = "All"
        
        for i, option in enumerate(filter_options):
            with filter_cols[i]:
                if st.button(option, key=f"filter_{option}"):
                    st.session_state.selected_filter = option
                
                # Add CSS class for active button
                active_class = "active" if st.session_state.selected_filter == option else ""
                st.markdown(f'<style>.stButton > button[key="filter_{option}"] {{ {active_class} }}</style>', unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Search functionality
        search_term = st.text_input("🔍 Search for a specific technology...", placeholder="e.g., Python, React, SQL", key="skill_search")
        
        # Define skill data with enhanced information
        skills_data = {
            "Programming": {
                "description": "Core programming languages that form the foundation of my development work",
                "icon": "fas fa-code",
                "color": "#3b82f6",
                "skills": [
                    {
                        "name": "Python",
                        "icon": "fab fa-python",
                        "proficiency": 95,
                        "experience": "3+ years",
                        "projects": "8+ projects",
                        "description": "Primary language for data science, machine learning, and web development",
                        "badge": "Expert"
                    },
                    {
                        "name": "SQL",
                        "icon": "fas fa-database",
                        "proficiency": 90,
                        "experience": "2+ years",
                        "projects": "6+ projects",
                        "description": "Database querying, optimization, and data manipulation",
                        "badge": "Expert"
                    },
                    {
                        "name": "JavaScript",
                        "icon": "fab fa-js-square",
                        "proficiency": 75,
                        "experience": "1+ years",
                        "projects": "3+ projects",
                        "description": "Frontend development and interactive web applications",
                        "badge": "Advanced"
                    },
                    {
                        "name": "HTML/CSS",
                        "icon": "fab fa-html5",
                        "proficiency": 85,
                        "experience": "2+ years",
                        "projects": "5+ projects",
                        "description": "Modern web markup and styling with responsive design",
                        "badge": "Advanced"
                    }
                ]
            },
            "Web Dev": {
                "description": "Frameworks and tools for building modern web applications",
                "icon": "fas fa-globe",
                "color": "#10b981",
                "skills": [
                    {
                        "name": "Streamlit",
                        "icon": "fas fa-rocket",
                        "proficiency": 90,
                        "experience": "1+ years",
                        "projects": "4+ projects",
                        "description": "Building interactive data applications and dashboards",
                        "badge": "Expert"
                    },
                    {
                        "name": "Flask",
                        "icon": "fas fa-flask",
                        "proficiency": 80,
                        "experience": "1+ years",
                        "projects": "2+ projects",
                        "description": "Lightweight web framework for API development",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Bootstrap",
                        "icon": "fab fa-bootstrap",
                        "proficiency": 75,
                        "experience": "1+ years",
                        "projects": "3+ projects",
                        "description": "Responsive CSS framework for rapid UI development",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Dash",
                        "icon": "fas fa-chart-line",
                        "proficiency": 70,
                        "experience": "6 months",
                        "projects": "1+ projects",
                        "description": "Python framework for building analytical web applications",
                        "badge": "Intermediate"
                    }
                ]
            },
            "Data Science": {
                "description": "Libraries and tools for data analysis, visualization, and statistical modeling",
                "icon": "fas fa-chart-bar",
                "color": "#8b5cf6",
                "skills": [
                    {
                        "name": "Pandas",
                        "icon": "fas fa-table",
                        "proficiency": 95,
                        "experience": "2+ years",
                        "projects": "8+ projects",
                        "description": "Data manipulation, cleaning, and analysis",
                        "badge": "Expert"
                    },
                    {
                        "name": "NumPy",
                        "icon": "fas fa-calculator",
                        "proficiency": 90,
                        "experience": "2+ years",
                        "projects": "6+ projects",
                        "description": "Numerical computing and mathematical operations",
                        "badge": "Expert"
                    },
                    {
                        "name": "Matplotlib",
                        "icon": "fas fa-chart-line",
                        "proficiency": 85,
                        "experience": "2+ years",
                        "projects": "6+ projects",
                        "description": "Data visualization and plotting",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Seaborn",
                        "icon": "fas fa-palette",
                        "proficiency": 85,
                        "experience": "1+ years",
                        "projects": "4+ projects",
                        "description": "Statistical data visualization",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Plotly",
                        "icon": "fas fa-chart-pie",
                        "proficiency": 80,
                        "experience": "1+ years",
                        "projects": "3+ projects",
                        "description": "Interactive data visualizations",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Tableau",
                        "icon": "fas fa-chart-area",
                        "proficiency": 80,
                        "experience": "1+ years",
                        "projects": "2+ projects",
                        "description": "Business intelligence and data visualization",
                        "badge": "Advanced"
                    }
                ]
            },
            "AI/ML": {
                "description": "Machine learning, artificial intelligence, and computer vision technologies",
                "icon": "fas fa-brain",
                "color": "#f59e0b",
                "skills": [
                    {
                        "name": "Scikit-learn",
                        "icon": "fas fa-robot",
                        "proficiency": 90,
                        "experience": "2+ years",
                        "projects": "6+ projects",
                        "description": "Machine learning algorithms and model development",
                        "badge": "Expert"
                    },
                    {
                        "name": "OpenCV",
                        "icon": "fas fa-eye",
                        "proficiency": 85,
                        "experience": "1+ years",
                        "projects": "2+ projects",
                        "description": "Computer vision and image processing",
                        "badge": "Advanced"
                    },
                    {
                        "name": "NLP",
                        "icon": "fas fa-comments",
                        "proficiency": 80,
                        "experience": "1+ years",
                        "projects": "3+ projects",
                        "description": "Natural language processing and text analysis",
                        "badge": "Advanced"
                    },
                    {
                        "name": "dlib",
                        "icon": "fas fa-user-check",
                        "proficiency": 75,
                        "experience": "6 months",
                        "projects": "1+ projects",
                        "description": "Face recognition and computer vision",
                        "badge": "Advanced"
                    }
                ]
            },
            "Databases": {
                "description": "Database management systems and data storage solutions",
                "icon": "fas fa-database",
                "color": "#ef4444",
                "skills": [
                    {
                        "name": "MySQL",
                        "icon": "fas fa-database",
                        "proficiency": 85,
                        "experience": "1+ years",
                        "projects": "3+ projects",
                        "description": "Relational database management and optimization",
                        "badge": "Advanced"
                    },
                    {
                        "name": "PostgreSQL",
                        "icon": "fas fa-elephant",
                        "proficiency": 80,
                        "experience": "6 months",
                        "projects": "2+ projects",
                        "description": "Advanced relational database with complex queries",
                        "badge": "Advanced"
                    },
                    {
                        "name": "SQLite",
                        "icon": "fas fa-file-alt",
                        "proficiency": 90,
                        "experience": "2+ years",
                        "projects": "4+ projects",
                        "description": "Lightweight database for applications and prototyping",
                        "badge": "Expert"
                    },
                    {
                        "name": "Excel",
                        "icon": "fas fa-file-excel",
                        "proficiency": 85,
                        "experience": "3+ years",
                        "projects": "10+ projects",
                        "description": "Data analysis, reporting, and business intelligence",
                        "badge": "Advanced"
                    }
                ]
            },
            "Tools": {
                "description": "Development tools, IDEs, and productivity software",
                "icon": "fas fa-tools",
                "color": "#6b7280",
                "skills": [
                    {
                        "name": "Git",
                        "icon": "fab fa-git-alt",
                        "proficiency": 85,
                        "experience": "2+ years",
                        "projects": "All projects",
                        "description": "Version control and collaborative development",
                        "badge": "Advanced"
                    },
                    {
                        "name": "Jupyter",
                        "icon": "fas fa-book",
                        "proficiency": 90,
                        "experience": "2+ years",
                        "projects": "8+ projects",
                        "description": "Interactive development and data analysis",
                        "badge": "Expert"
                    },
                    {
                        "name": "VS Code",
                        "icon": "fas fa-code",
                        "proficiency": 90,
                        "experience": "3+ years",
                        "projects": "All projects",
                        "description": "Primary IDE for development and debugging",
                        "badge": "Expert"
                    },
                    {
                        "name": "Power BI",
                        "icon": "fas fa-chart-pie",
                        "proficiency": 75,
                        "experience": "6 months",
                        "projects": "2+ projects",
                        "description": "Business analytics and data visualization",
                        "badge": "Intermediate"
                    }
                ]
            }
        }
        
        # Filter skills based on selected category and search term
        def filter_skills(selected_category, search_query=""):
            filtered_data = {}
            
            for category, data in skills_data.items():
                if selected_category == "All" or selected_category == category or \
                   (selected_category == "Programming" and category == "Programming") or \
                   (selected_category == "Web Dev" and category == "Web Dev") or \
                   (selected_category == "Data Science" and category == "Data Science") or \
                   (selected_category == "AI/ML" and category == "AI/ML") or \
                   (selected_category == "Databases" and category == "Databases") or \
                   (selected_category == "Tools" and category == "Tools"):
                    
                    # Filter skills by search term
                    if search_query:
                        filtered_skills = [
                            skill for skill in data["skills"] 
                            if search_query.lower() in skill["name"].lower() or 
                               search_query.lower() in skill["description"].lower()
                        ]
                        if filtered_skills:
                            filtered_data[category] = {**data, "skills": filtered_skills}
                    else:
                        filtered_data[category] = data
            
            return filtered_data
        
        # Get filtered skills
        filtered_skills = filter_skills(st.session_state.selected_filter, search_term)
        
        # Display skills
        for category, category_data in filtered_skills.items():
            # Category Summary
            st.markdown(f"""
            <div class="category-summary {category.lower().replace(' ', '').replace('/', '')}">
                <div class="category-title">
                    <i class="{category_data['icon']} category-icon"></i>
                    {category}
                </div>
                <p class="category-description">{category_data['description']}</p>
                <div class="category-stats">
                    <div class="category-stat">
                        <div class="category-stat-number">{len(category_data['skills'])}</div>
                        <div class="category-stat-label">Technologies</div>
                    </div>
                    <div class="category-stat">
                        <div class="category-stat-number">{sum(1 for skill in category_data['skills'] if skill['badge'] in ['Expert', 'Advanced'])}</div>
                        <div class="category-stat-label">Advanced+</div>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Skills Grid
            st.markdown('<div class="skills-grid">', unsafe_allow_html=True)
            
            skills = category_data["skills"]
            cols = st.columns(min(len(skills), 3))  # Max 3 columns
            
            for i, skill in enumerate(skills):
                col_index = i % len(cols)
                with cols[col_index]:
                    # Create skill card
                    st.markdown(f"""
                    <div class="skill-card {category.lower().replace(' ', '').replace('/', '')} animate-in">
                        <div class="skill-header">
                            <i class="{skill['icon']} skill-icon"></i>
                            <div>
                                <h3 class="skill-name">{skill['name']}</h3>
                                <div class="skill-category">{category}</div>
                            </div>
                        </div>
                        
                        <div class="skill-content">
                            <p class="skill-description">{skill['description']}</p>
                            
                            <div class="proficiency-container">
                                <div class="proficiency-label">
                                    <span>Proficiency</span>
                                    <span>{skill['badge']}</span>
                                </div>
                                <div class="proficiency-bar">
                                    <div class="proficiency-fill" style="width: {skill['proficiency']}%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-badge">
                                <i class="fas fa-star"></i>
                                {skill['badge']}
                            </div>
                        </div>
                        
                        <div class="skill-footer">
                            <div class="skill-experience">
                                <i class="fas fa-clock"></i>
                                {skill['experience']}
                            </div>
                            <div class="skill-projects">
                                {skill['projects']}
                            </div>
                        </div>
                    </div>
                    """, unsafe_allow_html=True)
            
            st.markdown('</div>', unsafe_allow_html=True)
        
        # Overall Proficiency Summary (if showing all skills)
        if st.session_state.selected_filter == "All" and not search_term:
            st.markdown('<div class="fade-in-up">', unsafe_allow_html=True)
            st.markdown('<h3 style="text-align: center; margin: 40px 0 30px 0;">Overall Proficiency Summary</h3>', unsafe_allow_html=True)
            
            # Calculate overall stats
            all_skills = []
            for cat_data in skills_data.values():
                all_skills.extend(cat_data["skills"])
            
            expert_count = sum(1 for skill in all_skills if skill['badge'] == 'Expert')
            advanced_count = sum(1 for skill in all_skills if skill['badge'] == 'Advanced')
            intermediate_count = sum(1 for skill in all_skills if skill['badge'] == 'Intermediate')
            
            summary_cols = st.columns(4)
            
            with summary_cols[0]:
                st.markdown(f"""
                <div class="stat-item-about">
                    <div class="stat-number-animated">{len(all_skills)}</div>
                    <div class="stat-label">Total Skills</div>
                </div>
                """, unsafe_allow_html=True)
            
            with summary_cols[1]:
                st.markdown(f"""
                <div class="stat-item-about">
                    <div class="stat-number-animated">{expert_count}</div>
                    <div class="stat-label">Expert Level</div>
                </div>
                """, unsafe_allow_html=True)
            
            with summary_cols[2]:
                st.markdown(f"""
                <div class="stat-item-about">
                    <div class="stat-number-animated">{advanced_count}</div>
                    <div class="stat-label">Advanced Level</div>
                </div>
                """, unsafe_allow_html=True)
            
            with summary_cols[3]:
                st.markdown(f"""
                <div class="stat-item-about">
                    <div class="stat-number-animated">{len(skills_data)}</div>
                    <div class="stat-label">Categories</div>
                </div>
                """, unsafe_allow_html=True)
            
            st.markdown('</div>', unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)

    # Projects Section
    with st.container():
        st.markdown('<div class="section fade-in" id="projects">', unsafe_allow_html=True)
        st.markdown('<h2 class="section-title">Projects</h2>', unsafe_allow_html=True)
        
        # Project 1 and 2 Row
        proj_col1, proj_col2 = st.columns(2)
        
        with proj_col1:
            st.markdown(f"""
            <div class="card project-card">
                <h3>{PROJECT_1['title']}</h3>
                <p>{PROJECT_1['description']}</p>
                
                <div class="project-tech">
                    {' '.join([f'<span class="skill-tag">{tech}</span>' for tech in PROJECT_1['technologies']])}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    {' '.join([f'<li>{feature}</li>' for feature in PROJECT_1['features']])}
                </ul>
                
                <div class="project-links">
                    <a href="{PROJECT_1['github']}" target="_blank" class="btn">View on GitHub</a>
                    {f'<a href="{PROJECT_1["demo"]}" target="_blank" class="btn btn-outline">Live Demo</a>' if PROJECT_1['demo'] else ''}
                </div>
            </div>
            """, unsafe_allow_html=True)
        
        with proj_col2:
            st.markdown(f"""
            <div class="card project-card">
                <h3>{PROJECT_2['title']}</h3>
                <p>{PROJECT_2['description']}</p>
                
                <div class="project-tech">
                    {' '.join([f'<span class="skill-tag">{tech}</span>' for tech in PROJECT_2['technologies']])}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    {' '.join([f'<li>{feature}</li>' for feature in PROJECT_2['features']])}
                </ul>
                
                <div class="project-links">
                    <a href="{PROJECT_2['github']}" target="_blank" class="btn">View on GitHub</a>
                    {f'<a href="{PROJECT_2["demo"]}" target="_blank" class="btn btn-outline">Live Demo</a>' if PROJECT_2['demo'] else ''}
                </div>
            </div>
            """, unsafe_allow_html=True)
            
        # Project 3 and 4 Row
        proj_col3, proj_col4 = st.columns(2)
        
        with proj_col3:
            st.markdown(f"""
            <div class="card project-card">
                <h3>{PROJECT_3['title']}</h3>
                <p>{PROJECT_3['description']}</p>
                
                <div class="project-tech">
                    {' '.join([f'<span class="skill-tag">{tech}</span>' for tech in PROJECT_3['technologies']])}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    {' '.join([f'<li>{feature}</li>' for feature in PROJECT_3['features']])}
                </ul>
                
                <div class="project-links">
                    <a href="{PROJECT_3['github']}" target="_blank" class="btn">View on GitHub</a>
                    {f'<a href="{PROJECT_3["demo"]}" target="_blank" class="btn btn-outline">Live Demo</a>' if PROJECT_3['demo'] else ''}
                </div>
            </div>
            """, unsafe_allow_html=True)
        
        with proj_col4:
            st.markdown(f"""
            <div class="card project-card">
                <h3>{PROJECT_4['title']}</h3>
                <p>{PROJECT_4['description']}</p>
                
                <div class="project-tech">
                    {' '.join([f'<span class="skill-tag">{tech}</span>' for tech in PROJECT_4['technologies']])}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    {' '.join([f'<li>{feature}</li>' for feature in PROJECT_4['features']])}
                </ul>
                
                <div class="project-links">
                    <a href="{PROJECT_4['github']}" target="_blank" class="btn">View on GitHub</a>
                    {f'<a href="{PROJECT_4["demo"]}" target="_blank" class="btn btn-outline">Live Demo</a>' if PROJECT_4['demo'] else ''}
                </div>
            </div>
            """, unsafe_allow_html=True)

        st.markdown('</div>', unsafe_allow_html=True)

    # Experience Section
    with st.container():
        st.markdown('<div class="section experience-section fade-in" id="experience">', unsafe_allow_html=True)
        
        # Experience Header
        st.markdown("""
        <div class="experience-header">
            <h2 class="section-title">Professional Experience</h2>
            <p class="experience-intro">
                My professional journey showcasing roles, achievements, and the technologies I've worked with.
                Each position has contributed to my growth as a data scientist and developer.
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        # Enhanced experience data with additional details
        experience_data = [
            {
                "title": EXPERIENCE_1['title'],
                "company": EXPERIENCE_1['company'],
                "duration": EXPERIENCE_1['duration'],
                "description": EXPERIENCE_1['description'],
                "achievements": EXPERIENCE_1['achievements'],
                "technologies": ["Excel", "SQL", "Python", "Data Analysis", "Web Research", "Data Visualization"],
                "company_logo": "fas fa-chart-line",
                "company_color": "#FF6B35",
                "location": "Remote",
                "employment_type": "Full-time",
                "current": True,
                "website": "https://transformsolutions.com",
                "key_metrics": [
                    {"metric": "Projects", "value": "15+", "description": "Client projects completed"},
                    {"metric": "Accuracy", "value": "98%", "description": "Data accuracy achieved"},
                    {"metric": "Efficiency", "value": "40%", "description": "Process improvement"}
                ]
            },
            {
                "title": EXPERIENCE_2['title'],
                "company": EXPERIENCE_2['company'],
                "duration": EXPERIENCE_2['duration'],
                "description": EXPERIENCE_2['description'],
                "achievements": EXPERIENCE_2['achievements'],
                "technologies": ["Logistics", "Process Optimization", "Team Collaboration", "Quality Control", "German Language"],
                "company_logo": "fab fa-amazon",
                "company_color": "#FF9900",
                "location": "Schönefeld, Germany",
                "employment_type": "Part-time",
                "current": False,
                "website": "https://amazon.com",
                "key_metrics": [
                    {"metric": "Delivery Rate", "value": "98%", "description": "On-time delivery achieved"},
                    {"metric": "Daily Orders", "value": "100+", "description": "Orders processed daily"},
                    {"metric": "Efficiency", "value": "95%", "description": "Process efficiency maintained"}
                ]
            }
        ]
        
        # Calculate duration in months for each experience
        from datetime import datetime
        
        def calculate_duration(duration_str):
            """Calculate duration in months from duration string"""
            try:
                # Parse duration strings like "June 2025 – Present" or "November 2024"
                if "Present" in duration_str:
                    start_date = duration_str.split(" – ")[0]
                    # For current positions, calculate to present
                    return f"Currently working • Started {start_date}"
                elif " – " in duration_str:
                    start, end = duration_str.split(" – ")
                    return f"Duration: {start} to {end}"
                else:
                    return f"Duration: {duration_str}"
            except:
                return duration_str
        
        # Filter controls
        st.markdown('<div class="experience-filters">', unsafe_allow_html=True)
        
        filter_col1, filter_col2, filter_col3 = st.columns(3)
        
        with filter_col1:
            show_current = st.checkbox("Show Current Position", value=True, key="show_current")
        
        with filter_col2:
            show_past = st.checkbox("Show Past Positions", value=True, key="show_past")
        
        with filter_col3:
            show_details = st.checkbox("Show All Details", value=False, key="show_details")
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Experience Timeline
        st.markdown('<div class="experience-timeline">', unsafe_allow_html=True)
        
        # Filter experiences based on user selection
        filtered_experiences = []
        for exp in experience_data:
            if (exp['current'] and show_current) or (not exp['current'] and show_past):
                filtered_experiences.append(exp)
        
        for i, exp in enumerate(filtered_experiences):
            is_current = exp['current']
            timeline_class = "current" if is_current else "past"
            
            st.markdown(f"""
            <div class="timeline-item {timeline_class} fade-in-up">
                <div class="timeline-marker">
                    <div class="timeline-dot" style="background-color: {exp['company_color']};">
                        <i class="{exp['company_logo']}" style="color: white;"></i>
                    </div>
                    <div class="timeline-line"></div>
                </div>
                
                <div class="timeline-content">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="experience-title-section">
                                <h3 class="experience-title">{exp['title']}</h3>
                                <div class="experience-company">
                                    <a href="{exp['website']}" target="_blank" class="company-link">
                                        <i class="{exp['company_logo']} company-icon" style="color: {exp['company_color']};"></i>
                                        {exp['company']}
                                    </a>
                                    {f'<span class="current-badge">Current</span>' if is_current else ''}
                                </div>
                            </div>
                            
                            <div class="experience-meta">
                                <div class="experience-duration">
                                    <i class="fas fa-calendar-alt"></i>
                                    {exp['duration']}
                                </div>
                                <div class="experience-location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    {exp['location']}
                                </div>
                                <div class="experience-type">
                                    <i class="fas fa-briefcase"></i>
                                    {exp['employment_type']}
                                </div>
                            </div>
                        </div>
                        
                        <div class="experience-description">
                            <p>{exp['description']}</p>
                        </div>
                        
                        <div class="experience-technologies">
                            <h4><i class="fas fa-tools"></i> Technologies Used</h4>
                            <div class="tech-tags">
                                {' '.join([f'<span class="tech-tag">{tech}</span>' for tech in exp['technologies']])}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Expandable achievements section
            with st.expander(f"📈 Key Achievements at {exp['company']}", expanded=show_details):
                st.markdown(f"""
                <div class="achievements-content">
                    <div class="achievements-grid">
                        <div class="achievements-list">
                            <h4>🏆 Major Accomplishments</h4>
                            <ul class="achievement-items">
                                {' '.join([f'<li><i class="fas fa-check-circle"></i> {achievement}</li>' for achievement in exp['achievements']])}
                            </ul>
                        </div>
                        
                        <div class="metrics-section">
                            <h4>📊 Key Metrics</h4>
                            <div class="metrics-grid">
                                {' '.join([f'''
                                <div class="metric-item">
                                    <div class="metric-value">{metric['value']}</div>
                                    <div class="metric-label">{metric['metric']}</div>
                                    <div class="metric-description">{metric['description']}</div>
                                </div>
                                ''' for metric in exp['key_metrics']])}
                            </div>
                        </div>
                    </div>
                    
                    <div class="experience-impact">
                        <h4>🎯 Impact & Learning</h4>
                        <p>This role significantly contributed to my development in:</p>
                        <div class="impact-areas">
                            {' '.join([f'<span class="impact-tag">{tech}</span>' for tech in exp['technologies'][:3]])}
                        </div>
                    </div>
                </div>
                """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Experience Summary
        st.markdown('<div class="experience-summary fade-in-up">', unsafe_allow_html=True)
        
        summary_cols = st.columns(4)
        
        with summary_cols[0]:
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{len(experience_data)}</div>
                <div class="summary-label">Total Positions</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[1]:
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{len([exp for exp in experience_data if exp['current']])}</div>
                <div class="summary-label">Current Role</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[2]:
            # Calculate total unique technologies
            all_technologies = set()
            for exp in experience_data:
                all_technologies.update(exp['technologies'])
            
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{len(all_technologies)}</div>
                <div class="summary-label">Technologies Used</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[3]:
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">1+</div>
                <div class="summary-label">Years Experience</div>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)

    # Education Section
    with st.container():
        st.markdown('<div class="section education-section fade-in" id="education">', unsafe_allow_html=True)
        
        # Education Header
        st.markdown("""
        <div class="education-header">
            <h2 class="section-title">Education & Academic Background</h2>
            <p class="education-intro">
                My academic journey and educational achievements that provided the foundation for my 
                career in technology and data science.
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        # Enhanced education data with comprehensive details
        education_data = [
            {
                "degree": EDUCATION_1['degree'],
                "major": "Information Technology",
                "institution": EDUCATION_1['institution'],
                "location": "Vadodara, Gujarat, India",
                "year": EDUCATION_1['year'],
                "duration": "3 years",
                "gpa": EDUCATION_1['gpa'],
                "gpa_scale": "10.0",
                "relevant_courses": EDUCATION_1['relevant_courses'],
                "thesis": EDUCATION_1['thesis'],
                "degree_type": "Bachelor's",
                "institution_logo": "fas fa-university",
                "institution_color": "#2563eb",
                "institution_website": "https://paruluniversity.ac.in",
                "status": "Graduated",
                "coursework": [
                    {
                        "name": "Data Structures and Algorithms",
                        "code": "IT301",
                        "description": "Advanced data structures, algorithm design, complexity analysis, and optimization techniques",
                        "grade": "A+",
                        "credits": 4
                    },
                    {
                        "name": "Database Management Systems",
                        "code": "IT302",
                        "description": "Relational databases, SQL, normalization, database design, and administration",
                        "grade": "A",
                        "credits": 4
                    },
                    {
                        "name": "Machine Learning",
                        "code": "IT401",
                        "description": "Supervised and unsupervised learning, neural networks, and practical ML applications",
                        "grade": "A+",
                        "credits": 4
                    },
                    {
                        "name": "Computer Vision",
                        "code": "IT402",
                        "description": "Image processing, object detection, facial recognition, and OpenCV implementation",
                        "grade": "A+",
                        "credits": 3
                    },
                    {
                        "name": "Software Engineering",
                        "code": "IT303",
                        "description": "Software development lifecycle, design patterns, testing, and project management",
                        "grade": "A",
                        "credits": 3
                    },
                    {
                        "name": "Web Development",
                        "code": "IT304",
                        "description": "Full-stack web development, HTML/CSS, JavaScript, and modern frameworks",
                        "grade": "A",
                        "credits": 3
                    }
                ],
                "academic_projects": [
                    {
                        "title": "Face Recognition Attendance System",
                        "description": "Capstone project achieving 95% accuracy using OpenCV and dlib for automated attendance tracking",
                        "technologies": ["Python", "OpenCV", "dlib", "SQLite"],
                        "grade": "A+",
                        "year": "2023"
                    },
                    {
                        "title": "E-commerce Database Design",
                        "description": "Comprehensive database design project for online retail system with advanced queries",
                        "technologies": ["MySQL", "Database Design", "SQL"],
                        "grade": "A",
                        "year": "2022"
                    },
                    {
                        "title": "Machine Learning Portfolio",
                        "description": "Collection of ML projects including classification, regression, and clustering algorithms",
                        "technologies": ["Python", "Scikit-learn", "Pandas", "NumPy"],
                        "grade": "A+",
                        "year": "2022"
                    }
                ],
                "achievements": [
                    {
                        "title": "Dean's List",
                        "description": "Academic excellence recognition for maintaining high GPA",
                        "year": "2022-2023",
                        "icon": "fas fa-medal"
                    },
                    {
                        "title": "Best Capstone Project",
                        "description": "Recognition for outstanding final year project in Computer Vision",
                        "year": "2023",
                        "icon": "fas fa-trophy"
                    },
                    {
                        "title": "Technology Innovation Award",
                        "description": "Award for innovative application of AI in practical solutions",
                        "year": "2023",
                        "icon": "fas fa-award"
                    }
                ],
                "extracurricular": [
                    {
                        "activity": "Coding Club President",
                        "description": "Led programming workshops and coding competitions for 200+ students",
                        "year": "2022-2023",
                        "icon": "fas fa-users"
                    },
                    {
                        "activity": "Tech Symposium Organizer",
                        "description": "Organized annual technology symposium with industry speakers",
                        "year": "2022",
                        "icon": "fas fa-calendar-alt"
                    },
                    {
                        "activity": "Research Assistant",
                        "description": "Assisted faculty in computer vision research projects",
                        "year": "2022-2023",
                        "icon": "fas fa-microscope"
                    }
                ]
            }
        ]
        
        # Education filters
        st.markdown('<div class="education-filters">', unsafe_allow_html=True)
        
        filter_col1, filter_col2, filter_col3 = st.columns(3)
        
        with filter_col1:
            show_coursework = st.checkbox("Show Detailed Coursework", value=False, key="show_coursework")
        
        with filter_col2:
            show_projects = st.checkbox("Show Academic Projects", value=False, key="show_projects")
        
        with filter_col3:
            show_achievements = st.checkbox("Show All Achievements", value=False, key="show_achievements")
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Education Cards
        for edu in education_data:
            st.markdown(f"""
            <div class="education-card fade-in-up">
                <div class="education-header-card">
                    <div class="education-institution">
                        <div class="institution-logo" style="background-color: {edu['institution_color']};">
                            <i class="{edu['institution_logo']}"></i>
                        </div>
                        <div class="institution-details">
                            <h3 class="institution-name">
                                <a href="{edu['institution_website']}" target="_blank" class="institution-link">
                                    {edu['institution']}
                                </a>
                            </h3>
                            <p class="institution-location">
                                <i class="fas fa-map-marker-alt"></i>
                                {edu['location']}
                            </p>
                        </div>
                    </div>
                    
                    <div class="education-status">
                        <span class="status-badge graduated">{edu['status']}</span>
                    </div>
                </div>
                
                <div class="education-content">
                    <div class="degree-info">
                        <h2 class="degree-title">{edu['degree']}</h2>
                        <p class="degree-major">Major: {edu['major']}</p>
                        
                        <div class="education-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>{edu['year']}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span>{edu['duration']}</span>
                            </div>
                            <div class="meta-item gpa-highlight">
                                <i class="fas fa-chart-line"></i>
                                <span>GPA: {edu['gpa']}/{edu['gpa_scale']}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="thesis-section">
                        <h4><i class="fas fa-graduation-cap"></i> Thesis Project</h4>
                        <p class="thesis-title">{edu['thesis']}</p>
                        <p class="thesis-description">
                            Final year capstone project demonstrating practical application of computer vision 
                            and machine learning techniques for real-world problem solving.
                        </p>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Expandable Coursework Section
            with st.expander("📚 Detailed Coursework & Grades", expanded=show_coursework):
                st.markdown("""
                <div class="coursework-content">
                    <h4>Core Courses & Academic Performance</h4>
                    <div class="coursework-grid">
                """, unsafe_allow_html=True)
                
                for course in edu['coursework']:
                    st.markdown(f"""
                    <div class="course-card">
                        <div class="course-header">
                            <h5 class="course-name">{course['name']}</h5>
                            <div class="course-grade grade-{course['grade'].lower().replace('+', 'plus')}">{course['grade']}</div>
                        </div>
                        <div class="course-code">{course['code']} • {course['credits']} Credits</div>
                        <p class="course-description">{course['description']}</p>
                    </div>
                    """, unsafe_allow_html=True)
                
                st.markdown('</div></div>', unsafe_allow_html=True)
                
                # Course Statistics
                total_credits = sum(course['credits'] for course in edu['coursework'])
                a_plus_courses = sum(1 for course in edu['coursework'] if course['grade'] == 'A+')
                
                stats_cols = st.columns(3)
                with stats_cols[0]:
                    st.markdown(f"""
                    <div class="course-stat">
                        <div class="stat-value">{len(edu['coursework'])}</div>
                        <div class="stat-label">Core Courses</div>
                    </div>
                    """, unsafe_allow_html=True)
                
                with stats_cols[1]:
                    st.markdown(f"""
                    <div class="course-stat">
                        <div class="stat-value">{total_credits}</div>
                        <div class="stat-label">Total Credits</div>
                    </div>
                    """, unsafe_allow_html=True)
                
                with stats_cols[2]:
                    st.markdown(f"""
                    <div class="course-stat">
                        <div class="stat-value">{a_plus_courses}</div>
                        <div class="stat-label">A+ Grades</div>
                    </div>
                    """, unsafe_allow_html=True)
            
            # Expandable Academic Projects Section
            with st.expander("🔬 Academic Projects & Research", expanded=show_projects):
                st.markdown("""
                <div class="projects-content">
                    <h4>Major Academic Projects</h4>
                """, unsafe_allow_html=True)
                
                for project in edu['academic_projects']:
                    st.markdown(f"""
                    <div class="academic-project-card">
                        <div class="project-header">
                            <h5 class="project-title">{project['title']}</h5>
                            <div class="project-grade grade-{project['grade'].lower().replace('+', 'plus')}">{project['grade']}</div>
                        </div>
                        <div class="project-year">Academic Year: {project['year']}</div>
                        <p class="project-description">{project['description']}</p>
                        <div class="project-technologies">
                            <strong>Technologies:</strong>
                            <div class="tech-tags">
                                {' '.join([f'<span class="tech-tag">{tech}</span>' for tech in project['technologies']])}
                            </div>
                        </div>
                    </div>
                    """, unsafe_allow_html=True)
                
                st.markdown('</div>', unsafe_allow_html=True)
            
            # Expandable Achievements & Activities Section
            with st.expander("🏆 Achievements & Extracurricular Activities", expanded=show_achievements):
                st.markdown("""
                <div class="achievements-content">
                    <div class="achievements-section">
                        <h4>Academic Achievements</h4>
                        <div class="achievements-grid">
                """, unsafe_allow_html=True)
                
                for achievement in edu['achievements']:
                    st.markdown(f"""
                    <div class="achievement-card">
                        <div class="achievement-icon">
                            <i class="{achievement['icon']}"></i>
                        </div>
                        <div class="achievement-details">
                            <h5 class="achievement-title">{achievement['title']}</h5>
                            <p class="achievement-description">{achievement['description']}</p>
                            <div class="achievement-year">{achievement['year']}</div>
                        </div>
                    </div>
                    """, unsafe_allow_html=True)
                
                st.markdown("""
                        </div>
                    </div>
                    
                    <div class="extracurricular-section">
                        <h4>Extracurricular Activities</h4>
                        <div class="activities-grid">
                """, unsafe_allow_html=True)
                
                for activity in edu['extracurricular']:
                    st.markdown(f"""
                    <div class="activity-card">
                        <div class="activity-icon">
                            <i class="{activity['icon']}"></i>
                        </div>
                        <div class="activity-details">
                            <h5 class="activity-title">{activity['activity']}</h5>
                            <p class="activity-description">{activity['description']}</p>
                            <div class="activity-year">{activity['year']}</div>
                        </div>
                    </div>
                    """, unsafe_allow_html=True)
                
                st.markdown('</div></div></div>', unsafe_allow_html=True)
        
        # Education Summary
        st.markdown('<div class="education-summary fade-in-up">', unsafe_allow_html=True)
        
        summary_cols = st.columns(4)
        
        with summary_cols[0]:
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{len(education_data)}</div>
                <div class="summary-label">Degree Earned</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[1]:
            total_coursework = sum(len(edu['coursework']) for edu in education_data)
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{total_coursework}</div>
                <div class="summary-label">Courses Completed</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[2]:
            total_projects = sum(len(edu['academic_projects']) for edu in education_data)
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{total_projects}</div>
                <div class="summary-label">Academic Projects</div>
            </div>
            """, unsafe_allow_html=True)
        
        with summary_cols[3]:
            total_achievements = sum(len(edu['achievements']) for edu in education_data)
            st.markdown(f"""
            <div class="summary-stat">
                <div class="summary-number">{total_achievements}</div>
                <div class="summary-label">Achievements</div>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        # Languages Section
        st.markdown('<div class="languages-section fade-in-up">', unsafe_allow_html=True)
        st.markdown('<h3>Languages</h3>', unsafe_allow_html=True)
        
        lang_cols = st.columns(len(LANGUAGES))
        
        for i, (lang, level) in enumerate(LANGUAGES.items()):
            with lang_cols[i]:
                st.markdown(f"""
                <div class="language-card">
                    <div class="language-name">{lang}</div>
                    <div class="language-level">{level}</div>
                    <div class="language-progress">
                        <div class="progress-bar {level.lower().replace(' ', '-')}"></div>
                    </div>
                </div>
                """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)

    # Contact Section
    with st.container():
        st.markdown('<div class="section contact-section fade-in" id="contact">', unsafe_allow_html=True)
        
        # Contact Header
        st.markdown("""
        <div class="contact-header">
            <h2 class="section-title">Let's Work Together</h2>
            <p class="contact-intro">
                Ready to bring your next project to life? I'm always excited to discuss new opportunities, 
                collaborate on innovative solutions, or simply connect with fellow technology enthusiasts.
            </p>
        </div>
        """, unsafe_allow_html=True)
        
        # Availability Status
        st.markdown("""
        <div class="availability-status">
            <div class="status-indicator available">
                <div class="status-dot"></div>
                <span class="status-text">Available for new projects</span>
            </div>
            <div class="timezone-info">
                <i class="fas fa-clock"></i>
                <span>India Standard Time (IST) • Typically respond within 24 hours</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
        # Contact Content
        contact_col1, contact_col2 = st.columns([3, 2])
        
        with contact_col1:
            st.markdown("""
            <div class="contact-form-container">
                <h3><i class="fas fa-paper-plane"></i> Send me a message</h3>
                <p class="form-description">
                    Whether you have a project in mind, want to discuss collaboration opportunities, 
                    or just want to say hello, I'd love to hear from you!
                </p>
            </div>
            """, unsafe_allow_html=True)
            
            # Contact Form with Validation
            with st.form("contact_form", clear_on_submit=True):
                # Form fields
                col1, col2 = st.columns(2)
                
                with col1:
                    name = st.text_input(
                        "Full Name *",
                        placeholder="Enter your full name",
                        help="Required field"
                    )
                
                with col2:
                    email = st.text_input(
                        "Email Address *",
                        placeholder="your.email@example.com",
                        help="Required field"
                    )
                
                company = st.text_input(
                    "Company/Organization",
                    placeholder="Your company or organization (optional)"
                )
                
                subject = st.selectbox(
                    "Subject *",
                    [
                        "Select a subject...",
                        "💼 Job Opportunity",
                        "🤝 Collaboration Proposal",
                        "📊 Data Science Project",
                        "🔧 Technical Consultation",
                        "🎓 Academic/Research Inquiry",
                        "💬 General Question",
                        "🚀 Startup/Freelance Project",
                        "Other"
                    ],
                    help="Please select the most relevant subject"
                )
                
                message = st.text_area(
                    "Message *",
                    placeholder="Tell me about your project, requirements, timeline, or any questions you have...",
                    height=120,
                    help="Please provide as much detail as possible"
                )
                
                # Privacy checkbox
                privacy_consent = st.checkbox(
                    "I consent to having this website store my submitted information for communication purposes.",
                    help="Your information will only be used to respond to your inquiry"
                )
                
                # Submit button
                submitted = st.form_submit_button(
                    "Send Message",
                    use_container_width=True,
                    type="primary"
                )
                
                # Form validation and handling
                if submitted:
                    errors = []
                    
                    # Validate required fields
                    if not name.strip():
                        errors.append("Full name is required")
                    
                    if not email.strip():
                        errors.append("Email address is required")
                    elif "@" not in email or "." not in email:
                        errors.append("Please enter a valid email address")
                    
                    if subject == "Select a subject...":
                        errors.append("Please select a subject")
                    
                    if not message.strip():
                        errors.append("Message is required")
                    elif len(message.strip()) < 10:
                        errors.append("Message must be at least 10 characters long")
                    
                    if not privacy_consent:
                        errors.append("Please consent to data storage for communication purposes")
                    
                    # Display results
                    if errors:
                        st.error("Please fix the following errors:")
                        for error in errors:
                            st.write(f"• {error}")
                    else:
                        st.success("✅ Thank you for your message! I'll get back to you within 24 hours.")
                        st.info(f"""
                        **Message Summary:**
                        - **From:** {name} ({email})
                        - **Company:** {company if company else 'Not specified'}
                        - **Subject:** {subject}
                        - **Message:** {message[:100]}{'...' if len(message) > 100 else ''}
                        
                        *Note: This is a demo. In a production environment, this would be sent to the site owner.*
                        """)
            
            # Alternative contact note
            st.markdown("""
            <div class="alternative-contact">
                <p><i class="fas fa-info-circle"></i> 
                Prefer a different method? You can also reach me directly via email or phone using the contact information on the right.</p>
            </div>
            """, unsafe_allow_html=True)
        
        with contact_col2:
            # Direct Contact Information
            st.markdown(f"""
            <div class="contact-info-card">
                <h3><i class="fas fa-address-card"></i> Contact Information</h3>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="contact-icon email">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <a href="mailto:{EMAIL}" class="contact-link">{EMAIL}</a>
                            <p class="contact-note">Best for detailed discussions</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon phone">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <a href="tel:{PHONE}" class="contact-link">{PHONE}</a>
                            <p class="contact-note">Available 9 AM - 6 PM IST</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="contact-icon location">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Location</h4>
                            <span class="contact-text">{LOCATION}</span>
                            <p class="contact-note">Open to remote work globally</p>
                        </div>
                    </div>
                </div>
                
                <div class="response-expectations">
                    <h4><i class="fas fa-clock"></i> Response Time</h4>
                    <div class="response-times">
                        <div class="response-item">
                            <span class="response-method">Email/Form:</span>
                            <span class="response-time">Within 24 hours</span>
                        </div>
                        <div class="response-item">
                            <span class="response-method">Phone/WhatsApp:</span>
                            <span class="response-time">Within 4 hours</span>
                        </div>
                        <div class="response-item">
                            <span class="response-method">LinkedIn:</span>
                            <span class="response-time">Within 48 hours</span>
                        </div>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Social Media Links
            st.markdown(f"""
            <div class="social-media-card">
                <h3><i class="fas fa-share-alt"></i> Connect on Social Media</h3>
                <div class="social-links-grid">
                    <a href="{SOCIAL_LINKS['github']}" target="_blank" class="social-link github" title="GitHub">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                        <small>View my code</small>
                    </a>
                    
                    <a href="{SOCIAL_LINKS['linkedin']}" target="_blank" class="social-link linkedin" title="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                        <small>Professional network</small>
                    </a>
                    
                    <a href="mailto:{EMAIL}" class="social-link email" title="Email">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                        <small>Direct contact</small>
                    </a>
                    
                    <a href="tel:{PHONE}" class="social-link phone" title="Phone">
                        <i class="fas fa-phone"></i>
                        <span>Call</span>
                        <small>Voice chat</small>
                    </a>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Collaboration Call-to-Action
            st.markdown("""
            <div class="collaboration-cta">
                <h4><i class="fas fa-handshake"></i> Let's Collaborate!</h4>
                <p>I'm always interested in:</p>
                <ul class="collaboration-list">
                    <li><i class="fas fa-chart-line"></i> Data Science & Analytics Projects</li>
                    <li><i class="fas fa-robot"></i> Machine Learning Applications</li>
                    <li><i class="fas fa-globe"></i> Web Development & Automation</li>
                    <li><i class="fas fa-graduation-cap"></i> Research & Academic Collaboration</li>
                    <li><i class="fas fa-users"></i> Open Source Contributions</li>
                </ul>
            </div>
            """, unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)

    # Enhanced Footer
    with st.container():
        st.markdown("""
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-brand">
                        <h3>Aarya Mody</h3>
                        <p>Data Scientist & Python Developer</p>
                        <p class="footer-tagline">Transforming data into actionable insights</p>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <nav class="footer-nav">
                        <a href="#about" class="footer-link">Home</a>
                        <a href="#about-detailed" class="footer-link">About</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#experience" class="footer-link">Experience</a>
                        <a href="#education" class="footer-link">Education</a>
                        <a href="#contact" class="footer-link">Contact</a>
                    </nav>
                </div>
                
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="footer-social">
                        <a href="{SOCIAL_LINKS['github']}" target="_blank" class="footer-social-link" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="{SOCIAL_LINKS['linkedin']}" target="_blank" class="footer-social-link" title="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="mailto:{EMAIL}" class="footer-social-link" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="tel:{PHONE}" class="footer-social-link" title="Phone">
                            <i class="fas fa-phone"></i>
                        </a>
                    </div>
                    <div class="footer-contact-info">
                        <p><i class="fas fa-envelope"></i> {EMAIL}</p>
                        <p><i class="fas fa-map-marker-alt"></i> {LOCATION}</p>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Portfolio</h4>
                    <div class="footer-stats">
                        <div class="footer-stat">
                            <span class="stat-number">{STATS['projects_completed']}</span>
                            <span class="stat-label">Projects</span>
                        </div>
                        <div class="footer-stat">
                            <span class="stat-number">{STATS['best_accuracy']}</span>
                            <span class="stat-label">Best Accuracy</span>
                        </div>
                        <div class="footer-stat">
                            <span class="stat-number">{STATS['technologies']}</span>
                            <span class="stat-label">Technologies</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; 2025 {NAME}. All rights reserved.</p>
                        <p class="built-with">Built with <i class="fas fa-heart"></i> using Streamlit & Python</p>
                    </div>
                    
                    <div class="footer-disclaimer">
                        <p>This portfolio showcases personal and professional projects. All data and metrics are accurate as of the last update.</p>
                    </div>
                    
                    <div class="back-to-top">
                        <a href="#about" class="back-to-top-btn" title="Back to top">
                            <i class="fas fa-arrow-up"></i>
                            <span>Top</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        """, unsafe_allow_html=True)
    
    # Add JavaScript functionality
    add_js_functionality()

# Run the main function
if __name__ == "__main__":
    main()
