// --- OOP (creating objects in JS)

// -- object literal
let user = {
  name: 'John', //properties (key: value pairs)
  surname: 'Smith',
  age: 25,
  greeting: function (language = 'english') {
    if (language === 'english') {
      return `Hello, ${this.name} ${this.surname}`;
    } else {
      return `Labas, ${this.name} ${this.surname}!`;
    }
  }, //methods
};
//objekto vertes pakeitimas
user.name = 'alex';
delete user.age;
// console.log(user.greeting('lithuanian'));
// console.log(user);
//  --- constructor function
// ------------------- ES5 ----------------------------
function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

User.prototype.greeting = function () {
  return `Hello, ${this.name} ${this.surname}`;
};

let user1 = new User('Peter', 'Smith', 42);
// console.log(user1.greeting());

// ------------------- ES6 ----------------------------

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startCar() {
    return `${this.make} ${this.model} started!`;
  }
}

let audi = new Car('Audi', 'A6', 2020);
let opel = new Car('Opel', 'Astra', 2020);

// console.log(audi.startCar());

// objektu sujungimas (negali pasikartoti objektu savybes)
let cars = Object.assign({}, audi, user);

let newObj = { ...audi, ...user };
// console.log(newObj);

// ----------------------Form validator----------------------
const formElement = document.querySelector('form');
const nameElement = document.querySelector('input[type="text"]');
const passElement = document.querySelector('input[type="password"]');

class FormPasswordValidator {
  constructor(form, name, password) {
    this.form = form;
    this.name = name;
    this.password = password;
  }

  submitForm(e) {
    e.preventDefault();
    return this.validatePassword();
  }

  validatePassword() {
    //slaptazodis ilgesnis nei 8
    let isValidPassword = this.password.value.length >= 8 ? true : false;
    if (isValidPassword) {
      return this.logSuccess();
    } else {
      return this.logInFailed();
    }
  }

  logSuccess() {
    console.log('Logged in success');
  }

  logInFailed() {
    console.log('Logged in failed');
  }
}

let userLogin = new FormPasswordValidator(
  formElement,
  nameElement,
  passElement
);

formElement.addEventListener('submit', (e) => userLogin.submitForm(e));

//  -------------- Array methods -------------------

// creating Movies class to create objects
class Movie {
  constructor(name, director, year, actors) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.actors = actors;
  }
}

// --creating ibjects based on Movie class
let titanic = new Movie('Titanic', 'James Cameron', 1997, [
  'Leaonardo DiCaprio',
  'Kate Winslet',
]);

let bladeRunner = new Movie('Blade runner', 'Ridley Scott', 1982, [
  'Harrison Ford',
  'Rutger Hauer',
  'Sean Young',
]);

let bladeRunner2049 = new Movie('Blade runner 2049', 'Ridley Scott', 2017, [
  'Harrison Ford',
  'Ryan Gosling',
  'Ana de Armas ',
]);

let batman = new Movie('Batman Begins', 'Christopher Nolan', 2005, [
  'Christian Bale',
  'Michael Caine',
]);

// --- adding single movie to array
let moviesArray = [titanic, bladeRunner, bladeRunner2049, batman];
console.log('movies array: ', moviesArray);
// --- map
let moviesWithPropertyName = moviesArray.map((movie, index, array) => {
  // for in - per objekta, for in - per masyva
  //   for (let item in movie) {
  // if (item === 'director') {
  // ...movie - ispredina ir pakopina objekto savybes ir values
  //   return { ...movie, director: `Director: ${movie[item]}` };
  // }
  return { ...movie, director: `Director: ${movie.director}` };
});

console.log(moviesWithPropertyName);

// --- filter
let movieCreatedBefore2000 = moviesArray.filter((movie) => movie.year < 2000);

console.log(movieCreatedBefore2000);

const filterMoviesByActor = (arr, actor) => {
  return arr.filter((item) => item.actors.includes(actor));
};

console.log(filterMoviesByActor(moviesArray, 'Harrison Ford'));

const filterMoviesByActorsAmount = (arr, actorsNum) => {
  return arr.filter((item) => item.actors.length >= actorsNum);
};
console.log(filterMoviesByActorsAmount(moviesArray, 3));

// --- reduce

// {
//  "titanic": "james cameron",

// }

let movieNamesAndDirectos = moviesArray.reduce((total, currentElement) => {
  //   console.log(Object.values(currentElement));
  total[currentElement.name] = currentElement.director;
  return total;
}, {});

console.log('-----', movieNamesAndDirectos);

// console.log(Object.entries(moviesArray[0]));
