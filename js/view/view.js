// ----------- RADIO BUTTONS FUNCTIONALITY -------------
export const a = "a";

// --------------- DROP DOWN FUNCTUALITY --------------//
const selectField = document.querySelector(".select-field");
const dropdownList = document.querySelector(".drop-down__list");

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
