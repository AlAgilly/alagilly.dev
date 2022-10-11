$(document).ready(function() {
  if($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
  } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
  }
// Transition effect for navbar and back-to-top icon
$(window).scroll(function() {
  // checks if window is scrolled more than 500px, adds/removes solid class
  if($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
  } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
  }

});


// Scrolling effect for Arrow icons
$("#nav-about").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#about"), 1000);
});
$("#learn-more").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#about"), 1000);
});
$("#nav-work").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#work"), 1000);
});
$("#nav-projects").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#projects"), 1000);
});
$("#about-projects").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#projects"), 1000);
});
$("#nav-contact").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#contact"), 1000);
});
$("#nav-contact2").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#contact"), 1000);
});
$(".navbar-brand").click(function(e) {
    e.preventDefault();
    $.scrollTo(0, 1000);
});

});
