$(function () {
  if ($(window).width() > 767) {
    $("#opw-mobile").hide();
    $("#opw-desktop").show();
    $(".content-info-words p").attr(
      "style",
      "width:" + $(".content-info img").width() + "px"
    );
  } else {
    $("#opw-desktop").hide();
    $("#opw-opw-mobile").show();
  }
  $(window).resize(function () {
    $(".content-info-words p").attr(
      "style",
      "width:" + $(".content-info img").width() + "px"
    );
    
    if($(window).width() < 1440 || $(window).width() > 1023) {
      $(".OPPO-Phoenix-WPX h1").css({"font-size": "0.45rem:", "margin-bottom": "0.4rem"})
    }
  });
});
