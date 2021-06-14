const CAR_LIST_ENDPOINT = 'https://olive-bead-glazer.glitch.me';
// VAR
const submitCarBtn = document.querySelector('#submit-car-btn');
const brandInput = document.querySelector('#brand');
const modelInput = document.querySelector('#model');
const form = document.querySelector('form');
const messageOutput = document.querySelector('#error-message');
// --------------------- FUNCTIONS -------------------------
// Sending data
function sendPostFETCH(e) {
  e.preventDefault();
  validateInputs();
  return fetch(CAR_LIST_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      brand: brandInput.value,
      model: modelInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const validateInputs = () => {
  if (!brandInput.value || !modelInput.value) {
    let errorMsg = 'Insert missing information: ';
    if (!brandInput.value) errorMsg += ' brand, ';
    if (!modelInput.value) errorMsg += ' model, ';
    return (messageOutput.innerHTML = `${errorMsg.substring(
      0,
      errorMsg.length - 2
    )}`);
  }
};

// -------------------------- EVENTS -------------------------
form.addEventListener('submit', sendPostFETCH);
