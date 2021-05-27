// VARIABLES
const togglerBtn = document.querySelector("i");
const navigation = document.querySelector(".navigation");

// FUNCTIONS
// ------Versija numeris 1
const toggleMenu = () => navigation.classList.toggle("active");

// ------Versija numeris 2
// let showingMenu = false;
// const toggleMenu = () => {
//   if (showingMenu) {
//     navigation.style.display = "none";
//     showingMenu = false;
//   } else {
//     navigation.style.display = "block";
//     showingMenu = true;
//   }
// };

// const toggleMenu = () => {
//   if (navigation.style.display === "none" || navigation.style.display === "") {
//     navigation.style.display = "block";
//   } else {
//     navigation.style.display = "none";
//   }
// };

// EVENTS
togglerBtn.addEventListener("click", toggleMenu);

// placiau apie classList
// -- item.classList.contains() - tikrins ar item turi contains viduje nurodyta klase
//  --  item.classList.add() - prides klase
//  -- item.classList.remove() - panaikins klase nuo item
//  -- classList.toggle() - jeigu item turi nurodyta sklaiustuose klase, tai ja paqnaikins, o jeig neturi, ja prides.
