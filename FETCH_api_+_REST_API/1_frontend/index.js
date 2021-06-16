// API ENDPOINTS
const ALL_ADVERTS = 'http://localhost:5000/adverts/';

//Variables
// DOM elements
const advertsListElement = document.querySelector('#adverts-list');
const formElement = document.querySelector('form');
const successErrorMSG = document.querySelector('#success-error-msg');

// Logic
// --- id to update
let id;

//Functions
function getAndShowAllAdverts() {
  return fetch(ALL_ADVERTS)
    .then((response) => response.json())
    .then((data) => {
      // let adverts = data.reverse();
      let adverts = data;
      let output = '';

      for (let advert of adverts) {
        output += `
          <div id="${advert.id}">
          <h3>${advert.name}</h3>
          <p>Price: ${advert.price}</p>
          <p>Phone: ${advert.phone}</p>
          <button class="update-btn" data-id="${advert.id}">UPDATE</button>
          <button class="delete-btn" data-id="${advert.id}">DELETE</button>
          </div>
          `;
      }

      advertsListElement.innerHTML = output;

      const updateBtns = document.querySelectorAll('.update-btn');
      updateBtns.forEach((btn) => btn.addEventListener('click', updateForm));

      const deleteBtns = document.querySelectorAll('.delete-btn');
      deleteBtns.forEach((btn) => btn.addEventListener('click', deleteAdvert));
    });
}

// --- POST data
function sendAdvert(e) {
  e.preventDefault();

  let name = e.target.name.value;
  let price = e.target.price.value;
  let phone = e.target.phone.value;

  if (!name || !price || !phone) {
    return (successErrorMSG.innerText = 'Please fill all the fields!');
  } else {
    successErrorMSG.innerText = '';
  }

  return fetch(ALL_ADVERTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price, phone }),
  })
    .then((response) => response.json())
    .then((data) => {
      successErrorMSG.innerText = data.message;
      getAndShowAllAdverts();
      formElement.reset();
    });
}

//PUT (update data) ------

function updateForm(e) {
  const advertElements = e.target.parentElement.children;
  id = +e.target.dataset.id;

  const [name, price, phone] = advertElements;

  // --form inputs
  const nameInput = document.querySelector('#name');
  const priceInput = document.querySelector('#price');
  const phoneInput = document.querySelector('#phone');

  nameInput.value = name.innerText;
  priceInput.value = price.innerText.slice(7);
  phoneInput.value = phone.innerText.slice(7);

  formElement.removeEventListener('submit', sendAdvert);
  formElement.addEventListener('submit', updateAdvert);
}

function updateAdvert(e) {
  e.preventDefault();

  let name = e.target.name.value;
  let price = e.target.price.value;
  let phone = e.target.phone.value;

  if (!name || !price || !phone) {
    return (successErrorMSG.innerText = 'Please fill all the fields!');
  } else {
    successErrorMSG.innerText = '';
  }

  return fetch(ALL_ADVERTS + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, name, price, phone }),
  })
    .then((response) => response.json())
    .then((data) => {
      successErrorMSG.innerText = data.message;
      getAndShowAllAdverts();
      formElement.reset();

      formElement.removeEventListener('submit', updateAdvert);
      formElement.addEventListener('submit', sendAdvert);
    });
}
// DELETE data
function deleteAdvert(e) {
  console.log(e.target.dataset.id);
  return fetch(ALL_ADVERTS + e.target.dataset.id, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      successErrorMSG.innerText = data.message;
      getAndShowAllAdverts();
    });
}

//Events
document.addEventListener('DOMContentLoaded', getAndShowAllAdverts);
formElement.addEventListener('submit', sendAdvert);
