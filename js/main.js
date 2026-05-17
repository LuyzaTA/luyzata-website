(function () {
  'use strict';

  const nav      = document.getElementById('nav');
  const hero     = document.querySelector('.hero');
  const toggle   = document.getElementById('navToggle');
  const links    = document.getElementById('navLinks');
  const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
  const navAs    = Array.from(links.querySelectorAll('a[href^="#"]'));
  const reduce   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Nav: transparent over hero, glass after ── */
  function updateNav() {
    const heroH = hero ? hero.offsetHeight : 0;
    const past  = window.scrollY > heroH - 80;
    nav.classList.toggle('nav--scrolled', past);
    nav.classList.toggle('nav--hero',    !past);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Active nav link ── */
  function highlightNav() {
    const y = window.scrollY + 120;
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

  /* ── Hero entrance animation ── */
  if (!reduce) {
    const heroSequence = [
      { sel: '.hero__eyebrow',   delay: 150 },
      { sel: '.hero__name-l1',   delay: 320 },
      { sel: '.hero__name-l2',   delay: 460 },
      { sel: '.hero__statement', delay: 600 },
      { sel: '.hero__label',     delay: 740 },
      { sel: '.hero__actions',   delay: 880 },
      { sel: '.hero__visual',    delay: 200 },
    ];

    heroSequence.forEach(({ sel, delay }) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.cssText = 'opacity:0; transform:translateY(18px); filter:blur(6px); transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1), filter 0.85s cubic-bezier(0.16,1,0.3,1)';
      setTimeout(() => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
        el.style.filter    = 'blur(0)';
      }, delay);
    });
  }

  /* ── Scroll entrance animation ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const peers = Array.from(el.parentElement.querySelectorAll('.animate'));
      const idx   = peers.indexOf(el);
      const delay = Math.min(idx * 80, 320); /* cap stagger at 320ms */
      setTimeout(() => el.classList.add('visible'), delay);
      io.unobserve(el);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.animate').forEach(el => io.observe(el));

})();
