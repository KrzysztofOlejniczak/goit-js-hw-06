"use strict";

const inputSlider = document.querySelector("#font-size-control");
const textExample = document.querySelector("#text");
inputSlider.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  textExample.style.fontSize = `${event.currentTarget.value}px`;
});
