//  Numbers ------->

// 1 -- Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

// 2 -- Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

const milkPrice = 2.19;

if (Number.isInteger(milkPrice)) {
  console.log(`Suma yra ${milkPrice.toFixed(2)}, centu nereikes`);
} else {
  console.log(`Suma yra ${milkPrice} pasiruosk krapstyt centus`);
}

// 3 -- Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): -- viename įvedame kainą su trim skaičias po kablelio,  -- antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L.

// Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

// variables
const form1 = document.querySelector('#gas-price-form');

// functionallity
function checkPrice(e) {
  e.preventDefault();
  let gasPriceInput = +document.querySelector('#price').value;
  let gasAmountInput = +document.querySelector('#gas').value;

  let finalPrice = (gasPriceInput * gasAmountInput).toFixed(2);

  const h1 = document.createElement('h1');
  h1.textContent = finalPrice;

  document.body.append(h1);
}

// events
form1.addEventListener('submit', checkPrice);

// Strings ----------->

// 1 ---- Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

const form2 = document.querySelector('#form-2');

const printNameXTimes = (e) => {
  e.preventDefault();
  let nameInputValue = document.querySelector('#userName').value;
  let numberInputValue = +document.querySelector('#times-name').value;

  if (Number.isInteger(numberInputValue)) {
    const h1 = document.createElement('h1');
    h1.textContent = nameInputValue.repeat(numberInputValue);
    // let arrayOfNames = [];

    // for (i = 1; i <= numberInputValue; i++) {
    //   arrayOfNames.push(nameInputValue);
    // }

    // h1.textContent = arrayOfNames.join(',') + '.';
    document.body.append(h1);
  } else {
    alert('your number must be integer');
  }
};

form2.addEventListener('submit', printNameXTimes);

// 2 ----- Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

const form3 = document.querySelector('#form-3');

form3.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameInputValue = document.querySelector('#yourName').value.trim();

  console.log(nameInputValue.length);
});

// 3 --- Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
// const form4 = document.querySelector('#form-4');

// form4.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const nameInputValue = document.querySelector('#fullName').value;
//   const arrayOfFullName = nameInputValue.trim().split(' ');
//   const name = document.createElement('h1');
//   const surname = document.createElement('h1');

//   name.textContent = arrayOfFullName[0];
//   surname.textContent = arrayOfFullName[1];

//   document.body.append(name, surname);
// });

// 4 ---- Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis.

const form4 = document.querySelector('#form-4');

form4.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = document.querySelector('#fullName').value.trim();

  const name = document.createElement('h1');
  const firstName = fullName.split(' ')[0];
  name.textContent = firstName;

  const surname = document.createElement('h1');
  surname.textContent = fullName.replace(firstName, '').slice(1);

  document.body.append(name, surname);
});
