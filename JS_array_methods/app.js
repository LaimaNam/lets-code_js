// JS callback array methods:
// ---> manipuliuos doklumentu: forEach
//  --> dirbs su duomenu strukturom: map, filter, find, some, every

// let user = {
//   name: 'Laima',
//   greeting: function () {
//     return `hello ${this.name}`;
//   },
// };
// console.log(user);
// console.log(user.greeting());

// let numbers0 = [123, 23];
// console.log(numbers0[0]);
// console.log(numbers0.concat([789], [1, 2, 3]));

//  ------------------------  F O R   E A C H ---------------------------------- modifikuoja paimt dokumento elementus ir su jais kazka padaryti

let numbers1 = [1, 2, 3, 4, 5];

// ES5 budas
numbers1.forEach(function (item, index, array) {
  //   console.log(`item: ${item} | Index: ${index} | Array: ${array}`);
});

// ES6
numbers1.forEach((item, index, array) => {
  //   console.log(`item: ${item} | Index: ${index} | Array: ${array}`);
});

//  --- EXAMPLE WITH .forEach() and DOM -------------------------------
// changing body acording to div's background

// variables
let body = document.querySelector('body');
let boxes = document.querySelectorAll('.box');

// function
boxes.forEach((element) => {
  element.addEventListener('click', () => {
    let style = getComputedStyle(element);
    body.style.backgroundColor = style.backgroundColor;
  });
});

// ---------------------- M A P -------------------------------------------- SUKURIA NAUJA MASYVA iskvieciant funkcija kiekvienam elementui
let numbers2 = [1, 2, 3, 4, 5];

// ES5 --
let doubledNumbers0 = numbers2.map(function (element, index, array) {
  return element * 2;
});
console.log(doubledNumbers0);

// ES6 --
let doubledNumbers1 = numbers2.map((element) => element * 2);
console.log(doubledNumbers1);

// ------------------ F I L T E R --------------------------
// loopins per visa masyva ir kopins tik tuos items kurie tenkins salyga

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers3);

// ES5 ---
let numBiggerThan5 = numbers3.filter(function (element, index, array) {
  return element > 5;
});
console.log(numBiggerThan5);
// ES6 ---
let numBiggerThan7 = numbers3.filter((element) => element > 7);
console.log(numBiggerThan7);

let names = [
  'Laima',
  'Rimas',
  'Monika',
  'Lukne',
  'Vytautas',
  'Valentina',
  'Monika',
  'Laima',
  'Katinas',
  'Lukas',
];

let nameLaima = names.filter((element) => element === 'Laima');
console.log(nameLaima.length);

// ------------------- F I N D ---------------------------------
// grazins tik pati pirma elementa kuris tenkina salyga

let searchUser = names.find((element) => element === 'mew');
console.log(searchUser);

if (searchUser) {
  console.log('User exists');
} else {
  console.log('user doesnt exist');
}

//  ------------------- S O M E -------------------------------------
// jei bent vienas tenkina salyga - grazina true

let numbers4 = [1, 2, 33, 4, 55, 166, 7, 896, 9, 100];

// ES5
let hasBiggerThan2 = numbers4.some(function (element, index, array) {
  return element >= 2;
});
console.log(hasBiggerThan2);

// ES6
let hasBiggerThan10 = numbers4.some((element) => element >= 10);
console.log(hasBiggerThan10);

//  ------------------- E V E R Y -----------------------------------
//

// ES5
let allNumbersBiggerThan4 = numbers4.every(function (number, index, array) {
  return number > 4;
});
console.log(allNumbersBiggerThan4);

// ------------------------Exercises ----------------------
// // Testuosime šį masyvą
let arrOfNumbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

const arrDoubled = (arr) => {
  let doubletArray = arr.map((element) => element * 2);
  return doubletArray;
};
console.log(arrDoubled(arrOfNumbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
const arrMultiplied = (arr, num) => {
  let multipliedItems = arr.map((element) => element * num);
  return multipliedItems;
};

console.log(arrMultiplied(arrOfNumbers, 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

const arrCountTwos = (arr) => {
  let howManyTwos = arr.filter((element) => element === 2);

  return howManyTwos.length;
};

console.log(arrCountTwos(arrOfNumbers));
