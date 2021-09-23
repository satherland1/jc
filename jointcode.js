var advArray = new Map();
var advStyle = '<style type="text/css">111</style>';

advArray.set('bluestacks-com.ru','https://cozibaneco.com/7-19e66m-g8r-hj2h-e16b');

function advModal(site)
{
   if (advArray.has(site))
   {
      $('head').append(advStyle);
      var advLink = arr.get(site);
      var advText = 'Также рекомендуем установить!';
      var advBanner = 'https://offergate.pro/content/97eb803ed817f4f819db1556e662e535.png';
      var advModalBlock = '<div id="advmodal"><div><b>'+advText+'</b><span><a href="'+advLink+'" target="_blank"><img src="'+advBanner+'" alt=""></a></span><i></i></div></div>';
      $('body').append(advModalBlock).hide().fadeIn(300);
      $('body').on
      (
         'click',
         '#advmodal i, #advmodal a',
         function()
         {
            $('#advmodal').fadeOut
            (
               300, 
               function()
               {
                  $('#advmodal').remove();
               }
            );
         }
      );
   }
}

$(document).ready
(
   function()
   {
      alert(444);
      $('[data-msetup], .content_article_dload a').on
      (
         'click',
         function()
         {
            advModal(location.hostname);
         }
      );
   }
);
