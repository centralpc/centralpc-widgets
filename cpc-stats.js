/* Central PC | statisztika szamlalo | v1 2026-10-25 | FROZEN: ne modositsd, az adat a stats.json-bol jon */
(function(){
  var SRC='https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/stats.json';
  var FALLBACK={facebook_likes:1204,google_reviews:611,happy_clients:8663,years_same_place:13};
  var MAP=[{re:/facebook/i,key:'facebook_likes'},{re:/google/i,key:'google_reviews'},{re:/el[ée]gedett|ügyf[ée]l|ugyfel/i,key:'happy_clients'},{re:/[ée]ve|helyen/i,key:'years_same_place'}];
  function targets(){
    var out=[];
    document.querySelectorAll('.counter').forEach(function(el){
      var box=el.closest('.counter-box')||el.parentNode;
      var label=(box&&box.textContent||'').toLowerCase();
      for(var i=0;i<MAP.length;i++){ if(MAP[i].re.test(label)){ out.push({el:el,key:MAP[i].key}); break; } }
    });
    return out;
  }
  function ease(t){ return 1-Math.pow(1-t,3); }
  function animate(el,to){
    var from=0, dur=1400, start=null;
    function step(ts){ if(!start) start=ts; var p=Math.min(1,(ts-start)/dur);
      el.textContent=Math.round(from+(to-from)*ease(p)).toLocaleString('hu-HU');
      if(p<1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  function run(data){
    var list=targets();
    if(!list.length) return;
    var go=function(){
      list.forEach(function(t){ var v=Number(data[t.key]||0); if(v>0) animate(t.el,v); });
    };
    if(!('IntersectionObserver' in window)) return go();
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); go(); } }); },{threshold:0.25});
    list.forEach(function(t){ io.observe(t.el.closest('.counter-box')||t.el); });
  }
  // NINCS-COUNTER: ha az oldalon nincs szamlalo widget, ne kerjunk adatot
  if(!document.querySelector('.counter')) return;
  fetch(SRC,{cache:'no-store'}).then(function(r){return r.json()}).then(run).catch(function(){ run(FALLBACK); });
})();
