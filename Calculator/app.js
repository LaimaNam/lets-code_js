//Variables
//DOM elements
const screen = document.querySelector('#screen');
const numbers = document.querySelectorAll('.num');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const allOperators = document.querySelectorAll('.operator');
const percent = document.querySelector('.percent');
//Logic
let num1;
let num2;
let operator;
//Functions-----------------------------
// appends digit to the end of number
const appendDigit = (number, digit) => {
  if (number === undefined) {
    number = 0;
  }
  return number * 10 + digit;
};

const updateScreen = () => {
  let screenText = '' + num1;
  // if operator not specified do not show on the screen
  if (operator) {
    screenText += ' ' + operator;
  }
  // if num2 not specified do not show on the screen
  if (num2) {
    screenText += ' ' + num2;
  }
  screen.innerText = screenText;
};

const calculateValue = () => {
  let answer;
  if (num1 && num2 && operator) {
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }

    //reseting logic state
    num1 = answer;
    operator = undefined;
    num2 = undefined;
  }
  return answer;
};
// Events---------------------------------
numbers.forEach((btn) =>
  btn.addEventListener('click', () => {
    //get digit value from btn
    const digit = +btn.innerText;
    //check operator state: if not selected - append to num1, else - to num2
    if (operator === undefined) {
      num1 = appendDigit(num1, digit);
    } else {
      num2 = appendDigit(num2, digit);
    }
    console.log('num1:', num1);
    console.log('num2:', num2);
    updateScreen();
  })
);

allOperators.forEach((btn) =>
  btn.addEventListener('click', () => {
    // if num1 not specified calculator operators do nothing
    if (num1 === undefined) return;
    // if both num1 and num2 specified - calculate value
    calculateValue();
    // get operator value from btn
    operator = btn.innerText;

    console.log(operator);
    updateScreen();
  })
);

percent.addEventListener('click', () => {
  if (num2) {
    num2 = num1 * 0.01 * num2;
  }
  updateScreen();
});

equal.addEventListener('click', () => {
  const answer = calculateValue();
  if (answer) {
    screen.innerText = answer;
  }
});

clear.addEventListener('click', () => {
  screen.innerText = '';
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
});
