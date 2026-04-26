// assets/js/menu-reveal-after-scrolling.js
document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.reveal-after-scrolling');
  if (!bar) return;

  const THRESHOLD_PX = 350; // reveal after 350px of scroll

  function update() {
    const y = window.scrollY || window.pageYOffset || 0;
    bar.classList.toggle('is-on', y >= THRESHOLD_PX);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('pageshow', update); // bfcache
});