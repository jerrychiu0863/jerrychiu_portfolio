///////////////About Animation
var me, skill;
$me = $('.aboutme');
$skill = $('.aboutskill');

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 600  && $(window).width() >= 1200) {
            $me.css({"opacity": "1", "transform": "scale(1)"});
            $skill.css({"opacity": "1", "transform": "scale(1)"});
        }else if($(this).scrollTop() > 400 && $(window).width() >= 900 && $(window).width() <= 1200) {
            $me.css({"opacity": "1", "transform": "scale(1)"});
            $skill.css({"opacity": "1", "transform": "scale(1)"});
        }else if($(this).scrollTop() > 500 && $(window).width() <= 900)  {
            $me.css({"opacity": "1", "transform": "scale(1)"});
            $skill.css({"opacity": "1", "transform": "scale(1)"});
        }
    })
});


///////////////Card Animation
var $card, $cardPicture, $cardHeading$, $cardDetails;
$card = $('.card');
$cardPicture = $('.card__picture');
$cardHeading = $('.card__heading-span');
$cardDetails = $('.card__details');

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 1350 && $(window).width() >= 1200) {
           $card.css({"transform": "rotateY(0)", "opacity": "1"});
           $cardPicture.css({"opacity": "1"});
           $cardHeading.css({"opacity": "1"});
           $cardDetails.css({"opacity": "1"});
        }else if($(this).scrollTop() > 1200 && $(window).width() >= 900 && $(window).width() <= 1200) {
             $card.css({"transform": "rotateY(0)", "opacity": "1"});
             $cardPicture.css({"opacity": "1"});
             $cardHeading.css({"opacity": "1"});
             $cardDetails.css({"opacity": "1"});
        }else if($(this).scrollTop() > 1200 && $(window).width() <= 900) {
             $card.css({"transform": "rotateY(0)", "opacity": "1"});
             $cardPicture.css({"opacity": "1"});
             $cardHeading.css({"opacity": "1"});
             $cardDetails.css({"opacity": "1"});
        }
    })
});





////////Artist's Web Animation
var $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p9, $p10, $p11, $p12, $p13;
$p1 = $(".composition__photo--p1");
$p2 = $(".composition__photo--p2");
$p3 = $(".composition__photo--p3");
$p4 = $(".composition__photo--p4");
$p5 = $(".composition__photo--p5");
$p6 = $(".composition__photo--p6");
$p7 = $(".composition__photo--p7");
$p8 = $(".composition__photo--p8");
$p9 = $(".composition__photo--p9");
$p10 = $(".composition__photo--p10");
$p11 = $(".composition__photo--p11");
$p12 = $(".composition__photo--p12");
$p13 = $(".composition__photo--p13");


$(document).ready(function() {
   $(window).scroll(function() {
       if($(this).scrollTop() > 2200 && $(window).width() >= 1200){
           $p1.css({"top": "-20px","opacity": "1"});
           $p2.css({"right": "20px", "opacity": "1"});
           $p3.css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 1900 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p1.css({"top": "-20px","opacity": "1"});
           $p2.css({"right": "20px", "opacity": "1"});
           $p3.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 2800 && $(window).width() <= 900) {
           $p1.css({"top": "-20px","opacity": "1"});
           $p2.css({"right": "0px", "opacity": "1"});
           $p3.css({"top": "-25px", "opacity": "1"});
           
       }
   }); 
});

/////Insurance Animation
$(window).scroll(function() {
       if($(this).scrollTop() > 2600 && $(window).width() >= 1200){
           $p4.css({"top": "-20px","opacity": "1"});
           $p5.css({"right": "20px", "opacity": "1"});
           $p6.css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 2200 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p4.css({"top": "-20px","opacity": "1"});
           $p5.css({"right": "20px", "opacity": "1"});
           $p6.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3100 && $(window).width() <= 900) {
           $p4.css({"top": "-20px","opacity": "1"});
           $p5.css({"right": "0px", "opacity": "1"});
           $p6.css({"top": "-25px", "opacity": "1"});
           
       }
});

/////Restaurant Animation
$(window).scroll(function() {
       if($(this).scrollTop() > 3000 && $(window).width() >= 1200){
           $p7.css({"top": "-20px","opacity": "1"});
           $p8.css({"right": "20px", "opacity": "1"});
           $p9.css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 2700 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p7.css({"top": "-20px","opacity": "1"});
           $p8.css({"right": "20px", "opacity": "1"});
           $p9.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3500 && $(window).width() <= 900) {
           $p7.css({"top": "-20px","opacity": "1"});
           $p8.css({"right": "0px", "opacity": "1"});
           $p9.css({"top": "-25px", "opacity": "1"});
           
       } 
});

////Estate's animation
$(window).scroll(function() {
       if($(this).scrollTop() > 3600 && $(window).width() >= 1200){
           $p10.css({"top": "-20px","opacity": "1"});
           $p11.css({"right": "20px", "opacity": "1"});
           $p12.css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 3100 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p10.css({"top": "-20px","opacity": "1"});
           $p11.css({"right": "20px", "opacity": "1"});
           $p12.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3700 && $(window).width() <= 900) {
           $p10.css({"top": "-20px","opacity": "1"});
           $p11.css({"right": "0px", "opacity": "1"});
           $p12.css({"top": "-25px", "opacity": "1"});
           
       } 
});

////Web app's animation
$(window).scroll(function() {
       if($(this).scrollTop() > 4100 && $(window).width() >= 1200){
           $p13.css({"top": "40px","left": "120px","opacity": "1"});
       }else if($(this).scrollTop() > 3400 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p13.css({"top": "20px","opacity": "1"});
       } else if($(this).scrollTop() > 3900 && $(window).width() <= 900) {
           $p13.css({"top": "-20px","opacity": "1"});
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
 

