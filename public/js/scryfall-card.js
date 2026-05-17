document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.card-inline[data-card-name]').forEach(function (el) {
    var name = el.dataset.cardName;
    var set = el.dataset.cardSet;
    var base = 'https://api.scryfall.com/cards/named?exact=' + encodeURIComponent(name);

    function insertImg(data) {
      var imgUrl = (data.image_uris && data.image_uris.normal) ||
        (data.card_faces && data.card_faces[0] && data.card_faces[0].image_uris && data.card_faces[0].image_uris.normal);
      if (imgUrl) {
        var img = document.createElement('img');
        img.src = imgUrl;
        img.alt = name;
        img.className = 'card-image';
        img.loading = 'lazy';
        el.insertBefore(img, el.firstChild);
      }
    }

    fetch(set ? base + '&set=' + encodeURIComponent(set) : base)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.object === 'error' && set) {
          return fetch(base).then(function (r) { return r.json(); }).then(insertImg);
        }
        insertImg(data);
      })
      .catch(function (e) { console.warn('Card image error for ' + name + ':', e.message); });
  });
});
