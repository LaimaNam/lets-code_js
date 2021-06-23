/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

//Variables
//DOM elements
const outputElement = document.querySelector('#output');

//Functions

//Events
document.addEventListener('DOMContentLoaded', () => {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((cars) => {
      for (car of cars) {
        const divId = car.brand + '-models';

        const carItemDiv = document.createElement('div');
        carItemDiv.setAttribute('class', 'car-item');
        const carBrandH2 = document.createElement('h2');
        carBrandH2.innerText = car.brand;
        const modelsOutput = document.createElement('div');
        modelsOutput.setAttribute('id', divId);
        modelsOutput.setAttribute('class', 'models');

        carItemDiv.append(carBrandH2, modelsOutput);
        outputElement.append(carItemDiv);

        for (model of car.models) {
          let spanElementFormodel = document.createElement('span');
          spanElementFormodel.innerText = model;
          modelsOutput.append(spanElementFormodel);
        }
      }
    });
});
