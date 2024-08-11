
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'https://png.pngtree.com/background/20231017/original/pngtree-essential-tech-a-collection-of-computers-devices-and-office-equipment-including-picture-image_5591259.jpg' },
              { src: 'https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723248000&semt=ais_hybrid' },
              { src: 'https://static.vecteezy.com/system/resources/previews/032/513/258/non_2x/top-view-ofgrapher-workspace-with-laptop-camera-and-accessories-on-black-background-flat-lay-ofgrapher-s-desk-with-laptop-camera-and-accessories-ai-generated-free-photo.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


