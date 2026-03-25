/* ============================================================
   Goldsmith Family History — main.js
   Initialises GLightbox for clickable record images
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Initialise GLightbox on any element with class "lightbox"
  // Thumbnails in .record-thumb and .source-card automatically get this
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      selector: '.lightbox',
      touchNavigation: true,
      loop: false,
      zoomable: true,
      draggable: true,
      slideEffect: 'fade',
      descPosition: 'bottom',
    });
  }

  // Smooth scroll for footnote back-links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Briefly highlight the target footnote
        target.classList.add('highlight-flash');
        setTimeout(() => target.classList.remove('highlight-flash'), 1500);
      }
    });
  });

  // Mark active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(link => {
    if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    }
  });

});
