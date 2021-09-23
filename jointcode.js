var advStyle = '#advmodal{z-index:1000;position:fixed;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);opacity:0;visibility:hidden;-webkit-transition:all 0.5s ease-out 0s;-moz-transition:all 0.5s ease-out 0s;-o-transition:all 0.5s ease-out 0s;transition:all 0.5s ease-out 0s}#advmodal.show{visibility:visible;opacity:1}#advmodal div{position:relative;top:-100%;max-width:100%;margin:0 10px;border-radius:5px;background:#FFF;box-shadow:0 0 20px rgba(0,0,0,0.5);-webkit-transition:all 0.5s ease-out 0s;-moz-transition:all 0.5s ease-out 0s;-o-transition:all 0.5s ease-out 0s;transition:all 0.5s ease-out 0s}#advmodal.show div{top:0}#advmodal b{display:block;padding:20px;text-align:center;text-transform:uppercase;font-size:16px}#advmodal b u{display:block;text-decoration:none;color:green}#advmodal span{display:block;padding:0 20px 20px 20px}#advmodal a{display:block}#advmodal a img{display:block;max-width:100%}#advmodal i{position:absolute;top:-10px;right:-10px;width:30px;border-radius:50%;background:#FFF;box-shadow:0 0 20px rgba(0,0,0,0.5);text-align:center;font-style:normal;line-height:30px;color:red;cursor:pointer}#advmodal i:before{content:"⛌"}';
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
{

}
else 
{
   var advArray =
   {
      'bluestacks-com.ru': {uniqlink: 'https://cozibaneco.com/7-19e66m-g8r-hj2h-e16b', clicked: '[data-msetup], .content_article_dload a'},
      'directx-windows.ru': {uniqlink: 'https://cozibaneco.com/5-w9k82-e8r-fam2-j16b', clicked: '[data-msetup], .dxbutton a'},
      'ktonasoft.ru': {uniqlink: 'https://cozibaneco.com/2-ho1pj-j8r-chnf-h16b', clicked: '[data-msetup], [data-download-button]'},
   }
   var advText1 = 'Пока файл скачивается...';
   var advText2 = 'Также рекомендуем установить!';
   var advBanner = 'https://offergate.pro/content/97eb803ed817f4f819db1556e662e535.png';
}
if (typeof advArray[location.hostname] !== 'undefined')
{
   $('head').append('<style type="text/css">'+advStyle+'</style>');
   var advLink = advArray[location.hostname]['uniqlink'];
   var advModalBlock = '<div id="advmodal"><div><b><u>'+advText1+'</u>'+advText2+'</b><span><a href="'+advLink+'" target="_blank"><img src="'+advBanner+'" alt=""></a></span><i></i></div></div>';
   $('body').append(advModalBlock);
   $('body').on
   (
      'click',
      advArray[location.hostname]['clicked'],
      function()
      {
         $('#advmodal').addClass('show');
      }
   );
   $('#advmodal i').on
   (
      'click',
      function()
      {
         $('#advmodal').removeClass('show');
      }
   );
}
