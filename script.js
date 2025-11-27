// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add/remove scrolled class based on scroll position
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.glass-card, .section-title');

    animatedElements.forEach(el => {
        // Set initial state for animation
        if (!el.classList.contains('animate-fadeInUp')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }

        observer.observe(el);
    });
});

// ============================================
// MOBILE MENU TOGGLE (Optional Enhancement)
// ============================================
// Uncomment if you want to add a mobile menu toggle button

/*
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.style.cssText = `
    display: none;
    background: none;
    border: none;
    color: var(--color-text-primary);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
`;

const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

navContainer.insertBefore(mobileMenuBtn, navMenu);

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Add mobile menu styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block !important;
        }
        
        .nav-menu {
            display: flex !important;
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease-in-out;
            border-bottom: 1px solid var(--glass-border);
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
*/

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Welcome to Vaishnavi\'s Portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS & JavaScript', 'color: #3b82f6; font-size: 14px;');
