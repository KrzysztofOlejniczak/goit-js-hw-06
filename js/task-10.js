"use strict";

const input = document.querySelector("input");
const boxContainer = document.querySelector("div#boxes");
const createBtn = document.querySelector("button[data-create");
const destroyBtn = document.querySelector("button[data-destroy");

createBtn.addEventListener("click", (event) => {
  destroyBoxes();
  createBoxes(parseInt(input.value));
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(number) {
  for (let i = 1; i <= number; i++) {
    const color = getRandomHexColor();
    const box = `<div style="width:${30 + 10 * i}px; height:${
      30 + 10 * i
    }px; background-color:${color}; margin: 3px 0"></div>`;
    boxContainer.insertAdjacentHTML("beforeend", box);
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
