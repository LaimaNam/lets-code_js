/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Variables
//DOM elements
const formElement = document.querySelector('form');
const userInput = document.querySelector('#search');
const outputElement = document.querySelector('#output');

//Functions
const convertFromKG = (e) => {
  e.preventDefault();
  let inputValue = +userInput.value;
  console.log(inputValue);
  const kgToLb = inputValue * 2.2046;
  const kgToG = inputValue / 0.001;
  const kgToOz = inputValue * 35.274;

  outputElement.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Kg to Lb</th>
            <th>Kg to G</th>
            <th>Kg to Oz</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>${kgToLb}</td>
        <td>${kgToG}</td>
        <td>${kgToOz}</td>
    </tr>
    </tbody>
    </table>

    `;
};
//Events
formElement.addEventListener('submit', convertFromKG);
