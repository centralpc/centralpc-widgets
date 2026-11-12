/* Central PC | Google velemenyek | EN 2026-11-12 | angol valtozat kulon fajl
   Hasznalat az /english/ oldalon:
   <script src="https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/reviews-widget-en.js"></script> */
(function(){
  try{
  var host=document.createElement('div');
  var sc=document.currentScript;
  if(sc&&sc.parentNode){ sc.parentNode.insertBefore(host,sc); } else if(document.body){ document.body.appendChild(host); }
  host.innerHTML='<div class="cpc-rv" id="cpc-rv"> <div class="cpc-rv-title">&#220;gyfeleinkt&#337;l:</div> <div class="cpc-rv-head"> <div class="cpc-rv-brand"> <img class="cpc-rv-logo" src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width="76" height="25" loading="lazy"> <span class="cpc-rv-brandtxt">V&#233;lem&#233;nyek</span> </div> <div class="cpc-rv-score"> <strong class="cpc-rv-num" id="cpc-rv-num">4,9</strong> <span class="cpc-rv-stars" id="cpc-rv-stars"></span> <span class="cpc-rv-count" id="cpc-rv-count"></span> </div> </div> <div class="cpc-rv-grid" id="cpc-rv-grid"> <div class="cpc-rv-item cpc-rv-ai" id="cpc-rv-ai"> <div class="cpc-rv-card"> <div class="cpc-rv-ai-top"> <span class="cpc-rv-ai-ico"> <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#a78bfa" d="M12 3.2l1.55 6.05L19.6 10.8l-6.05 1.55L12 18.4l-1.55-6.05L4.4 10.8l6.05-1.55z"/></svg> </span> <span class="cpc-rv-ai-lbl">AI &#225;ltal gener&#225;lt &#246;sszefoglal&#243;</span> </div> <div class="cpc-rv-ai-sub"><span id="cpc-rv-ai-num"></span> Google &#233;rt&#233;kel&#233;s alapj&#225;n</div> <div class="cpc-rv-ai-txt" id="cpc-rv-ai-txt"></div> </div> </div> </div> <div class="cpc-rv-foot"> <button type="button" class="cpc-rv-more" id="cpc-rv-more">Tov&#225;bbiak bet&#246;lt&#233;se</button> <div class="cpc-rv-all"><a id="cpc-rv-btn" href="#" target="_blank" rel="noopener nofollow">&#214;sszes v&#233;lem&#233;ny a Google-on</a></div> <div class="cpc-rv-src" id="cpc-rv-src"></div> </div> </div> <style> .cpc-rv{width:100%;margin:0 auto;font-family:var(--font-content,"Open Sans"),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#fff;line-height:1.45;text-align:left;--cpc-gold:#fbbc04;--cpc-muted:#9aa0a6;--cpc-panel:#292929;--cpc-head:#222222;--cpc-card:#222222;background:var(--cpc-panel);border-radius:12px;padding:24px} .cpc-rv *{box-sizing:border-box} .cpc-rv-title{text-align:center;font-size:24px;font-weight:700;letter-spacing:.2px;margin:0 0 22px;color:#fff} .cpc-rv-head{background:var(--cpc-head);border-radius:10px;padding:22px 24px;text-align:center;margin:0 0 24px;box-shadow:0 1px 3px rgba(0,0,0,.35)} .cpc-rv-brand{display:flex;align-items:center;justify-content:center;gap:11px;margin:0 0 8px} .cpc-rv-logo{display:block;height:30px;width:auto} .cpc-rv-brandtxt{font-size:21px;font-weight:600;color:#e8eaed} .cpc-rv-score{display:flex;align-items:center;justify-content:center;gap:8px;font-size:16px;color:#bdc1c6} .cpc-rv-num{font-size:22px;font-weight:700;color:#fff} .cpc-rv-stars{display:inline-flex;gap:2px;margin-left:2px} .cpc-rv-stars svg{width:26px;height:26px;display:block} .cpc-rv-grid{columns:4;column-gap:24px} .cpc-rv-item{break-inside:avoid;margin:0 0 24px;display:inline-block;width:100%} .cpc-rv-card{background:var(--cpc-card);border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,.3)} .cpc-rv-st{display:flex;gap:2px;margin:0 0 9px} .cpc-rv-st svg{width:17px;height:17px;display:block} .cpc-rv-t{font-size:16px;font-weight:700;margin:0 0 4px;color:#fff;line-height:1.35} .cpc-rv-x{font-size:15px;color:#e8eaed;margin:0;line-height:1.5} .cpc-rv-tren{font-size:11.5px;color:#9aa0a6;margin:8px 0 0;font-style:italic} .cpc-rv-gl{display:block;height:24px;width:auto;margin:16px 0 0} .cpc-rv-who{display:flex;align-items:center;gap:11px;padding:11px 3px 0} .cpc-rv-av{width:34px;height:34px;border-radius:50%;background:#3a3a3a;flex:0 0 34px;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#bbb} .cpc-rv-av img{width:100%;height:100%;object-fit:cover;display:block} .cpc-rv-meta{min-width:0} .cpc-rv-n{font-size:14px;font-weight:600;color:#e8eaed;white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .cpc-rv-d{font-size:12.5px;color:var(--cpc-muted)} .cpc-rv-ai .cpc-rv-card{background:linear-gradient(180deg,#2b2340,#222222);border:1px solid #453569} .cpc-rv-ai-top{display:flex;align-items:flex-start;gap:9px;margin:0 0 4px} .cpc-rv-ai-ico{margin-top:1px;width:22px;height:22px;flex:0 0 22px;display:flex;align-items:center;justify-content:center;background:none;border-radius:0} .cpc-rv-ai-ico svg{width:22px;height:22px;display:block} .cpc-rv-ai-lbl{font-size:16px;font-weight:700;color:#a78bfa} .cpc-rv-ai-sub{font-size:12.5px;color:var(--cpc-muted);margin:0 0 11px} .cpc-rv-ai-txt{font-size:15px;color:#e8eaed} .cpc-rv-foot{text-align:center;margin:6px 0 0} .cpc-rv-more{display:inline-block;padding:11px 22px;border-radius:6px;background:#2b2b2b;color:#fff;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;border:1px solid #3a3a3a;transition:background .15s ease} .cpc-rv-more:hover{background:#3a3a3a} .cpc-rv-all{margin:12px 0 0} .cpc-rv-all a{color:var(--cpc-muted);font-size:13px;text-decoration:none} .cpc-rv-all a:hover{color:#fff;text-decoration:underline} .cpc-rv-src{display:none;margin:10px 0 0;font:11px/1.4 monospace;color:#6b7280} .cpc-rv-dbg .cpc-rv-src{display:block} @media (max-width:1000px){.cpc-rv-grid{columns:3}} @media (max-width:760px){.cpc-rv-grid{columns:2}} @media (max-width:520px){.cpc-rv-grid{columns:1}.cpc-rv-head{padding:14px}.cpc-rv-title{font-size:20px}} </style>';
  var EN=true;
  var setTxt=function(sel,txt){ var e=host.querySelector(sel); if(e){ e.textContent=txt; } };
  setTxt('.cpc-rv-title','What our customers say:');
  setTxt('.cpc-rv-brandtxt','Reviews');
  setTxt('#cpc-rv-more','Load more reviews');
  setTxt('#cpc-rv-btn','All reviews on Google');
  var aiEl=document.getElementById('cpc-rv-ai');
  if(aiEl){ aiEl.style.display='none'; }
var B64="ewogICJnZW5lcmF0ZWQiOiAiMjAyNi0xMS0xMlQxMjowNToxMy44NzFaIiwKICAicmF0aW5nIjogNC45LAogICJ0b3RhbCI6IDYxNywKICAicGxhY2VJZCI6ICJDaElKeFh1WmxzeXpRa2NScjNDRDlBd0ZrN2siLAogICJzdW1tYXJ5IjogewogICAgInRleHQiOiAiQSB2ZW5kw6lnZWsgdmlzc3phdMOpcsWRZW4gYSBneW9yc2Fzw6Fnb3Qgw6lzIGEga29ycmVrdCDDoXJhesOhc3QgZW1lbGlrIGtpOiByZWdnZWwgbGVhZHTDoWsgYSBnw6lwZXQsIMOpcyBkw6lsdXTDoW5yYSBlbGvDqXN6w7xsdC4gVMO2YmIgdsOpbGVtw6lueSBraWVtZWxpIGEgdMO8cmVsbWVzLCB0YW7DoWNzYWTDsyBob3p6w6HDoWxsw6FzdCBpcywgc29rYW4gw61yasOhaywgaG9neSBjc2FrIGFra29yIGvDqXJuZWsgcMOpbnp0LCBoYSB2YWzDs2JhbiBzesO8a3PDqWcgdmFuIHZhbGFtaWx5ZW4gbXVua8OhcmEuIEEgdGlzenTDrXTDoXMgw6lzIHBhc3p0w6F6w6FzIHV0w6FuIGEgZ8OpcGVrIGhhbGthYmJhaywgaMWxdsO2c2ViYmVrIGxldHRlaywgYSBsYXB0b3BvayBwZWRpZyBzemludGUgw7pqc3plcsWxIMOhbGxhcG90YmFuIGtlcsO8bHRlayB2aXNzemEuIiwKICAgICJwcmljZVZhcmlhbnQiOiAwLAogICAgImJhc2VkT24iOiAxNgogIH0sCiAgInJldmlld3MiOiBbCiAgICB7CiAgICAgICJuIjogIlpvbHRhbiBLb25jemkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy80ZTVjODUxNjc5N2IucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTExLTEwVDE5OjE4OjUwLjAwMFoiLAogICAgICAidCI6ICJUYWthcsOtdMOhcyDDqXMgcGFzenTDoXrDoXMiLAogICAgICAieCI6ICJUZWduYXAgdml0dGVtIGVsIGEgUENtZXQgdGFrYXLDrXTDoXNyYSDDqXMgcGFzenTDoXrDoXNyYS5Uw7Zrw6lsZXRlcyB2w6FsYXN6dMOhcyB2b2x0LCBrZWR2ZXNlaywgc2Vnw610xZFrw6lzemVrLCBzZWfDrXRzw6lnZ2VsLCB0YW7DoWNzb2trYWwgbMOhdHRhayBlbCwgaG9neSBtYWpkIG1pdCBrw6luZSBjc2Vyw6lsbmkgYSBnw6lwYmVuIGhvZ3kgasOzIG1hcmFkam9uLlxuTWF4aW3DoWxpc2FuIGFqw6FubG9tIG1pbmRlbmtpbmVrISIsCiAgICAgICJ4ZSI6ICJJIHRvb2sgbXkgUEMgaW4gZm9yIGNsZWFuaW5nIGFuZCB0aGVybWFsIHBhc3RlIHllc3RlcmRheS4gSXQgd2FzIHRoZSBwZXJmZWN0IGNob2ljZTogZnJpZW5kbHksIGhlbHBmdWwgcGVvcGxlIHdobyBhbHNvIGdhdmUgbWUgYWR2aWNlIG9uIHdoYXQgd291bGQgbmVlZCByZXBsYWNpbmcgaW4gdGhlIG1hY2hpbmUgdG8ga2VlcCBpdCBpbiBnb29kIHNoYXBlLiBJIGhpZ2hseSByZWNvbW1lbmQgdGhlbSB0byBldmVyeW9uZSEiCiAgICB9LAogICAgewogICAgICAibiI6ICJSw7NiZXJ0IFRha8OhY3MiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9mMmFjNzAzZjViZDUucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTEwLTI4VDExOjQ2OjM1LjAwMFoiLAogICAgICAidCI6ICJGZWxrw6lzesO8bHQgw6lzIGtvcnJla3QgY3NhcGF0IiwKICAgICAgIngiOiAiU3pha21haWxhZyBmZWxrZXN6dWx0IGd5b3JzIGVzIGtvcnJla3Qgc3pvbGdhbHRhdGFzLCBtaW5kZW5raW5layBhamFubG9tISEhIiwKICAgICAgInhlIjogIlByb2Zlc3Npb25hbGx5IHByZXBhcmVkLCBmYXN0IGFuZCBjb3JyZWN0IHNlcnZpY2UuIEkgcmVjb21tZW5kIHRoZW0gdG8gZXZlcnlvbmUhISEiCiAgICB9LAogICAgewogICAgICAibiI6ICJab2x0w6FuIFTDoXBhaSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2JjMjUwNmIzMTE4Zi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMTAtMjFUMTE6MDQ6MzQuMDAwWiIsCiAgICAgICJ0IjogIlByb2Zlc3N6aW9uw6FsaXMgdGFuw6Fjc29rLCBub3Jtw6FsaXMgw7NyYWTDrWoiLAogICAgICAieCI6ICJHeW9yc2FuIMOpcyBwcm9mZXNzemlvbsOhbGlzYW4ga2V6ZWx0w6lrIGEgcHJvYmzDqW3DoW1hdCDDqXMgYsWRdmVuIGVsbMOhdHRhayB0YW7DoWNzb2trYWwgYW5uYWsgbWVnb2xkw6Fzw6Fob3ouIE5lbSB0dWttw6FsdGFrIHLDoW0gc2VtbWlseWVuIHRlcm3DqWtldCB2YWd5IHN6b2xnw6FsdGF0w6FzdC4gU2Fqw6F0IGtvcsOhYmJpIHRhcGFzenRhbGF0YWltIHN6ZXJpbnQgbm9ybcOhbGlzIMOzcmFiw6lyw6lydCBkb2xnb3puYWsuIE5hZ3lvbiB0dWRvbSBhasOhbmxhbmkgbWluZGVua2luZWsuIiwKICAgICAgInhlIjogIlRoZXkgaGFuZGxlZCBteSBwcm9ibGVtIHF1aWNrbHkgYW5kIHByb2Zlc3Npb25hbGx5IGFuZCBnYXZlIG1lIHBsZW50eSBvZiBhZHZpY2Ugb24gaG93IHRvIHNvbHZlIGl0LiBUaGV5IGRpZCBub3QgcHVzaCBhbnkgcHJvZHVjdCBvciBzZXJ2aWNlIG9uIG1lLiBCYXNlZCBvbiBteSBlYXJsaWVyIGV4cGVyaWVuY2UsIHRoZXkgd29yayBmb3IgYSBmYWlyIGhvdXJseSByYXRlLiBJIGNhbiBoaWdobHkgcmVjb21tZW5kIHRoZW0gdG8gZXZlcnlvbmUuIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiRXZhIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZTQ3YzNiYzVkMmM2LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOS0zMFQxMjoxMDo1My4wMDBaIiwKICAgICAgInQiOiAiQWxhcG9zIHRpc3p0w610w6FzLCBoxbF2w7ZzIGxhcHRvcCIsCiAgICAgICJ4IjogIk5hZ3lvbiBlbMOpZ2VkZXR0IHZhZ3lvayBhIHN6b2xnw6FsdGF0w6Fzc2FsISBBIGxhcHRvcG9tYXQga8OtdsO8bC1iZWzDvGwgYWxhcG9zYW4gbWVndGlzenTDrXRvdHTDoWssIMO6aiBoxZF2ZXpldMWRIHBhc3p0w6F0IGlzIGthcG90dCwgw6lzIG1vc3Qgw7pneSBuw6l6IGtpLCBtaW50aGEgw7pqIGxlbm5lLiBBesOzdGEgbcOhciBuZW0gbWVsZWdzemlrIHTDumwuIEF6IMOhci3DqXJ0w6lrIGFyw6FueSBraWZvZ8Ohc3RhbGFuLiBDc2FrIGFqw6FubGFuaSB0dWRvbSBhIFBDIERpcmVrdCDDvHpsZXRldCwgw6lzIGJpenRvc2FuIG3DoXNva25hayBpcyBhasOhbmxhbmkgZm9nb20hIiwKICAgICAgInhlIjogIkkgYW0gdmVyeSBoYXBweSB3aXRoIHRoZSBzZXJ2aWNlISBUaGV5IGNsZWFuZWQgbXkgbGFwdG9wIHRob3JvdWdobHkgaW5zaWRlIGFuZCBvdXQsIGl0IHJlY2VpdmVkIG5ldyB0aGVybWFsIHBhc3RlLCBhbmQgbm93IGl0IGxvb2tzIGxpa2UgbmV3LiBJdCBubyBsb25nZXIgb3ZlcmhlYXRzLiBUaGUgdmFsdWUgZm9yIG1vbmV5IGlzIGltcGVjY2FibGUuIEkgY2FuIG9ubHkgcmVjb21tZW5kIHRoZSBQQyBEaXJla3Qgc2hvcCwgYW5kIEkgd2lsbCBjZXJ0YWlubHkgcmVjb21tZW5kIGl0IHRvIG90aGVycyB0b28hIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiUGV0ZXIgVmFzcyIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2IzZDIyNTMyMzNkZi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDktMTZUMTQ6Mzg6MTUuMDAwWiIsCiAgICAgICJ0IjogIkd5b3JzLCBraXbDoWzDsyBraXN6b2xnw6Fsw6FzIiwKICAgICAgIngiOiAiR3lvcnMgw6lzIGtpdsOhbMOzIHN6b2xnw6FsdGF0w6FzIiwKICAgICAgInhlIjogIkZhc3QgYW5kIGV4Y2VsbGVudCBzZXJ2aWNlIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiSGlsZGVnw6FyZCBLZXJla2VzIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZTY4YmQwZDY1M2Q5LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOS0wOFQxMTo0Njo1NS4wMDBaIiwKICAgICAgInQiOiAiWnNhbsOpcmphdsOtdMOhcyDDqXMgdGFuw6Fjc29rIiwKICAgICAgIngiOiAiR3lvcnMsIGFsYXBvcyBsYXB0b3B3ZWxsbmVzcy10IGthcHR1bmssIGEgZ8OpcCBhbGlnIG1lbGVnc3ppaywgaGFsa2FiYiwgcGx1c3ogdMOhcmhlbHkgc3phYmFkdWx0IGZlbCwgw6lzIG3DqWcgZWd5IGtpcyB6c2Fuw6lyZml0dG5lc3N6dCBpcyBrYXBvdHQsIG1pIHBlZGlnIGrDsyB0YW7DoWNzb2thdCAtIGvDtnN6w7ZuasO8ayEiLAogICAgICAieGUiOiAiV2UgZ290IGEgZmFzdCwgdGhvcm91Z2ggbGFwdG9wIHdlbGxuZXNzIHRyZWF0bWVudDogdGhlIG1hY2hpbmUgYmFyZWx5IHdhcm1zIHVwIG5vdywgaXQgaXMgcXVpZXRlciwgZXh0cmEgc3RvcmFnZSB3YXMgZnJlZWQgdXAsIGFuZCBpdCBldmVuIGdvdCBhIGxpdHRsZSBoaW5nZSBmaXRuZXNzIHNlc3Npb24sIHBsdXMgZ29vZCBhZHZpY2UgZm9yIHVzLiBUaGFuayB5b3UhIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiQW1pbiBLIE1hcnZhc3RpIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvYWQ4ZWIxNzViNjMxLnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOC0yNFQxMDoyNDo0MS4wMDBaIiwKICAgICAgInQiOiAiQW5nb2x1bCBpcyBnw7ZyZMO8bMOpa2VueSBzZWfDrXRzw6lnIiwKICAgICAgIngiOiAiR3JlYXQgZXhwZXJpZW5jZSB3aXRoIHRoaXMgcmVwYWlyIHNob3AhIFRoZSB0ZWFtIHdhcyBzdXBlciBoZWxwZnVsLCBmcmllbmRseSwgYW5kIHByb2Zlc3Npb25hbCBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhleSBkaWQgZXhjZWxsZW50IHdvcmssIGV4cGxhaW5lZCBldmVyeXRoaW5nIGNsZWFybHksIGFuZCBtYWRlIHRoZSB3aG9sZSBwcm9jZXNzIGVhc3kuIFJlYWxseSBoYXBweSB3aXRoIHRoZSBxdWFsaXR5IG9mIHRoZSByZXBhaXIgYW5kIHRoZSBzZXJ2aWNlLiBIaWdobHkgcmVjb21tZW5kIHRoZW0hIiwKICAgICAgInhlIjogIiIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIkd5dWxhIE1paMOhbHlpIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZDgzOGUzOTE3OGVmLnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOC0wNlQxMToxNjozNy4wMDBaIiwKICAgICAgInQiOiAiUG9udG9zLCBtZWdiw616aGF0w7Mgc3plcnZpeiIsCiAgICAgICJ4IjogIkd5b3JzLCBwb250b3Mgw6lzIG1lZ2LDrXpoYXTDsyBzemVydsOtei4iLAogICAgICAieGUiOiAiRmFzdCwgcHJlY2lzZSBhbmQgcmVsaWFibGUgc2VydmljZS4iCiAgICB9LAogICAgewogICAgICAibiI6ICLDgWtvcyBCYWzDoXpzIFLDs25haSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2UyNTMyMDA5ZjRlZC5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDgtMDZUMTA6MDU6MzIuMDAwWiIsCiAgICAgICJ0IjogIkTDrWptZW50ZXMgdGFuw6FjcywgxZFzemludGUgw6FyIiwKICAgICAgIngiOiAiTmFneW9uIGtlZHZlc2VrLCBzZWfDrXTFkWvDqXN6ZWsgw6lzIMWRc3ppbnTDqWsuIENzYWsgYWtrb3Iga8Opcm5layBww6luenQsIGhhIHZhbMOzYmFuIHN6w7xrc8OpZyB2YW4gdmFsYW1pbHllbiBtdW5rw6FyYS4gTmVrZW0gZMOtam1lbnRlc2VuIGlzIGFkdGFrIGhhc3pub3MgdGFuw6Fjc29rYXQsIGFtaXQga8O8bMO2bsO2c2VuIMOpcnTDqWtlbHRlbS4iLAogICAgICAieGUiOiAiVGhleSBhcmUgdmVyeSBraW5kLCBoZWxwZnVsIGFuZCBob25lc3QuIFRoZXkgb25seSBhc2sgZm9yIG1vbmV5IHdoZW4gc29tZSB3b3JrIGlzIGdlbnVpbmVseSBuZWVkZWQuIFRoZXkgZXZlbiBnYXZlIG1lIHVzZWZ1bCBhZHZpY2UgZnJlZSBvZiBjaGFyZ2UsIHdoaWNoIEkgZXNwZWNpYWxseSBhcHByZWNpYXRlZC4iCiAgICB9LAogICAgewogICAgICAibiI6ICJTemFib2xjcyBQYXBwIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvYWRiN2MwZjhkNGI1LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wNy0yOVQxNjowMzowMy4xMDFaIiwKICAgICAgInQiOiAiU3pha3N6ZXLFsSBkaWFnbm9zenRpa2EiLAogICAgICAieCI6ICJHeW9ycyDDqXMgc3pha3N6ZXLFsSBkaWFnbm9zenRpa2EgbWVsbGV0dCBoYXN6bm9zIHRhbsOhY3NvdCBrYXB0YW0gw7pneSBhIGhhcmR3YXJlIHRla2ludGV0w6liZW4sIG1pbmQgYSBoaWJhIG9rYWl0IGlsbGV0xZFlbi4gS8O2c3rDtm7Dtm0gZXogw7p0b24gaXMgYSBzemFrc3plcsWxIHNlZ8OtdHPDqWdldC4iLAogICAgICAieGUiOiAiQWxvbmcgd2l0aCBhIGZhc3QgYW5kIHByb2Zlc3Npb25hbCBkaWFnbm9zaXMsIEkgcmVjZWl2ZWQgdXNlZnVsIGFkdmljZSBib3RoIGFib3V0IHRoZSBoYXJkd2FyZSBhbmQgYWJvdXQgdGhlIGNhdXNlcyBvZiB0aGUgZmF1bHQuIFRoYW5rIHlvdSBmb3IgdGhlIHByb2Zlc3Npb25hbCBoZWxwLiIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlZhcmdhIELDoWxpbnQiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy82OTQxNzNkMDZkYTMucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA2LTExVDEwOjMzOjU5LjIyOFoiLAogICAgICAidCI6ICJaw7Zra2VuxZFtZW50ZXMgamF2w610w6FzIiwKICAgICAgIngiOiAiU3p1cGVyIHByb2ZpIGNzYXBhdCEgR3lvcnNhbiDDqXMgcHJlY8OtemVuIGRvbGdvenRhaywgYSBqYXbDrXTDoXMgesO2a2tlbsWRbWVudGVzZW4gbWVudC4gVGVsamVzZW4gbWVnYsOtemhhdMOzIHN6YWtlbWJlcmVrLCBjc2FrIGFqw6FubGFuaSB0dWRvbSDFkWtldC4gS8O2c3rDtm7Dtm0gYSBzZWfDrXRzw6lnZXQhIiwKICAgICAgInhlIjogIkEgc3VwZXIgcHJvZmVzc2lvbmFsIHRlYW0hIFRoZXkgd29ya2VkIHF1aWNrbHkgYW5kIHByZWNpc2VseSwgYW5kIHRoZSByZXBhaXIgd2VudCBzbW9vdGhseS4gQ29tcGxldGVseSByZWxpYWJsZSBleHBlcnRzLCBJIGNhbiBvbmx5IHJlY29tbWVuZCB0aGVtLiBUaGFuayB5b3UgZm9yIHRoZSBoZWxwISIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIkTDoXZpZCBTYWp0aSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzg1M2NjZjM4NWUxMy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDYtMDhUMTE6Mzg6MDEuNDkzWiIsCiAgICAgICJ0IjogIlTDvHJlbG1lcyBnw6lwdsOhbGFzenTDoXMiLAogICAgICAieCI6ICLDnGR2IVxuw4luIGF6dMOhbiBjc2FrIGrDs3QgdHVkb2sgbW9uZGFuaS4gQ3NhayBoYXN6bsOhbG9tIGEgZ8OpcGV0LCBzesOzdmFsIGhvenrDocOpcnTDqXNlbSBudWxsYS4gRXogbMOhdHN6b3R0IGlzIG1pa29yIG5lbSB0dWR0YW0ga8O2cmJlIMOtcm5pIG1pcmUgaXMgbGVubmUgc3rDvGtzw6lnZW0uIERFIGF6IHVyYWsgdsOpZ2lnIGvDqXN6c8OpZ2VzZW4sIHTDvHJlbGVtbWVsIMOhbGx0YWsgaG96esOhbSDDqXMgYSB2w6lnw6lyZSBtZWcgaXMgdGFsw6FsdHVrIGF6IMO6aiBnw6lwZW1ldCwgw61neSB2ZXR0ZW0gdMWRbMO8ayAxLWV0IGrDoXTDqWtyYSwgZGUgYWtrb3IgbcOhciBhIHLDqWdpdCBpcyBraXB1Y29sdGF0dGFtLiBHeW9ycywgc3pha3N6ZXLFsS4gNSBjc2lsbGFnLiBLw7ZzesO2bsO2bSEiLAogICAgICAieGUiOiAiSGVsbG8hIEkgY2FuIG9ubHkgc2F5IGdvb2QgdGhpbmdzLiBJIGp1c3QgdXNlIHRoZSBjb21wdXRlciwgc28gbXkgdGVjaG5pY2FsIGtub3dsZWRnZSBpcyB6ZXJvLiBUaGF0IHNob3dlZCB3aGVuIEkgY291bGQgbm90IGV2ZW4gZXhwbGFpbiB3aGF0IEkgbmVlZGVkLiBCVVQgdGhlIGdlbnRsZW1lbiB3ZXJlIGhlbHBmdWwgYW5kIHBhdGllbnQgd2l0aCBtZSB0aGUgd2hvbGUgdGltZSwgYW5kIGluIHRoZSBlbmQgd2UgZm91bmQgbXkgbmV3IG1hY2hpbmUsIHNvIEkgYm91Z2h0IG9uZSBmcm9tIHRoZW0gZm9yIGdhbWluZywgYW5kIGJ5IHRoZW4gSSBhbHNvIGhhZCB0aGUgb2xkIG9uZSBjbGVhbmVkIHVwLiBGYXN0LCBwcm9mZXNzaW9uYWwuIDUgc3RhcnMuIFRoYW5rIHlvdSEiCiAgICB9LAogICAgewogICAgICAibiI6ICJQw6l0ZXIgSW1yw6luw6kgUGlyaXNpIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvYmVhNmViMzNkMTE3LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wNi0wNFQwODozMjozMC4yNzBaIiwKICAgICAgInQiOiAiVMO8cmVsbWVzZWsgaWTFkXNlYmIgw7xneWZlbGVra2VsIiwKICAgICAgIngiOiAiVGVnbmFwIGrDoXJ0YW0gYSBDZW50cmFsIFBDLW7DqWwuIFLDqWdpLCBzw6lyw7xsdCBTU2QtasWxIGxhcHRvcG9tcsOzbCBzaWtlcmVzZW4gbWVudGV0dMOpayDDoXQgYSBkb2xnYWltYXQgYXogw7pqcmEgw6lzIGZlbCBpcyDDumrDrXRvdHTDoWsuIEd5b3JzYWssIHBvbnRvc2FrLCBtZWdiw616aGF0w7Nhaywga2l0w7puxZEgc3pha2VtYmVyZWsuIEtpZW1lbG7DqW0gYSBrb21tdW5pa8OhY2nDs2p1a2F0IGlzLCBtZXJ0IG55dWdkw61qYXNrw6ludCBpbHllbiBrZWR2ZXNlbiwgdMO8cmVsbWVzZW4gbcOpZyBuZW0gYsOhbnRhayB2ZWxlbSBzZWhvbC4gUmVuZGvDrXbDvGwga29ycmVrdCDDtnNzemVnw6lydCB2w6lnZXp0w6lrIGVsIGF6IMO2c3N6ZXMgZmVsYWRhdG90LiBCw6FyIGNzYWsgw7Z0IGNzaWxsYWdvdCBsZWhldCBhZG5pLCDDqW4gc3rDrXZlbSBzemVyaW50IGhhdG90IGFkbsOpayBuZWtpayDDqXMgbWluZGVua2luZWsgasOzIHN6w612dmVsIGFqw6FubG9tIMWRa2V0ISIsCiAgICAgICJ4ZSI6ICJJIHZpc2l0ZWQgQ2VudHJhbCBQQyB5ZXN0ZXJkYXkuIFRoZXkgc3VjY2Vzc2Z1bGx5IHRyYW5zZmVycmVkIG15IGRhdGEgZnJvbSBteSBvbGQgbGFwdG9wIHdpdGggYSBkYW1hZ2VkIFNTRCB0byBhIG5ldyBvbmUgYW5kIHJlZnVyYmlzaGVkIGl0LiBUaGV5IGFyZSBmYXN0LCBwcmVjaXNlLCByZWxpYWJsZSwgb3V0c3RhbmRpbmcgcHJvZmVzc2lvbmFscy4gSSB3b3VsZCBhbHNvIGhpZ2hsaWdodCB0aGVpciBjb21tdW5pY2F0aW9uLCBiZWNhdXNlIGFzIGEgcGVuc2lvbmVyIEkgaGF2ZSBuZXZlciBiZWVuIHRyZWF0ZWQgc28ga2luZGx5IGFuZCBwYXRpZW50bHkgYW55d2hlcmUuIFRoZXkgY29tcGxldGVkIGFsbCB0aGUgdGFza3MgZm9yIGFuIGV4dHJlbWVseSBmYWlyIHByaWNlLiBBbHRob3VnaCBvbmx5IGZpdmUgc3RhcnMgY2FuIGJlIGdpdmVuLCBpbiBteSBoZWFydCBJIHdvdWxkIGdpdmUgdGhlbSBzaXgsIGFuZCBJIHJlY29tbWVuZCB0aGVtIHdob2xlaGVhcnRlZGx5ISIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlpvbHTDoW4gS2lzZmFsaSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2JhN2ZmN2E0YThiNy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDItMDZUMTg6NDg6NDYuNjUyWiIsCiAgICAgICJ0IjogIlByZWPDrXogYWxrYXRyw6lzeiB0YW7DoWNzYWTDoXMiLAogICAgICAieCI6ICJUZWxqZXMgbcOpcnTDqWtiZW4gZWzDqWdlZGV0dCB2YWd5b2suIENzYWsgYWrDoW5sYW5pIHR1ZG9tLlxuR3lvcnMgKG1lZ2xlcMWRZW4gZ3lvcnMpICwgcHJlY8OteiBob3p6w6HDoWxsw6FzLCB0ZWxqZXMga8O2csWxIHNlZ8OtdMWRa8Opc3pzw6lnICDDqXMgc3pha8OpcnRlbGVtLiBNaW5kZW4gZWd5ZXMga8OpcmTDqXNlbXJlIHbDoWxhc3pvbHRhayBhbWl0IGNzYWsgZmVsdGV0dGVtLCBzZWfDrXRldHRlayBraXbDoWxhc3p0YW5pIGEgbWVnZmVsZWzFkSBhbGthdHLDqXN6ZWtldC5cblRlbGplc2VuIHByb2ZpIHN6ZXJ2w616LiIsCiAgICAgICJ4ZSI6ICJJIGFtIGNvbXBsZXRlbHkgc2F0aXNmaWVkLiBJIGNhbiBvbmx5IHJlY29tbWVuZCB0aGVtLiBGYXN0IChzdXJwcmlzaW5nbHkgZmFzdCksIHByZWNpc2UgYXBwcm9hY2gsIGNvbXByZWhlbnNpdmUgaGVscGZ1bG5lc3MgYW5kIGV4cGVydGlzZS4gVGhleSBhbnN3ZXJlZCBldmVyeSBzaW5nbGUgcXVlc3Rpb24gSSBhc2tlZCBhbmQgaGVscGVkIG1lIGNob29zZSB0aGUgcmlnaHQgY29tcG9uZW50cy4gQSBjb21wbGV0ZWx5IHByb2Zlc3Npb25hbCBzZXJ2aWNlLiIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIkRhdmlkIG5hZ3kiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9kNDk5YTdlYjZjMzQucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTAxLTI3VDA5OjUwOjEzLjI0MVoiLAogICAgICAidCI6ICJSZWdnZWwgbGVhZHZhLCBkw6lsdXTDoW4ga8Opc3oiLAogICAgICAieCI6ICJTenVwZXJneW9ycyDDqXMgcHJvZmkga2lzem9sZ8OhbMOhcyEgUmVnZ2VsIGJldml0dGVtIGEgbGFwdG9wb20sIGTDqWx1dMOhbnJhIG3DoXIga8Opc3plbiBpcyB2b2x0IGEgdGlzenTDrXTDoXMgw6lzIGEgcGFzenTDoXrDoXMsIMOpcyBjc2FrIDgwMDAgZXplciBGdCB2b2x0LiBBIGfDqXAgw7pqcmEgaGFsayDDqXMgZ3lvcnMuIENzYWsgYWrDoW5sYW5pIHR1ZG9tISIsCiAgICAgICJ4ZSI6ICJTdXBlci1mYXN0IGFuZCBwcm9mZXNzaW9uYWwgc2VydmljZSEgSSBkcm9wcGVkIG9mZiBteSBsYXB0b3AgaW4gdGhlIG1vcm5pbmcgYW5kIGJ5IHRoZSBhZnRlcm5vb24gdGhlIGNsZWFuaW5nIGFuZCB0aGVybWFsIHBhc3RlIHdvcmsgd2FzIGRvbmUsIGZvciBvbmx5IDgsMDAwIEhVRi4gVGhlIG1hY2hpbmUgaXMgcXVpZXQgYW5kIGZhc3QgYWdhaW4uIEkgY2FuIG9ubHkgcmVjb21tZW5kIHRoZW0hIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiQW5pdGEgR2HDoWwiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy8wZWJjNDY1MTQ0M2MucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI1LTEyLTIzVDE4OjQwOjM1LjM0MloiLAogICAgICAidCI6ICJLYXLDoWNzb255IGVsxZF0dCBpcyBlbHbDoWxsYWx0w6FrIiwKICAgICAgIngiOiAiRGVjZW1iZXIgMjMuLcOhbiBlbHbDoWxsYWx0w6FrIGF6IHV0b2xzw7MgcGlsbGFuYXRiYW4gw6lya2V6ZXR0LCBmaWFtbmFrIHN6w6FudCBnYW1lciBsYXB0b3AsIHRlbGplcyB0ZWxlcMOtdMOpc8OpdCDDqXMgYmXDoWxsw610w6Fzw6F0LCDDumd5IGhvZ3kgZMOpbHV0w6FuIGtldHTFkWtvciBlc3RlbSBiZSB2ZWxlLiBOYWd5b24ga29ycmVrdCBzemVydml6LCBrb3JyZWt0IMOhcmFra2FsLCDDqXMga29ycmVrdCBob3p6w6HDoWxsw6Fzc2FsLiBNYW5hcHPDoWcgbmVtIGlnYXrDoW4gbMOpdGV6aWsgbcOhciBpbHllbiBzYWpub3MuIEvDtnN6w7ZuasO8ayBzesOpcGVuIG5la3RlayEgQsOpa8OpcywgQm9sZG9nIEthcsOhY3Nvbnl0ISIsCiAgICAgICJ4ZSI6ICJPbiAyMyBEZWNlbWJlciB0aGV5IHRvb2sgb24gdGhlIGZ1bGwgc2V0dXAgYW5kIGNvbmZpZ3VyYXRpb24gb2YgYSBnYW1pbmcgbGFwdG9wIGZvciBteSBzb24gdGhhdCBhcnJpdmVkIGF0IHRoZSBsYXN0IG1pbnV0ZSwgYW5kIEkgd2Fsa2VkIGluIHdpdGggaXQgYXQgdHdvIGluIHRoZSBhZnRlcm5vb24uIEEgdmVyeSBmYWlyIHNlcnZpY2UsIHdpdGggZmFpciBwcmljZXMgYW5kIGEgZmFpciBhdHRpdHVkZS4gVGhlc2UgZGF5cyBzb21ldGhpbmcgbGlrZSB0aGlzIGhhcmRseSBleGlzdHMgYW55IG1vcmUuIFRoYW5rIHlvdSB2ZXJ5IG11Y2ghIFBlYWNlZnVsLCBNZXJyeSBDaHJpc3RtYXMhIgogICAgfQogIF0KfQ==";
  var SRC="https://raw.githubusercontent.com/centralpc/centralpc-widgets/main/reviews.json";
  var GLOGO="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
  var D;
  try{
    var bin=atob(B64),arr=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
    D=JSON.parse(new TextDecoder('utf-8').decode(arr));
  }catch(e){ return; }

  var NS='http://www.w3.org/2000/svg';
  var STAR='M12 2.2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.27l-5.9 3.1 1.13-6.57L2.45 9.14l6.6-.96z';
  var FIRST=9;
  var SHOW_ORIG=false;
  var EN=(typeof EN!=='undefined')?EN:false;

  var root=document.getElementById('cpc-rv');
  var grid=document.getElementById('cpc-rv-grid');
  var ai=document.getElementById('cpc-rv-ai');
  var more=document.getElementById('cpc-rv-more');

  function star(filled){
    var svg=document.createElementNS(NS,'svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('aria-hidden','true');
    var p=document.createElementNS(NS,'path');
    p.setAttribute('d',STAR);
    p.setAttribute('fill',filled?'#fbbc04':'#4a4a4a');
    svg.appendChild(p);
    return svg;
  }
  function starsRow(rating,cls){
    var box=document.createElement('div');
    box.className=cls;
    for(var i=1;i<=5;i++) box.appendChild(star(i<=Math.round(rating)));
    return box;
  }
  function initials(name){
    var p=(name||'').trim().split(' ');
    return (((p[0]||'')[0]||'')+((p[1]||'')[0]||'')).toUpperCase();
  }
  function fmtDate(iso){
    if(!iso) return '';
    var dt=new Date(iso);
    if(isNaN(dt.getTime())) return '';
    try{ return dt.toLocaleDateString((EN?'en-GB':'hu-HU'),{year:'numeric',month:'long',day:'numeric'}); }catch(e){ return ''; }
  }
  function logo(){
    var img=document.createElement('img');
    img.className='cpc-rv-gl';
    img.src=GLOGO;
    img.alt='Google';
    img.loading='lazy';
    return img;
  }

  function card(r){
    var item=document.createElement('div');
    item.className='cpc-rv-item';
    var c=document.createElement('div');
    c.className='cpc-rv-card';
    c.appendChild(starsRow(r.s,'cpc-rv-st'));
    if(r.t){
      var tt=document.createElement('div');
      tt.className='cpc-rv-t'; tt.textContent=r.t;
      c.appendChild(tt);
    }
    var body=(EN && !SHOW_ORIG && r.xe)?r.xe:r.x;
    var x=document.createElement('div');
    x.className='cpc-rv-x'; x.textContent=body;
    c.appendChild(x);
    if(EN && !SHOW_ORIG && r.xe){
      var tr=document.createElement('div');
      tr.className='cpc-rv-tren'; tr.textContent='Translated from Hungarian';
      c.appendChild(tr);
    }
    c.appendChild(logo());
    item.appendChild(c);

    var who=document.createElement('div');
    who.className='cpc-rv-who';
    var av=document.createElement('div');
    av.className='cpc-rv-av';
    if(r.a){
      var img=document.createElement('img');
      img.src=r.a; img.alt=r.n; img.loading='lazy'; img.referrerPolicy='no-referrer';
      img.onerror=function(){ this.remove(); av.textContent=initials(r.n); };
      av.appendChild(img);
    } else { av.textContent=initials(r.n); }
    who.appendChild(av);

    var meta=document.createElement('div');
    meta.className='cpc-rv-meta';
    var nm=document.createElement('div');
    nm.className='cpc-rv-n'; nm.textContent=r.n;
    var dt=document.createElement('div');
    dt.className='cpc-rv-d'; dt.textContent=fmtDate(r.d);
    meta.appendChild(nm); meta.appendChild(dt);
    who.appendChild(meta);
    item.appendChild(who);
    return item;
  }

  function render(){
    var list=D.reviews||[];
    grid.innerHTML='';
    grid.appendChild(ai);

    var aiNum=document.getElementById('cpc-rv-ai-num');
    if(aiNum) aiNum.textContent=String(D.total||'');
    var aiTxt=document.getElementById('cpc-rv-ai-txt');
    if(aiTxt) aiTxt.textContent=(D.summary&&D.summary.text)||'';

    var num=document.getElementById('cpc-rv-num');
    if(num) num.textContent=String(D.rating||'').replace('.',',');
    var st=document.getElementById('cpc-rv-stars');
    if(st){ st.innerHTML=''; for(var k=1;k<=5;k++) st.appendChild(star(k<=Math.round(D.rating||5))); }
    var cnt=document.getElementById('cpc-rv-count');
    if(cnt) cnt.textContent='('+(D.total||'')+')';

    var items=[];
    for(var i=0;i<list.length;i++) items.push(card(list[i]));
    for(var q=0;q<Math.min(FIRST,items.length);q++) grid.appendChild(items[q]);

    if(more){
      more.style.display=items.length>FIRST?'':'none';
      more.onclick=function(){
        for(var z=FIRST;z<items.length;z++) grid.appendChild(items[z]);
        more.style.display='none';
      };
    }

    // angol oldal: egy gomb alul, ami az osszes leforditott velemenyt visszavaltja magyarra
    var trBtn=document.getElementById('cpc-rv-trbtn');
    var anyXe=false;
    for(var w=0;w<list.length;w++){ if(list[w] && list[w].xe){ anyXe=true; break; } }
    if(EN && anyXe){
      if(!trBtn){
        trBtn=document.createElement('button');
        trBtn.type='button'; trBtn.id='cpc-rv-trbtn';
        trBtn.className='cpc-rv-more'; trBtn.style.margin='0 0 10px';
        var foot=root.querySelector('.cpc-rv-foot');
        if(foot){ foot.insertBefore(trBtn, foot.firstChild); }
      }
      trBtn.textContent=SHOW_ORIG?'Show English translation':'Show original Hungarian';
      trBtn.style.display='';
      trBtn.onclick=function(){ SHOW_ORIG=!SHOW_ORIG; render(); };
    } else if(trBtn){
      trBtn.style.display='none';
    }

    var btn=document.getElementById('cpc-rv-btn');
    if(btn && D.placeId) btn.href='https://search.google.com/local/reviews?placeid='+D.placeId;

    if(/[?&]cpc_rv_debug=1/.test(location.search)){
      root.className='cpc-rv cpc-rv-dbg';
      var src=document.getElementById('cpc-rv-src');
      if(src) src.textContent='adat: '+list.length+' velemeny | generalva: '+(D.generated||'-');
    }
  }

  render();

  /* Napi frissites: ha a GitHub-on ujabb JSON van, ujrarenderelunk. */
  if(window.fetch){
    fetch(SRC+((SRC.indexOf(String.fromCharCode(63))>-1)?String.fromCharCode(38):String.fromCharCode(63))+Date.now(),{cache:'no-cache'}).then(function(r){ return r.ok?r.json():null; }).then(function(j){
      if(!j||!j.reviews||!j.reviews.length) return;
      var ok=true;
      for(var i=0;i<j.reviews.length;i++){ var r=j.reviews[i]; if(!r||!r.n||!r.x||!r.s||!r.d){ ok=false; break; } }
      if(!ok) return;
      if(j.generated && D.generated && j.generated===D.generated) return;
      D=j; render();
    }).catch(function(){});
  }
  }catch(err){ window.__cpcEnErr=String(err&&err.message||err); }
})();