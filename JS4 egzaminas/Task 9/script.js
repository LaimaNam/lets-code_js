/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 50000000 ? true : false;
  }
}

const bladeRunner2049 = new Movie(
  'Blade runner',
  'Denis Villeneuve',
  150000000
);

const bladeRunner = new Movie('Blade runner', 'Ridley Scott', 30000000);

console.log(bladeRunner2049.wasExpensive());
console.log(bladeRunner.wasExpensive());
