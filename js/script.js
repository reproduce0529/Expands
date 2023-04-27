    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".header_wrap").css("background" , "white");
          $(".menu_aTag").css("color" , "black");
          $(".logo_img_img").css("display" , "block");
        }
        else{
          $(".header_wrap").css("background" , "transparent");   
          $(".menu_aTag").css("color" , "white");
          $(".logo_img_img").css("display" , "white");
        }
      })
    })