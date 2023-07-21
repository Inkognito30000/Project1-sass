"use strict";

const showModal = document.querySelector(".show");
//let drop = document.querySelector(".modal");
const test = document.querySelector(".dropdown-second");

showModal.addEventListener("click", function () {
  test.classList.toggle("modal");
  showModal.style.color = red;
});
