/* Smooth Scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});

var topTen = topTen || {};

topTen.InitMobileMenuToggle = function() {
  var $body   = $(document.body),
      $open   = $('.mobile-menu-toggle'),
      $close  = $('.mobile-menu-close');

  $open.click(function(event) {
    event.preventDefault();
    $body.addClass('mobile-menu-open');
  });

  $close.click(function(event) {
    event.preventDefault();
    $body.removeClass('mobile-menu-open');
  });
};
// toggle menu-class rather than two classes

$(document).ready(function() {

  new topTen.InitMobileMenuToggle();

});

$(window).load(function() {
  $(document.body).addClass("site-loaded");
})