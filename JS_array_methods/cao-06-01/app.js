// Išmokome string, number, boolean ir array metodų - pats laikas pasikartoti ir pritaikyti praktikoje, naudojant funkcijas. T.y. funkciją priima parametrą ir grąžina rezultatą.

// 1 ---- Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

const minutes = (min) => {
  const seconds = 60;
  return `${min * seconds} seconds`;
};
console.log(minutes(3));

// 2 ----- Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyvenu (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

const howManyDaysYouLived = (age) => {
  return age * 365;
};
console.log(howManyDaysYouLived(20));
// 3 ----- Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
const numQ = (num) => num * num;
console.log(numQ(5));
// 4 ----- Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plota ((aukštis + plotis) / 2)
// Pvz: fn(10, 10) -> 50
const triangleArea = (height, width) => (height * width) / 2;
console.log(triangleArea(10, 10));

// 5 ----- Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const findLastLetter = (str) => {
  return str[str.length - 1];
};

console.log(findLastLetter("Petras"));
// 6 ----- Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
const reverseAndLowercaseString = (str) => {
  let newStr = str.toLowerCase().split("").reverse().join("");
  return `Your ${str} reversed is: ${newStr}`;
};
console.log(reverseAndLowercaseString("Petras"));
// 7 ------ Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
const maxNegativeNum = (arrOfNums) => {
  let numsSorted = arrOfNums
    .filter((element) => element < 0)
    .sort((a, b) => b - a);

  return numsSorted[0];
};

console.log(maxNegativeNum([-1, -100, -5, 10, 0, 11]));
// 8 ------ Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
const randNumbers = (num) => {
  let randNums = [];
  for (i = 1; i <= num; i++) {
    randNums.push(Math.floor(Math.random() * 10 + 1));
  }
  return randNums;
};

console.log(randNumbers(3));
// 9--------Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
const compareNums = (num1, num2) => {
  let sum = num1 + num2;
  return sum <= 100;
};
console.log(compareNums(10, 50));
// 10 -------- Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const arr2 = [
  { name: "Zita", age: 25 },
  { name: "Alfredas", age: 25 },
  { name: "Jonas", age: 25 },
  { name: "Kasparas", age: 20 },
  { name: "Luknė", age: 7 },
];

const sortedByAge = (array) => {
  return array.sort((a, b) => {
    if (a.age === b.age) {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.age - b.age;
    }
  });
};
console.log(sortedByAge(arr2));

// 11 ---------Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

const isWeekend = (date) => {
  let dayOfTheWeek = date.getDay();
  console.log(dayOfTheWeek);

  //   sturday === 6 , sunday ===  0
  if (dayOfTheWeek === 6 || dayOfTheWeek === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isWeekend(new Date("2021-05-29")));

//  ------- Ernesto ---------
const fn = (date) => {
  let holidays = ["05-01", "12-05"];
  let dateForCheking = `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)}`;
  console.log(dateForCheking);
  return holidays.includes(dateForCheking);
};

console.log(fn(new Date("2020-05-01")));

// 12 ----------Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
console.log("----------------12 ----------");
let arr7 = [1, 2, 4, 5];

let checkForMissingNum = (array) => {};

// console.log(checkForMissingNum(arr7));

// const missingNum = (array) => array.find((x, i) => x + 1 !== array[i + 1]) + 1;

// console.log(missingNum(arr7));
