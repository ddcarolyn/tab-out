/**
 * panel.js — Side panel entry shim
 *
 * chrome.sidePanel loads panel.html; we immediately hand off to the real
 * dashboard with a ?ctx=panel marker so index.html/app.js can tell the
 * side panel apart from the new tab page. Keeping one source page avoids
 * index.html/panel.html drifting out of sync.
 */
location.replace('index.html?ctx=panel');
