// Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).

/*Pvz:
Įvesta: 2
Rezultatas:
*
**

Įvesta: 5
Rezultatas:
*
**
***
****
***** */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi, laima, everything is ok - i am Preventintg Default!");
  let num = Number(document.querySelector("#num").value);
  let bigDiv = document.querySelector("div");

  //  num = kiek eiluciu reiks atspausdinti
  // kiekvienoje row turi buti atspausdintas "*" ir su kiekviena eilute + "*"
  // = koks eilutes index = tiek "*""

  // row turi kisti nuo 1 iki num
  for (row = 1; row <= num; row++) {
    // kiekvienam row turi sukonstruoti string text is "*"
    let text = "";

    // zvaigzduciu kiekis = row
    // prie text pridet tiek zvaigzduciu, kelinta row sukasi
    for (i = 1; i <= row; i++) {
      text = text + i;
    }

    let newDiv = document.createElement("div");
    newDiv.textContent = text;
    bigDiv.appendChild(newDiv);
  }

  // row turi kisti nuo num iki 1 ------------------------------------------------->
  for (row = num - 1; row >= 1; row--) {
    // kiekvienam row turi sukonstruoti string text is "*"
    let text = "";

    // zvaigzduciu kiekis = row
    // prie text pridet row kartu  '*'
    for (i = 1; i <= row; i++) {
      text = text + i;
    }
    let newDiv = document.createElement("div");
    newDiv.textContent = text;
    bigDiv.appendChild(newDiv);
  }

  const values = [2, 4, 5, 6, 3, 5, 3, 2, 1, 0, 3, 5, 14, 9];
  // row turi kisti nuo num iki 1
  for (a = 0; a < values.length; a++) {
    row = values[a];
    // kiekvienam row turi sukonstruoti string text is "*"
    let text = "";

    // zvaigzduciu kiekis = row
    // prie text pridet row kartu  '*'
    for (i = 1; i <= row; i++) {
      text = text + "*";
    }
    let newDiv = document.createElement("div");
    newDiv.textContent = text;
    bigDiv.appendChild(newDiv);
  }
  form.reset();

  // TODO: istrint senus divus
});
