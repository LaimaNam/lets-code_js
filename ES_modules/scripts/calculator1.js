console.log('Calculator 1');
import addNumbers from './modules/add.js';
import randNums from './modules/randNumbers.js';

console.log('Suma yra:', addNumbers(2, 2, 2, 2));
console.log(randNums);
console.log(addNumbers(...randNums));

console.log(`${randNums.join('+')}=${addNumbers(...randNums)}`);
