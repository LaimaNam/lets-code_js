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

//  ---------------- EXAMPLE WITH .forEach() and DOM -------------------------------
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

// ---------------------- M A P -------------------------------------------- SUKURIA NAUJA MASYVA - NEKEICIAM ORIGINALAUS MASYVO iskvieciant funkcija kiekvienam elementui
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
  return arr.map((element) => element * 2);
};
console.log(arrDoubled(arrOfNumbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumente nurodyto skaičiaus
const arrMultiplied = (arr, num) => {
  return arr.map((element) => element * num);
};

console.log(arrMultiplied(arrOfNumbers, 3));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
const arrCountTwos = (arr) => {
  let howManyYwos = arr.filter((element) => element === 2);
  return howManyYwos.length;
};

console.log(arrCountTwos(arrOfNumbers));

// ---- PASS BY VALUE && PASS BY REFFERENCE

// ---- PASS BY VALUE (primityvus pagal verte)
let a = 5;
let b = 5;
console.log('a===b', a === b);

// ---- PASS BY REFFERENCE (objekai, arrays pagal referenca)
let arr1 = [1, 2];
let arr2 = [1, 2];
console.log('arr1 === arr2', arr1 === arr2);

let obj1 = {
  name: 'Linas',
};

let obj2 = {
  name: 'Linas',
};

// ---------------------- 05-31 ----------------------

//  ------------------- S O R T ---------------------

// lyginsim numbers, strings and arrays - MODIFIKUOJA ORIGINALU, todel geriausia su map'u  dar pries tai susikurti kopija

let numbers = [8, 6, 3, 44, 5, 15, 1];

// skaiciu didejimas - bad version
// let accendingSort = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log('dideja: ', accendingSort);
// -----
let accending2 = numbers
  .map(function (item) {
    return item;
  })
  .sort(function (a, b) {
    return a - b;
  });

console.log('dideja: ', accending2);
// skaiciu mazejimas - bad version
// let descendingSort = numbers
//   .sort(function (a, b) {
//     return a - b;
//   })
//   .reverse();

let descendingSort2 = numbers
  .map((number) => number)
  .sort((a, b) => a - b)
  .reverse();

console.log('mazeja:', descendingSort2);

console.log(numbers);

// -------- ecxercise .S O R T() -------------

// // Turite masyvą pavadinimu users, kuriame yra objektai. Sugrupuokite vartotojus pagal amžių nuo jauniausio iki vyriausio.
let users = [
  { name: 'John', surname: 'Smith', age: 24 },
  { name: 'Alex', surname: 'James', age: 45 },
  { name: 'Rose', surname: 'Namajunas', age: 30 },
  { name: 'James', surname: 'Farrel', age: 35 },
  { name: 'Will', surname: 'Smith', age: 21 },
  { name: 'Peter', surname: 'Gold', age: 18 },
  { name: 'John', surname: 'Snow', age: 55 },
  { name: 'Tom', surname: 'Smith', age: 37 },
];

let newUserObject = users
  .map((element) => element)
  .sort((elementOne, elementTwo) => elementOne.age - elementTwo.age);

console.log(newUserObject);

//  -------------  R E D U C E -----------------------------
//
let numbersToReduce = [1, 2, 3, 4];

let sumNumbers = numbersToReduce.reduce(function (total, currentItem) {
  return total + currentItem;
}, 0);

console.log(sumNumbers);

let usersAgeAverage = Math.round(
  users.reduce(function (total, currentElement) {
    return total + currentElement.age;
  }, 0) / users.length
);
console.log('ES5: ', usersAgeAverage);

// ----
let usersAgeAverageES6 = Math.round(
  users.reduce((total, currentElement) => total + currentElement.age, 0) /
    users.length
);

console.log('ES6: ', usersAgeAverageES6);

//  ----- ES5
let greetingArray = users.reduce(function (total, currentElement) {
  let str = `Hello ${currentElement.name} ${currentElement.surname}`;
  total.push(str);
  return total;
}, []);

console.log(greetingArray);

// ------------------ .reduce(): T A S K S -----------------
// 1. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reversenumbers(num) {
  return num.toString().split('').reverse().join('');
}

console.log(reversenumbers(12300));
// 2. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

// ---- pirmas variantas ----- su map ir sort
function minAndMax(array) {
  let valueSorted = array
    .map((element) => element)
    .sort((elementOne, elementTwo) => elementOne - elementTwo);
  console.log(valueSorted);
  return `min value is ${valueSorted[0]}, Max value is ${
    valueSorted.slice(-1)[0]
  }`;
}

const arrayMinMax = [8, 5, 4, 2, 7, 1, 9];
console.log(minAndMax(arrayMinMax));

// ----- antras varaiantas --- su reduce
function minAndMaxWithReduce(array) {
  let minValue = array.reduce(
    (min, currentValue) => Math.min(min, currentValue),
    array[0]
  );

  let maxValue = array.reduce(
    (max, currentValue) => Math.max(max, currentValue),
    array[0]
  );
  return `minimum: ${minValue} maximum: ${maxValue}`;
}

console.log(minAndMaxWithReduce(arrayMinMax));

// --- destytojo ----
const biggestAndSmallestNum = (arr) =>
  `Maziausias: ${Math.min(...arr)}, didziausias: ${Math.max(...arr)}`;

console.log(biggestAndSmallestNum(arrayMinMax));

// ---------------- REST and SPREAD operatora (...) -----------------

//  ...REST
function sum(...elements) {
  return elements.reduce((total, currentElement) => total + currentElement, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//  ...SPREAD - isskaido i atskirus itemus
let randArr = [12, 45, 105];
function biggest(arr) {
  return Math.max(...arr);
}
console.log(biggest(randArr));
