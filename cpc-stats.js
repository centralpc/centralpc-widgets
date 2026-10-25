/* Central PC | statisztika | v5 2026-10-25 | FROZEN
   Elv: a szam azonnal 0-ra all, majd a viewportba erve MAGUNK animáljuk a helyes ertekre.
   A vegen ertek-reteszel, hogy a widget ne irhassa felul. */
(function () {
  var SRC = 'https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/stats.json';
  var FALLBACK = { facebook_likes: 1204, google_reviews: 611, happy_clients: 8663, years_same_place: 13 };
  var MAP = [
    { re: /facebook/i, key: 'facebook_likes' },
    { re: /google/i, key: 'google_reviews' },
    { re: /el[ée]gedett|ügyf[ée]l|ugyfel/i, key: 'happy_clients' },
    { re: /[ée]ve|helyen/i, key: 'years_same_place' }
  ];
  var DUR = 1200;

  function fmt(n) {
    try { return Number(n).toLocaleString('hu-HU'); } catch (e) { return String(n); }
  }

  function targets() {
    var out = [];
    document.querySelectorAll('.counter').forEach(function (el) {
      var box = el.closest('.counter-box') || el.parentNode;
      var label = ((box && box.textContent) || '').toLowerCase();
      for (var i = 0; i < MAP.length; i++) {
        if (MAP[i].re.test(label)) { out.push({ el: el, key: MAP[i].key, box: box || el }); break; }
      }
    });
    return out;
  }

  function ease(t) { return 1 - Math.pow(1 - t, 3); }

  function animate(el, to) {
    if (el.getAttribute('data-cpc-done') === '1') return;
    el.setAttribute('data-cpc-done', '1');
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / DUR);
      el.textContent = fmt(Math.round(to * ease(p)));
      if (p < 1) requestAnimationFrame(step); else {
        el.textContent = fmt(to);
        lock(el, to);
      }
    }
    requestAnimationFrame(step);
  }

  // ha a widget kesobb felulirna, visszaallitjuk a vegso erteket
  function lock(el, value) {
    var want = fmt(value);
    var mo = new MutationObserver(function () {
      if (el.textContent !== want) el.textContent = want;
    });
    mo.observe(el, { childList: true, characterData: true, subtree: true });
    setTimeout(function () { mo.disconnect(); if (el.textContent !== want) el.textContent = want; }, 5000);
  }

  function run(data) {
    var list = targets();
    if (!list.length) return;

    // 1) azonnal nullazunk, hogy ne villanjon be a kesz szam
    list.forEach(function (t) { t.el.textContent = '0'; });

    // 2) amikor a banner a viewportba er, indul az animacio
    var start = function () {
      list.forEach(function (t) {
        var v = Number(data[t.key] || 0);
        if (v > 0) animate(t.el, v);
      });
    };

    if (!('IntersectionObserver' in window)) return start();
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { io.disconnect(); start(); }
      });
    }, { threshold: 0.15 });
    list.forEach(function (t) { io.observe(t.box); });
  }

  if (!document.querySelector('.counter')) return; // nincs szamlalo -> nincs fetch
  fetch(SRC, { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(run)
    .catch(function () { run(FALLBACK); });
})();
