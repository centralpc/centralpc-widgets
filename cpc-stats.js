/* Central PC | statisztika szamlalo | v2 2026-10-25 | FROZEN: az adat a stats.json-bol jon */
(function(){
  var SRC='https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/stats.json';
  var FALLBACK={facebook_likes:1204,google_reviews:611,happy_clients:8663,years_same_place:13};
  var MAP=[{re:/facebook/i,key:'facebook_likes'},{re:/google/i,key:'google_reviews'},{re:/el[ée]gedett|ügyf[ée]l|ugyfel/i,key:'happy_clients'},{re:/[ée]ve|helyen/i,key:'years_same_place'}];
  var LOCK={};

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

  function ease(t){ return 1-Math.pow(1-t,3); }

  function animate(el,to,done){
    var dur=1200,start=null;
    function step(ts){
      if(!start) start=ts;
      var p=Math.min(1,(ts-start)/dur);
      el.textContent=fmt(Math.round(to*ease(p)));
      if(p<1) requestAnimationFrame(step); else { el.textContent=fmt(to); if(done) done(); }
    }
    requestAnimationFrame(step);
  }

  function lock(el,value){
    LOCK[value]=true;
    var want=fmt(value);
    // ha barmi mas irja felul (pl. a widget sajat animacioja), azonnal visszaall
    var mo=new MutationObserver(function(){
      if(el.textContent!==want) el.textContent=want;
    });
    mo.observe(el,{childList:true,characterData:true,subtree:true});
    // 4 masodperc mulva leall a figyeles, hogy ne maradjon orok figyelo
    setTimeout(function(){ mo.disconnect(); if(el.textContent!==want) el.textContent=want; },4000);
  }

  function run(data){
    var list=targets();
    if(!list.length) return;
    var go=function(){
      list.forEach(function(t){
        var v=Number(data[t.key]||0);
        if(!(v>0)) return;
        animate(t.el,v,function(){ lock(t.el,v); });
      });
    };
    if(!('IntersectionObserver' in window)) return go();
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); go(); } });
    },{threshold:0.2});
    list.forEach(function(t){ io.observe(t.el.closest('.counter-box')||t.el); });
  }

  // NINCS-COUNTER: ha az oldalon nincs szamlalo widget, ne kerjunk adatot
  if(!document.querySelector('.counter')) return;
  fetch(SRC,{cache:'no-store'}).then(function(r){return r.json()}).then(run).catch(function(){ run(FALLBACK); });
})();
