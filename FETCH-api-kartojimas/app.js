// gauti duomenis iš back-endo

//  Version 1 --------------------------------------
// API end points
const SINGLE_JOKE_ENDPOINT = 'https://api.chucknorris.io/jokes/random';
// variables
const singleJokeOutput = document.querySelector('#single-joke');

// Functions
// fetch(SINGLE_JOKE_ENDPOINT)
//   .then((response) => response.json())
//   .then((data) => {
//     singleJokeOutput.innerText = data.value;
//   });

// Events
document.addEventListener('DOMContentLoaded', () => {
  fetch(SINGLE_JOKE_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      singleJokeOutput.innerText = data.value;
    });
});

//  Version 2 --------------------------------------

// API endpoint -----
// after sign = must add category name
const SINGLE_JOKE_BY_CATEGORY =
  'https://api.chucknorris.io/jokes/random?category=';

// DOM elements
const formElement = document.querySelector('form');
const selectElement = document.querySelector('select');
const singleJokeByCategoryOutput = document.querySelector(
  '#single-joke-by-category'
);

// --current Joke category
let currentJokeCategory = 'science';

// ----- EVENTS ----
selectElement.addEventListener('change', (e) => {
  currentJokeCategory = e.target.value;
});

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  return fetch(SINGLE_JOKE_BY_CATEGORY + currentJokeCategory)
    .then((response) => response.json())
    .then((result) => {
      singleJokeByCategoryOutput.innerText = result.value;
    })
    .catch((err) => console.log(err));
});
