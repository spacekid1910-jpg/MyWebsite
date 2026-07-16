// Highlight the current page in the nav
document.querySelectorAll('.nav-link').forEach(function (link) {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
    link.classList.add('is-active');
  }
});

// Wire up stat bars: each .fill element reads its target width
// from a data-pct attribute so the HTML stays easy to edit.
document.querySelectorAll('.stat .fill').forEach(function (bar) {
  var pct = bar.getAttribute('data-pct') || '0';
  bar.style.setProperty('--pct', pct + '%');
});
