/* CACCHT site — scroll reveals only. Without JS the page is fully readable. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll reveals ── */

  if (!reduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.card, .method__col, .pub, .people li, .shead');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + 'ms';
      io.observe(el);
    });
  }
})();
