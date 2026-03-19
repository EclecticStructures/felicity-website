/* =========================================
   FELICITY CONTRACT FURNISHINGS
   main.js
   ========================================= */

// ----- Nav scroll state -----
const nav        = document.getElementById('nav');
const navToggle  = document.getElementById('nav-toggle');
const navLinks   = document.getElementById('nav-links');
const wordmarkSub = document.querySelector('.wordmark-sub');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('scrolled', scrolled);

    // On mobile home page, fade "Contract Furnishings" as Felicity slots into nav
    if (wordmarkSub && window.innerWidth <= 768) {
        wordmarkSub.classList.toggle('fade-nav', scrolled);
    }
}, { passive: true });

// ----- Hamburger toggle -----
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when tapping outside
    document.addEventListener('click', e => {
        if (navLinks.classList.contains('open') && !nav.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ----- Fade-in on scroll -----
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => fadeObserver.observe(el));
