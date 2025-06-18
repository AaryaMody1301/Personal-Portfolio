"""
Resume Information Extractor for Portfolio
This tool helps you manually input information from your resume PDFs into your portfolio.
Run this to easily update your portfolio with resume details.
"""

import streamlit as st
import os

def extract_pdf_info():
    """
    Helper function to manually input information from PDFs
    Run this separately to help populate your portfolio data
    """
    
    st.title("📄 PDF Information Extractor")
    st.write("Use this tool to help extract and organize information from your PDFs")
    
    # Personal Information
    st.header("Personal Information")
    name = st.text_input("Full Name", "Aarya Mody")
    title = st.text_input("Professional Title", "Software Developer & Data Scientist")
    email = st.text_input("Email")
    phone = st.text_input("Phone")
    location = st.text_input("Location")
    github = st.text_input("GitHub URL")
    linkedin = st.text_input("LinkedIn URL")
    bio = st.text_area("Bio/Summary")
    
    # Skills
    st.header("Skills")
    programming_langs = st.text_area("Programming Languages (comma separated)")
    web_dev = st.text_area("Web Development Technologies")
    data_science = st.text_area("Data Science Tools")
    databases = st.text_area("Databases")
    tools = st.text_area("Tools & Technologies")
    
    # Projects
    st.header("Projects")
    num_projects = st.number_input("Number of projects", min_value=1, max_value=10, value=3)
    
    projects_data = []
    for i in range(int(num_projects)):
        st.subheader(f"Project {i+1}")
        project_title = st.text_input(f"Project Title {i+1}")
        project_desc = st.text_area(f"Project Description {i+1}")
        project_tech = st.text_input(f"Technologies Used {i+1}")
        project_github = st.text_input(f"GitHub URL {i+1}")
        project_demo = st.text_input(f"Demo URL {i+1}")
        
        projects_data.append({
            "title": project_title,
            "description": project_desc,
            "technologies": project_tech.split(",") if project_tech else [],
            "github": project_github,
            "demo": project_demo
        })
    
    # Experience
    st.header("Work Experience")
    num_experience = st.number_input("Number of work experiences", min_value=0, max_value=10, value=2)
    
    experience_data = []
    for i in range(int(num_experience)):
        st.subheader(f"Experience {i+1}")
        exp_title = st.text_input(f"Job Title {i+1}")
        exp_company = st.text_input(f"Company {i+1}")
        exp_duration = st.text_input(f"Duration {i+1}")
        exp_desc = st.text_area(f"Description {i+1}")
        exp_achievements = st.text_area(f"Achievements {i+1} (one per line)")
        
        experience_data.append({
            "title": exp_title,
            "company": exp_company,
            "duration": exp_duration,
            "description": exp_desc,
            "achievements": exp_achievements.split("\n") if exp_achievements else []
        })
    
    # Education
    st.header("Education")
    degree = st.text_input("Degree")
    institution = st.text_input("Institution")
    year = st.text_input("Year")
    gpa = st.text_input("GPA")
    courses = st.text_area("Relevant Courses (comma separated)")
    
    # Generate code
    if st.button("Generate Portfolio Code"):
        st.header("Generated Code")
        st.write("Copy this code and replace the corresponding sections in portfolio.py:")
        
        # Personal info code
        personal_info_code = f'''
PERSONAL_INFO = {{
    "name": "{name}",
    "title": "{title}",
    "email": "{email}",
    "phone": "{phone}",
    "location": "{location}",
    "github": "{github}",
    "linkedin": "{linkedin}",
    "bio": """{bio}"""
}}
'''
        
        st.code(personal_info_code, language="python")
        
        # Skills code
        skills_code = f'''
SKILLS = {{
    "Programming Languages": {str(programming_langs.split(",") if programming_langs else [])},
    "Web Development": {str(web_dev.split(",") if web_dev else [])},
    "Data Science": {str(data_science.split(",") if data_science else [])},
    "Databases": {str(databases.split(",") if databases else [])},
    "Tools & Technologies": {str(tools.split(",") if tools else [])}
}}
'''
        
        st.code(skills_code, language="python")

if __name__ == "__main__":
    extract_pdf_info()
