const fName = document.getElementById("name");
const names = [];
fName.addEventListener("blur", (event) => {
  names.push(event.target.value);
  document.querySelector("h1").textContent = names.join(", ") + ".";
});

// variables
// --Dom elements
// boxes
const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");

// CTA (call to action) mygtukas
const btn1 = document.querySelector("#btn-1");

// Functions
function createLTFlag() {
  box1.style.backgroundColor = "yellow";
  box2.style.backgroundColor = "green";
  box3.style.backgroundColor = "red";
}

// Events
btn1.addEventListener("click", createLTFlag);

// funckiju rasymas:
// 1. function declaration (veiks visada)
// 2. function expression (veiks tik esant apibrezimui pries iskvietima)
// 3. arrow function (veiks tik esant apibrezimui pries iskvietima)

// ----------------------------->
// headline example
// variables
const headline = document.querySelector("#headline");
// functions
const changeHeadline = () => {
  headline.style.fontSize = "55px";
  headline.style.transition = "all 1s";
  headline.classList.add("primary-headline");
};
const makeHeadlineSmall = () => {
  headline.style.fontSize = "32px";
};
// events
headline.addEventListener("mouseover", changeHeadline);
headline.addEventListener("mouseleave", makeHeadlineSmall);

// ---- Small boxes example ------
// V A R I A B L E S
const boxes = document.querySelectorAll(".small-box");
const removedItemsCountelement = document.querySelector("#removed-items-count");
let removedItemsCount = 0;

// F U N C T I O N S
const removeBox = (e) => {
  // Remove Clicked item
  e.target.style.display = "none";

  // Count removed items
  removedItemsCount++;
  removedItemsCountelement.innerText = removedItemsCount;

  // Change all box colors
  boxes.forEach((box) => {
    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  });
};

// E V E N T S
boxes.forEach((element) => {
  element.addEventListener("click", removeBox);
});

document.addEventListener("DOMContentLoaded", () => {
  removedItemsCountelement.innerText = removedItemsCount;
});
