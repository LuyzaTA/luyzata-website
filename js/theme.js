(function () {
  'use strict';

  var root  = document.documentElement;
  var btn   = document.getElementById('themeToggle');
  var media = window.matchMedia('(prefers-color-scheme: light)');

  /* The initial theme is already applied by the inline <head> script
     (reads localStorage, else the OS preference) to avoid a flash. */

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* Follow the OS setting live, but only until the visitor makes an
     explicit choice (i.e. nothing stored in localStorage). */
  function onSystemChange(e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) {}
    if (!stored) apply(e.matches ? 'light' : 'dark');
  }
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange);

}());
