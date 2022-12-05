"use strict";

const listItems = document.querySelectorAll("#categories > li.item");

const countCategories = (list) => {
  console.log(`Number of categories: ${listItems.length}`);
};

const showCategories = (list) => {
  listItems.forEach((el) => {
    console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelectorAll("li").length}`);
  });
};

countCategories(listItems);
showCategories(listItems);
