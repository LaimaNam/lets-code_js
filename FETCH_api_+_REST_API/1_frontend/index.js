// API ENDPOINTS
const ALL_ADVERTS = 'http://localhost:5000/adverts/';

//Variables
const advertsListElement = document.querySelector('#adverts-list');
const formElement = document.querySelector('form');
const successErrorMSG = document.querySelector('#success-error-msg');
//Functions
function getAndShowAllAdverts() {
  return fetch(ALL_ADVERTS)
    .then((response) => response.json())
    .then((data) => {
      let adverts = data;
      let output = '';

      for (let advert of adverts) {
        output += `
          <div>
          <h3>${advert.name}</h3>
          <p>Price: ${advert.price}</p>
          <p>Contact phone: ${advert.phone}</p>

          </div>
          `;
      }
      advertsListElement.innerHTML = output;
    });
}

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
      console.log(data);
      getAndShowAllAdverts();
    });
}
//Events
document.addEventListener('DOMContentLoaded', getAndShowAllAdverts);
formElement.addEventListener('submit', sendAdvert);
