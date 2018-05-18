////////Artist's Web Animation
$(document).ready(function() {
   $(window).scroll(function() {
       if($(this).scrollTop() > 2200 && $(window).width() >= 1200){
           $(".composition__photo--p1").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p2").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p3").css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 1800 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $(".composition__photo--p1").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p2").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p3").css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3000 && $(window).width() <= 900) {
           $(".composition__photo--p1").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p2").css({"right": "0px", "opacity": "1"});
           $(".composition__photo--p3").css({"top": "-25px", "opacity": "1"});
           
       }
   }); 
});

/////Insurance Animation
$(window).scroll(function() {
       if($(this).scrollTop() > 2600 && $(window).width() >= 1200){
           $(".composition__photo--p4").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p5").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p6").css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 2600 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $(".composition__photo--p4").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p5").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p6").css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3600 && $(window).width() <= 900) {
           $(".composition__photo--p4").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p5").css({"right": "0px", "opacity": "1"});
           $(".composition__photo--p6").css({"top": "-25px", "opacity": "1"});
           
       }
});

/////Restaurant Animation
$(window).scroll(function() {
       if($(this).scrollTop() > 3000 && $(window).width() >= 1200){
           $(".composition__photo--p7").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p8").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p9").css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 3000 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $(".composition__photo--p7").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p8").css({"right": "20px", "opacity": "1"});
           $(".composition__photo--p9").css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 4000 && $(window).width() <= 900) {
           $(".composition__photo--p7").css({"top": "-20px","opacity": "1"});
           $(".composition__photo--p8").css({"right": "0px", "opacity": "1"});
           $(".composition__photo--p9").css({"top": "-25px", "opacity": "1"});
           
       } 
});

//////////////
//NAVIGATION
$('#navi-toggle').click(function() {
    $('.navigation__background').toggleClass('bk-show');
    $('.navigation__nav').toggleClass('nav-show');
})

$('.navigation__item').click(function() {
    $('.navigation__background').removeClass('bk-show');
    $('.navigation__nav').removeClass('nav-show');
});
 

