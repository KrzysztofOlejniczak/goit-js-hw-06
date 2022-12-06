"use strict";

const form = document.querySelector("form.login-form");
const loginData = {};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }
  loginData.email = email.value;
  loginData.password = password.value;
  console.log(loginData);
  event.currentTarget.reset();
}
