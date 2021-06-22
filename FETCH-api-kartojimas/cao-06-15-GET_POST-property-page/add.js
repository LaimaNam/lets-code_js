BASE_URL = 'https://radial-reinvented-shoe.glitch.me';

// DOM variables
const propertyListDiv = document.querySelector('#property-list');
// form variables
const form = document.querySelector('form');
const urlInput = document.querySelector('#img-url');
const priceInput = document.querySelector('#price');
const descriptionInput = document.querySelector('#description');
const select = document.getElementById('city');
const errorMsgOutput = document.querySelector('#error-msg');
// -- Sending data
function sendData(e) {
  e.preventDefault();
  validateInputs();
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      image: urlInput.value,
      city: select.value,
      price: priceInput.value,
      description: descriptionInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const validateInputs = () => {
  if (!urlInput.value || !priceInput.value || !descriptionInput.value) {
    let errorMsg = 'Insert missing information: ';
    if (!urlInput.value) errorMsg += ' image, ';
    if (!priceInput.value) errorMsg += ' price, ';
    if (!descriptionInput.value) errorMsg += ' description, ';
    return (errorMsgOutput.innerHTML = `${errorMsg.substring(
      0,
      errorMsg.length - 2
    )}`);
  }
};

// events
form.addEventListener('submit', sendData);
