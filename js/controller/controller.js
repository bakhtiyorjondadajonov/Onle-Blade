import { a } from "../view/view.js";

const elem = document.querySelector(".main-carousel");
if (elem) {
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    pageDots: true,
    //   dots: false,
  });
}
