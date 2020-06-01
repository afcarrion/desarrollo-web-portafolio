/* console.log(`Hola Mundo`); */
/* console.log(window.matchMedia("screen and (max-width: 767px)")); */
const ipad = window.matchMedia("screen and (max-width: 767px)");
/* console.log(document.querySelector(".menu")); */

const menu = document.querySelector(".menu");
const burguerButton = document.querySelector("#burguer-menu");
console.log(burguerButton);

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burguerButton.addEventListener("click", hiddeShow);
  } else {
    burguerButton.removeEventListener("click", hiddeShow);
  }
  console.log(event.matches);
}
validation(ipad);

function hiddeShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
