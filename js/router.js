/**
 * router.js
 * Handles client-side navigation between pages.
 *
 * How it works:
 *  1. User clicks any element with [data-page="X"]
 *  2. A gold overlay animates scaleY 0→1 (from bottom)
 *  3. Mid-transition: old page hidden, new page shown
 *  4. Overlay animates scaleY 1→0 (from top)
 *  5. Scroll-reveal is re-triggered for the new page
 */

const Router = (function () {

  /* ── State ─────────────────────────────────── */
  let activePage      = document.getElementById('page-home');
  let isTransitioning = false;

  const overlay = document.getElementById('transition-overlay');
  const navbar  = document.getElementById('navbar');

  /* ── Scroll-aware nav styling ──────────────── */
  function updateNavOnScroll() {
    const scrolled = activePage.scrollTop > 50;
    navbar.classList.toggle('scrolled', scrolled);
  }

  // Bind scroll on the initial page
  activePage.addEventListener('scroll', updateNavOnScroll);

  /* ── Core navigate function ────────────────── */
  function navigateTo(pageId) {
    if (isTransitioning) return;

    const target = document.getElementById('page-' + pageId);
    if (!target || target === activePage) return;

    isTransitioning = true;

    /* -- Step 1: overlay sweeps up ------------- */
    overlay.style.transition       = 'transform 0.4s cubic-bezier(0.77,0,0.175,1)';
    overlay.style.transformOrigin  = 'bottom';
    overlay.style.transform        = 'scaleY(1)';

    setTimeout(() => {

      /* -- Step 2: swap pages at mid-transition - */
      activePage.classList.remove('active');
      activePage.classList.add('exit');

      target.classList.add('active');
      target.scrollTop = 0;                // reset scroll position

      // Unbind old, bind new scroll listener
      activePage.removeEventListener('scroll', updateNavOnScroll);
      activePage = target;
      activePage.addEventListener('scroll', updateNavOnScroll);
      updateNavOnScroll();                 // check initial scroll state

      /* -- Step 3: update nav active state ------ */
      document.querySelectorAll('.nav-links a').forEach((a) => {
        a.classList.toggle('active', a.dataset.page === pageId);
      });

      /* -- Step 4: re-run scroll reveals --------- */
      if (window.ScrollReveal) window.ScrollReveal.observe();

      /* -- Step 5: overlay sweeps down ----------- */
      setTimeout(() => {
        overlay.style.transformOrigin = 'top';
        overlay.style.transform       = 'scaleY(0)';

        setTimeout(() => {
          // Clean up .exit class from old page
          document.querySelectorAll('.page.exit').forEach((p) =>
            p.classList.remove('exit')
          );
          isTransitioning = false;
        }, 420);

      }, 100);

    }, 420); // wait for overlay to fully cover screen
  }

  /* ── Global click delegation ───────────────── */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    e.preventDefault();
    navigateTo(link.dataset.page);
    // Close mobile nav if open
    document.body.classList.remove('mobile-nav-open');
  });

  /* ── Hamburger / mobile nav ────────────────── */
  document.getElementById('hamburger').addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-open');
  });

  document.getElementById('closeNav').addEventListener('click', () => {
    document.body.classList.remove('mobile-nav-open');
  });

  /* ── Public API ────────────────────────────── */
  return { navigateTo };

})();
