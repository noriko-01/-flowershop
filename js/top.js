//配列の定義

flowers = ["main04.jpg", "main05.jpg", "main06.jpg", "main08.jpg"];
//配列の表示開始の添え字
let i = 0;



//スライドショーの関数定義


function slideshow() {
  i = i + 1;
  if (i === 4) {
    i = 0;
  }

  document.getElementById("pic").src = "images/item/" + flowers[i];
  setTimeout(slideshow, 5000);
}


//ページを読み込んだらスライドショー開始
window.addEventListener('load', function () {
  slideshow();
});

