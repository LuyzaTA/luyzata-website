(function () {
  'use strict';

  var btn          = document.getElementById('ttsBtn');
  if (!btn) return;              /* Dutch/TTS section is hidden — nothing to wire up */
  var label        = btn.querySelector('.tts-label');
  var active       = false;
  var currentAudio = null;
  var synth        = window.speechSynthesis;
  var keepAlive;

  /* ── Curated Dutch narration — natural speech, not raw DOM text ── */
  var SCRIPT = [

    /* Introductie */
    'Mijn naam is Luyza Alexandre. Ik ben een data engineer en AI-practitioner, gevestigd in Utrecht. '
    + 'Veertien jaar lang heb ik gezorgd dat enterprise-data beschikbaar is. '
    + 'Nu bouw ik moderne cloudplatforms en AI-ready datasystemen.',

    /* Over mij */
    'Ik ben een database professional met meer dan veertien jaar enterprise-ervaring bij wereldwijde '
    + 'organisaties, waaronder HSBC Bank, Nordea Bank en NTT Data Business Solutions. '
    + 'Mijn diepgaande expertise ligt in IBM DB2 LUW productieomgevingen, systeembetrouwbaarheid '
    + 'en grootschalig databasebeheer in de financiële dienstverlening en consultancy. '
    + 'Ik woon in Utrecht en ben volledig toegewijd aan een langdurige carrière in Nederland. '
    + 'Omdat ik in vier landen heb geleefd en gewerkt — Brazilië, Polen, Bulgarije en Nederland — '
    + 'breng ik een multicultureel perspectief mee dat mij effectief maakt in internationale, diverse teams.',

    /* Tweede laag vaardigheden */
    'Sinds 2021 bouw ik actief een tweede laag vaardigheden op in moderne data engineering, '
    + 'cloud computing en kunstmatige intelligentie. '
    + 'Ik heb een MBA in Data Science en Kunstmatige Intelligentie afgerond bij FIAP in 2025, '
    + 'Microsoft Azure-certificeringen behaald en doorloop het Databricks Data Engineer leerpad. '
    + 'Mijn doel is een rol waarbij diepgaande technische fundamenten samenkomen '
    + 'met moderne data-infrastructuuruitdagingen.',

    /* Werkervaring */
    'Werkervaring. '
    + 'Momenteel werk ik als Database Consultant bij NTT Data Business Solutions in Utrecht. '
    + 'Ik ondersteun SAP DB2 productiedatabases in een internationaal team in Nederland, Duitsland, Mexico en India, '
    + 'en ben de primaire technische contactpersoon voor databasebetrouwbaarheid en escalatie '
    + 'in grootschalige enterprise SAP-omgevingen.',

    'Van 2018 tot 2021 werkte ik als Senior Databasebeheerder bij Nordea Bank in Warschau, Polen. '
    + 'Ik ondersteunde DB2 productie- en ontwikkelingsdatabases voor een pan-Scandinavische bankgroep '
    + 'in Polen, Finland, Zweden en Denemarken, en leidde DB2 LUW onderhoud, upgrades en auditimplementatie.',

    'Van november 2016 tot april 2018 werkte ik als DB2 LUW Database IT Specialist bij IBM in Wrocław, Polen. '
    + 'Ik ondersteunde IBM-klanten in heel Europa als onderdeel van een Pools team, '
    + 'met taken als databaseonderhoud, incidentoplossing, HADR, replicatie en upgrades '
    + 'op Linux-, Unix- en Windows-platforms. '
    + 'Van 2013 tot 2015 was ik Senior Databasebeheerder bij HSBC Bank in São Paulo, '
    + 'als onderdeel van een 24 uur per dag, 7 dagen per week globale DB2 LUW productieondersteuningsrotatie '
    + 'in de VS, het VK, Brazilië, India en China.',

    /* Vaardigheden */
    'Mijn kernexpertise ligt in databasetechnologie: IBM DB2 LUW en Oracle, '
    + 'met jarenlange ervaring in productieomgevingen bij internationale financiële instellingen. '
    + 'In data engineering werk ik met Python, SQL, Databricks en Apache Spark. '
    + 'Voor cloud en infrastructuur maak ik gebruik van Microsoft Azure. '
    + 'Op persoonlijk vlak ben ik een analytisch denker met sterke communicatieve vaardigheden, '
    + 'gewend aan internationale werkomgevingen.',

    /* Projecten */
    'Geselecteerde projecten. '
    + 'Brasil em Jogo is een interactief geospatiaal platform dat inheemse gebieden en dorpen '
    + 'in heel Brazilië in kaart brengt, gebouwd op officiële overheidsgegevens van FUNAI en IBGE. '
    + 'Het platform bevat een historische tijdlijn van rechten, van de kolonisatie tot de volkstelling van 2022, '
    + 'met volledige tweetalige navigatie. '
    + 'De DB2 LUW versie-upgrade — van 10.5 naar 11.5 — was een bedrijfskritisch project '
    + 'over productieomgevingen in Mexico, Nederland, Duitsland en India, '
    + 'afgeleverd met nul kritieke downtime in een HADR-productieomgeving.',

    'Het DB2 LUW Audit-project bij Nordea Bank omvatte het end-to-end ontwerp en de implementatie '
    + 'van een auditoplossing in een multinationale omgeving, '
    + 'waarbij DB2-expertise werd gecombineerd met compliance-vereisten. '
    + 'Quantum Finance is een end-to-end data science oplossing voor een fintech use case, '
    + 'ontwikkeld tijdens mijn MBA aan FIAP. '
    + 'Philosphere is een interactief webplatform dat filosofie tot leven brengt '
    + 'door denkers, concepten en stromingen te verkennen. '
    + 'En AIAlly Hub is een globaal intelligentieplatform voor de AI en Data Engineering-economie, '
    + 'met focus op de Nederlandse markt — elke 24 uur gesynchroniseerd via AI en Supabase.',

    /* Opleiding & Certificeringen */
    'Opleiding en certificeringen. '
    + 'Ik heb een MBA in Data Science en Kunstmatige Intelligentie behaald bij FIAP in Brazilië, in 2025. '
    + 'Daarvoor behaalde ik een Postdoctoraal diploma in Databasebeheer met specialisatie in DB2 en Oracle, '
    + 'en een Bachelor Informatica. '
    + 'Mijn certificeringen omvatten: Azure Fundamentals en Azure Data Fundamentals van Microsoft, '
    + 'vijf IBM DB2 LUW certificeringen waaronder Advanced DBA en Certified Database Associate, '
    + 'ITIL Foundations, Data Engineering Fundamentals van IBM, '
    + 'en ik volg momenteel het Databricks Data Engineer leerpad.',

    /* Aanbevelingen */
    'Aanbevelingen. '
    + 'Tapio Vaattanen, Database Reliability Engineering Team Lead bij Nordcloud, schrijft: '
    + '"Ik had het genoegen nauw samen te werken met Luyza bij Nordea van 2018 tot 2021. '
    + 'Naast haar sterke technische vaardigheden toonde Luyza consistent professionaliteit, '
    + 'betrouwbaarheid en een rustige, toegankelijke houding die haar een echte teamspeler maakte. '
    + 'Luyza is een uitzonderlijke DBA — ik beveel haar ten zeerste aan."',

    'Hans-Jürgen Zeltwanger, DB2-expert bij IBM Deutschland, schrijft: '
    + '"Ik had het genoegen om met Luyza te werken aan een groot en zeer complex project, '
    + 'waarbij ze bewees een uitzonderlijk bekwame en toegewijde expert te zijn in zowel SAP als DB2. '
    + 'Ze plande en beheerde een succesvolle grote DB2-versie-upgrade voor vele databases '
    + 'in een complex HADR en Pacemaker clusteromgeving. Ik waardeer haar expertise en teamgeest."',

    'Regina Bernal, Professor Statistiek bij FIAP, schrijft: '
    + '"Luyza toonde sterke uitvoeringsvaardigheden, ondersteund door een solide basis in Python en Statistiek. '
    + 'Ze is een nieuwsgierige en proactieve professional, altijd bereid om meer te leren — '
    + 'een essentiële kwaliteit voor een data scientist. '
    + 'Ik beveel haar vol vertrouwen aan voor elke kans in het Data Science-vakgebied." '
    + 'En Dennis Tavares, Senior Oracle DBA en mentor, voegt toe: '
    + '"Ze heeft uitgebreide kennis van databasebeheer en toont een grote passie voor '
    + 'data engineering en data science, en blijft continu investeren in haar ontwikkeling."',

    /* Afsluiting */
    'Persoonlijke interesses: fotografie, poëzie, kajakken, kamperen, schilderen, kunst, nieuwe culturen en filosofie. '
    + 'Bent u geïnteresseerd in samenwerking? '
    + 'Ik ben momenteel beschikbaar voor functies in data engineering en data science in Nederland. '
    + 'Neem gerust contact met mij op via e-mail of LinkedIn. Ik hoor graag van u.',

  ];

  /* ── Lang helpers ── */
  function activeLang() {
    var b = document.querySelector('.lang-btn--active');
    return b ? b.dataset.lang : 'en';
  }
  function switchLang(lang) {
    var b = document.querySelector('[data-lang="' + lang + '"]');
    if (b) b.click();
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
  function speakWithElevenLabs(paragraphs) {
    setLoading();
    active = true;

    var idx = 0;

    function playNext() {
      if (!active) return;
      if (idx >= paragraphs.length) { setIdle(); return; }

      var text = paragraphs[idx++];

      fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text }),
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.arrayBuffer();
        })
        .then(function (buffer) {
          if (!active) return;

          var blob  = new Blob([buffer], { type: 'audio/mpeg' });
          var url   = URL.createObjectURL(blob);
          var audio = new Audio(url);
          currentAudio = audio;

          if (idx === 1) setActive();

          audio.onended = function () {
            URL.revokeObjectURL(url);
            currentAudio = null;
            playNext();
          };
          audio.onerror = function () {
            URL.revokeObjectURL(url);
            currentAudio = null;
            playNext();
          };
          audio.play().catch(function () { playNext(); });
        })
        .catch(function (err) {
          console.warn('ElevenLabs unavailable, falling back to Web Speech API:', err);
          setIdle();
          speakWithWebSpeech(paragraphs.slice(idx - 1));
        });
    }

    playNext();
  }

  /* ── Web Speech fallback ── */
  function speakWithWebSpeech(paragraphs) {
    if (!synth) { setIdle(); return; }
    synth.cancel();
    setActive();

    var voices = synth.getVoices();

    if (!voices.length) {
      synth.onvoiceschanged = function () {
        synth.onvoiceschanged = null;
        queueParagraphs(paragraphs, synth.getVoices());
      };
      return;
    }
    queueParagraphs(paragraphs, voices);
  }

  function pickDutchVoice(voices) {
    var nl = voices.filter(function (v) { return v.lang.startsWith('nl'); });
    var neural = nl.find(function (v) {
      return v.name.includes('Online (Natural)') || v.name.includes('Neural');
    });
    if (neural) return neural;
    var google = nl.find(function (v) { return v.name.includes('Google'); });
    return google || nl[0] || null;
  }

  function queueParagraphs(paragraphs, voices) {
    var voice = pickDutchVoice(voices);
    startKeepAlive();
    var i = 0;

    function next() {
      if (!active || i >= paragraphs.length) {
        stopKeepAlive();
        if (active) setIdle();
        return;
      }
      var u    = new SpeechSynthesisUtterance(paragraphs[i++]);
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

  /* ── Main speak entry point ── */
  function speak() {
    switchLang('nl');
    speakWithElevenLabs(SCRIPT);
  }

  function stop() {
    active = false;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if (synth) { synth.cancel(); stopKeepAlive(); }
    setIdle();
  }

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
