/* =========================================
   FELICITY CONTRACT FURNISHINGS
   main.js
   ========================================= */

// ----- Nav scroll state -----
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

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
