(function () {
  function init() {
    // Auto-assign ids (line-1, line-2, …) to each collapsible in order
    document.querySelectorAll('.collapsible-hero').forEach(function (el, i) {
      if (!el.id) el.id = 'line-' + (i + 1);
    });

    openHash();
  }

  function openHash() {
    var hash = window.location.hash;
    if (!hash) return;

    var target = document.querySelector(hash);
    if (!target) return;

    // Open the target details element
    if (target.tagName === 'DETAILS') target.open = true;

    // Open any ancestor details elements too
    var el = target.parentElement;
    while (el) {
      if (el.tagName === 'DETAILS') el.open = true;
      el = el.parentElement;
    }

    // Scroll after a tick so the opened details has time to expand
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Handle back/forward navigation and manual hash changes
  window.addEventListener('hashchange', openHash);
})();
