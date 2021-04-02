// htmlを読み込んだら
$(function () {
  // topページボタン制御
  $('.page-top').hide();//topページボタン非表示

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {//スクロールが100より大きい時
      $('.page-top').fadeIn();
    } else {
      $('.page-top').fadeOut();
    }

  });
  $('.page-top').click(function () {
    $('.body,html').animate({ scrollTop: 0 }, 500)//topへスクロール
    return false;
  });

});
