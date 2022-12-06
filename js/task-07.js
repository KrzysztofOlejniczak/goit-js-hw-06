"use strict";

const inputSlider = document.querySelector("#font-size-control");
const textContent = document.querySelector("#text");
inputSlider.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  textContent.style.fontSize = `${event.currentTarget.value}px`;
});
