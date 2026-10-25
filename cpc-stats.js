/* Central PC | statisztika | v4 2026-10-25 | FROZEN
   Elv: a szam rejtve van, amig a honlap.hu counter widget el nem inditja az animaciot.
   Igy nincs "kesz szam -> animacio -> kesz szam" villanas. A vegen pontos ertek. */
(function () {
  var SRC = 'https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/stats.json';
  var FALLBACK = { facebook_likes: 1204, google_reviews: 611, happy_clients: 8663, years_same_place: 13 };
  var MAP = [
    { re: /facebook/i, key: 'facebook_likes' },
    { re: /google/i, key: 'google_reviews' },
    { re: /el[ée]gedett|ügyf[ée]l|ugyfel/i, key: 'happy_clients' },
    { re: /[ée]ve|helyen/i, key: 'years_same_place' }
  ];

  function fmt(n) {
    try { return Number(n).toLocaleString('hu-HU'); } catch (e) { return String(n); }
  }

  function targets() {
    var out = [];
    document.querySelectorAll('.counter').forEach(function (el) {
      var box = el.closest('.counter-box') || el.parentNode;
      var label = ((box && box.textContent) || '').toLowerCase();
      for (var i = 0; i < MAP.length; i++) {
        if (MAP[i].re.test(label)) { out.push({ el: el, key: MAP[i].key }); break; }
      }
    });
    return out;
  }

  // A szam rejtve marad, amig a widget el nem inditja a szamlalast (elso valtozas).
  function watch(el, finalValue) {
    var shown = false, last = el.textContent, stable = 0, ticks = 0;
    el.style.visibility = 'hidden';
    var t = setInterval(function () {
      ticks++;
      if (!shown && el.textContent !== last) { shown = true; el.style.visibility = 'visible'; }
      if (!shown && ticks >= 8) { shown = true; el.style.visibility = 'visible'; } // 0.8s biztonsagi
      if (el.textContent === last) stable++; else { stable = 0; last = el.textContent; }
      if (shown && (stable >= 6 || ticks >= 100)) {
        clearInterval(t);
        var want = fmt(finalValue);
        if (el.textContent !== want) el.textContent = want;
        el.style.visibility = 'visible';
      }
    }, 100);
  }

  function run(data) {
    var list = targets();
    if (!list.length) return;
    list.forEach(function (t) {
      var v = Number(data[t.key] || 0);
      if (v > 0) watch(t.el, v);
    });
  }

  if (!document.querySelector('.counter')) return; // nincs szamlalo az oldalon -> nincs fetch
  fetch(SRC, { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(run)
    .catch(function () { run(FALLBACK); });
})();
