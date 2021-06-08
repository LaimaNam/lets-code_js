//visas JS yra by default sinchroninis - skaito viena eilute vienu metu
console.log('-----------sync-------------');

console.log('hello world (1)');
console.log(greeting());
console.log('hello world (3)');

function greeting() {
  return 'hello world (2)';
}

// Execution context ir call stack

// ASYNC (promises,async await, callbacks, listeners) - gali atlikti ilgas tinklos užklausas neužblokuodami pagrindinės gijos

// setTimeout(function () {
//   console.log('Hello World (4)');
// }, 5000); // po 5s ivykdoma

// let a = 0;
// setInterval(() => {
//   a += 1;
//   console.log('Hello from set interval func: ' + a);
// }, 5000); //kas 3 sekuntes kviecia funkcija
console.log('-----------async example 1-------------');
let name;
let surname;

function getUserData() {
  name = 'Laima';
  surname = 'Nam';
  console.log('user data adedd');
  return true;
}

function showGreeting(a, b) {
  return `hello, ${a} ${b}`;
}

// setTimeout(getUserData, 2000);

// console.log(showGreeting(name, surname));

setTimeout(function () {
  getUserData();
  console.log(showGreeting(name, surname));
}, 1000);

// -------- example 2 ---------------
setTimeout(() => console.log('-----------async example 2-------------'), 1100);
// variables
// --- DOM elements
let btn = document.querySelector('#btn');

// functions
function showMessageInConcole() {
  console.log('message in console');
}
//  ---events
btn.addEventListener('click', showMessageInConcole);
