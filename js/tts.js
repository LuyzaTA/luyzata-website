(function () {
  'use strict';

  var btn          = document.getElementById('ttsBtn');
  var label        = btn.querySelector('.tts-label');
  var active       = false;
  var currentAudio = null;   /* Audio element currently playing */
  var synth        = window.speechSynthesis; /* Web Speech fallback */
  var keepAlive;

  /* ── Lang helpers ── */
  function activeLang() {
    var b = document.querySelector('.lang-btn--active');
    return b ? b.dataset.lang : 'en';
  }
  function switchLang(lang) {
    var b = document.querySelector('[data-lang="' + lang + '"]');
    if (b) b.click();
  }

  /* ── Harvest Dutch text from the page ── */
  function harvest() {
    var sections = [
      'header.hero',
      '#about',
      '#experience',
      '#skills',
      '#projects',
      '#credentials',
      '#recommendations',
    ];
    var chunks = [];
    sections.forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      var clone = el.cloneNode(true);
      clone.querySelectorAll(
        'button, .btn, [aria-hidden="true"], svg, script, style, .lang-switcher'
      ).forEach(function (e) { e.remove(); });
      clone.querySelectorAll(
        'h1, h2, h3, h4, p, li, .tags span, .about__stat'
      ).forEach(function (node) {
        var t = node.textContent.replace(/\s+/g, ' ').trim();
        if (t.length > 1) chunks.push(t);
      });
    });
    return chunks;
  }

  /* ── Split joined text into API-safe chunks (≤ 4800 chars) ── */
  function splitText(text, maxLen) {
    if (text.length <= maxLen) return [text];
    var result = [];
    while (text.length > 0) {
      if (text.length <= maxLen) { result.push(text); break; }
      var cut = text.lastIndexOf('. ', maxLen);
      if (cut === -1) cut = text.lastIndexOf(' ', maxLen);
      if (cut === -1) cut = maxLen;
      else cut += 1;
      result.push(text.slice(0, cut).trim());
      text = text.slice(cut).trim();
    }
    return result.filter(function (c) { return c.length > 0; });
  }

  /* ── Button state ── */
  function setIdle() {
    active = false;
    btn.disabled = false;
    btn.setAttribute('aria-pressed', 'false');
    label.textContent = 'Luister in het Nederlands';
  }
  function setLoading() {
    btn.disabled = true;
    btn.setAttribute('aria-pressed', 'false');
    label.textContent = 'Laden…';
  }
  function setActive() {
    active = true;
    btn.disabled = false;
    btn.setAttribute('aria-pressed', 'true');
    label.textContent = 'Stop';
  }

  /* ── ElevenLabs path ── */
  function speakWithElevenLabs(text) {
    setLoading();

    var chunks = splitText(text, 4800);
    var idx = 0;

    function playNext() {
      if (!active && idx > 0) return; /* stopped mid-way */
      if (idx >= chunks.length) { setIdle(); return; }

      var chunk = chunks[idx++];

      fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: chunk }),
      })
        .then(function (res) {
          if (!res.ok) throw new Error('API ' + res.status);
          return res.arrayBuffer();
        })
        .then(function (buffer) {
          if (!active && idx > 1) return; /* stopped while fetching */

          var blob = new Blob([buffer], { type: 'audio/mpeg' });
          var url  = URL.createObjectURL(blob);
          var audio = new Audio(url);
          currentAudio = audio;

          /* Mark active now that first audio is ready */
          if (idx === 1) setActive();

          audio.onended = function () {
            URL.revokeObjectURL(url);
            currentAudio = null;
            playNext();
          };
          audio.onerror = function () {
            URL.revokeObjectURL(url);
            currentAudio = null;
            playNext(); /* skip bad chunk, continue */
          };
          audio.play().catch(function () { playNext(); });
        })
        .catch(function (err) {
          console.warn('ElevenLabs error, falling back to Web Speech API:', err);
          /* Fall back to browser TTS for remaining chunks */
          setIdle();
          speakWithWebSpeech(chunks.slice(idx - 1));
        });
    }

    /* Kick off the first fetch; active flag is set once audio is ready */
    active = true; /* set early so stop() works immediately */
    playNext();
  }

  /* ── Web Speech API fallback ── */
  function speakWithWebSpeech(chunks) {
    if (!synth) { setIdle(); return; }
    synth.cancel();
    setActive();

    var voices = synth.getVoices();
    var voice  = pickDutchVoice(voices);

    /* If voices not loaded yet, wait for voiceschanged */
    if (!voices.length) {
      synth.onvoiceschanged = function () {
        synth.onvoiceschanged = null;
        voices = synth.getVoices();
        voice  = pickDutchVoice(voices);
        queueChunks(chunks, voice);
      };
      return;
    }
    queueChunks(chunks, voice);
  }

  function pickDutchVoice(voices) {
    var nl = voices.filter(function (v) { return v.lang.startsWith('nl'); });
    /* Prefer Microsoft Online (Natural) neural voices */
    var neural = nl.find(function (v) {
      return v.name.includes('Online (Natural)') || v.name.includes('Neural');
    });
    if (neural) return neural;
    var google = nl.find(function (v) { return v.name.includes('Google'); });
    if (google) return google;
    return nl[0] || null;
  }

  function queueChunks(chunks, voice) {
    startKeepAlive();
    var i = 0;
    function next() {
      if (!active || i >= chunks.length) { stopKeepAlive(); if (active) setIdle(); return; }
      var u    = new SpeechSynthesisUtterance(chunks[i++]);
      u.lang   = 'nl-NL';
      u.rate   = 0.88;
      u.pitch  = 1.0;
      if (voice) u.voice = voice;
      u.onend   = next;
      u.onerror = next;
      synth.speak(u);
    }
    next();
  }

  function startKeepAlive() {
    keepAlive = setInterval(function () {
      if (synth && synth.speaking && !synth.paused) { synth.pause(); synth.resume(); }
    }, 10000);
  }
  function stopKeepAlive() { clearInterval(keepAlive); }

  /* ── Main entry point ── */
  function speak() {
    var origLang = activeLang();
    switchLang('nl');

    var chunks = harvest();
    var text   = chunks.join('. ');

    if (!text.trim()) { switchLang(origLang); return; }

    /* Try ElevenLabs; it will fall back to Web Speech on API error */
    speakWithElevenLabs(text);
  }

  function stop() {
    active = false;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (synth) { synth.cancel(); stopKeepAlive(); }
    setIdle();
  }

  /* ── Button click ── */
  btn.addEventListener('click', function () {
    if (active) stop();
    else speak();
  });

  window.addEventListener('beforeunload', function () {
    if (synth) synth.cancel();
    if (currentAudio) currentAudio.pause();
  });
  window.addEventListener('pagehide', function () {
    if (synth) synth.cancel();
    if (currentAudio) currentAudio.pause();
  });

}());
