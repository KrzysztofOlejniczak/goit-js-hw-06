"use strict";

let counterValue = 0;
const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const updateCounter = () => {
  console.log(counterValue);
  counter.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", () => {
  console.log("Decrement button was clicked");
  counterValue--;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  console.log("Increment button was clicked");
  counterValue++;
  updateCounter();
});
