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

  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    var img = document.createElement('img');
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    document.querySelectorAll('.card-row > img').forEach(function (el) {
      el.addEventListener('click', function () {
        img.src = el.src;
        img.alt = el.alt;
        overlay.classList.add('is-open');
      });
    });

    overlay.addEventListener('click', function () {
      overlay.classList.remove('is-open');
      img.src = '';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        overlay.classList.remove('is-open');
        img.src = '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); initLightbox(); });
  } else {
    init();
    initLightbox();
  }

  window.addEventListener('hashchange', openHash);
})();
