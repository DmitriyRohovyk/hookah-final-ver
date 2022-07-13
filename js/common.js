$(function(){


    $(".hamburger").click(function(){
     $(this).toogleClass("is-active")
       
     if($(this).hasClass('is-active')){
          $('.mnu_top').slideDown(300);
     }else{
         $('.mnu_top').slideUp(300);
     }
    });
});    







    