$('.hm-filmstrip .filmstrip-toggle').click(function() {
  if ($(this).parent(".hm-filmstrip").hasClass('active')) {
    $(this).parent(".hm-filmstrip").removeClass('active');
    $(this).removeClass('active');
  } else {
    $(this).parent(".hm-filmstrip").addClass('active')
    $(this).addClass('active');
  }
});
$('.hm-toolBox .toolBox-toggle').click(function() {
  if ($(this).parent(".hm-toolBox").hasClass('active')) {
    $(this).parent(".hm-toolBox").removeClass('active');
    $(this).removeClass('active');
  } else {
    $(this).parent(".hm-toolBox").addClass('active')
    $(this).addClass('active');
  }
});

$(".filmstrip-close").click(function() {
  $(".hm-filmstrip").removeClass("active");
  $(".filmstrip-toggle").removeClass("active");
});
$(window).bind("load scroll resize", function(e) {
  var ww = $(window).outerWidth();
  if (ww <= 480) {
    $('.hm-filmstrip').prependTo('body');
  } else {
    $('.hm-filmstrip').insertAfter(".hm-videospace");
  }
});

$(".button-open").click(function() {
  if ($(this).hasClass('active')) {
    $(this).parent(".tool-button").next("div").slideUp();
    $(this).removeClass('active');
  } else {
    $(this).parent(".tool-button").next("div").slideDown();
    $(this).addClass('active');
  }
});
$(".tool-audio .button-icon,.tool-video .button-icon").click(function() {
  $(this).toggleClass("active");
});
$(".toolBox-button .button-icon:only-child").click(function() {
  $(this).parent(".tool-button").toggleClass("active");
});
$(".tool-more .tool-button").click(function() {
  $(".tool-menu-content").slideToggle();
});