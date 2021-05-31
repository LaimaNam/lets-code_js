// - Sukurk dvi funkcijas: alertName, consoleName.
// - Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins.

const alertName = (name) => {
  alert(name);
};

const consoleName = (name) => {
  console.log(name);
};

// - O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

const coreFunction = (name, callbackFunc) => {
  return callbackFunc(name.replace(name[0], name[0].toUpperCase()));
};

console.log(coreFunction('laim', consoleName));

// ------------------ A r r a y    m e t h o d s-------------

// 1 --- Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)// 2 -- Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

const cars = ['BMW', 'VW', 'Audi'];
cars.forEach((element, index, arr) => console.log(element + ' ' + index));

// 3 -- Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const myFriendsNames = ['peTras', 'Jonas', 'aNTanaS', 'kAzKas'];

let correctCapitalization = myFriendsNames.map(
  (element) => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
);

console.log(correctCapitalization);

// 4 ---Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const friendsAge = [31, 33, 35, 40, 45, 40, 25, 18, 15, 21];

console.log(friendsAge.filter((element) => element >= 18));

//  5 --- Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = [
  'Vilnius',
  'Kaunas',
  'Klaipeda',
  'Moletai',
  'Rokiskis',
  'Utena',
  'Siauliai',
];

console.log(cities.find((element) => element[0] === 'K'));

// 6 --- Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.log(cities.some((element) => element[0] === element[0].toLowerCase()));

// 7 --- Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

console.log(cities.every((element) => element[0] === element[0].toUpperCase()));

// 8 ---- Find amount of potatoes.
// create a function to return the amount of potatoes there are in a string.
const string =
  'applepotatoepotatoem,PotatoPotatoappleSometh,ingWhateverIneedHolidayspotato';

let countPotatoes = string.toLowerCase().match(/potato/g);
console.log(countPotatoes);
console.log(countPotatoes.length);

// ---------------------------------------------------------------------
