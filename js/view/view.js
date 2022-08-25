export const a = "a";

// --------------- DROP DOWN FUNCTUALITY --------------//
const selectField = document.querySelector(".select-field");
const dropdownList = document.querySelector(".drop-down__list");
if (selectField && dropdownList) {
  selectField.addEventListener("click", function (e) {
    dropdownList.classList.toggle("hidden");
  });
  dropdownList.addEventListener("click", function (e) {
    const content = e.target.closest(".option").innerHTML;
    console.log("content: ", content);
    if (!content) return;
    const html = `
    ${content}<div class="selector__img-box">
    <img src="../public/icons/arrow.png" alt="" class="selector__img">
  
  </div>
    `;
    selectField.innerHTML = html;
    dropdownList.classList.add("hidden");
  });
}

// ------------- RADIO BUTTONS FUNCTUANLITY --------------
const window = document.querySelector("body");

window.addEventListener("click", function (e) {
  const btn = e.target.closest(".checkbox");
  if (!btn || btn.classList.contains("checkbox--disabled")) return;
  const swatchesBox = btn.parentElement.parentElement;
  const allLabels = swatchesBox.querySelectorAll(".checkbox-label");
  allLabels.forEach((eachLabel) =>
    eachLabel.classList.remove("checkbox-label--checked")
  );
  btn.parentElement.classList.add("checkbox-label--checked");
});
window.addEventListener("click", function (e) {
  const btn = e.target.closest(".checkbox--pdp");
  if (!btn) return;
  const swatchesBox = btn.parentElement.parentElement;
  const allLabels = swatchesBox.querySelectorAll(".checkbox");
  allLabels.forEach((eachLabel) =>
    eachLabel.classList.remove("checkbox--black")
  );
  btn.classList.add("checkbox--black");
});

// ------------ CART POPUP ----------------//

const cartBtn = document.querySelector(".cart-button");
const cart = document.querySelector(".content-container");
const cartCloseBtn = document.querySelector(".cart-close_btn");
if (cartBtn) {
  cartBtn.addEventListener("click", function (e) {
    cart.classList.remove("cart-close");
    cart.classList.remove("hidden");
  });
}
if (cartCloseBtn) {
  cartCloseBtn.addEventListener("click", function (e) {
    cart.classList.add("cart-close");
  });
  setTimeout(() => {
    cart.classList.add("hidden");
  }, 300);
}
