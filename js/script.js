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
 

