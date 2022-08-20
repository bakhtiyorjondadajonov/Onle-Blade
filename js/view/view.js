// ----------- RADIO BUTTONS FUNCTIONALITY -------------
export const a = "a";
const window = document.querySelector("body");
window.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".label");
  if (!btn) return;
  console.log(btn);
  btn.style.border = "solid 1px #BEBEBE ";
});
