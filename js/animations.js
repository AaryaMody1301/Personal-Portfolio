// Hero section animations and effects
document.addEventListener('DOMContentLoaded', function () {
    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
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

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image loading effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('load', function () {
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

// Add animation when elements come into view
window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
});
