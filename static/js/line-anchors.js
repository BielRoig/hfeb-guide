(function () {
  function init() {
    document.querySelectorAll('.collapsible-hero').forEach(function (el, i) {
      if (!el.id) el.id = 'line-' + (i + 1);

      // Inject a # anchor link into the summary (same class as heading anchors)
      var summary = el.querySelector('summary');
      if (summary && !summary.querySelector('.anchor')) {
        var a = document.createElement('a');
        a.className = 'anchor';
        a.href = '#' + el.id;
        a.setAttribute('aria-hidden', 'true');
        a.textContent = '#';
        // Prevent the click from toggling the <details> open/closed
        a.addEventListener('click', function (e) {
          e.stopPropagation();
        });
        summary.appendChild(a);
      }
    });

    openHash();
  }

  function openHash() {
    var hash = window.location.hash;
    if (!hash) return;

    var target = document.querySelector(hash);
    if (!target) return;

    if (target.tagName === 'DETAILS') target.open = true;

    var el = target.parentElement;
    while (el) {
      if (el.tagName === 'DETAILS') el.open = true;
      el = el.parentElement;
    }

    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('hashchange', openHash);
})();
