"use strict";
const textInput = document.querySelector("#validation-input");
const dataLength = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.trim().length === dataLength) {
    textInput.setAttribute("class", "valid");
  } else {
    textInput.setAttribute("class", "invalid");
  }
});
