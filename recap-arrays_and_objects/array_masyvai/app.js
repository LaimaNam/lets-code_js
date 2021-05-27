// ----RECAP: Arrays ------

let arr = [];

arr = ['apple', 'orange', 'banana'];

arr[1] = 'fruits'; //nera gera praktik

console.log(arr.length);

//-------- array ----- methods -------

// pop() - panaikins is masyvo galo
// push() - prides kazka i masyvo gala
// shift()
// unshift()

// Darbas su masyvais
let arrOfnum = [1, 2, 3, 4, 5, 6];
console.log('Originalus masyvas', arrOfnum);
// Darbas su masyvo pabaiga
// ---.pop() pznaikina paskutini masyvo elementa
arrOfnum.pop();
console.log('.pop():', arrOfnum);

// ----- .push() - prideda elementus i masyvo pabaiga

arrOfnum.push(6, 7, 8);

console.log('.push():', arrOfnum);

// ---Darbas su masyvo pradzdia
// ------shift()  - panaikina pirma masyvo elementa

arrOfnum.shift();

console.log('.shift():', arrOfnum);

// ---unshift() - prideda elementus i pradzia

arrOfnum.unshift(-1, 0);

console.log('.unshift():', arrOfnum);

// -------- KAS GREICIAU? ----------------
// pushas ir popas vykdomi GREITAI, o shift ir unshift - LETAI

// ciklai ir masyvai

// ------for loop'as
for (let i = 0; i < arrOfnum.length; i++) {
  console.log('data from FOR loop: ', arrOfnum[i]);
}

//  ---- for of loop'as
for (let num of arrOfnum) {
  console.log('data from FOR OF loop: ', num);
}
// -----------------------------------------------------------
// ------ FOR IN LOOP'AS (darbui su objektais)
for (let index in arrOfnum) {
  console.log('elemento indexas is FOR IN loop: ', index);
}
// -----------------------------------------------------------------

// 1 ---- Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.

let styles = ['Jazz', 'Blues'];
console.log(styles); //Jazz, Blues

// 2 ---- Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.

styles.push('Rock-n-Roll');
console.log(styles); //Jazz, Blues, Rock-n-Roll

// 3 ---- Viduryje esančią reikšmę pakeiskite „Classics“.
let indexMiddle = Math.floor(arr.length / 2);
styles[indexMiddle] = 'Classics';
console.log(styles); //Jazz, Classics, Rock-n-Roll

// 4 ----- Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.

const jazz = styles.shift();
console.log(jazz); //Jazz
console.log(styles); // Classics, Rock-n-Roll

// 5 ----- Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.

styles.unshift('Rap', 'Reggae');
console.log(styles); //Rap, Reggae, Classics, Rock-n-Roll

// Turite masyvą: Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.

let arrayOfNumz = [11, -2, 34, 45, 19, 6];

function getMaxSubSum(arr) {
  let counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counter = counter + arr[i];
      console.log(counter);
    }
  }
  return counter;
}

console.log(getMaxSubSum(arrayOfNumz));
console.log('--------');

let arrayOfnumz2 = [51, -12, 37, 45, 8];
let stringArray1 = ['Hello', 'cat', 'sunny day', 'whatevz'];
let mixedArray1 = ['Hello', 45, 1, 'cat', -58, 'sunny day', 66, 'whatevz'];

const getMaxSub = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] > 0) {
        sum = sum + arr[i];
      }
    } else {
      return 'Your array must contain only nmumbers';
    }
  }

  return sum;
};

console.log(getMaxSub(arrayOfNumz));
console.log('--------');
console.log(getMaxSub(arrayOfnumz2));
console.log('--------');
console.log(getMaxSub(stringArray1));
console.log('--------');
console.log(getMaxSub(mixedArray1));

//  ------- DARBAS SU MASYVO VIDURIU -----------

// .splice(index nuo kurio pradeti (iskaito ta skaiciu), ka istrint -deleteCount (neiskaito), ir tada vardinam ka element1, ...element2)

// .SLICE(start,end) i iskerpa is array informacija nuo iki https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

let arraySplice = ['i', 'study', 'JS'];
console.log(arraySplice.splice(1, 1)); //grazina pasalina "study"

arraySplice.splice(2, 0, 'complex', 'language');
console.log(arraySplice);

//  MASYVU SUJUNGIMAS

let arrayConcat = ['Hello', 'World'];
let arrayConcat2 = ["It's", 'summer'];
let arrayConcat3 = ['yay', 'summer'];

let newArrConcat = arrayConcat.concat(arrayConcat2, arrayConcat3);

console.log(newArrConcat);

// RECAP: Objects ---------------------------------------------

// objektai turi: 1. properties(savybes) 2. methods (metodus)
let carObject = {
  name: 'Toyota',
  year: 2016,
  start: function () {
    console.log(`${this.name} is started`);
  },
};

console.log(carObject.start());

// numberis irgi yra objektas turintis metodus
let numberObject1 = 4.65895;
console.log(numberObject1.toFixed(1));

let numberObject2 = new Number(8.65895);
console.log(numberObject2);
