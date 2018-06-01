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
var card;
$card = $('.card');

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 1400 && $(window).width() >= 1200) {
           $card.css({"opacity": "1"});
        }else if($(this).scrollTop() > 1200 && $(window).width() >= 900 && $(window).width() <= 1200) {
             $card.css({"opacity": "1"});
        }else if($(this).scrollTop() > 1400 && $(window).width() <= 900) {
             $card.css({"opacity": "1"});
        }
    })
});





////////Artist's Web Animation
var $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p9;
$p1 = $(".composition__photo--p1");
$p2 = $(".composition__photo--p2");
$p3 = $(".composition__photo--p3");
$p4 = $(".composition__photo--p4");
$p5 = $(".composition__photo--p5");
$p6 = $(".composition__photo--p6");
$p7 = $(".composition__photo--p7");
$p8 = $(".composition__photo--p8");
$p9 = $(".composition__photo--p9");


$(document).ready(function() {
   $(window).scroll(function() {
       if($(this).scrollTop() > 2200 && $(window).width() >= 1200){
           $p1.css({"top": "-20px","opacity": "1"});
           $p2.css({"right": "20px", "opacity": "1"});
           $p3.css({"top": "100px", "opacity": "1"});
       }else if($(this).scrollTop() > 2000 && $(window).width() >= 900 && $(window).width() <= 1200) {
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
       }else if($(this).scrollTop() > 2500 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p4.css({"top": "-20px","opacity": "1"});
           $p5.css({"right": "20px", "opacity": "1"});
           $p6.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3300 && $(window).width() <= 900) {
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
       }else if($(this).scrollTop() > 2900 && $(window).width() >= 900 && $(window).width() <= 1200) {
           $p7.css({"top": "-20px","opacity": "1"});
           $p8.css({"right": "20px", "opacity": "1"});
           $p9.css({"top": "80px", "opacity": "1"});
       } else if($(this).scrollTop() > 3700 && $(window).width() <= 900) {
           $p7.css({"top": "-20px","opacity": "1"});
           $p8.css({"right": "0px", "opacity": "1"});
           $p9.css({"top": "-25px", "opacity": "1"});
           
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
 

