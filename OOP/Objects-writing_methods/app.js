/*
- object literal (let person = { ...})
- naudojant new 
- object.create()
- object.assign()

su babbel(compiler) konvertuoti reikia koda, jeigu norime paleisti projekta su ES6, nes browseriai daznai buna nepasirenge naujesne versija kodo priimti
*/

// ***** Object Literals *****
// ----- example 1 -----
const person = {
  name: 'Laima',
  surname: 'Nam',
  age: 100,
  addres: {
    city: 'Vilnius',
    country: 'Lithuania',
  },
  friends: [''],
};

// ----- example 2 -----

let audi = {
  make: 'audi',
  model: 'A6',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started`;
  },
};

let opel = {
  make: 'audi',
  model: 'Astra',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started`;
  },
};

let bmw = {
  make: 'bmw',
  model: 'x6',
  year: 2021,
  start: function () {
    return `${this.make} ${this.model} started`;
  },
};
console.log(bmw);

console.log(bmw.start());
// ***** ---------- ES5 Constructors & This --------------- *****
console.log('---------- Constructors & This ---------------');
// car objekto kurimo konstruktorius
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let tesla = new Car('tesla', 'Model S', 2021);
let lexus = new Car('lexus', 'lexus bla', 2021);
console.log(tesla);
console.log(lexus);

// Product objekto kurimo konstruktorius
function Product(name, price, stock) {
  this.name = name;
  this.rpice = price;
  this.stock = stock;
}
const xbox = new Product('xbox', 440, 5);
// console.log(xbox);

const playStation = new Product('playstation', 500, 8);
// console.log(playStation);

// ***** Prototypes & Inheritence *****
console.log('----------Prototypes & Inheritence ------------');
// metodo perdavimas objekto konstruktoriaus prototipui
Car.prototype.start = function () {
  return `${this.make} ${this.model} started`;
};
Car.prototype.stop = function () {
  return `${this.make} ${this.model} stopped`;
};
console.log(tesla.start());
console.log(tesla.stop());

// ---------------- task ----------------
// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

function Book(bookName, author, year) {
  this.bookName = bookName;
  this.author = author;
  this.year = year;
}

Book.prototype.bookInfo = function () {
  return `Book name is ${this.bookName} and author ${this.author} `;
};

Book.prototype.bookAge = function () {
  return `Book was published ${new Date().getFullYear() - this.year} years ago`;
};
const book1 = new Book('Kafka on the shore', 'Haruki Murakami', 2002);
const book2 = new Book('1Q84', 'Haruki Murakami', 2009);

console.log(book1.bookInfo());
console.log(book2.bookInfo());

console.log(book2.bookAge());

// metodo perdavimas masyvo objekto konstruktoriui
let nums = [1, 2, 3];
let stringArray = new Array('labas', 'rytas');
console.log(nums);
console.log(stringArray);

// Array.prototype.addSymbol = function (num) {

// };

// ***** ES6 Classes & Subclasses *****
console.log('---------- ES6 Classes & Subclasse ------------');
// ES6---- Classes----------------------------------------------------->
class City {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  getIntroduction() {
    return `${this.name} is in the ${this.country}`;
  }
}
let london = new City('London', 'UK');
console.log(london);
let vilnius = new City('Vilnius', 'Lithuania');
console.log(vilnius.getIntroduction());

// ES6 --- subclasses
class Book2 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const harryPotter = new Book2('Haarry Potter', 'J.K.Rowling', 2000);
console.log(harryPotter);

// paveldejimas
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const newYorkTimes = new Magazine('New York Times', 'New York times', 1959, 06);
