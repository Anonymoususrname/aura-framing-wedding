/**
 * components.js
 * Self-contained interactive components:
 *  - Testimonial carousel (auto + manual dots)
 *  - Scroll Reveal (IntersectionObserver)
 *  - Form submit feedback
 */

/* ═══════════════════════════════════════════
   TESTIMONIAL CAROUSEL
═══════════════════════════════════════════ */
(function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial');
  const dots   = document.querySelectorAll('.t-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function show(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() {
    show((current + 1) % slides.length);
  }

  function startAutoplay() {
    timer = setInterval(next, 4500);
  }

  function stopAutoplay() {
    clearInterval(timer);
  }

  // Manual dot clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      show(parseInt(dot.dataset.t, 10));
      startAutoplay(); // restart timer after manual interaction
    });
  });

  startAutoplay();
})();


/* ═══════════════════════════════════════════
   SCROLL REVEAL
   Observes all .reveal elements across ALL
   pages (including ones not yet visible).
   Called on init and after every page switch.
═══════════════════════════════════════════ */
window.ScrollReveal = (function () {
  let observer;

  function createObserver() {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger each visible element slightly
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:   0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );
  }

  function observe() {
    if (observer) observer.disconnect();
    observer = createObserver();

    // Only observe .reveal elements inside the currently active page
    const activePage = document.querySelector('.page.active');
    if (!activePage) return;

    activePage.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observer.observe(el);
    });
  }

  // Initial call
  observe();

  return { observe };
})();


/* ═══════════════════════════════════════════
   FORM SUBMIT FEEDBACK
   Shows a success message on any .btn-submit
   click instead of a real form POST.
═══════════════════════════════════════════ */
(function initForms() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-submit');
    if (!btn) return;

    const original = btn.textContent;
    btn.textContent       = '✦  Sent — we\'ll be in touch soon!';
    btn.style.background  = 'var(--gold-dark)';
    btn.style.letterSpacing = '0.12em';

    setTimeout(() => {
      btn.textContent       = original;
      btn.style.background  = '';
      btn.style.letterSpacing = '';
    }, 4000);
  });
})();
