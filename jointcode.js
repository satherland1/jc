var advArray,advText1,advText2,advBanner,advLink,advModalBlock,advStyle='#advmodal{z-index:1000;position:fixed;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);opacity:0;visibility:hidden;-webkit-transition:all 0.5s ease-out 0s;-moz-transition:all 0.5s ease-out 0s;-o-transition:all 0.5s ease-out 0s;transition:all 0.5s ease-out 0s}#advmodal.show{visibility:visible;opacity:1}#advmodal div{position:relative;top:-100%;max-width:100%;margin:0 10px;border-radius:5px;background:#FFF;box-shadow:0 0 20px rgba(0,0,0,0.5);-webkit-transition:all 0.5s ease-out 0s;-moz-transition:all 0.5s ease-out 0s;-o-transition:all 0.5s ease-out 0s;transition:all 0.5s ease-out 0s}#advmodal.show div{top:0}#advmodal b{display:block;padding:20px;text-align:center;text-transform:uppercase;font-size:16px}#advmodal b u{display:block;text-decoration:none;color:green}#advmodal span{display:block;padding:0 20px 20px 20px}#advmodal a{display:block}#advmodal a img{display:block;max-width:100%}#advmodal i{position:absolute;top:-10px;right:-10px;width:30px;border-radius:50%;background:#FFF;box-shadow:0 0 20px rgba(0,0,0,0.5);text-align:center;font-style:normal;line-height:30px;color:red;cursor:pointer}#advmodal i:before{content:"⛌"}';/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)||(advArray={"bluestacks-com.ru":{uniqlink:"https://cozibaneco.com/7-19e66m-g8r-hj2h-e16b",clicked:"[data-msetup], .content_article_dload a"},"vk-music-download.ru":{uniqlink:"https://cozibaneco.com/5-zht0s-j8r-fjdo-b16b",clicked:"[data-msetup], .content_article_dload a"},"avidemux-rus.ru":{uniqlink:"https://cozibaneco.com/5-vj6na-c8r-ffe9-g16b",clicked:"[data-msetup], .content_article_dload a"},"thefarmanager.ru":{uniqlink:"https://cozibaneco.com/3-ljsly-g8r-dj2g-j16b",clicked:"[data-msetup], .content_article_dload a"},"freemakevideo.ru":{uniqlink:"https://cozibaneco.com/4-ov6c1-b8r-egmn-g16b",clicked:"[data-msetup], .content_article_dload a"},"furmark3d.ru":{uniqlink:"https://cozibaneco.com/3-iyv1k-b8r-diqn-f16b",clicked:"[data-msetup], .content_article_dload a"},"thehddscan.ru":{uniqlink:"https://cozibaneco.com/1-93965-f8r-bjs3-g16b",clicked:"[data-msetup], .content_article_dload a"},"notepadpc.ru":{uniqlink:"https://cozibaneco.com/1-az54p-i8r-bfl9-d16b",clicked:"[data-msetup], .content_article_dload a"},"puntoswitchers.ru":{uniqlink:"https://cozibaneco.com/9-1idw04-b8r-jjrl-e16b",clicked:"[data-msetup], .content_article_dload a"},"therazercortex.ru":{uniqlink:"https://cozibaneco.com/1-a1pjw-g8r-bkzp-h16b",clicked:"[data-msetup], .content_article_dload a"},"regcleaner1.ru":{uniqlink:"https://cozibaneco.com/4-tn37x-j8r-eek0-i16b",clicked:"[data-msetup], .content_article_dload a"},"revo-uninstallerpro.ru":{uniqlink:"https://cozibaneco.com/7-16mhe6-b8r-hl1k-j16b",clicked:"[data-msetup], .content_article_dload a"},"thespeccy.ru":{uniqlink:"https://cozibaneco.com/3-jl3x8-c8r-djfh-j16b",clicked:"[data-msetup], .content_article_dload a"},"sublimetextru.ru":{uniqlink:"https://cozibaneco.com/2-d2e3f-b8r-ck1x-e16b",clicked:"[data-msetup], .content_article_dload a"},"thebatpro.ru":{uniqlink:"https://cozibaneco.com/9-1j9tu8-c8r-jkiq-d16b",clicked:"[data-msetup], .content_article_dload a"},"uc-browserfree.ru":{uniqlink:"https://cozibaneco.com/4-pkqbq-c8r-egq6-f16b",clicked:"[data-msetup], .content_article_dload a"},"uninstalltools.ru":{uniqlink:"https://cozibaneco.com/3-isr6s-b8r-djrm-h16b",clicked:"[data-msetup], .content_article_dload a"},"virtualbox-soft.ru":{uniqlink:"https://cozibaneco.com/9-1lngez-g8r-jjzu-d16b",clicked:"[data-msetup], .content_article_dload a"},"win2pdf.ru":{uniqlink:"https://cozibaneco.com/6-1407hy-h8r-gkqi-j16b",clicked:"[data-msetup], .content_article_dload a"},"xpadder-ru.ru":{uniqlink:"https://cozibaneco.com/4-prd6d-d8r-egmo-g16b",clicked:"[data-msetup], .content_article_dload a"},"totalsecurity360.ru":{uniqlink:"https://cozibaneco.com/9-1jg0xk-d8r-jib5-c16b",clicked:"[data-msetup], .tsContentArticleDload a"},"recuva-pro.ru":{uniqlink:"https://cozibaneco.com/9-1mqcph-i8r-jfla-e16b",clicked:"[data-msetup], .rvContentArticleDload a"},"shareman-tv.ru":{uniqlink:"https://cozibaneco.com/9-1m0avm-h8r-jf86-d16b",clicked:"[data-msetup], .smContentArticleDload a"},"total-commanderr.ru":{uniqlink:"https://cozibaneco.com/5-yo3x5-i8r-fgan-d16b",clicked:"[data-msetup], .tcContentArticleDload a"},"audacitypro.ru":{uniqlink:"https://cozibaneco.com/5-z9v5h-j8r-fib6-e16b",clicked:"[data-msetup], .msbutton a"},"avidemux.ru":{uniqlink:"https://cozibaneco.com/2-fsaxx-g8r-ck4g-b16b",clicked:"[data-msetup], .msbutton a"},"themorphvoxpro.ru":{uniqlink:"https://cozibaneco.com/2-fsqfz-g8r-ci0q-d16b",clicked:"[data-msetup], .msbutton a"},"parkcontrol.ru":{uniqlink:"https://cozibaneco.com/4-pdgjr-c8r-edhl-b16b",clicked:"[data-msetup], .msbutton a"},"speedfan-all.ru":{uniqlink:"https://cozibaneco.com/8-1h7ltq-j8r-ije1-h16b",clicked:"[data-msetup], .msbutton a"},"mp3tag-pc.ru":{uniqlink:"https://cozibaneco.com/1-80gz3-d8r-bf9h-f16b",clicked:"[data-msetup], .article_table a"},"sunvox-pc.ru":{uniqlink:"https://cozibaneco.com/9-1kd5i1-e8r-jf5m-h16b",clicked:"[data-msetup], .article_table a"},"directx-windows.ru":{uniqlink:"https://cozibaneco.com/5-w9k82-e8r-fam2-j16b",clicked:"[data-msetup], .dxbutton a"},"msoffice-master.ru":{uniqlink:"https://cozibaneco.com/7-19jar9-g8r-hkej-i16b",clicked:'[data-button="msetup"], .msoSidebarFast input'},"ktonasoft.ru":{uniqlink:"https://cozibaneco.com/2-ho1pj-j8r-chnf-h16b",clicked:"[data-msetup], [data-download-button]"}},advText1="Пока файл скачивается...",advText2="Также рекомендуем установить!",advBanner="https://offergate.pro/content/97eb803ed817f4f819db1556e662e535.png"),void 0!==advArray[location.hostname]&&($("head").append('<style type="text/css">'+advStyle+"</style>"),advModalBlock='<div id="advmodal"><div><b><u>'+advText1+"</u>"+advText2+'</b><span><a href="'+(advLink=advArray[location.hostname].uniqlink)+'" target="_blank"><img src="'+advBanner+'" alt=""></a></span><i></i></div></div>',$("body").append(advModalBlock),$("body").on("click",advArray[location.hostname].clicked,function(){$("#advmodal").addClass("show")}),$("#advmodal i").on("click",function(){$("#advmodal").removeClass("show")}));
