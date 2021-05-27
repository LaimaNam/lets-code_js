"use strict";

// variables let and const

// keiciamas kintamasis - can be reassigned
let firstName = "Laima";

// console.log(firstName);

// nekeiciamas kintamasis - cannot be changed
const lastName = "Namajunaite";
// lastName = "Kitokia pavarde"; <--- ismes error

let digit = 31;
// console.log("skaiciu suma: ", digit);

// data types --------------------->
// strings
const nickName = "laimanam";
const age = 100;
// console.log(`my nick name is ${nickName} and my age is ${age}`);

let title = document.getElementById("title");
title.innerHTML = "labas";

// country continent population

// let country = "Lithuania";
// let continent = "Europe";
// let population = 3;

// console.log(
//   `I live in ${country}, which is in ${continent}. It has population of ${population}mln. people.`
// );

// boolean
const dayTime = true; // 1
const nighttime = false; // 0

// null

let laima = null;

// undefined
let laima2;

// NaN
// array - masyvas

let students = ["Laima", "Laurynas", "Deividas"];
let array1 = [true, "Laima", 100, nickName];

// console.log(students[0]);

// object

let country = {
  countryName: "Lithuania",
  continent: "Europe",
  population: 3,
  age: 100,
  isIsland: false,
};

let isIsland = country.isIsland;

function checkCountry(isIsland) {
  return isIsland
    ? `${country.countryName} is island`
    : `${country.countryName} is not an island`;
}

// console.log(person.age);

// operators

let l = 10;
