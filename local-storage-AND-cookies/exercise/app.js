// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip pvz. substraction). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculateValue = (num1, num2, action) => {
  if (!isNaN(num1) && !isNaN(num2)) {
    return action(num1, num2);
  } else {
    return 'error, you should use only numbers!';
  }
};

console.log(calculateValue(2, 'hey', addition));

// ---------

// const calculateValue = (num1, num2, action) => {
//   return action(num1, num2);
// };
// console.log(calculateValue(2, 2, addition));

//   ----
const calculateValue2 = (num1, num2, action) => {
  return new Promise((resolve, reject) => {
    const calcValue = action(num1, num2);

    setTimeout(() => {
      if (!isNaN(calcValue)) {
        resolve();
        console.log(`Your number ir: ${calcValue}!`);
      } else {
        reject();
      }
    }, 1000);
  });
};

calculateValue2(2, 2, addition)
  .then((msg) => msg)
  .catch(() => console.log('error, use only numbers!!!'));
