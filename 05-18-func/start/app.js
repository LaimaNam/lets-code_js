function logger(message) {
  console.log(message);
}

logger("Labas rytas!");

function cycleSpinner(min, max) {
  for (i = min; i <= max; i++) {
    console.log(i);
  }
}

function sum(sum1, sum2) {
  return sum1 + sum2;
}

let sumUp = sum(1, 2);

// parasyti funkcija kuri i parametrus paims du argumentus ir grazins sakini
// fruitProcessor
// restulatas"sultys is obuolio ir mango"

function fruitProcessor(fruit1, fruit2) {
  return `Your juice contain ${fruit1} and ${fruit2}!`;
}

console.log(fruitProcessor("mango", "banana"));

// parasyti funkcija, kuri priims du parametrus ir palygins ar tie parametrai yra lygus ir vienodi.
// turi grazinti resultata
// pasibandyti su 3 skirtingais pvz 2,2 ir  2, "2" ir 8, 21

function isEqual(num1, num2) {
  return num1 === num2;
}

console.log(isEqual(2, 2));
console.log(isEqual(2, "2"));
console.log(isEqual(8, 21));

// prasukti cikla per masyva.  iskvieetus funkcija butu atspausdinami kiekvienas is stringu

let strings = ["Labas", "vakaras", "ponios", "ir", "ponai"];
let arr = [1, 2, 5456, 5, 25, -698, 10005, 5];

function printStrings(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printStrings(arr);
printStrings(strings);

// task4
// ----- parasyti funkcija, kuriai padavus gimimo metus ir dabartinius metus bus apskaiciuojami metai like iki pensijos (pensija 65 m)
// task upgrade:
// ----- jeigu iki pensijos like metai yra daugiau uz 0, graziname tik metus, kitu atveju graziname sakini 'person is already retired'

function untilRetirement(yearBorn, currentYear) {
  let fixedRetirementYear = 65;
  let age = currentYear - yearBorn;
  if (age >= fixedRetirementYear) {
    console.log("Retired");
  } else {
    console.log(`till retiriment left: ${fixedRetirementYear - age}`);
  }
}

untilRetirement(1952, 2021);

// const ageTillRetirenent = 65 - (anyYear - birthYear);
// return ageTillRetirenent > 0 ? ageTillRetirenent : "person is already retired";

// ARROW FUNCTIONS ---------------------------------

let sum0 = (a, b) => a + b;
let greet = (fName) => {
  console.log(`labas, ${fName}`);
};
greet("Laima");

// parasyti arrow funkcija, pagal fruitProcessor funkcija
let juice = (fruit1, fruit2) => `Your juice contain ${fruit1} and ${fruit2}!`;
console.log(juice("mango", "banana"));

let sultys = (a, b) => `sultys is ${a} ir ${b}`;
console.log(sultys("aple", "pinaple"));
