// 1 --- Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
// 1. 2 --- JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje.
// 1. 3 --- Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization);
// 1. 4 --- sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

//--- variables
const form = document.querySelector("#form-1");
const nameTd = document.querySelector("#name");
const surnameTd = document.querySelector("#surname");

//--- class
class Person {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }

  updateTableFields() {
    nameTd.textContent = this.name;
    surnameTd.textContent = this.surname;
  }
}

// --- event
form.addEventListener("input", (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#fullName").value.trim();
  const firstName = fullName.split(" ")[0];
  const surname = fullName.replace(firstName, "");
  const person1 = new Person(firstName, surname);

  person1.updateTableFields();
});

// 2 ----- Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.

//--- variables
const formForCars = document.querySelector("#form-2");
const carBox = document.querySelector("#cars-box");

//--- class
class Car {
  constructor(brand, model, mileage, price, imgSrc) {
    (this.brand = brand),
      (this.model = model),
      (this.mileage = mileage),
      (this.price = price),
      (this.imgSrc = imgSrc);
  }
  addCarToList() {
    //creating elements
    const singleCarDiv = document.createElement("div");
    const img = document.createElement("img");
    const carInfo = document.createElement("p");
    // adding content to created elements
    img.src = this.imgSrc;
    carInfo.textContent = `${this.brand} ${this.model} ${this.mileage}`;

    // adding style
    singleCarDiv.style.margin = "10px";
    singleCarDiv.style.textAlign = "center";

    // adding to html
    singleCarDiv.append(img, carInfo);
    carBox.append(singleCarDiv);
    // events
    img.addEventListener("click", () => {
      alert(`car price is ${this.price}`);
    });
  }
}

//--- events
formForCars.addEventListener("submit", (e) => {
  e.preventDefault();
  //variables
  const carBrand = document.querySelector("#car-brand").value;
  const carModel = document.querySelector("#car-model").value;
  const carMileage = document.querySelector("#car-mileage").value;
  const carPrice = document.querySelector("#car-price").value;
  const carImg = document.querySelector("#car-img").value;

  const car1 = new Car(carBrand, carModel, carMileage, carPrice, carImg);

  car1.addCarToList();

  formForCars.reset();
});

// 3 --- Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
// Pvz: paduodu: [1, 3, 3, 5, 5, 5];
// grąžina: [1, 3, 5];

let arrOfNums = [1, 3, 3, 5, 5, 5];

const checkDuplicateNums = (arr) => {
  let newArr = [];

  // su for loop
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  // su for Each
  arr.forEach((number) => {
    if (newArr.indexOf(number) === -1) {
      newArr.push(number);
    }
  });
  return newArr;
};
console.log(checkDuplicateNums(arrOfNums));
