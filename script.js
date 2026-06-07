/* EduKinesis — interacciones de la landing. Vanilla JS, sin dependencias. */
(function () {
  'use strict';

  /* ---- Año actual en el footer ------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Navegación móvil -------------------------------------------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  }
  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar menú');
    }
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu(); else openMenu();
    });
    // Cerrar al tocar un enlace del menú (móvil)
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
    // Reset al pasar a desktop
    var mq = window.matchMedia('(min-width: 921px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function () {
      if (mq.matches) closeMenu();
    });
  }

  /* ---- Scroll reveal ----------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reveal(el) { el.classList.add('is-visible'); }

  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach(reveal);
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { reveal(entry.target); obs.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    reveals.forEach(function (el) { io.observe(el); });

    // Garantía anti-contenido-invisible: cualquier elemento ya visible en el
    // viewport (al cargar o si el observer no dispara) se revela igual.
    function revealInView() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(function (el) {
        if (el.classList.contains('is-visible')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh + 80 && r.bottom > -80) { reveal(el); io.unobserve(el); }
      });
    }
    revealInView();
    window.addEventListener('load', revealInView);
  }

  /* ---- Lightbox de galería ----------------------------------------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  var lastFocused = null;
  // Regiones de fondo a aislar cuando el lightbox está abierto (lectores de pantalla)
  var bgRegions = ['.site-header', '#contenido', '.site-footer']
    .map(function (s) { return document.querySelector(s); })
    .filter(Boolean);

  function setBackgroundInert(on) {
    bgRegions.forEach(function (el) {
      el.inert = on;
      if (on) el.setAttribute('aria-hidden', 'true'); else el.removeAttribute('aria-hidden');
    });
  }
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    setBackgroundInert(true);
    if (lightboxClose) lightboxClose.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
    setBackgroundInert(false);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  if (lightbox) {
    document.querySelectorAll('.gallery__item').forEach(function (btn) {
      var img = btn.querySelector('img');
      if (img && !btn.getAttribute('aria-label')) {
        btn.setAttribute('aria-label', 'Ampliar imagen: ' + img.alt);
      }
      btn.addEventListener('click', function () {
        if (img) openLightbox(img.currentSrc || img.src, img.alt);
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
      // Mantener el foco dentro del lightbox (solo hay un control)
      if (e.key === 'Tab' && !lightbox.hidden && lightboxClose) {
        e.preventDefault();
        lightboxClose.focus();
      }
    });
  }
})();
