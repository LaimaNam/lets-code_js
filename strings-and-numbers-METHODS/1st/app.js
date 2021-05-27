// ------- Strings and Numbers Methods -------
let num = 255;
console.log(num.toString(16));

let num1 = 15;
let num2 = new Number(15);

console.log('num1', num1);
console.log('num2', num2);

// Numbers:  apvalinimas
// apvalininama žemyn
let num3 = Math.floor(14.58);
// apvalininama aukštyn
let num4 = Math.ceil(14.58);
// apvalininama iki artimiausio sveiko skaičiaus
let num5 = Math.round(14.58);
// panaikina skaicius po kablelio
let num6 = Math.trunc(14.58);

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// Numbers: kitos matematinės f-cijos

// atsitiktins skaicius
const randNumber = Math.random();
const users = ['Linas', 'Rasa', 'Laima', 'Ignas'];
const randomUserIndex = Math.floor(Math.random() * 4);

console.log(users[randomUserIndex]);

// -- Mažiausio skaičiaus gavimas

const smallestNum = Math.min(4, 5, 78, 56, -1, 2, 3, 100, -58);
console.log(`smalest num: ${smallestNum}`);

// -- Didžiausio skaičiaus gavimas
const largestnum = Math.max(4, 5, 78, 56, -1, 2, 3, 100, -58);
console.log(`largest num: ${largestnum}`);

// -- .toFixed(n)- suapvalins skaiciu iki n vienetu po kablelio - VISADA GRAZINS STRING'A

const num7 = 14.8565545;
const num8 = 63;

console.log('num7', num7);
console.log('num7.toFixed', +num7.toFixed(2));

console.log('num8', num8);

//  -- STRING TO NUMBER ------------
const strNumber = num7.toFixed(3);
console.log('strnumber', strNumber);
// konvertavumas su +
console.log('strnumber su +', +strNumber);
// konvertavimas su parseFloat()
console.log('strnumber ir parseFloat', parseFloat(strNumber));
// konvertavimas su parseInt() - panaikina ir viska po kablelio
console.log('strnumber ir parseFloat', parseInt(strNumber));

//  --- + ie Number yra griezti konversoriai
console.log('strnumber ir Number()', Number('12a3'));
console.log('strnumber ir +', +'12a3');

// --------- uzduotis nr1
// let a = +prompt('Pirmas skaicius?', '');
// let b = +prompt('Antras skaicius?', '');

// alert(a + b);

// ------- Sukurkite kodą, kuris sukurs penkis atsitiktinius skaičius (skaičiai negali būti didesni nei 10) ir juos priskirs kintamiesiems, kurie turi iki dviejų skaičių po kablelio;

// Tada suraskite, kuris iš sukurtų skaičių yra: didžiausias; mažiausias.

let number1 = (Math.random() * 10).toFixed(2);
let number2 = (Math.random() * 10).toFixed(2);
let number3 = (Math.random() * 10).toFixed(2);
let number4 = (Math.random() * 10).toFixed(2);
let number5 = (Math.random() * 10).toFixed(2);

const numbersMin = Math.min(number1, number2, number3, number4, number5);
console.log(numbersMin);

const numbersMax = Math.max(number1, number2, number3, number4, number5);
console.log(numbersMax);

//  ----------deivido ---------
console.log('-------------------------------------');
const randNumberGenerator = () => +(Math.random() * 10).toFixed(2);
const numbersOfArr = [];

while (numbersOfArr.length < 5) {
  numbersOfArr.push(randNumberGenerator());
}
console.log(numbersOfArr);
console.log(Math.max.apply(null, numbersOfArr));
console.log(Math.min.apply(null, numbersOfArr));

// const randomNumberFunc = () => +(Math.random() * 10).toFixed(2);
// let numbersArr = [];
// while (numbersArr.length < 5) {
//   numbersArr.push(randomNumberFunc());
// }
// console.log(numbersArr);
// console.log('Didžiausias skaičius yra: ', Math.max(...numbersArr));
// console.log('Mažiausias skaičius yra: ', Math.min(...numbersArr));

// Strings ------------
// --teksto redagavimas

let greeting = 'Labas rytas';
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

let newGreeting = '';

for (i = 0; i < greeting.length; i++) {
  if (greeting[i] !== ' ') {
    newGreeting = newGreeting + greeting[i];
  }
}
console.log(newGreeting);

console.log(greeting.length);
