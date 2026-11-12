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
  var aiLbl=host.querySelector('.cpc-rv-ai-lbl');
  if(aiLbl){ aiLbl.textContent='AI-generated summary'; }
  var aiSub=host.querySelector('.cpc-rv-ai-sub');
  if(aiSub){ aiSub.innerHTML='<span id="cpc-rv-ai-num"></span> Google reviews'; }
var B64="ewogICJnZW5lcmF0ZWQiOiAiMjAyNi0xMS0xMlQxMjozMzoxNy4yMjZaIiwKICAicmF0aW5nIjogNC45LAogICJ0b3RhbCI6IDYxNywKICAicGxhY2VJZCI6ICJDaElKeFh1WmxzeXpRa2NScjNDRDlBd0ZrN2siLAogICJzdW1tYXJ5IjogewogICAgInRleHQiOiAiQSB2ZW5kw6lnZWsgdmlzc3phdMOpcsWRZW4gYSBneW9yc2Fzw6Fnb3Qgw6lzIGEga29ycmVrdCDDoXJhesOhc3QgZW1lbGlrIGtpOiByZWdnZWwgbGVhZHTDoWsgYSBnw6lwZXQsIMOpcyBkw6lsdXTDoW5yYSBlbGvDqXN6w7xsdC4gVMO2YmIgdsOpbGVtw6lueSBraWVtZWxpIGEgdMO8cmVsbWVzLCB0YW7DoWNzYWTDsyBob3p6w6HDoWxsw6FzdCBpcywgc29rYW4gw61yasOhaywgaG9neSBjc2FrIGFra29yIGvDqXJuZWsgcMOpbnp0LCBoYSB2YWzDs2JhbiBzesO8a3PDqWcgdmFuIHZhbGFtaWx5ZW4gbXVua8OhcmEuIEEgdGlzenTDrXTDoXMgw6lzIHBhc3p0w6F6w6FzIHV0w6FuIGEgZ8OpcGVrIGhhbGthYmJhaywgaMWxdsO2c2ViYmVrIGxldHRlaywgYSBsYXB0b3BvayBwZWRpZyBzemludGUgw7pqc3plcsWxIMOhbGxhcG90YmFuIGtlcsO8bHRlayB2aXNzemEuIiwKICAgICJwcmljZVZhcmlhbnQiOiAwLAogICAgImJhc2VkT24iOiAxNiwKICAgICJlbiI6ICJDdXN0b21lcnMgcmVwZWF0ZWRseSBoaWdobGlnaHQgc3BlZWQgYW5kIGZhaXIgcHJpY2luZzogdGhleSBkcm9wcGVkIG9mZiB0aGUgbWFjaGluZSBpbiB0aGUgbW9ybmluZyBhbmQgaXQgd2FzIHJlYWR5IGJ5IHRoZSBhZnRlcm5vb24uIFNldmVyYWwgcmV2aWV3cyBhbHNvIHByYWlzZSB0aGUgcGF0aWVudCwgYWR2aXNvcnkgYXBwcm9hY2gsIGFuZCBtYW55IHdyaXRlIHRoYXQgdGhlIHRlYW0gb25seSBhc2tzIGZvciBtb25leSB3aGVuIHNvbWUgd29yayBpcyBnZW51aW5lbHkgbmVlZGVkLiBBZnRlciBjbGVhbmluZyBhbmQgdGhlcm1hbCBwYXN0ZSwgdGhlIG1hY2hpbmVzIGJlY2FtZSBxdWlldGVyIGFuZCBjb29sZXIsIGFuZCB0aGUgbGFwdG9wcyBjYW1lIGJhY2sgaW4gYWxtb3N0IGxpa2UtbmV3IGNvbmRpdGlvbi4iCiAgfSwKICAicmV2aWV3cyI6IFsKICAgIHsKICAgICAgIm4iOiAiWm9sdGFuIEtvbmN6aSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzRlNWM4NTE2Nzk3Yi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMTEtMTBUMTk6MTg6NTAuMDAwWiIsCiAgICAgICJ0IjogIlRha2Fyw610w6FzIMOpcyBwYXN6dMOhesOhcyIsCiAgICAgICJ4IjogIlRlZ25hcCB2aXR0ZW0gZWwgYSBQQ21ldCB0YWthcsOtdMOhc3JhIMOpcyBwYXN6dMOhesOhc3JhLlTDtmvDqWxldGVzIHbDoWxhc3p0w6FzIHZvbHQsIGtlZHZlc2VrLCBzZWfDrXTFkWvDqXN6ZWssIHNlZ8OtdHPDqWdnZWwsIHRhbsOhY3Nva2thbCBsw6F0dGFrIGVsLCBob2d5IG1hamQgbWl0IGvDqW5lIGNzZXLDqWxuaSBhIGfDqXBiZW4gaG9neSBqw7MgbWFyYWRqb24uXG5NYXhpbcOhbGlzYW4gYWrDoW5sb20gbWluZGVua2luZWshIiwKICAgICAgInhlIjogIkkgdG9vayBteSBQQyBpbiBmb3IgY2xlYW5pbmcgYW5kIHRoZXJtYWwgcGFzdGUgeWVzdGVyZGF5LiBJdCB3YXMgdGhlIHBlcmZlY3QgY2hvaWNlOiBmcmllbmRseSwgaGVscGZ1bCBwZW9wbGUgd2hvIGFsc28gZ2F2ZSBtZSBhZHZpY2Ugb24gd2hhdCB3b3VsZCBuZWVkIHJlcGxhY2luZyBpbiB0aGUgbWFjaGluZSB0byBrZWVwIGl0IGluIGdvb2Qgc2hhcGUuIEkgaGlnaGx5IHJlY29tbWVuZCB0aGVtIHRvIGV2ZXJ5b25lISIsCiAgICAgICJ0ZSI6ICJDbGVhbmluZyBhbmQgdGhlcm1hbCBwYXN0ZSIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlLDs2JlcnQgVGFrw6FjcyIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2YyYWM3MDNmNWJkNS5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMTAtMjhUMTE6NDY6MzUuMDAwWiIsCiAgICAgICJ0IjogIkZlbGvDqXN6w7xsdCDDqXMga29ycmVrdCBjc2FwYXQiLAogICAgICAieCI6ICJTemFrbWFpbGFnIGZlbGtlc3p1bHQgZ3lvcnMgZXMga29ycmVrdCBzem9sZ2FsdGF0YXMsIG1pbmRlbmtpbmVrIGFqYW5sb20hISEiLAogICAgICAieGUiOiAiUHJvZmVzc2lvbmFsbHkgcHJlcGFyZWQsIGZhc3QgYW5kIGNvcnJlY3Qgc2VydmljZS4gSSByZWNvbW1lbmQgdGhlbSB0byBldmVyeW9uZSEhISIsCiAgICAgICJ0ZSI6ICJQcmVwYXJlZCBhbmQgZmFpciB0ZWFtIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiWm9sdMOhbiBUw6FwYWkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9iYzI1MDZiMzExOGYucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTEwLTIxVDExOjA0OjM0LjAwMFoiLAogICAgICAidCI6ICJQcm9mZXNzemlvbsOhbGlzIHRhbsOhY3Nvaywgbm9ybcOhbGlzIMOzcmFkw61qIiwKICAgICAgIngiOiAiR3lvcnNhbiDDqXMgcHJvZmVzc3ppb27DoWxpc2FuIGtlemVsdMOpayBhIHByb2Jsw6ltw6FtYXQgw6lzIGLFkXZlbiBlbGzDoXR0YWsgdGFuw6Fjc29ra2FsIGFubmFrIG1lZ29sZMOhc8OhaG96LiBOZW0gdHVrbcOhbHRhayByw6FtIHNlbW1pbHllbiB0ZXJtw6lrZXQgdmFneSBzem9sZ8OhbHRhdMOhc3QuIFNhasOhdCBrb3LDoWJiaSB0YXBhc3p0YWxhdGFpbSBzemVyaW50IG5vcm3DoWxpcyDDs3JhYsOpcsOpcnQgZG9sZ296bmFrLiBOYWd5b24gdHVkb20gYWrDoW5sYW5pIG1pbmRlbmtpbmVrLiIsCiAgICAgICJ4ZSI6ICJUaGV5IGhhbmRsZWQgbXkgcHJvYmxlbSBxdWlja2x5IGFuZCBwcm9mZXNzaW9uYWxseSBhbmQgZ2F2ZSBtZSBwbGVudHkgb2YgYWR2aWNlIG9uIGhvdyB0byBzb2x2ZSBpdC4gVGhleSBkaWQgbm90IHB1c2ggYW55IHByb2R1Y3Qgb3Igc2VydmljZSBvbiBtZS4gQmFzZWQgb24gbXkgZWFybGllciBleHBlcmllbmNlLCB0aGV5IHdvcmsgZm9yIGEgZmFpciBob3VybHkgcmF0ZS4gSSBjYW4gaGlnaGx5IHJlY29tbWVuZCB0aGVtIHRvIGV2ZXJ5b25lLiIsCiAgICAgICJ0ZSI6ICJQcm9mZXNzaW9uYWwgYWR2aWNlLCBmYWlyIHJhdGUiCiAgICB9LAogICAgewogICAgICAibiI6ICJFdmEiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9lNDdjM2JjNWQyYzYucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA5LTMwVDEyOjEwOjUzLjAwMFoiLAogICAgICAidCI6ICJBbGFwb3MgdGlzenTDrXTDoXMsIGjFsXbDtnMgbGFwdG9wIiwKICAgICAgIngiOiAiTmFneW9uIGVsw6lnZWRldHQgdmFneW9rIGEgc3pvbGfDoWx0YXTDoXNzYWwhIEEgbGFwdG9wb21hdCBrw612w7xsLWJlbMO8bCBhbGFwb3NhbiBtZWd0aXN6dMOtdG90dMOhaywgw7pqIGjFkXZlemV0xZEgcGFzenTDoXQgaXMga2Fwb3R0LCDDqXMgbW9zdCDDumd5IG7DqXoga2ksIG1pbnRoYSDDumogbGVubmUuIEF6w7N0YSBtw6FyIG5lbSBtZWxlZ3N6aWsgdMO6bC4gQXogw6FyLcOpcnTDqWsgYXLDoW55IGtpZm9nw6FzdGFsYW4uIENzYWsgYWrDoW5sYW5pIHR1ZG9tIGEgUEMgRGlyZWt0IMO8emxldGV0LCDDqXMgYml6dG9zYW4gbcOhc29rbmFrIGlzIGFqw6FubGFuaSBmb2dvbSEiLAogICAgICAieGUiOiAiSSBhbSB2ZXJ5IGhhcHB5IHdpdGggdGhlIHNlcnZpY2UhIFRoZXkgY2xlYW5lZCBteSBsYXB0b3AgdGhvcm91Z2hseSBpbnNpZGUgYW5kIG91dCwgaXQgcmVjZWl2ZWQgbmV3IHRoZXJtYWwgcGFzdGUsIGFuZCBub3cgaXQgbG9va3MgbGlrZSBuZXcuIEl0IG5vIGxvbmdlciBvdmVyaGVhdHMuIFRoZSB2YWx1ZSBmb3IgbW9uZXkgaXMgaW1wZWNjYWJsZS4gSSBjYW4gb25seSByZWNvbW1lbmQgdGhlIFBDIERpcmVrdCBzaG9wLCBhbmQgSSB3aWxsIGNlcnRhaW5seSByZWNvbW1lbmQgaXQgdG8gb3RoZXJzIHRvbyEiLAogICAgICAidGUiOiAiVGhvcm91Z2ggY2xlYW5pbmcsIGNvb2wgbGFwdG9wIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiUGV0ZXIgVmFzcyIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2IzZDIyNTMyMzNkZi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDktMTZUMTQ6Mzg6MTUuMDAwWiIsCiAgICAgICJ0IjogIkd5b3JzLCBraXbDoWzDsyBraXN6b2xnw6Fsw6FzIiwKICAgICAgIngiOiAiR3lvcnMgw6lzIGtpdsOhbMOzIHN6b2xnw6FsdGF0w6FzIiwKICAgICAgInhlIjogIkZhc3QgYW5kIGV4Y2VsbGVudCBzZXJ2aWNlIiwKICAgICAgInRlIjogIkZhc3QsIGV4Y2VsbGVudCBzZXJ2aWNlIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiSGlsZGVnw6FyZCBLZXJla2VzIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZTY4YmQwZDY1M2Q5LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOS0wOFQxMTo0Njo1NS4wMDBaIiwKICAgICAgInQiOiAiWnNhbsOpcmphdsOtdMOhcyDDqXMgdGFuw6Fjc29rIiwKICAgICAgIngiOiAiR3lvcnMsIGFsYXBvcyBsYXB0b3B3ZWxsbmVzcy10IGthcHR1bmssIGEgZ8OpcCBhbGlnIG1lbGVnc3ppaywgaGFsa2FiYiwgcGx1c3ogdMOhcmhlbHkgc3phYmFkdWx0IGZlbCwgw6lzIG3DqWcgZWd5IGtpcyB6c2Fuw6lyZml0dG5lc3N6dCBpcyBrYXBvdHQsIG1pIHBlZGlnIGrDsyB0YW7DoWNzb2thdCAtIGvDtnN6w7ZuasO8ayEiLAogICAgICAieGUiOiAiV2UgZ290IGEgZmFzdCwgdGhvcm91Z2ggbGFwdG9wIHdlbGxuZXNzIHRyZWF0bWVudDogdGhlIG1hY2hpbmUgYmFyZWx5IHdhcm1zIHVwIG5vdywgaXQgaXMgcXVpZXRlciwgZXh0cmEgc3RvcmFnZSB3YXMgZnJlZWQgdXAsIGFuZCBpdCBldmVuIGdvdCBhIGxpdHRsZSBoaW5nZSBmaXRuZXNzIHNlc3Npb24sIHBsdXMgZ29vZCBhZHZpY2UgZm9yIHVzLiBUaGFuayB5b3UhIiwKICAgICAgInRlIjogIkhpbmdlIHJlcGFpciBhbmQgYWR2aWNlIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiQW1pbiBLIE1hcnZhc3RpIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvYWQ4ZWIxNzViNjMxLnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOC0yNFQxMDoyNDo0MS4wMDBaIiwKICAgICAgInQiOiAiQW5nb2x1bCBpcyBnw7ZyZMO8bMOpa2VueSBzZWfDrXRzw6lnIiwKICAgICAgIngiOiAiR3JlYXQgZXhwZXJpZW5jZSB3aXRoIHRoaXMgcmVwYWlyIHNob3AhIFRoZSB0ZWFtIHdhcyBzdXBlciBoZWxwZnVsLCBmcmllbmRseSwgYW5kIHByb2Zlc3Npb25hbCBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhleSBkaWQgZXhjZWxsZW50IHdvcmssIGV4cGxhaW5lZCBldmVyeXRoaW5nIGNsZWFybHksIGFuZCBtYWRlIHRoZSB3aG9sZSBwcm9jZXNzIGVhc3kuIFJlYWxseSBoYXBweSB3aXRoIHRoZSBxdWFsaXR5IG9mIHRoZSByZXBhaXIgYW5kIHRoZSBzZXJ2aWNlLiBIaWdobHkgcmVjb21tZW5kIHRoZW0hIiwKICAgICAgInhlIjogIiIsCiAgICAgICJ0ZSI6ICJTbW9vdGggaGVscCBpbiBFbmdsaXNoIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiR3l1bGEgTWlow6FseWkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9kODM4ZTM5MTc4ZWYucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA4LTA2VDExOjE2OjM3LjAwMFoiLAogICAgICAidCI6ICJQb250b3MsIG1lZ2LDrXpoYXTDsyBzemVydml6IiwKICAgICAgIngiOiAiR3lvcnMsIHBvbnRvcyDDqXMgbWVnYsOtemhhdMOzIHN6ZXJ2w616LiIsCiAgICAgICJ4ZSI6ICJGYXN0LCBwcmVjaXNlIGFuZCByZWxpYWJsZSBzZXJ2aWNlLiIsCiAgICAgICJ0ZSI6ICJQcmVjaXNlLCByZWxpYWJsZSBzZXJ2aWNlIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiw4Frb3MgQmFsw6F6cyBSw7NuYWkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9lMjUzMjAwOWY0ZWQucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA4LTA2VDEwOjA1OjMyLjAwMFoiLAogICAgICAidCI6ICJEw61qbWVudGVzIHRhbsOhY3MsIMWRc3ppbnRlIMOhciIsCiAgICAgICJ4IjogIk5hZ3lvbiBrZWR2ZXNlaywgc2Vnw610xZFrw6lzemVrIMOpcyDFkXN6aW50w6lrLiBDc2FrIGFra29yIGvDqXJuZWsgcMOpbnp0LCBoYSB2YWzDs2JhbiBzesO8a3PDqWcgdmFuIHZhbGFtaWx5ZW4gbXVua8OhcmEuIE5la2VtIGTDrWptZW50ZXNlbiBpcyBhZHRhayBoYXN6bm9zIHRhbsOhY3Nva2F0LCBhbWl0IGvDvGzDtm7DtnNlbiDDqXJ0w6lrZWx0ZW0uIiwKICAgICAgInhlIjogIlRoZXkgYXJlIHZlcnkga2luZCwgaGVscGZ1bCBhbmQgaG9uZXN0LiBUaGV5IG9ubHkgYXNrIGZvciBtb25leSB3aGVuIHNvbWUgd29yayBpcyBnZW51aW5lbHkgbmVlZGVkLiBUaGV5IGV2ZW4gZ2F2ZSBtZSB1c2VmdWwgYWR2aWNlIGZyZWUgb2YgY2hhcmdlLCB3aGljaCBJIGVzcGVjaWFsbHkgYXBwcmVjaWF0ZWQuIiwKICAgICAgInRlIjogIkZyZWUgYWR2aWNlLCBob25lc3QgcHJpY2luZyIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlN6YWJvbGNzIFBhcHAiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9hZGI3YzBmOGQ0YjUucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA3LTI5VDE2OjAzOjAzLjEwMVoiLAogICAgICAidCI6ICJTemFrc3plcsWxIGRpYWdub3N6dGlrYSIsCiAgICAgICJ4IjogIkd5b3JzIMOpcyBzemFrc3plcsWxIGRpYWdub3N6dGlrYSBtZWxsZXR0IGhhc3pub3MgdGFuw6Fjc290IGthcHRhbSDDumd5IGEgaGFyZHdhcmUgdGVraW50ZXTDqWJlbiwgbWluZCBhIGhpYmEgb2thaXQgaWxsZXTFkWVuLiBLw7ZzesO2bsO2bSBleiDDunRvbiBpcyBhIHN6YWtzemVyxbEgc2Vnw610c8OpZ2V0LiIsCiAgICAgICJ4ZSI6ICJBbG9uZyB3aXRoIGEgZmFzdCBhbmQgcHJvZmVzc2lvbmFsIGRpYWdub3NpcywgSSByZWNlaXZlZCB1c2VmdWwgYWR2aWNlIGJvdGggYWJvdXQgdGhlIGhhcmR3YXJlIGFuZCBhYm91dCB0aGUgY2F1c2VzIG9mIHRoZSBmYXVsdC4gVGhhbmsgeW91IGZvciB0aGUgcHJvZmVzc2lvbmFsIGhlbHAuIiwKICAgICAgInRlIjogIlByb2Zlc3Npb25hbCBkaWFnbm9zaXMiCiAgICB9LAogICAgewogICAgICAibiI6ICJWYXJnYSBCw6FsaW50IiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvNjk0MTczZDA2ZGEzLnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wNi0xMVQxMDozMzo1OS4yMjhaIiwKICAgICAgInQiOiAiWsO2a2tlbsWRbWVudGVzIGphdsOtdMOhcyIsCiAgICAgICJ4IjogIlN6dXBlciBwcm9maSBjc2FwYXQhIEd5b3JzYW4gw6lzIHByZWPDrXplbiBkb2xnb3p0YWssIGEgamF2w610w6FzIHrDtmtrZW7FkW1lbnRlc2VuIG1lbnQuIFRlbGplc2VuIG1lZ2LDrXpoYXTDsyBzemFrZW1iZXJlaywgY3NhayBhasOhbmxhbmkgdHVkb20gxZFrZXQuIEvDtnN6w7Zuw7ZtIGEgc2Vnw610c8OpZ2V0ISIsCiAgICAgICJ4ZSI6ICJBIHN1cGVyIHByb2Zlc3Npb25hbCB0ZWFtISBUaGV5IHdvcmtlZCBxdWlja2x5IGFuZCBwcmVjaXNlbHksIGFuZCB0aGUgcmVwYWlyIHdlbnQgc21vb3RobHkuIENvbXBsZXRlbHkgcmVsaWFibGUgZXhwZXJ0cywgSSBjYW4gb25seSByZWNvbW1lbmQgdGhlbS4gVGhhbmsgeW91IGZvciB0aGUgaGVscCEiLAogICAgICAidGUiOiAiU21vb3RoIHJlcGFpciIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIkTDoXZpZCBTYWp0aSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzg1M2NjZjM4NWUxMy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDYtMDhUMTE6Mzg6MDEuNDkzWiIsCiAgICAgICJ0IjogIlTDvHJlbG1lcyBnw6lwdsOhbGFzenTDoXMiLAogICAgICAieCI6ICLDnGR2IVxuw4luIGF6dMOhbiBjc2FrIGrDs3QgdHVkb2sgbW9uZGFuaS4gQ3NhayBoYXN6bsOhbG9tIGEgZ8OpcGV0LCBzesOzdmFsIGhvenrDocOpcnTDqXNlbSBudWxsYS4gRXogbMOhdHN6b3R0IGlzIG1pa29yIG5lbSB0dWR0YW0ga8O2cmJlIMOtcm5pIG1pcmUgaXMgbGVubmUgc3rDvGtzw6lnZW0uIERFIGF6IHVyYWsgdsOpZ2lnIGvDqXN6c8OpZ2VzZW4sIHTDvHJlbGVtbWVsIMOhbGx0YWsgaG96esOhbSDDqXMgYSB2w6lnw6lyZSBtZWcgaXMgdGFsw6FsdHVrIGF6IMO6aiBnw6lwZW1ldCwgw61neSB2ZXR0ZW0gdMWRbMO8ayAxLWV0IGrDoXTDqWtyYSwgZGUgYWtrb3IgbcOhciBhIHLDqWdpdCBpcyBraXB1Y29sdGF0dGFtLiBHeW9ycywgc3pha3N6ZXLFsS4gNSBjc2lsbGFnLiBLw7ZzesO2bsO2bSEiLAogICAgICAieGUiOiAiSGVsbG8hIEkgY2FuIG9ubHkgc2F5IGdvb2QgdGhpbmdzLiBJIGp1c3QgdXNlIHRoZSBjb21wdXRlciwgc28gbXkgdGVjaG5pY2FsIGtub3dsZWRnZSBpcyB6ZXJvLiBUaGF0IHNob3dlZCB3aGVuIEkgY291bGQgbm90IGV2ZW4gZXhwbGFpbiB3aGF0IEkgbmVlZGVkLiBCVVQgdGhlIGdlbnRsZW1lbiB3ZXJlIGhlbHBmdWwgYW5kIHBhdGllbnQgd2l0aCBtZSB0aGUgd2hvbGUgdGltZSwgYW5kIGluIHRoZSBlbmQgd2UgZm91bmQgbXkgbmV3IG1hY2hpbmUsIHNvIEkgYm91Z2h0IG9uZSBmcm9tIHRoZW0gZm9yIGdhbWluZywgYW5kIGJ5IHRoZW4gSSBhbHNvIGhhZCB0aGUgb2xkIG9uZSBjbGVhbmVkIHVwLiBGYXN0LCBwcm9mZXNzaW9uYWwuIDUgc3RhcnMuIFRoYW5rIHlvdSEiLAogICAgICAidGUiOiAiUGF0aWVudCBtYWNoaW5lIGFkdmljZSIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlDDqXRlciBJbXLDqW7DqSBQaXJpc2kiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9iZWE2ZWIzM2QxMTcucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA2LTA0VDA4OjMyOjMwLjI3MFoiLAogICAgICAidCI6ICJUw7xyZWxtZXNlayBpZMWRc2ViYiDDvGd5ZmVsZWtrZWwiLAogICAgICAieCI6ICJUZWduYXAgasOhcnRhbSBhIENlbnRyYWwgUEMtbsOpbC4gUsOpZ2ksIHPDqXLDvGx0IFNTZC1qxbEgbGFwdG9wb21yw7NsIHNpa2VyZXNlbiBtZW50ZXR0w6lrIMOhdCBhIGRvbGdhaW1hdCBheiDDumpyYSDDqXMgZmVsIGlzIMO6asOtdG90dMOhay4gR3lvcnNhaywgcG9udG9zYWssIG1lZ2LDrXpoYXTDs2FrLCBraXTDum7FkSBzemFrZW1iZXJlay4gS2llbWVsbsOpbSBhIGtvbW11bmlrw6FjacOzanVrYXQgaXMsIG1lcnQgbnl1Z2TDrWphc2vDqW50IGlseWVuIGtlZHZlc2VuLCB0w7xyZWxtZXNlbiBtw6lnIG5lbSBiw6FudGFrIHZlbGVtIHNlaG9sLiBSZW5ka8OtdsO8bCBrb3JyZWt0IMO2c3N6ZWfDqXJ0IHbDqWdlenTDqWsgZWwgYXogw7Zzc3plcyBmZWxhZGF0b3QuIELDoXIgY3NhayDDtnQgY3NpbGxhZ290IGxlaGV0IGFkbmksIMOpbiBzesOtdmVtIHN6ZXJpbnQgaGF0b3QgYWRuw6lrIG5la2lrIMOpcyBtaW5kZW5raW5layBqw7Mgc3rDrXZ2ZWwgYWrDoW5sb20gxZFrZXQhIiwKICAgICAgInhlIjogIkkgdmlzaXRlZCBDZW50cmFsIFBDIHllc3RlcmRheS4gVGhleSBzdWNjZXNzZnVsbHkgdHJhbnNmZXJyZWQgbXkgZGF0YSBmcm9tIG15IG9sZCBsYXB0b3Agd2l0aCBhIGRhbWFnZWQgU1NEIHRvIGEgbmV3IG9uZSBhbmQgcmVmdXJiaXNoZWQgaXQuIFRoZXkgYXJlIGZhc3QsIHByZWNpc2UsIHJlbGlhYmxlLCBvdXRzdGFuZGluZyBwcm9mZXNzaW9uYWxzLiBJIHdvdWxkIGFsc28gaGlnaGxpZ2h0IHRoZWlyIGNvbW11bmljYXRpb24sIGJlY2F1c2UgYXMgYSBwZW5zaW9uZXIgSSBoYXZlIG5ldmVyIGJlZW4gdHJlYXRlZCBzbyBraW5kbHkgYW5kIHBhdGllbnRseSBhbnl3aGVyZS4gVGhleSBjb21wbGV0ZWQgYWxsIHRoZSB0YXNrcyBmb3IgYW4gZXh0cmVtZWx5IGZhaXIgcHJpY2UuIEFsdGhvdWdoIG9ubHkgZml2ZSBzdGFycyBjYW4gYmUgZ2l2ZW4sIGluIG15IGhlYXJ0IEkgd291bGQgZ2l2ZSB0aGVtIHNpeCwgYW5kIEkgcmVjb21tZW5kIHRoZW0gd2hvbGVoZWFydGVkbHkhIiwKICAgICAgInRlIjogIlBhdGllbnQgd2l0aCBvbGRlciBjdXN0b21lcnMiCiAgICB9LAogICAgewogICAgICAibiI6ICJab2x0w6FuIEtpc2ZhbGkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9iYTdmZjdhNGE4YjcucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTAyLTA2VDE4OjQ4OjQ2LjY1MloiLAogICAgICAidCI6ICJQcmVjw616IGFsa2F0csOpc3ogdGFuw6Fjc2Fkw6FzIiwKICAgICAgIngiOiAiVGVsamVzIG3DqXJ0w6lrYmVuIGVsw6lnZWRldHQgdmFneW9rLiBDc2FrIGFqw6FubGFuaSB0dWRvbS5cbkd5b3JzIChtZWdsZXDFkWVuIGd5b3JzKSAsIHByZWPDrXogaG96esOhw6FsbMOhcywgdGVsamVzIGvDtnLFsSBzZWfDrXTFkWvDqXN6c8OpZyAgw6lzIHN6YWvDqXJ0ZWxlbS4gTWluZGVuIGVneWVzIGvDqXJkw6lzZW1yZSB2w6FsYXN6b2x0YWsgYW1pdCBjc2FrIGZlbHRldHRlbSwgc2Vnw610ZXR0ZWsga2l2w6FsYXN6dGFuaSBhIG1lZ2ZlbGVsxZEgYWxrYXRyw6lzemVrZXQuXG5UZWxqZXNlbiBwcm9maSBzemVydsOtei4iLAogICAgICAieGUiOiAiSSBhbSBjb21wbGV0ZWx5IHNhdGlzZmllZC4gSSBjYW4gb25seSByZWNvbW1lbmQgdGhlbS4gRmFzdCAoc3VycHJpc2luZ2x5IGZhc3QpLCBwcmVjaXNlIGFwcHJvYWNoLCBjb21wcmVoZW5zaXZlIGhlbHBmdWxuZXNzIGFuZCBleHBlcnRpc2UuIFRoZXkgYW5zd2VyZWQgZXZlcnkgc2luZ2xlIHF1ZXN0aW9uIEkgYXNrZWQgYW5kIGhlbHBlZCBtZSBjaG9vc2UgdGhlIHJpZ2h0IGNvbXBvbmVudHMuIEEgY29tcGxldGVseSBwcm9mZXNzaW9uYWwgc2VydmljZS4iLAogICAgICAidGUiOiAiUHJlY2lzZSBwYXJ0cyBhZHZpY2UiCiAgICB9LAogICAgewogICAgICAibiI6ICJEYXZpZCBuYWd5IiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZDQ5OWE3ZWI2YzM0LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wMS0yN1QwOTo1MDoxMy4yNDFaIiwKICAgICAgInQiOiAiUmVnZ2VsIGxlYWR2YSwgZMOpbHV0w6FuIGvDqXN6IiwKICAgICAgIngiOiAiU3p1cGVyZ3lvcnMgw6lzIHByb2ZpIGtpc3pvbGfDoWzDoXMhIFJlZ2dlbCBiZXZpdHRlbSBhIGxhcHRvcG9tLCBkw6lsdXTDoW5yYSBtw6FyIGvDqXN6ZW4gaXMgdm9sdCBhIHRpc3p0w610w6FzIMOpcyBhIHBhc3p0w6F6w6FzLCDDqXMgY3NhayA4MDAwIGV6ZXIgRnQgdm9sdC4gQSBnw6lwIMO6anJhIGhhbGsgw6lzIGd5b3JzLiBDc2FrIGFqw6FubGFuaSB0dWRvbSEiLAogICAgICAieGUiOiAiU3VwZXItZmFzdCBhbmQgcHJvZmVzc2lvbmFsIHNlcnZpY2UhIEkgZHJvcHBlZCBvZmYgbXkgbGFwdG9wIGluIHRoZSBtb3JuaW5nIGFuZCBieSB0aGUgYWZ0ZXJub29uIHRoZSBjbGVhbmluZyBhbmQgdGhlcm1hbCBwYXN0ZSB3b3JrIHdhcyBkb25lLCBmb3Igb25seSA4LDAwMCBIVUYuIFRoZSBtYWNoaW5lIGlzIHF1aWV0IGFuZCBmYXN0IGFnYWluLiBJIGNhbiBvbmx5IHJlY29tbWVuZCB0aGVtISIsCiAgICAgICJ0ZSI6ICJNb3JuaW5nIGRyb3Atb2ZmLCByZWFkeSBieSBhZnRlcm5vb24iCiAgICB9LAogICAgewogICAgICAibiI6ICJBbml0YSBHYcOhbCIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzBlYmM0NjUxNDQzYy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjUtMTItMjNUMTg6NDA6MzUuMzQyWiIsCiAgICAgICJ0IjogIkthcsOhY3NvbnkgZWzFkXR0IGlzIGVsdsOhbGxhbHTDoWsiLAogICAgICAieCI6ICJEZWNlbWJlciAyMy4tw6FuIGVsdsOhbGxhbHTDoWsgYXogdXRvbHPDsyBwaWxsYW5hdGJhbiDDqXJrZXpldHQsIGZpYW1uYWsgc3rDoW50IGdhbWVyIGxhcHRvcCwgdGVsamVzIHRlbGVww610w6lzw6l0IMOpcyBiZcOhbGzDrXTDoXPDoXQsIMO6Z3kgaG9neSBkw6lsdXTDoW4ga2V0dMWRa29yIGVzdGVtIGJlIHZlbGUuIE5hZ3lvbiBrb3JyZWt0IHN6ZXJ2aXosIGtvcnJla3Qgw6FyYWtrYWwsIMOpcyBrb3JyZWt0IGhvenrDocOhbGzDoXNzYWwuIE1hbmFwc8OhZyBuZW0gaWdhesOhbiBsw6l0ZXppayBtw6FyIGlseWVuIHNham5vcy4gS8O2c3rDtm5qw7xrIHN6w6lwZW4gbmVrdGVrISBCw6lrw6lzLCBCb2xkb2cgS2Fyw6Fjc29ueXQhIiwKICAgICAgInhlIjogIk9uIDIzIERlY2VtYmVyIHRoZXkgdG9vayBvbiB0aGUgZnVsbCBzZXR1cCBhbmQgY29uZmlndXJhdGlvbiBvZiBhIGdhbWluZyBsYXB0b3AgZm9yIG15IHNvbiB0aGF0IGFycml2ZWQgYXQgdGhlIGxhc3QgbWludXRlLCBhbmQgSSB3YWxrZWQgaW4gd2l0aCBpdCBhdCB0d28gaW4gdGhlIGFmdGVybm9vbi4gQSB2ZXJ5IGZhaXIgc2VydmljZSwgd2l0aCBmYWlyIHByaWNlcyBhbmQgYSBmYWlyIGF0dGl0dWRlLiBUaGVzZSBkYXlzIHNvbWV0aGluZyBsaWtlIHRoaXMgaGFyZGx5IGV4aXN0cyBhbnkgbW9yZS4gVGhhbmsgeW91IHZlcnkgbXVjaCEgUGVhY2VmdWwsIE1lcnJ5IENocmlzdG1hcyEiLAogICAgICAidGUiOiAiVGFrZW4gaW4gYmVmb3JlIENocmlzdG1hcyIKICAgIH0KICBdCn0=";
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
    var ttl=(EN && !SHOW_ORIG && r.te)?r.te:r.t;
    if(ttl){
      var tt=document.createElement('div');
      tt.className='cpc-rv-t'; tt.textContent=ttl;
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
    if(aiTxt) aiTxt.textContent=(EN && !SHOW_ORIG && D.summary && D.summary.en) ? D.summary.en : ((D.summary && D.summary.text) || '');

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
      if(j.generated && D.generated && j.generated===D.generated && String((j.summary||{}).en||'')===String((D.summary||{}).en||'')) return;
      D=j; render();
    }).catch(function(){});
  }
  }catch(err){ window.__cpcEnErr=String(err&&err.message||err); }
  try{ window.__cpcDbg={ gen:(typeof D!=='undefined'&&D)?D.generated:'?', hasEn:!!((typeof D!=='undefined'&&D)&&D.summary&&D.summary.en), enHead:((typeof D!=='undefined'&&D&&D.summary&&D.summary.en)||'').slice(0,40) }; }catch(e){}
})();