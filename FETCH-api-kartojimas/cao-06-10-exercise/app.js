// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

// 1- Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
// 2 - Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
// 3 - Pridėkite prie lentelės (tarp id ir name) nuotrauką.
// 4 -Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
// 5 - Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi

const DATA_URL = 'https://magnetic-melon-yam.glitch.me';

//  -----------------   VARIABLES   ---------------------
// dom elements
const contentBox = document.querySelector('#tada-table-wrapper');
const checkboxVip = document.querySelector('#is-vip');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

// creating && appending table elements
const table = document.createElement('table');
const tableHead = document.createElement('thead');
const tableHeadRow = document.createElement('tr');
const tableHeadID = document.createElement('th');
const img = document.createElement('th');
const tableHeadName = document.createElement('th');
const tableHeadSurname = document.createElement('th');
const tableHeadCity = document.createElement('th');
const tableHeadFavColors = document.createElement('th');
tableHeadID.innerText = 'id';
img.innerText = 'Photo';
tableHeadName.innerText = 'name';
tableHeadCity.innerText = 'city';
tableHeadFavColors.innerText = 'favourite color';
tableHeadSurname.innerText = 'surname';
table.append(tableHead);
tableHead.append(tableHeadRow);
tableHeadRow.append(
  tableHeadID,
  img,
  tableHeadName,
  tableHeadSurname,
  tableHeadCity,
  tableHeadFavColors
);
const tableBody = document.createElement('tbody');
table.append(tableBody);
contentBox.append(table);
//  ----
const fetchedData = [];
// --------------------- FUNCTIONS -------------------------

const renderHTML = (person) => {
  let nameSplitted = person.name.split(' ')[0];
  let surname = person.name.replace(nameSplitted, '');
  return `
    <tr>
        <td>${person.id}</td>
        <td><img src="${person.image}"></td>
        <td>${nameSplitted}</td>
        <td>${surname}</td>
        <td>${person.city}</td>
        <td>${person.fav_color}</td>
    </tr>
    `;
};

const showAllData = () => {
  return fetch(DATA_URL)
    .then((response) => response.json())
    .then((data) => {
      tableBody.innerHTML = data.reduce((output, currentData) => {
        output += renderHTML(currentData);

        return output;
      }, '');
      fetchedData.push(...data);
    });
};

function showOnlyVIP() {
  if (this.checked) {
    return (tableBody.innerHTML = fetchedData
      .filter((element) => element.vip === true)
      .reduce((output, currentData) => {
        output += renderHTML(currentData);

        return output;
      }, ''));
  } else {
    showAllData();
  }
}

const searchData = (e) => {
  e.preventDefault();

  let inputValue = searchInput.value;
  console.log(inputValue);

  return (tableBody.innerHTML = fetchedData
    .filter((e) => e.name.toLowerCase() === inputValue.trim().toLowerCase())
    .reduce((output, currentData) => {
      output += renderHTML(currentData);
      return output;
    }, ''));
};

// -------------------------- EVENTS -------------------------------
// checkbox event
checkboxVip.addEventListener('click', showOnlyVIP);
// content loader
document.addEventListener('DOMContentLoaded', showAllData);
// search
searchBtn.addEventListener('click', searchData);
