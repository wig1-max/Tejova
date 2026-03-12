/* Tejova — Minimal interactivity */

(function () {
  'use strict';

  var header = document.getElementById('header');
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  // 1. Mobile hamburger menu toggle
  hamburger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // 2. Service card expand / collapse
  document.querySelectorAll('.service-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var list = btn.previousElementSibling;
      var isExpanded = list.classList.toggle('active');
      btn.classList.toggle('active', isExpanded);
      btn.setAttribute('aria-expanded', isExpanded);
      btn.firstChild.textContent = isExpanded ? 'Hide Details ' : 'View Details ';
    });
  });

  // 3. Lazy-load Google Maps iframe via Intersection Observer
  var mapIframe = document.querySelector('.contact-map iframe');
  if (mapIframe && mapIframe.dataset.src && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          mapIframe.src = mapIframe.dataset.src;
          observer.unobserve(mapIframe);
        }
      });
    }, { rootMargin: '200px' });
    observer.observe(mapIframe);
  }

  // 4. Sticky header shadow on scroll
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();
