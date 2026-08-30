/**
 * mode.js — Display-mode gate (runs before anything renders)
 *
 * Tab Out has two display modes, stored in localStorage (synchronous, so
 * the new tab can decide its fate before first paint — no flash):
 *
 *   'page'  (default) — the new tab page IS the dashboard (classic mode)
 *   'panel'           — the dashboard lives in Chrome's side panel; the
 *                       new tab is handed straight back to Google
 *
 * This file must be the FIRST script in index.html's <head>.
 */
'use strict';

(function () {
  var isPanel = new URLSearchParams(location.search).get('ctx') === 'panel';

  // app.js reads this to know which context it's rendering in
  window.TABOUT_IS_PANEL = isPanel;

  if (isPanel) {
    // Compact vertical layout — class on <html> since <body> isn't parsed yet
    document.documentElement.classList.add('panel-mode');
    return;
  }

  // New-tab context: in sidebar mode, give the page back to Google
  var mode = null;
  try { mode = localStorage.getItem('taboutDisplayMode'); } catch (e) {}
  if (mode === 'panel') {
    location.replace('https://www.google.com/');
  }
})();
