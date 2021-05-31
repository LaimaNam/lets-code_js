//  --------------------------  S O R T --------------------------------
const phones = ['nokia', 'iPhone 7', 'Samsung 9', 'OnePlus'];

let smtgh = phones.sort((a, b) => {
  if (a.includes(' ') && !b.includes(' ')) {
    return -1;
  } else {
    return 1;
  }
});

console.log(smtgh);

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

console.log(sortCityNames.sort());
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
