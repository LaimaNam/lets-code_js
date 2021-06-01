//  --------------------------  S O R T --------------------------------
const phones = ['nokia', 'iPhone 7', 'Samsung 9', 'OnePlus'];

let smtgh = phones.sort((a, b) => {
  if (a.includes(' ') && !b.includes(' ')) {
    return -1;
  } else {
    return 1;
  }
});

// console.log(smtgh);

// 1 -- Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.
const sortCityNames = [
  'Vilnius',
  'Kaunas',
  'Klaipeda',
  'Moletai',
  'Rokiskis',
  'Utena',
  'Zarasai',
  'Siauliai',
];
console.log(sortCityNames);
console.log(sortCityNames.sort());
console.log(sortCityNames);
// 2 -- Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

const sortArrayZA = (array) => {
  array.sort((element1, element2) => {
    if (element2 < element1) {
      return -1;
    } else {
      return 1;
    }
  });
  return array;
};
console.log(sortArrayZA(sortCityNames));

// 3 --  Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const arrNumSorted = [5, 10, 20, 11, 12, 1, 0, 14, 25];
const numArraySorted = (arrayOfNums) => {
  arrayOfNums.sort((element1, element2) => element2 - element1);
  return arrayOfNums;
};

console.log(numArraySorted(arrNumSorted));
// 4 -- Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).
const oneMoreArrayOfNums = [10, 5, 20, 4];

const maxValue = (arrayOfNums) => {
  arrayOfNums.sort((element1, element2) => element2 - element1);
  return arrayOfNums[0];
};

console.log(maxValue(oneMoreArrayOfNums));

// --------------------------- R E D U C E -----------------------------
// 1 ---- Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

const favNums = [17, 18, 19, 21, 25, 27];
const favNumsSum = (arrayOfnums) => {
  return arrayOfnums.reduce((e1, e2) => e1 + e2);
};

console.log(favNumsSum(favNums)); //127

// 2 ---- Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const arrayOfCars = ['BMW', 'MCB', 'VWG', 'Toyota', 'AUDI'];
// filter---
const result = arrayOfCars
  .map((element) => element)
  .filter((word) => word.length === 3);
console.log(result);

console.log(result.length);
// ---reduce
const otherresult = arrayOfCars.reduce((counter, e2) => {
  if (e2.length === 3) {
    return counter + 1;
  } else {
    return counter;
  }
}, 0);

console.log(otherresult);

// 3 ---- Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.
const favNums2 = [17, 18, 19, 21, 25, 27];

const sortedMaxNum = (array) => {
  return array.reduce((counter, currentElement) =>
    counter > currentElement ? counter : currentElement
  );
};

console.log(sortedMaxNum(favNums2));

//  -------------------- tasks: chaining methods, wrking with objects ------------------------

// 1 ----- Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const people = [
  {
    name: 'Petras',
    age: '18',
  },
  {
    name: 'Jonas',
    age: 15,
  },
  {
    name: 'Antanas',
    age: 20,
  },
  {
    name: 'Urtė',
    age: 10,
  },
  {
    name: 'Diana',
    age: 25,
  },
  {
    name: 'Ieva',
    age: 16,
  },
];

const adults = people
  .map((element) => element)
  .filter((element) => +element.age >= 18);
console.log(adults);
// 2. ---- Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

const adultNames = (arr) => {
  return arr
    .filter((element) => element.age >= 18)
    .map((element) => element.name);
};
console.log(adultNames(people));

// 3. ---- Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.
const adults2 = people
  .filter((element) => element.age >= 18)
  .map((element) => element.name)
  .sort((a, b) => (a > b ? 1 : -1));
console.log(adults2);
// 4. ------ Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).
// Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}
const products = [
  {
    name: 'Milk',
    price: 2.3,
  },
  {
    name: 'Banana',
    price: 0.99,
  },
  {
    name: 'Coffee',
    price: 5.99,
  },
  {
    name: 'Wine',
    price: 15.9,
  },
  {
    name: 'Potato chips',
    price: 2.5,
  },
  {
    name: 'Cheese',
    price: 1.6,
  },
];

const pricesMinAndMax = (array) => {
  let newArray = array
    .map((element) => element)
    .sort((a, b) => a.price - b.price);
  console.log(newArray);
  return `Pigiausias: ${newArray[0].name}, Brangiausias: ${
    newArray[newArray.length - 1].name
  }`;
};

console.log(pricesMinAndMax(products));
