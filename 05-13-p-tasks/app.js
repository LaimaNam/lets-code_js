let country = {
  countryName: "Lithuania",
  continent: "Europe",
  population: 3,
  age: 100,
  isIsland: false,
  language: "lithuanian",
};

let isIsland = country.isIsland;

function checkCountry(isIsland) {
  return isIsland
    ? `${country.countryName} is island`
    : `${country.countryName} is not an island`;
}
console.log(checkCountry(isIsland));

// exercises
const countryName = "Lithuania";
const countryContinent = "Europe";
let countryPopulation = 3.5;
console.log("country population is " + countryPopulation);
const isCountryIsland = false;
let countryLanguage;
countryLanguage = "lithuanian";

// ----- 5
let halfPopulation = countryPopulation / 2;
console.log(halfPopulation);

countryPopulation++;
console.log("country population increased by 1 mln: " + countryPopulation);

let finlandPopulation = 6;

let populationComparison = finlandPopulation < countryPopulation;
console.log(populationComparison);

let averagePopulation = 33;
let isSmaller = averagePopulation > countryPopulation;
console.log(isSmaller);

let description = `${countryName} is in ${countryContinent}, and its ${countryPopulation} million people speak ${countryLanguage}.`;
console.log(description);

// alert("labas");
// let userName = prompt("write your name");
// console.log(userName);
// document.getElementById("h1").innerHTML = userName;

if (countryPopulation > averagePopulation) {
  console.log(`${countryName}'s population is above average`);
} else if (countryPopulation === averagePopulation) {
  console.log("well done peeps - equal to average");
} else {
  console.log("your country is below average");
}

// equality operators
// let numNeighbours = Number(
//   prompt(`How many neighbour countries does ${countryName} have?`, "0")
// );

// let numNeighbours = parseInt(promptAnswer);

// if (numNeighbours === 1) {
//   console.log("Your country has only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 neighbour!");
// } else {
//   console.log("borderless :(");
// }

if (countryName === "Lithuania" || countryContinent === "Europe") {
  console.log("Lithuania is in Europe");
}

// speaks english, has  less than 50mln peeps is not island

if (
  country.language === "english" &&
  country.population < 50 &&
  country.isIsland === false
) {
  console.log(`You should live in ${country.countryName}`);
} else {
  console.log(`${country.countryName} does not meet your criteria:(`);
}

const person = {
  age: 20,
  name: "Ben",
};
const peopleArray = [person, person, person];
peopleArray[1].name = "Joe";
console.log(peopleArray[0].name);

//  ----------------------------------------------------------->

let legalAge = 18;
let clientAge = 28;

if (clientAge >= legalAge) {
  console.log("you can use our services!");
}

clientAge < 0 || clientAge > 120
  ? console.log("Invalid Age")
  : clientAge >= legalAge
  ? console.log("Can drive")
  : console.log("Can not drive");

// -------------------------------------------------
let myName = "Laima";

if (myName.length >= 6) {
  console.log("ilgas varadas");
} else {
  console.log("trumpas vardas");
}

// -----------------------------------------------
let myAge = 99;
if (myAge > 100 || myAge < 0) {
  console.log("invalid age");
} else if (1 < myAge && myAge < 18) {
  console.log("Child");
} else {
  console.log("adult");
}

// -----------------------------------------------------

// let car = prompt("enter your car name").toUpperCase();

let vwGroup = ["VW", "AUDI", "BENTLEY", "BUGATTI", "LAMBORGINI", "PORSCHE"];
let bmwGroup = ["BMW", "MINI", "ROLLS-ROYCE"];

// if (vwGroup.includes(car)) {
//   console.log("VW Group!");
// } else if (bmwGroup.includes(car)) {
//   console.log("BMW group!");
// } else {
//   console.log("your car is not included in our database");
// }

// const checkCarName = (arr, groupName) => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === car) {
//       return `whoraay ${car} is in ${groupName}`;
//     }
//   }
//   return null;
// };

// let message = checkCarName(vwGroup, "Volkswagen group");

// if (message === null) {
//   message = checkCarName(bmwGroup, "BmW group");
// }

// console.log(message);

let checkCar = "audi".toUpperCase();
switch (checkCar) {
  case "VW":
  case "AUDI":
  case "BENTLEY":
  case "BUGATTI":
  case "LAMBORGINI":
  case "PORSCHE":
    console.log("your car is in VW group");
    break;
  case "BMW":
  case "MINI":
  case "ROLLS-ROYCE":
    console.log("your car is in BVW group");
    break;
  default:
    console.log("your car is not included in our database");
}

let userInput = "Obuolys";

switch (userInput) {
  case "Obuolys":
  case "Kriause":
  case "Pomidoras":
  case "Paprika":
  case "Agurkas":
    console.log("Vaisius");
    break;
  case "morka":
  case "agurkas":
  case "bulvė":
  case "ridikas":
  case "cukinija":
    console.log("Daržovė");
    break;
}

let weekDay = 5;

switch (weekDay) {
  case 0:
    weekDay = "Monday";
    console.log(weekDay);
    break;
  case 1:
    weekDay = "Tuesday";
    console.log(weekDay);
    break;
  case 2:
    weekDay = "Wednesday";
    console.log(weekDay);
    break;
  case 3:
    weekDay = "Thursday";
    console.log(weekDay);
    break;
  case 4:
    weekDay = "Friday";
    console.log(weekDay);
    break;
  case 5:
    weekDay = "Saturday";
    console.log(weekDay);
    break;
  case 6:
    weekDay = "Sunday";
    console.log(weekDay);
    break;
}

// switch
let userName = "Laima";

userName.length < 5 ? console.log("Short name") : console.log("Long name");

let phone = "iPhone";
const isIphoneUser = phone === "iPhone";
console.log(isIphoneUser);

// loops -----------------------------------------
for (i = 1; i <= 10; i++) {
  console.log(`${i} Laima`);
}
console.log("----------------------------------");
for (i = 10; i > 0; i--) {
  console.log(i);
}

let loopName = "Laima";
let counter = 11;

for (i = 1; i <= counter; i++) {
  console.log(`${i} ${loopName}`);
}
