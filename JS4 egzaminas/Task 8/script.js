/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {}

Calculator.prototype.sum = function (num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtraction = function (num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiplication = function (num1, num2) {
  return num1 * num2;
};

Calculator.prototype.division = function (num1, num2) {
  return num1 / num2;
};

const calc1 = new Calculator();

console.log(calc1.sum(2, 2));
console.log(calc1.subtraction(2, 2));
console.log(calc1.multiplication(2, 2));
console.log(calc1.division(2, 2));
