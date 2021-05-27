// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi, laima, everything is ok - i am preventintg Default!");

  const celsius = Number(document.querySelector("#numC").value);
  const h2 = document.querySelector("h2");

  h2.textContent = `Fahrenheit: ${celsius * 1.8 + 32}`;
  form.reset();
});
