/**
 * cursor.js
 * Drives the custom gold dot + ring cursor.
 * The dot snaps instantly; the ring follows with
 * a smooth lerp (linear interpolation) lag.
 */

(function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  // Current mouse position
  let mx = 0, my = 0;
  // Ring's smoothed position
  let rx = 0, ry = 0;

  /* ── Track mouse ─────────────────────────── */
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    // Dot follows instantly
    dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  /* ── Click shrink feedback ───────────────── */
  document.addEventListener('mousedown', () => {
    dot.style.transform += ' scale(0.5)';
  });
  document.addEventListener('mouseup', () => {
    // Reset: will be overridden on next mousemove
  });

  /* ── Hover enlargement on interactive els ── */
  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest('a, button, [data-page], .t-dot, .job-apply');
    if (el) {
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px) scale(1.6)`;
      ring.style.opacity   = '0.5';
    }
  });

  document.addEventListener('mouseout', (e) => {
    const el = e.target.closest('a, button, [data-page], .t-dot, .job-apply');
    if (el) {
      ring.style.opacity = '1';
    }
  });

  /* ── Ring lerp animation loop ────────────── */
  function animateRing() {
    // Lerp factor: higher = snappier, lower = laggier
    const LERP = 0.12;
    rx += (mx - rx) * LERP;
    ry += (my - ry) * LERP;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
})();
