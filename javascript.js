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

// スマホ用スライドメニュー
$(".offcanvas-left").hiraku({
  btn:"#offcanvas-btn-left",
  direction:"left"
});