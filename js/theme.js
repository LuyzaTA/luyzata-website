(function () {
  'use strict';

  var root = document.documentElement;
  var btn  = document.getElementById('themeToggle');

  /* The initial theme is already applied by the inline <head> script
     (defaults to light, else the visitor's stored choice) to avoid a flash. */

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

}());
