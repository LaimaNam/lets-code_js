// Variables
// -------DOM elements
// form
const formElement = document.querySelector('form');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const birthDateInput = document.querySelector('#birth-date');
const errorMSgelement = document.querySelector('#error-msg');
// table
const tableBody = document.querySelector('#table-output');

//  -- data
let users = [];

// Functions
// ---function  registerUser adds user to:
// --- table
// --- localStorage

const registerUser = (e) => {
  e.preventDefault();

  let user = {
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    birthdate: birthDateInput.value,
  };
  // -- validating form
  if (
    !nameInput.value ||
    !surnameInput.value ||
    !emailInput.value ||
    !birthDateInput.value
  ) {
    let errorMessage = 'Prašome nurodyti: ';
    if (!nameInput.value) errorMessage += ' vardą, ';
    if (!surnameInput.value) errorMessage += ' pavardę, ';
    if (!emailInput.value) errorMessage += ' El. paštą, ';
    if (!birthDateInput.value) errorMessage += ' gimimo datą, ';
    return (errorMSgelement.innerText = `${errorMessage.substring(
      0,
      errorMessage.length - 2
    )}.`);
  } else {
    errorMSgelement.innerText = '';
  }

  // ---add new data from form to table
  displayOneUser(user);

  //   adding data to Local Storage
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // formElement.reset();
  e.target.reset();
};

// -- function displaying one user
const displayOneUser = (user) => {
  let tr = document.createElement('tr');
  for (let i in user) {
    let td = document.createElement('td');
    td.innerText = user[i];
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
};

// --- function getDataFromLocalStorage - get data form LS and saves it to user array
const getDataFromLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem('users'));
  console.log(data);
  if (data != null) {
    users = data;
  }
  displayUsers(users);
};

//  -- function uzloadinus html document atvaizduos lenteleje userius
const displayUsers = (arr) => {
  if (arr) {
    for (i = 0; i <= arr.length; i++) {
      displayOneUser(arr[i]);
    }
  }
};
// Events
formElement.addEventListener('submit', registerUser);
document.addEventListener('DOMContentLoaded', getDataFromLocalStorage);
