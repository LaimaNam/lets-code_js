// BASE URL = https://olive-bead-glazer.glitch.me

// 1 --- Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// 2 --- Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// 3 ---- Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// 4 ---- Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)

const CAR_LIST_ENDPOINT = 'https://olive-bead-glazer.glitch.me';

// Variables
const tableBody = document.querySelector('#table-body');

// --------------------- FUNCTIONS -------------------------
const renderHTML = (car) => {
  let brand = car.brand;
  let model = car.model;
  return `
  <tr>
  <td>${brand}</td>
  <td>${model}</td>
  </tr>
  `;
};

const showDataOnLoad = () => {
  return fetch(CAR_LIST_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      tableBody.innerHTML = data.reduce((output, currentCar) => {
        output += renderHTML(currentCar);
        return output;
      }, '');
    });
};

// -------------------------- EVENTS -------------------------------
document.addEventListener('DOMContentLoaded', showDataOnLoad);
