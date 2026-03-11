/**
 * loader.js
 * Hides the full-screen intro loader after the
 * page has loaded, then triggers the hero
 * background zoom-in animation.
 */

(function initLoader() {
  const loader  = document.getElementById('loader');
  const heroBg  = document.getElementById('heroBg');

  /* Wait for all assets, then dismiss loader */
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Fade out the loader overlay
      loader.classList.add('hidden');

      // Trigger hero background scale animation
      if (heroBg) heroBg.classList.add('zoomed');

    }, 2200); // Show loader for at least 2.2s
  });
})();
