/* Central PC | statisztika | v3 2026-10-25 | FROZEN
   Elv: a honlap.hu counter widget animaciojat NEM duplikaljuk.
   Megvarjuk, hogy a widget befejezze a szamlalast, majd csendben a helyes ertekre allitjuk. */
(function(){
  var SRC='https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/stats.json';
  var FALLBACK={facebook_likes:1204,google_reviews:611,happy_clients:8663,years_same_place:13};
  var MAP=[{re:/facebook/i,key:'facebook_likes'},{re:/google/i,key:'google_reviews'},{re:/el[ée]gedett|ügyf[ée]l|ugyfel/i,key:'happy_clients'},{re:/[ée]ve|helyen/i,key:'years_same_place'}];

  function fmt(n){ try{ return Number(n).toLocaleString('hu-HU'); }catch(e){ return String(n); } }

  function targets(){
    var out=[];
    document.querySelectorAll('.counter').forEach(function(el){
      var box=el.closest('.counter-box')||el.parentNode;
      var label=((box&&box.textContent)||'').toLowerCase();
      for(var i=0;i<MAP.length;i++){ if(MAP[i].re.test(label)){ out.push({el:el,key:MAP[i].key}); break; } }
    });
    return out;
  }

  // megvarja, hogy a widget befejezze a szamlalast (az ertek mar nem valtozik)
  function settle(el, cb){
    var last=el.textContent, stable=0, ticks=0;
    var timer=setInterval(function(){
      ticks++;
      if(el.textContent===last) stable++; else { stable=0; last=el.textContent; }
      if(stable>=6 || ticks>=28){ clearInterval(timer); cb(); }
    },100);
  }

  function run(data){
    var list=targets();
    if(!list.length) return;
    var go=function(){
      list.forEach(function(t){
        var v=Number(data[t.key]||0);
        if(!(v>0)) return;
        settle(t.el, function(){
          var want=fmt(v);
          if(t.el.textContent!==want) t.el.textContent=want;   // csendes korrekcio, animacio nelkul
        });
      });
    };
    if(!('IntersectionObserver' in window)) return go();
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); go(); } }); },{threshold:0.2});
    list.forEach(function(t){ io.observe(t.el.closest('.counter-box')||t.el); });
  }

  // NINCS-COUNTER: ha az oldalon nincs szamlalo widget, ne kerjunk adatot
  if(!document.querySelector('.counter')) return;
  fetch(SRC,{cache:'no-store'}).then(function(r){return r.json()}).then(run).catch(function(){ run(FALLBACK); });
})();
