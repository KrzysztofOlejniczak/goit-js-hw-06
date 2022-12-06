"use strict";

let counterValue = 0;
const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const updateCounter = () => {
  console.log(`Counter: ${counterValue}`);
  counter.textContent = counterValue;
};

const decrementCounter = () => {
  console.log("Decrement button was clicked");
  counterValue--;
  updateCounter();
};

const incrementCounter = () => {
  console.log("Increment button was clicked");
  counterValue++;
  updateCounter();
};

decrementBtn.addEventListener("click", decrementCounter);

incrementBtn.addEventListener("click", incrementCounter);
