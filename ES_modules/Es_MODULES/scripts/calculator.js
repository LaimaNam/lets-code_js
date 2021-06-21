import addTwoNumbers, {
  addThreeNumbers,
  addFourNumbers,
} from './modules/add.js';

import divideTwoNumbers, {
  divideThreeNumbers,
  divideFourNumbers,
} from './modules/divide.js';

import multiplyTwoNumbers, {
  multiplyThreeNumbers,
  multiplyFourNumbers,
} from './modules/multiply.js';

import substractTwoNumbers, {
  substractThreeNumbers,
  substractFourNumbers,
} from './modules/substract.js';

console.log(' --- add.js');
console.log('add two numbers', addTwoNumbers(1, 1));
console.log('add three numbers', addThreeNumbers(1, 1, 1));
console.log('add four numbers', addFourNumbers(1, 1, 1, 1));

console.log(' --- divide.js');
console.log('divide two numbers', divideTwoNumbers(4, 2));
console.log('divide three numbers', divideThreeNumbers(4, 4, 1));
console.log('divide four numbers', divideFourNumbers(4, 4, 1, 2));

console.log(' --- multiply.js');
console.log('multiply two numbers', multiplyTwoNumbers(4, 2));
console.log('multiply three numbers', multiplyThreeNumbers(1, 2, 2));
console.log('multiply four numbers', multiplyFourNumbers(1, 2, 2, 2));

console.log(' --- substract.js');
console.log('substract two numbers', substractTwoNumbers(4, 2));
console.log('substract three numbers', substractThreeNumbers(1, 2, 2));
console.log('substract four numbers', substractFourNumbers(1, 2, 2, 2));
