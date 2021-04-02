//querySelectorAllは配列でクラスを取得
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");

    }
  }
  // window.innerHeight現在のブラウザの高さ取得
})
