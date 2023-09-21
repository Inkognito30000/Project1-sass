"use strict";

const accordion = document.querySelectorAll("accordion-item");
const title = document.querySelectorAll("accordion-title");

accordion.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

title.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  });
});