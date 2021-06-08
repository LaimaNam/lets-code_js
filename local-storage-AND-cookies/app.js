// ------- Local storage - istrininamas rankiniu budu
// ---------Session storage -> issitrins automatiskai uzdarius taba

// --- adding data to local storage (localStorage.setItem(key, value))

// ---- adding Something
const btn1 = document.querySelector('#btn1');

function addToLocalStorage() {
  let name = 'First data';
  localStorage.setItem('user1', name);
}

btn1.addEventListener('click', addToLocalStorage);

// --- add other data
const btn4 = document.querySelector('#btn4');

function addMoreDataToLocalStorage() {
  let name = 'Second data';
  localStorage.setItem('user2', name);
}

btn4.addEventListener('click', addMoreDataToLocalStorage);

// ---- adding Object ---------------------

const btn6 = document.querySelector('#btn6');

function addObjectToLocalStorage() {
  let user = { name: 'Laima', surname: 'Nam', age: 32 };

  localStorage.setItem('user', JSON.stringify(user));
}

btn6.addEventListener('click', addObjectToLocalStorage);

// ------ getting Object ----------------
const btn7 = document.querySelector('#btn7');
const output2 = document.querySelector('#output2');

function getObjectFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem('user'));
  console.log(data);

  if (localStorage.getItem('user')) {
    let data = JSON.parse(localStorage.getItem('user'));

    output2.innerHTML = ` 
    <ul>
    <li>Name: ${data.name}</li>
    <li>Surname: ${data.surname}</li>
    <li>Age: ${data.age}</li>
  
    </ul>
    `;
  } else {
    output2.innerHTML = 'Error, no data to get from local storage';
  }
}

btn7.addEventListener('click', getObjectFromLocalStorage);

// --- getting data from local storage (localStorage.getItem(key))
const btn2 = document.querySelector('#btn2');
const output = document.querySelector('#output');

function getDataFromLocalStorage() {
  let dataFromLocalStorage = localStorage.getItem('user2');

  if (dataFromLocalStorage) {
    output.innerText = dataFromLocalStorage;
  } else {
    output.innerText = 'Local storage is empty';
  }
}
btn2.addEventListener('click', getDataFromLocalStorage);

// --- removing selected data from local storage (localStorage.removeItem(key))
const btn3 = document.querySelector('#btn3');

function deleteFromLocalStorage() {
  localStorage.removeItem('user2');
}
btn3.addEventListener('click', deleteFromLocalStorage);

// --- removing ALL data from local storage (localStorage.clear())
const btn5 = document.querySelector('#btn5');

function deleteALLFromLocalStorage() {
  localStorage.clear();
}
btn5.addEventListener('click', deleteALLFromLocalStorage);
