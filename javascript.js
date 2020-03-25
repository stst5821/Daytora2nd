// カルーセル

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// フワッとカードを表示させる

new WOW().init();

// TOPへ戻るボタン 画面右下の

jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

// ヘッダーメニューのスムーススクロール

$(function () {
  var headerHight = 100; // ヘッダの高さを指定する
  $('.nav_btn').click(function(){
      var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
      $("html, body").animate({scrollTop:position}, 550, "swing");
         return false;
    });
 });