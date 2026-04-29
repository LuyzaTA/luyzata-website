(function () {
  'use strict';

  const nav     = document.getElementById('nav');
  const hero    = document.querySelector('.hero');
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');
  const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
  const navAs   = Array.from(links.querySelectorAll('a[href^="#"]'));

  /* ── Nav appearance: transparent over hero, white after ── */
  function updateNav() {
    const heroH = hero ? hero.offsetHeight : 0;
    const past  = window.scrollY > heroH - 80;
    nav.classList.toggle('nav--scrolled', past);
    nav.classList.toggle('nav--hero', !past);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Active nav link ── */
  function highlightNav() {
    const y = window.scrollY + 100;
    let cur = '';
    sections.forEach(s => { if (y >= s.offsetTop) cur = s.id; });
    navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ── Mobile toggle ── */
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Scroll animations ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const peers = Array.from(el.parentElement.querySelectorAll('.animate'));
      setTimeout(() => el.classList.add('visible'), peers.indexOf(el) * 100);
      io.unobserve(el);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });

  document.querySelectorAll('.animate').forEach(el => io.observe(el));

})();
