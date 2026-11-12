/* Central PC | Google velemenyek | v8 2026-11-12 | egy soros betolto
   Hasznalat az oldalon (oda, ahol meg kell jelennie):
   <script src="https://cdn.jsdelivr.net/gh/centralpc/centralpc-widgets@rv-v1/reviews-widget.js"></script> */
(function(){
  var host=document.createElement('div');
  var s=document.currentScript;
  if(s&&s.parentNode){ s.parentNode.insertBefore(host,s); } else if(document.body){ document.body.appendChild(host); }
  host.innerHTML='<div class="cpc-rv" id="cpc-rv"> <div class="cpc-rv-title">&#220;gyfeleinkt&#337;l:</div> <div class="cpc-rv-head"> <div class="cpc-rv-brand"> <img class="cpc-rv-logo" src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" width="76" height="25" loading="lazy"> <span class="cpc-rv-brandtxt">V&#233;lem&#233;nyek</span> </div> <div class="cpc-rv-score"> <strong class="cpc-rv-num" id="cpc-rv-num">4,9</strong> <span class="cpc-rv-stars" id="cpc-rv-stars"></span> <span class="cpc-rv-count" id="cpc-rv-count"></span> </div> </div> <div class="cpc-rv-grid" id="cpc-rv-grid"> <div class="cpc-rv-item cpc-rv-ai" id="cpc-rv-ai"> <div class="cpc-rv-card"> <div class="cpc-rv-ai-top"> <span class="cpc-rv-ai-ico"> <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#a78bfa" d="M12 3.2l1.55 6.05L19.6 10.8l-6.05 1.55L12 18.4l-1.55-6.05L4.4 10.8l6.05-1.55z"/></svg> </span> <span class="cpc-rv-ai-lbl">AI &#225;ltal gener&#225;lt &#246;sszefoglal&#243;</span> </div> <div class="cpc-rv-ai-sub"><span id="cpc-rv-ai-num"></span> Google &#233;rt&#233;kel&#233;s alapj&#225;n</div> <div class="cpc-rv-ai-txt" id="cpc-rv-ai-txt"></div> </div> </div> </div> <div class="cpc-rv-foot"> <button type="button" class="cpc-rv-more" id="cpc-rv-more">Tov&#225;bbiak bet&#246;lt&#233;se</button> <div class="cpc-rv-all"><a id="cpc-rv-btn" href="#" target="_blank" rel="noopener nofollow">&#214;sszes v&#233;lem&#233;ny a Google-on</a></div> <div class="cpc-rv-src" id="cpc-rv-src"></div> </div> </div> <style> .cpc-rv{width:100%;margin:0 auto;font-family:var(--font-content,"Open Sans"),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#fff;line-height:1.45;text-align:left;--cpc-gold:#fbbc04;--cpc-muted:#9aa0a6;--cpc-panel:#292929;--cpc-head:#222222;--cpc-card:#222222;background:var(--cpc-panel);border-radius:12px;padding:24px} .cpc-rv *{box-sizing:border-box} .cpc-rv-title{text-align:center;font-size:24px;font-weight:700;letter-spacing:.2px;margin:0 0 22px;color:#fff} .cpc-rv-head{background:var(--cpc-head);border-radius:10px;padding:22px 24px;text-align:center;margin:0 0 24px;box-shadow:0 1px 3px rgba(0,0,0,.35)} .cpc-rv-brand{display:flex;align-items:center;justify-content:center;gap:11px;margin:0 0 8px} .cpc-rv-logo{display:block;height:30px;width:auto} .cpc-rv-brandtxt{font-size:21px;font-weight:600;color:#e8eaed} .cpc-rv-score{display:flex;align-items:center;justify-content:center;gap:8px;font-size:16px;color:#bdc1c6} .cpc-rv-num{font-size:22px;font-weight:700;color:#fff} .cpc-rv-stars{display:inline-flex;gap:2px;margin-left:2px} .cpc-rv-stars svg{width:26px;height:26px;display:block} .cpc-rv-grid{columns:4;column-gap:24px} .cpc-rv-item{break-inside:avoid;margin:0 0 24px;display:inline-block;width:100%} .cpc-rv-card{background:var(--cpc-card);border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,.3)} .cpc-rv-st{display:flex;gap:2px;margin:0 0 9px} .cpc-rv-st svg{width:17px;height:17px;display:block} .cpc-rv-t{font-size:16px;font-weight:700;margin:0 0 4px;color:#fff;line-height:1.35} .cpc-rv-x{font-size:15px;color:#e8eaed;margin:0;line-height:1.5} .cpc-rv-gl{display:block;height:24px;width:auto;margin:16px 0 0} .cpc-rv-who{display:flex;align-items:center;gap:11px;padding:11px 3px 0} .cpc-rv-av{width:34px;height:34px;border-radius:50%;background:#3a3a3a;flex:0 0 34px;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#bbb} .cpc-rv-av img{width:100%;height:100%;object-fit:cover;display:block} .cpc-rv-meta{min-width:0} .cpc-rv-n{font-size:14px;font-weight:600;color:#e8eaed;white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .cpc-rv-d{font-size:12.5px;color:var(--cpc-muted)} .cpc-rv-ai .cpc-rv-card{background:linear-gradient(180deg,#2b2340,#222222);border:1px solid #453569} .cpc-rv-ai-top{display:flex;align-items:flex-start;gap:9px;margin:0 0 4px} .cpc-rv-ai-ico{margin-top:1px;width:22px;height:22px;flex:0 0 22px;display:flex;align-items:center;justify-content:center;background:none;border-radius:0} .cpc-rv-ai-ico svg{width:22px;height:22px;display:block} .cpc-rv-ai-lbl{font-size:16px;font-weight:700;color:#a78bfa} .cpc-rv-ai-sub{font-size:12.5px;color:var(--cpc-muted);margin:0 0 11px} .cpc-rv-ai-txt{font-size:15px;color:#e8eaed} .cpc-rv-foot{text-align:center;margin:6px 0 0} .cpc-rv-more{display:inline-block;padding:11px 22px;border-radius:6px;background:#2b2b2b;color:#fff;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;border:1px solid #3a3a3a;transition:background .15s ease} .cpc-rv-more:hover{background:#3a3a3a} .cpc-rv-all{margin:12px 0 0} .cpc-rv-all a{color:var(--cpc-muted);font-size:13px;text-decoration:none} .cpc-rv-all a:hover{color:#fff;text-decoration:underline} .cpc-rv-src{display:none;margin:10px 0 0;font:11px/1.4 monospace;color:#6b7280} .cpc-rv-dbg .cpc-rv-src{display:block} @media (max-width:1000px){.cpc-rv-grid{columns:3}} @media (max-width:760px){.cpc-rv-grid{columns:2}} @media (max-width:520px){.cpc-rv-grid{columns:1}.cpc-rv-head{padding:14px}.cpc-rv-title{font-size:20px}} </style>';
var B64="ewogICJnZW5lcmF0ZWQiOiAiMjAyNi0xMS0xMlQxMToxMjowNi4yNjhaIiwKICAicmF0aW5nIjogNC45LAogICJ0b3RhbCI6IDYxNywKICAicGxhY2VJZCI6ICJDaElKeFh1WmxzeXpRa2NScjNDRDlBd0ZrN2siLAogICJzdW1tYXJ5IjogewogICAgInRleHQiOiAiQSB2ZW5kw6lnZWsgdmlzc3phdMOpcsWRZW4gYSBneW9yc2Fzw6Fnb3Qgw6lzIGEga29ycmVrdCDDoXJhesOhc3QgZW1lbGlrIGtpOiByZWdnZWwgbGVhZHTDoWsgYSBnw6lwZXQsIMOpcyBkw6lsdXTDoW5yYSBlbGvDqXN6w7xsdC4gVMO2YmIgdsOpbGVtw6lueSBraWVtZWxpIGEgdMO8cmVsbWVzLCB0YW7DoWNzYWTDsyBob3p6w6HDoWxsw6FzdCBpcywgc29rYW4gw61yasOhaywgaG9neSBjc2FrIGFra29yIGvDqXJuZWsgcMOpbnp0LCBoYSB2YWzDs2JhbiBzesO8a3PDqWcgdmFuIHZhbGFtaWx5ZW4gbXVua8OhcmEuIEEgdGlzenTDrXTDoXMgw6lzIHBhc3p0w6F6w6FzIHV0w6FuIGEgZ8OpcGVrIGhhbGthYmJhaywgaMWxdsO2c2ViYmVrIGxldHRlaywgYSBsYXB0b3BvayBwZWRpZyBzemludGUgw7pqc3plcsWxIMOhbGxhcG90YmFuIGtlcsO8bHRlayB2aXNzemEuIiwKICAgICJwcmljZVZhcmlhbnQiOiAwLAogICAgImJhc2VkT24iOiAxNgogIH0sCiAgInJldmlld3MiOiBbCiAgICB7CiAgICAgICJuIjogIlpvbHRhbiBLb25jemkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy80ZTVjODUxNjc5N2IucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTExLTEwVDE5OjE4OjUwLjAwMFoiLAogICAgICAidCI6ICJUYWthcsOtdMOhcyDDqXMgcGFzenTDoXrDoXMiLAogICAgICAieCI6ICJUZWduYXAgdml0dGVtIGVsIGEgUENtZXQgdGFrYXLDrXTDoXNyYSDDqXMgcGFzenTDoXrDoXNyYS5Uw7Zrw6lsZXRlcyB2w6FsYXN6dMOhcyB2b2x0LCBrZWR2ZXNlaywgc2Vnw610xZFrw6lzemVrLCBzZWfDrXRzw6lnZ2VsLCB0YW7DoWNzb2trYWwgbMOhdHRhayBlbCwgaG9neSBtYWpkIG1pdCBrw6luZSBjc2Vyw6lsbmkgYSBnw6lwYmVuIGhvZ3kgasOzIG1hcmFkam9uLlxuTWF4aW3DoWxpc2FuIGFqw6FubG9tIG1pbmRlbmtpbmVrISIKICAgIH0sCiAgICB7CiAgICAgICJuIjogIlLDs2JlcnQgVGFrw6FjcyIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2YyYWM3MDNmNWJkNS5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMTAtMjhUMTE6NDY6MzUuMDAwWiIsCiAgICAgICJ0IjogIkZlbGvDqXN6w7xsdCDDqXMga29ycmVrdCBjc2FwYXQiLAogICAgICAieCI6ICJTemFrbWFpbGFnIGZlbGtlc3p1bHQgZ3lvcnMgZXMga29ycmVrdCBzem9sZ2FsdGF0YXMsIG1pbmRlbmtpbmVrIGFqYW5sb20hISEiCiAgICB9LAogICAgewogICAgICAibiI6ICJab2x0w6FuIFTDoXBhaSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2JjMjUwNmIzMTE4Zi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMTAtMjFUMTE6MDQ6MzQuMDAwWiIsCiAgICAgICJ0IjogIlByb2Zlc3N6aW9uw6FsaXMgdGFuw6Fjc29rLCBub3Jtw6FsaXMgw7NyYWTDrWoiLAogICAgICAieCI6ICJHeW9yc2FuIMOpcyBwcm9mZXNzemlvbsOhbGlzYW4ga2V6ZWx0w6lrIGEgcHJvYmzDqW3DoW1hdCDDqXMgYsWRdmVuIGVsbMOhdHRhayB0YW7DoWNzb2trYWwgYW5uYWsgbWVnb2xkw6Fzw6Fob3ouIE5lbSB0dWttw6FsdGFrIHLDoW0gc2VtbWlseWVuIHRlcm3DqWtldCB2YWd5IHN6b2xnw6FsdGF0w6FzdC4gU2Fqw6F0IGtvcsOhYmJpIHRhcGFzenRhbGF0YWltIHN6ZXJpbnQgbm9ybcOhbGlzIMOzcmFiw6lyw6lydCBkb2xnb3puYWsuIE5hZ3lvbiB0dWRvbSBhasOhbmxhbmkgbWluZGVua2luZWsuIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiRXZhIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZTQ3YzNiYzVkMmM2LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOS0zMFQxMjoxMDo1My4wMDBaIiwKICAgICAgInQiOiAiQWxhcG9zIHRpc3p0w610w6FzLCBoxbF2w7ZzIGxhcHRvcCIsCiAgICAgICJ4IjogIk5hZ3lvbiBlbMOpZ2VkZXR0IHZhZ3lvayBhIHN6b2xnw6FsdGF0w6Fzc2FsISBBIGxhcHRvcG9tYXQga8OtdsO8bC1iZWzDvGwgYWxhcG9zYW4gbWVndGlzenTDrXRvdHTDoWssIMO6aiBoxZF2ZXpldMWRIHBhc3p0w6F0IGlzIGthcG90dCwgw6lzIG1vc3Qgw7pneSBuw6l6IGtpLCBtaW50aGEgw7pqIGxlbm5lLiBBesOzdGEgbcOhciBuZW0gbWVsZWdzemlrIHTDumwuIEF6IMOhci3DqXJ0w6lrIGFyw6FueSBraWZvZ8Ohc3RhbGFuLiBDc2FrIGFqw6FubGFuaSB0dWRvbSBhIFBDIERpcmVrdCDDvHpsZXRldCwgw6lzIGJpenRvc2FuIG3DoXNva25hayBpcyBhasOhbmxhbmkgZm9nb20hIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiUGV0ZXIgVmFzcyIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2IzZDIyNTMyMzNkZi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDktMTZUMTQ6Mzg6MTUuMDAwWiIsCiAgICAgICJ0IjogIkd5b3JzLCBraXbDoWzDsyBraXN6b2xnw6Fsw6FzIiwKICAgICAgIngiOiAiR3lvcnMgw6lzIGtpdsOhbMOzIHN6b2xnw6FsdGF0w6FzIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiSGlsZGVnw6FyZCBLZXJla2VzIiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZTY4YmQwZDY1M2Q5LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wOS0wOFQxMTo0Njo1NS4wMDBaIiwKICAgICAgInQiOiAiWnNhbsOpcmphdsOtdMOhcyDDqXMgdGFuw6Fjc29rIiwKICAgICAgIngiOiAiR3lvcnMsIGFsYXBvcyBsYXB0b3B3ZWxsbmVzcy10IGthcHR1bmssIGEgZ8OpcCBhbGlnIG1lbGVnc3ppaywgaGFsa2FiYiwgcGx1c3ogdMOhcmhlbHkgc3phYmFkdWx0IGZlbCwgw6lzIG3DqWcgZWd5IGtpcyB6c2Fuw6lyZml0dG5lc3N6dCBpcyBrYXBvdHQsIG1pIHBlZGlnIGrDsyB0YW7DoWNzb2thdCAtIGvDtnN6w7ZuasO8ayEiCiAgICB9LAogICAgewogICAgICAibiI6ICJBbWluIEsgTWFydmFzdGkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9hZDhlYjE3NWI2MzEucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA4LTI0VDEwOjI0OjQxLjAwMFoiLAogICAgICAidCI6ICJBbmdvbHVsIGlzIGfDtnJkw7xsw6lrZW55IHNlZ8OtdHPDqWciLAogICAgICAieCI6ICJHcmVhdCBleHBlcmllbmNlIHdpdGggdGhpcyByZXBhaXIgc2hvcCEgVGhlIHRlYW0gd2FzIHN1cGVyIGhlbHBmdWwsIGZyaWVuZGx5LCBhbmQgcHJvZmVzc2lvbmFsIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGV5IGRpZCBleGNlbGxlbnQgd29yaywgZXhwbGFpbmVkIGV2ZXJ5dGhpbmcgY2xlYXJseSwgYW5kIG1hZGUgdGhlIHdob2xlIHByb2Nlc3MgZWFzeS4gUmVhbGx5IGhhcHB5IHdpdGggdGhlIHF1YWxpdHkgb2YgdGhlIHJlcGFpciBhbmQgdGhlIHNlcnZpY2UuIEhpZ2hseSByZWNvbW1lbmQgdGhlbSEiCiAgICB9LAogICAgewogICAgICAibiI6ICJHeXVsYSBNaWjDoWx5aSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2Q4MzhlMzkxNzhlZi5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDgtMDZUMTE6MTY6MzcuMDAwWiIsCiAgICAgICJ0IjogIlBvbnRvcywgbWVnYsOtemhhdMOzIHN6ZXJ2aXoiLAogICAgICAieCI6ICJHeW9ycywgcG9udG9zIMOpcyBtZWdiw616aGF0w7Mgc3plcnbDrXouIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiw4Frb3MgQmFsw6F6cyBSw7NuYWkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9lMjUzMjAwOWY0ZWQucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA4LTA2VDEwOjA1OjMyLjAwMFoiLAogICAgICAidCI6ICJEw61qbWVudGVzIHRhbsOhY3MsIMWRc3ppbnRlIMOhciIsCiAgICAgICJ4IjogIk5hZ3lvbiBrZWR2ZXNlaywgc2Vnw610xZFrw6lzemVrIMOpcyDFkXN6aW50w6lrLiBDc2FrIGFra29yIGvDqXJuZWsgcMOpbnp0LCBoYSB2YWzDs2JhbiBzesO8a3PDqWcgdmFuIHZhbGFtaWx5ZW4gbXVua8OhcmEuIE5la2VtIGTDrWptZW50ZXNlbiBpcyBhZHRhayBoYXN6bm9zIHRhbsOhY3Nva2F0LCBhbWl0IGvDvGzDtm7DtnNlbiDDqXJ0w6lrZWx0ZW0uIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiU3phYm9sY3MgUGFwcCIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2FkYjdjMGY4ZDRiNS5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDctMjlUMTY6MDM6MDMuMTAxWiIsCiAgICAgICJ0IjogIlN6YWtzemVyxbEgZGlhZ25vc3p0aWthIiwKICAgICAgIngiOiAiR3lvcnMgw6lzIHN6YWtzemVyxbEgZGlhZ25vc3p0aWthIG1lbGxldHQgaGFzem5vcyB0YW7DoWNzb3Qga2FwdGFtIMO6Z3kgYSBoYXJkd2FyZSB0ZWtpbnRldMOpYmVuLCBtaW5kIGEgaGliYSBva2FpdCBpbGxldMWRZW4uIEvDtnN6w7Zuw7ZtIGV6IMO6dG9uIGlzIGEgc3pha3N6ZXLFsSBzZWfDrXRzw6lnZXQuIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiVmFyZ2EgQsOhbGludCIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzY5NDE3M2QwNmRhMy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDYtMTFUMTA6MzM6NTkuMjI4WiIsCiAgICAgICJ0IjogIlrDtmtrZW7FkW1lbnRlcyBqYXbDrXTDoXMiLAogICAgICAieCI6ICJTenVwZXIgcHJvZmkgY3NhcGF0ISBHeW9yc2FuIMOpcyBwcmVjw616ZW4gZG9sZ296dGFrLCBhIGphdsOtdMOhcyB6w7Zra2VuxZFtZW50ZXNlbiBtZW50LiBUZWxqZXNlbiBtZWdiw616aGF0w7Mgc3pha2VtYmVyZWssIGNzYWsgYWrDoW5sYW5pIHR1ZG9tIMWRa2V0LiBLw7ZzesO2bsO2bSBhIHNlZ8OtdHPDqWdldCEiCiAgICB9LAogICAgewogICAgICAibiI6ICJEw6F2aWQgU2FqdGkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy84NTNjY2YzODVlMTMucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTA2LTA4VDExOjM4OjAxLjQ5M1oiLAogICAgICAidCI6ICJUw7xyZWxtZXMgZ8OpcHbDoWxhc3p0w6FzIiwKICAgICAgIngiOiAiw5xkdiFcbsOJbiBhenTDoW4gY3NhayBqw7N0IHR1ZG9rIG1vbmRhbmkuIENzYWsgaGFzem7DoWxvbSBhIGfDqXBldCwgc3rDs3ZhbCBob3p6w6HDqXJ0w6lzZW0gbnVsbGEuIEV6IGzDoXRzem90dCBpcyBtaWtvciBuZW0gdHVkdGFtIGvDtnJiZSDDrXJuaSBtaXJlIGlzIGxlbm5lIHN6w7xrc8OpZ2VtLiBERSBheiB1cmFrIHbDqWdpZyBrw6lzenPDqWdlc2VuLCB0w7xyZWxlbW1lbCDDoWxsdGFrIGhvenrDoW0gw6lzIGEgdsOpZ8OpcmUgbWVnIGlzIHRhbMOhbHR1ayBheiDDumogZ8OpcGVtZXQsIMOtZ3kgdmV0dGVtIHTFkWzDvGsgMS1ldCBqw6F0w6lrcmEsIGRlIGFra29yIG3DoXIgYSByw6lnaXQgaXMga2lwdWNvbHRhdHRhbS4gR3lvcnMsIHN6YWtzemVyxbEuIDUgY3NpbGxhZy4gS8O2c3rDtm7Dtm0hIgogICAgfSwKICAgIHsKICAgICAgIm4iOiAiUMOpdGVyIEltcsOpbsOpIFBpcmlzaSIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzL2JlYTZlYjMzZDExNy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjYtMDYtMDRUMDg6MzI6MzAuMjcwWiIsCiAgICAgICJ0IjogIlTDvHJlbG1lc2VrIGlkxZFzZWJiIMO8Z3lmZWxla2tlbCIsCiAgICAgICJ4IjogIlRlZ25hcCBqw6FydGFtIGEgQ2VudHJhbCBQQy1uw6lsLiBSw6lnaSwgc8OpcsO8bHQgU1NkLWrFsSBsYXB0b3BvbXLDs2wgc2lrZXJlc2VuIG1lbnRldHTDqWsgw6F0IGEgZG9sZ2FpbWF0IGF6IMO6anJhIMOpcyBmZWwgaXMgw7pqw610b3R0w6FrLiBHeW9yc2FrLCBwb250b3NhaywgbWVnYsOtemhhdMOzYWssIGtpdMO6bsWRIHN6YWtlbWJlcmVrLiBLaWVtZWxuw6ltIGEga29tbXVuaWvDoWNpw7NqdWthdCBpcywgbWVydCBueXVnZMOtamFza8OpbnQgaWx5ZW4ga2VkdmVzZW4sIHTDvHJlbG1lc2VuIG3DqWcgbmVtIGLDoW50YWsgdmVsZW0gc2Vob2wuIFJlbmRrw612w7xsIGtvcnJla3Qgw7Zzc3plZ8OpcnQgdsOpZ2V6dMOpayBlbCBheiDDtnNzemVzIGZlbGFkYXRvdC4gQsOhciBjc2FrIMO2dCBjc2lsbGFnb3QgbGVoZXQgYWRuaSwgw6luIHN6w612ZW0gc3plcmludCBoYXRvdCBhZG7DqWsgbmVraWsgw6lzIG1pbmRlbmtpbmVrIGrDsyBzesOtdnZlbCBhasOhbmxvbSDFkWtldCEiCiAgICB9LAogICAgewogICAgICAibiI6ICJab2x0w6FuIEtpc2ZhbGkiLAogICAgICAiYSI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2VudHJhbHBjL2NlbnRyYWxwYy13aWRnZXRzL21haW4vYXZhdGFycy9iYTdmZjdhNGE4YjcucG5nIiwKICAgICAgInMiOiA1LAogICAgICAiZCI6ICIyMDI2LTAyLTA2VDE4OjQ4OjQ2LjY1MloiLAogICAgICAidCI6ICJQcmVjw616IGFsa2F0csOpc3ogdGFuw6Fjc2Fkw6FzIiwKICAgICAgIngiOiAiVGVsamVzIG3DqXJ0w6lrYmVuIGVsw6lnZWRldHQgdmFneW9rLiBDc2FrIGFqw6FubGFuaSB0dWRvbS5cbkd5b3JzIChtZWdsZXDFkWVuIGd5b3JzKSAsIHByZWPDrXogaG96esOhw6FsbMOhcywgdGVsamVzIGvDtnLFsSBzZWfDrXTFkWvDqXN6c8OpZyAgw6lzIHN6YWvDqXJ0ZWxlbS4gTWluZGVuIGVneWVzIGvDqXJkw6lzZW1yZSB2w6FsYXN6b2x0YWsgYW1pdCBjc2FrIGZlbHRldHRlbSwgc2Vnw610ZXR0ZWsga2l2w6FsYXN6dGFuaSBhIG1lZ2ZlbGVsxZEgYWxrYXRyw6lzemVrZXQuXG5UZWxqZXNlbiBwcm9maSBzemVydsOtei4iCiAgICB9LAogICAgewogICAgICAibiI6ICJEYXZpZCBuYWd5IiwKICAgICAgImEiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NlbnRyYWxwYy9jZW50cmFscGMtd2lkZ2V0cy9tYWluL2F2YXRhcnMvZDQ5OWE3ZWI2YzM0LnBuZyIsCiAgICAgICJzIjogNSwKICAgICAgImQiOiAiMjAyNi0wMS0yN1QwOTo1MDoxMy4yNDFaIiwKICAgICAgInQiOiAiUmVnZ2VsIGxlYWR2YSwgZMOpbHV0w6FuIGvDqXN6IiwKICAgICAgIngiOiAiU3p1cGVyZ3lvcnMgw6lzIHByb2ZpIGtpc3pvbGfDoWzDoXMhIFJlZ2dlbCBiZXZpdHRlbSBhIGxhcHRvcG9tLCBkw6lsdXTDoW5yYSBtw6FyIGvDqXN6ZW4gaXMgdm9sdCBhIHRpc3p0w610w6FzIMOpcyBhIHBhc3p0w6F6w6FzLCDDqXMgY3NhayA4MDAwIGV6ZXIgRnQgdm9sdC4gQSBnw6lwIMO6anJhIGhhbGsgw6lzIGd5b3JzLiBDc2FrIGFqw6FubGFuaSB0dWRvbSEiCiAgICB9LAogICAgewogICAgICAibiI6ICJBbml0YSBHYcOhbCIsCiAgICAgICJhIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jZW50cmFscGMvY2VudHJhbHBjLXdpZGdldHMvbWFpbi9hdmF0YXJzLzBlYmM0NjUxNDQzYy5wbmciLAogICAgICAicyI6IDUsCiAgICAgICJkIjogIjIwMjUtMTItMjNUMTg6NDA6MzUuMzQyWiIsCiAgICAgICJ0IjogIkthcsOhY3NvbnkgZWzFkXR0IGlzIGVsdsOhbGxhbHTDoWsiLAogICAgICAieCI6ICJEZWNlbWJlciAyMy4tw6FuIGVsdsOhbGxhbHTDoWsgYXogdXRvbHPDsyBwaWxsYW5hdGJhbiDDqXJrZXpldHQsIGZpYW1uYWsgc3rDoW50IGdhbWVyIGxhcHRvcCwgdGVsamVzIHRlbGVww610w6lzw6l0IMOpcyBiZcOhbGzDrXTDoXPDoXQsIMO6Z3kgaG9neSBkw6lsdXTDoW4ga2V0dMWRa29yIGVzdGVtIGJlIHZlbGUuIE5hZ3lvbiBrb3JyZWt0IHN6ZXJ2aXosIGtvcnJla3Qgw6FyYWtrYWwsIMOpcyBrb3JyZWt0IGhvenrDocOhbGzDoXNzYWwuIE1hbmFwc8OhZyBuZW0gaWdhesOhbiBsw6l0ZXppayBtw6FyIGlseWVuIHNham5vcy4gS8O2c3rDtm5qw7xrIHN6w6lwZW4gbmVrdGVrISBCw6lrw6lzLCBCb2xkb2cgS2Fyw6Fjc29ueXQhIgogICAgfQogIF0KfQ==";
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
    try{ return dt.toLocaleDateString('hu-HU',{year:'numeric',month:'long',day:'numeric'}); }catch(e){ return ''; }
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
    var x=document.createElement('div');
    x.className='cpc-rv-x'; x.textContent=r.x;
    c.appendChild(x);
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
    fetch(SRC,{cache:'no-cache'}).then(function(r){ return r.ok?r.json():null; }).then(function(j){
      if(!j||!j.reviews||!j.reviews.length) return;
      var ok=true;
      for(var i=0;i<j.reviews.length;i++){ var r=j.reviews[i]; if(!r||!r.n||!r.x||!r.s||!r.d){ ok=false; break; } }
      if(!ok) return;
      if(j.generated && D.generated && j.generated===D.generated) return;
      D=j; render();
    }).catch(function(){});
  }
})();