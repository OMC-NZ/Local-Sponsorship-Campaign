$(function () {
  bannerImg();
  moveImg();
  $(window).resize(function () {
    bannerImg();
    moveImg();
  });

  /*****************Funciton**********************/
  function bannerImg() {
    if ($(window).width() > 360) {
      //Desktop
      $("img.opw-main-banner").attr("src", "imgs/WPX-Banner.jpg");
    } else {
      //Mobile
      $("img.opw-main-banner").attr("src", "imgs/WPX-Banner-mobile.jpg");
    }
  }

  function moveImg() {
    if($(window).width() > 768) {
      $("#desktop-br").show();
      $("#desktop-4b0b").show();
    } else {
      $("#desktop-br").hide();
      $("#desktop-4b0b").appendTo("#anchor-p").attr("style","margin: 0.2rem 0;");
    }
  }
});
