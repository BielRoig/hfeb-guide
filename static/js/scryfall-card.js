document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.card-inline[data-card-name]').forEach(function (el) {
    var name = el.dataset.cardName;
    var url = 'https://api.scryfall.com/cards/search?q=%21%22' + encodeURIComponent(name) + '%22&order=released&dir=asc&unique=prints';

    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var card = data.data && data.data[0];
        if (!card) return;
        var imgUrl = (card.image_uris && card.image_uris.normal) ||
          (card.card_faces && card.card_faces[0] && card.card_faces[0].image_uris && card.card_faces[0].image_uris.normal);
        if (!imgUrl) return;
        var img = document.createElement('img');
        img.src = imgUrl;
        img.alt = name;
        img.className = 'card-image';
        img.loading = 'lazy';
        el.insertBefore(img, el.firstChild);
      })
      .catch(function (e) { console.warn('Card image error for ' + name + ':', e.message); });
  });
});
