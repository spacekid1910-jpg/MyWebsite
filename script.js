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

// Mobile hamburger menu
document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    if (nav) { nav.classList.toggle('is-open'); }
  });
});
