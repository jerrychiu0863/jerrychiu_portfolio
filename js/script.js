$(document).ready(function() {
   $(window).scroll(function() {
       if($(this).scrollTop() > 2500) {
           $(".composition__photo--p1").css("top", "-20px").css("opacity", "1");
           $(".composition__photo--p2").css("right", "20px").css("opacity", "1");
           $(".composition__photo--p3").css("top", "100px").css("opacity", "1");
       } 
   }); 
});

$(window).scroll(function() {
       if($(this).scrollTop() > 2800) {
           $(".composition__photo--p4").css("top", "-20px").css("opacity", "1");
           $(".composition__photo--p5").css("right", "20px").css("opacity", "1");
           $(".composition__photo--p6").css("top", "100px").css("opacity", "1");
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