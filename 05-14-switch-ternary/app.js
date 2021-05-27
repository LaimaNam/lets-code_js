let country = {
  countryName: "Lithuania",
  continent: "Europe",
  population: 3,
  age: 100,
  isIsland: false,
  language: "lithuania",
};

let isIsland = country.isIsland;

function checkCountry(isIsland) {
  return isIsland
    ? `${country.countryName} is island`
    : `${country.countryName} is not an island`;
}
console.log(checkCountry(isIsland));

// -------------------------------------------------

let population =
  country.population < 33
    ? `${country.countryName} population is below average`
    : `${country.countryName} population is above average`;
console.log(population);

let result = country.population > 33 ? "above" : "below";
console.log(`${country.countryName}'s population is ${result} average`);

// -----------------------------------------------

// let fName = prompt("What is your name?");

// let message = fName === "" ? null : console.log(`hi ${fName}`);

// if (fName != "") {
//   console.log(`hi, ${fName}`);
// }

// ---------------------------------------------------

let firstName = "Jonas";
let wrongName = true;

// if (wrongName === true) {
//   firstName = "Dzionis";
// } else {
//   console.log(firstName);
// }

let nameCheck = wrongName ? (firstName = "Dzionis") : firstName;
console.log(nameCheck);

// ---------------------------------------------------------
let dateOne = 1991;
let dateTwo = 2020;

// if (dateOne > dateTwo) {
//   console.log(dateOne);
// } else {
//   console.log(dateTwo - dateOne);
// }

let dateCheck = dateOne > dateTwo ? dateOne : dateTwo - dateOne;
console.log(dateCheck);
// -------------------------------------------------------------------

let a = 36;
let b = 54;
let c = 11;
let d = 44;

let sum1 = a + b;
let sum2 = c + d;
let checker = 10;

// if (sum1 < sum2) {
//   console.log(`${sum1} is less than ${sum2}`);
// } else if (a > 10 && b > 10 && c > 10 && d > 10) {
//   console.log("all values are higher than 10");
// }

let numCheck =
  sum1 < sum2
    ? `${sum1} is less than ${sum2}`
    : a > checker && b > checker && c > checker && d > checker
    ? "all values are higher than 10"
    : `there are one or more values which are less than ${checker}`;

console.log(numCheck);

// SWITCH --------------------------------------------------------------------

let lang = country.language;
switch (lang) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("great language too:D");
}

// promt kur ivesti amziu
// galutine kaina

let ticketPrice = 10;
let age = 85;

switch (true) {
  case age <= 6:
    ticketPrice *= 0.2;
    console.log(
      `For your age group with discount of 80% ticket price is: ${ticketPrice}eur`
    );
    break;
  case age < 19:
    ticketPrice *= 0.4;
    console.log(
      `For your age group with discount of 60% ticket price is: ${ticketPrice}eur`
    );
    break;
  case age <= 24:
    ticketPrice *= 0.8;
    console.log(
      `For your age group with discount of 20% ticket price is: ${ticketPrice}eur`
    );
    break;
  case age <= 64:
    console.log(
      `For your age group there is no discount and ticket price is: ${ticketPrice}eur`
    );
    break;
  case age >= 65:
    ticketPrice *= 0.15;
    console.log(
      `For your age group with discount of 85% ticket price is: ${ticketPrice}eur`
    );
    break;
}

// apskaiciuoti arbatpinigius pagal israsyta saskaita

let bill = 430;
let tip;

// 50 < bill < 300 top = 15%   else tip = 20%
if (bill > 50 && bill < 300) {
  tip = bill * 0.15;
  console.log(
    `Your bill is ${bill} and you should leave ${tip} eur tip. So overall would be ${
      bill + tip
    }.`
  );
} else {
  tip = bill * 0.2;
  console.log(
    `Your bill is ${bill} and you should leave ${tip} eur tip. So overall would be ${
      bill + tip
    }.`
  );
}

let billCheck =
  bill >= 50 && bill < 300
    ? `Your bill is ${bill} and you should leave ${(tip =
        bill * 0.15)} eur tip. So overall would be ${bill + tip}.`
    : `Your bill is ${bill} and you should leave ${(tip =
        bill * 0.2)} eur tip. So overall would be ${bill + tip}.`;
console.log(billCheck);
