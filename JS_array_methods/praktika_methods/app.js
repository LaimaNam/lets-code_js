// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

const checkForLetters = (string, letter) => {
  let countedLetters = string.split(letter).length - 1;
  return `Letter ${letter} is found ${countedLetters} times`;
};

console.log(checkForLetters('yra antru', 'a'));

// --- destytojo -----
const checkForLetters2 = (sentence, letter) => {
  let numberOfLetter = sentence
    .toLowerCase()
    .split('')
    .filter((arrayLetter) => arrayLetter === letter).length;
  return `Letter ${letter} was found ${numberOfLetter} in a sentence`;
};
console.log(checkForLetters2('yrA antru', 'a'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, 'chair', , 10, 1];

const findNumbers = (arr) =>
  arr.filter((element) => !isNaN(element)).sort((a, b) => a - b);

console.log(findNumbers(arr2));

//  ---- destytojo --------
const findNumbersInArray = (arr) =>
  arr.filter((item) => typeof item === 'number').sort((a, b) => a - b);

console.log(findNumbersInArray(arr2));

// -------------------------- V e n d i n g   m a c h i n e -------------------------------------------

// Isivaizduok kad turi "vending machine". Parasyk funkcija kuri apskaiciuos optimaliausia grazos grazinimo buda. (maziausiai monetu). pvz.: preke kainuoja. 59ct, o idejot 1 eur. tokiu atveju graza bus 41ct (20ct 20ct ir 1ct).Galimi monetu nominalai [100ct, 50ct, 20ct, 10ct, 5ct, 1ct]grazint reikia array su monetomis, siuo atveju [20, 20, 1]

// kaip argumenta priims kaina
console.log('-----------------------------------------------------');
let coins = [100, 50, 20, 10, 5, 1]; //galimos grazos
const priceOne = 65; //produkto kaina
const paid = 200; //sumoketa suma

// ---------pirmas sprendimas:
const countChange = (coinsArray, itemPrice, amountPaid) => {
  let changeArray = [];
  let change = amountPaid - itemPrice;

  // --- su for loop
  for (let coin of coinsArray) {
    if (coin <= change) {
      let numOfCoins = parseInt(change / coin); //41 / 20 = 2
      change = change - coin * numOfCoins; // 41 - 20 * 2 = 1
      changeArray.push(...Array(numOfCoins).fill(coin));
    }
  }
  return changeArray;
};

console.log(countChange(coins, priceOne, paid));

// ---- Antras sprendimas:  reduce
const countChange2 = (coinsArray, itemPrice, amountPaid) => {
  let change = amountPaid - itemPrice;
  let changeArray = coinsArray.reduce((total, currentElement) => {
    if (currentElement <= change) {
      let numOfCoins = parseInt(change / currentElement); //kiek monetu
      change = change - currentElement * numOfCoins;
      total.push(...Array(numOfCoins).fill(currentElement));
    }
    return total;
  }, []);
  return changeArray;
};

console.log(countChange2(coins, priceOne, paid));

// -----------------------------> 12 cao ------------------------>

// ------ aristido ---------
const numbersArr = [1, 2, 3, 4, 5, 7];
let firstOne;
const numbersMissing = (arr) => {
  let next = arr[0];
  firstOne = arr.findIndex((item) => item !== next++);
  return arr[firstOne - 1] + 1;
};
console.log(numbersMissing(numbersArr));

// ------ deivido ---------

let numArray = [10, 5, 6, 23];
const getSmallestMisingNumber = (arr) => {
  let smallest = Math.min(...arr);
  let nextNum = smallest + 1;

  while (arr.some((number) => number === nextNum)) nextNum++;

  return nextNum;
};
console.log(getSmallestMisingNumber(numArray));

// -------- petro
const missingNumber = (array) =>
  array.find((x, i) => x + 1 !== array[i + 1]) + 1;

//   --------ernesto
let checkForMissingNumber = (giventArr) => {
  let array = giventArr.sort((a, b) => a - b);
  let prieviuosItem;
  for (let [index, item] of array.entries()) {
    if (!index) {
      prieviuosItem = item;
    } else {
      if (prieviuosItem + 1 === item) {
        prieviuosItem = prieviuosItem + 1;
      } else {
        return prieviuosItem + 1;
      }
    }
  }
  return 'All numbers are in place';
};
console.log('Missing number from array: ', checkForMissingNumber(numbersArray));
