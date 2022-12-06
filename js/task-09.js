"use strict";

const btn = document.querySelector("button.change-color");
const textToPrint = document.querySelector("span.color");
const body = document.body;

btn.addEventListener("click", (event) => changeColor(getRandomHexColor()));

function changeColor(color) {
  // const color = getRandomHexColor();
  body.style.backgroundColor = color;
  textToPrint.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
