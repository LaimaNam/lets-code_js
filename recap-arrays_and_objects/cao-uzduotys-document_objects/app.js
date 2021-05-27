console.log(document.location);

document.querySelector('button').addEventListener('click', () => {
  document.location.replace('http://google.com');
});

// Objects are variables too. But objects can contain many values.

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

// property: property-value
let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

// ------ Accessing Object Properties
// objectName.propertyName
console.log(person1.firstName);

//  methods ------ are actions that can be performed on objects.

// A method is a function stored as a property.
let person2 = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// this.firstName means the firstName property of this object.

//  1 ---------- cao
let car1 = {
  doors: 2,
  color: 'black',
  brand: 'BMW',
};
console.log(car1);
console.log(car1.brand);

//  2 ---------- Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

const form1 = document.querySelector('form');

form1.addEventListener('submit', (e) => {
  e.preventDefault();
  let fName = document.querySelector('#firstName').value;
  let surname = document.querySelector('#surname').value;
  let person = {
    name: fName,
    surname: surname,
  };
  console.log(person);
});

// 3 ------Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

const form3 = document.querySelector('#form-ex-3');

form3.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.querySelector('#userName').value;
  let age = Number(document.querySelector('#userAge').value);

  let legalAge = age >= 18;

  let person = {
    name: name,
    isLegalAge: legalAge,
  };
  console.log(person);
});
