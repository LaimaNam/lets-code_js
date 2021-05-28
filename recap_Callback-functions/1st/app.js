// Reacap: Callback functions - funkcijos, kurios kaip argumenta priima kita funkcija.

// pvz Nr. 1 (su funkcijos deklaracija)

function callbackFunc1(callback, randNumMaxValue) {
  let num1 = Math.round(Math.random() * randNumMaxValue);
  let num2 = Math.round(Math.random() * randNumMaxValue);
  let num3 = Math.round(Math.random() * randNumMaxValue);
  return callback(num1, num2, num3);
}

function sum(a, b, c) {
  return a + b + c;
}

function subtract(a, b, c) {
  return a - b - c;
}

console.log('Add', callbackFunc1(sum, 10));
console.log('Subttract', callbackFunc1(subtract, 10));

// Pvz Nr. 2 (su arrow funkcija)
const callbackFunc2 = (callback, name, times) => {
  for (i = 1; i <= times; i++) {
    console.log(callback(name));
  }
};

const greetingInLt = (name) => `Labas, ${name}!`;
const greetingInEn = (name) => `Hello, ${name}!`;

console.log(callbackFunc2(greetingInEn, 'Laima', 2));
console.log(callbackFunc2(greetingInLt, 'Laima', 3));
