// Variables
const seachInput = document.querySelector('#search');
const suggestions = document.querySelector('#suggestions');
const filters = document.querySelectorAll('input[type=radio]');

const CITIES_ENDPOINT =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(CITIES_ENDPOINT)
  .then((response) => response.json())
  .then((data) => cities.push(...data));
console.log(cities);

// Functions
// --------------------- findCities() ----------------------
function findCities(word, citiesArray) {
  return citiesArray.filter((city) => {
    const rgxRule = new RegExp(word, 'gi');
    return city.city.match(rgxRule) || city.state.match(rgxRule);
  });
}

// ----------------------displayCities()---------------------
function displayCities(e) {
  const matchedCities = findCities(e.target.value, cities);

  filters.forEach((filter) => {
    if (filter.checked && filter.id === 'ascending') {
      matchedCities.sort((a, b) => {
        return a.population - b.population;
      });
    } else if (filter.checked && filter.id === 'descending') {
      matchedCities.sort((a, b) => {
        return b.population - a.population;
      });
    }
  });

  let output = '';

  filters.forEach((filter) => {
    filter.addEventListener('change', () => {
      if (filter.checked && filter.id === 'ascending') {
        matchedCities.sort((a, b) => {
          return a.population - b.population;
        });
      } else if (filter.checked && filter.id === 'descending') {
        matchedCities.sort((a, b) => {
          return b.population - a.population;
        });
      }
      let html = '';
      // render list of cities
      if (e.target.value) {
        for (let citie of matchedCities) {
          html += `
          <li>${citie.city}, ${citie.state}, Population: ${citie.population}</li>
          `;
        }
        suggestions.innerHTML = html;
      }
    });
  });

  // render list of cities -----
  for (let citie of matchedCities) {
    output += `
      <li>${citie.city}, ${citie.state}, Population: ${citie.population}</li>
      `;
  }
  suggestions.innerHTML = output;

  // when cleaning search input, clean HTML
  if (e.target.value === '') {
    suggestions.innerHTML = '';
  }
}

// Events
seachInput.addEventListener('keyup', displayCities);

// Padaryti papildomą filtravimą su radio kurio esmė bus gyventojų atvaizdavimas pagal didėjimą/mažėjimą

function filterByPopulation() {}
function renderCitiesList() {}
