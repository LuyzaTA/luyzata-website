(function () {
  'use strict';

  if (!window.speechSynthesis) return;

  const btn   = document.getElementById('ttsBtn');
  const label = btn.querySelector('.tts-label');
  const synth = window.speechSynthesis;
  let   active = false;
  let   keepAliveTimer;

  /* ── Switch the page language ── */
  function switchLang(lang) {
    const b = document.querySelector('[data-lang="' + lang + '"]');
    if (b) b.click();
  }

  function activeLang() {
    const b = document.querySelector('.lang-btn--active');
    return b ? b.dataset.lang : 'en';
  }

  /* ── Collect Dutch text from the page ── */
  function harvest() {
    const sections = [
      'header.hero',
      '#about',
      '#experience',
      '#skills',
      '#projects',
      '#credentials',
      '#recommendations',
    ];

    const chunks = [];

    sections.forEach(function (sel) {
      const el = document.querySelector(sel);
      if (!el) return;

      const clone = el.cloneNode(true);

      /* strip non-speech elements from the clone */
      clone.querySelectorAll(
        'button, .btn, [aria-hidden="true"], svg, script, style, .lang-switcher'
      ).forEach(function (e) { e.remove(); });

      /* collect text-bearing nodes */
      clone.querySelectorAll(
        'h1, h2, h3, h4, p, li, .tags span, .about__stat, .exp__badge'
      ).forEach(function (textEl) {
        const t = textEl.textContent.replace(/\s+/g, ' ').trim();
        if (t.length > 1) chunks.push(t);
      });
    });

    return chunks;
  }

  /* ── Chrome bug: speech silently stops after ~15 s ── */
  function startKeepAlive() {
    keepAliveTimer = setInterval(function () {
      if (synth.speaking && !synth.paused) {
        synth.pause();
        synth.resume();
      }
    }, 10000);
  }

  function stopKeepAlive() {
    clearInterval(keepAliveTimer);
  }

  /* ── Core speak / stop ── */
  function speak() {
    var origLang = activeLang();

    /* switch page to Dutch so text and reading align */
    switchLang('nl');

    var chunks = harvest();

    synth.cancel();
    active = true;
    updateBtn();
    startKeepAlive();

    var i = 0;

    function next() {
      if (!active) return;
      if (i >= chunks.length) { done(); return; }

      var u = new SpeechSynthesisUtterance(chunks[i++]);
      u.lang  = 'nl-NL';
      u.rate  = 0.88;
      u.pitch = 1.0;
      u.onend   = next;
      u.onerror = next;
      synth.speak(u);
    }

    next();
  }

  function done() {
    stopKeepAlive();
    active = false;
    updateBtn();
  }

  function stop() {
    synth.cancel();
    stopKeepAlive();
    active = false;
    updateBtn();
  }

  /* ── Button state ── */
  function updateBtn() {
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    label.textContent = active ? 'Stop' : 'Luister in het Nederlands';
  }

  /* ── Events ── */
  btn.addEventListener('click', function () {
    if (active) stop();
    else speak();
  });

  window.addEventListener('beforeunload', function () { synth.cancel(); });
  window.addEventListener('pagehide',     function () { synth.cancel(); });

}());
