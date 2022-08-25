import { a } from "../view/view.js";

const elem = document.querySelector(".main-carousel");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
if (elem) {
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    pageDots: true,
    prevNextButtons: false,
  });
  btnLeft.addEventListener("click", function () {
    flkty.previous(true);
  });
  // next
  btnRight.addEventListener("click", function () {
    flkty.next(true);
  });
}

// ADVERTISEMENT -------------//
const adContainer = document.querySelector(".advertisement");
const adBtn = document.querySelector(".avertisement__close-icon");
if (adBtn) {
  adBtn.addEventListener("click", function (e) {
    adContainer.classList.add("hidden");
  });
}
