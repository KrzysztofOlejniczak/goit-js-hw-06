"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeList = (ingredients) => {
  const ingredientsList = document.querySelector("#ingredients");
  ingredients.forEach((el) => {
    const listItem = document.createElement("li");
    listItem.textContent = el;
    ingredientsList.append(listItem);
  });
};

makeList(ingredients);
