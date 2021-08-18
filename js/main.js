$(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true
  });

  $('.header-btn').on('click', function() {
    $('.menu').addClass('active');
  });

  $('.close-btn').on('click', function() {
    $('.menu').removeClass('active');
  });

});