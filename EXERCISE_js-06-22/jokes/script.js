//UŽDUOTIS (nuo 14 val. iki 15 val.).

// Naudodami šiame puslapyje esančius API enpointus (gali reikėtų kelių): https://api.chucknorris.io/, akurkite šį funkcijalumą:

// Turi būti du paieškos būdai:
// Vienas su tekstine paieška, kurioje rezultatai matomi iš karto rašant (keyup event'as)
// Kitas su dviem select elementais ir pateikti mygtukų

const SEARCH_ENDPOINT = 'https://api.chucknorris.io/jokes/search?query=';
const SINGLE_JOKE_BY_CATEGORY =
  'https://api.chucknorris.io/jokes/random?category=';

//Variables
//DOM elements
// -- first-filter
const searchInput = document.querySelector('#search-input');
const searchResult = document.querySelector('#search-results');

// -- second-filter
const secondFilterFormElement = document.querySelector('#second-filter-form');
const secondFilterOutput = document.querySelector('#second-filter-output');
const selectJokesCategory = document.querySelector('#joke-category-select');
const selectJokesNumber = document.querySelector('#joke-number-select');

let jokes = [];
//Functions
const searchJokes = (e) => {
  e.preventDefault();
  if (e.target.value.length < 3) return;

  let word = e.target.value;

  fetch(SEARCH_ENDPOINT + word)
    .then((res) => res.json())
    .then((data) => {
      let jokes = data.result;
      searchResult.innerHTML = jokes.reduce((total, currentJoke) => {
        total += `
        <p>${currentJoke.value}</p>
        `;
        return total;
      }, '');
    });
};

let currentJokeCategory = 'history';
let currentNumberOfJokes = 5;

// ----------- show joke by category and number
const showJokeByCategoryAndNumber = (e) => {
  e.preventDefault();
  let filteredJokesByCategory = jokes.filter((joke) =>
    joke.categories.includes(currentJokeCategory)
  );
  //   randomly shuffled and sliced according to chosen number of jokes
  let slicedRandomlyJokes = filteredJokesByCategory
    .sort(() => 0.5 - Math.random())
    .slice(0, currentNumberOfJokes);

  return (secondFilterOutput.innerHTML = slicedRandomlyJokes.reduce(
    (output, currentJoke) => {
      output += `
<p>${currentJoke.value}</p>
`;

      return output;
    },
    ''
  ));
};

//Events
document.addEventListener('DOMContentLoaded', () => {
  fetch(SEARCH_ENDPOINT + 'chuck')
    .then((res) => res.json())
    .then((data) => jokes.push(...data.result));
});
searchInput.addEventListener('keyup', searchJokes);

selectJokesCategory.addEventListener('change', (e) => {
  currentJokeCategory = e.target.value;
});

selectJokesNumber.addEventListener('change', (e) => {
  currentNumberOfJokes = +e.target.value;
});
secondFilterFormElement.addEventListener('submit', showJokeByCategoryAndNumber);
