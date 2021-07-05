//Variables
//DOM elements
const screen = document.querySelector('#screen');
const calcItems = document.querySelectorAll('.item');
const equalOp = document.querySelector('.equal');
const clearOperator = document.querySelector('.clear');
//Logic
let num = [];
let answer;

//collecting numbers & operators and showing them on screen
const storeBtnValue = (digit) => {
  //storing string in the array
  num.push(digit);
  //build string to show on screen
  const showText = buildStringToShow(num);
  //updating value on screen
  setScreen(showText);
};

//build the string to show on screen from the array of clicked btns
const buildStringToShow = (arr) => {
  let screenText = '';
  for (i = 0; i < arr.length; i++) {
    screenText = screenText + arr[i];
  }
  return screenText;
};

//build the string to evaluate
const buildStringToEval = (arr) => {
  let screenText = '';
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '%') {
      screenText = screenText + '*0.01';
    } else {
      screenText = screenText + arr[i];
    }
  }
  return screenText;
};

//setting calculator screen
const setScreen = (text) => {
  screen.innerText = text;
};

// ----- Equal operator
const equalOperator = () => {
  setScreen('');
  const a = buildStringToEval(num);
  answer = eval(a);
  setScreen(answer);

  while (num.length > 0) {
    num.pop();
  }

  num.push(answer.toString());
};

// -------- Clear operator
const clearTheScreen = () => {
  num = [];
  setScreen('');
  //   console.log('clean');
};

// ----------- Events -----------------
calcItems.forEach((btn) =>
  btn.addEventListener('click', () => {
    storeBtnValue(btn.innerText);
  })
);

equalOp.addEventListener('click', equalOperator);
clearOperator.addEventListener('click', clearTheScreen);
