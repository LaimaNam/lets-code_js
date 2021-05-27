// /* 1. */
// parašyti for ciklą, kuris suksis 30 kartų.
// nuo 20 ciklo konsolėje atspausdinti: dabar sukasi x ciklas. x = ciklo skaičius

for (i = 0; i <= 30; i++) {
  if (i >= 20) {
    console.log(`Dabar sukasi ${i} ciklas`);
  }
  //   for (i = 20; i <= 30; i++) {
  //     console.log(`Dabar sukasi ${i} ciklas`);
  //   }
}

let string = "Labas rytas suraitytas, kaip siandien nuotaikike?";
let string2 = "kaip siandien nuotaikike?";

function countTarpas(string) {
  let result = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result = result + 1;
    }
  }
  return result;
}

console.log(countTarpas(string));

// --------------

function addLetterR(number) {
  let letter = "R";
  let lettersToInsert = "";
  for (i = 0; i < number; i++) {
    lettersToInsert = lettersToInsert + letter;
  }
  return "BUR" + lettersToInsert + "P";
}

console.log(addLetterR(3));

// ---------------------------

// /* 4. */
// turime masyvą su skaičiais
// parašyti dvi funkcijas, jos abi suks ciklą per masyvą paduotą į argumentus.
// Viena visus skaičius apvalins aukštyn(Math.ceil()), o kita žemyn(Math.floor()).
// Funkcija konsoleje atvaizduos kiekvieną masyvo elementą naujoje eilutėje.
// floored(numbers);
// 1.1 => 1
// 5.3 => 5
// 6.68 => 6
// ceiled(numbers);
// 1.1 => 2
// 5.3 => 6
// 6.68 => 7

let numbers = [1.1, 5.3, 6.68, 3, 2.5, 10.1, 6];

function floored(numbers) {
  let newArray = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 !== 0) {
      newArray[i] = `${numbers[i]} floored is: ${Math.floor(numbers[i])}`;
    } else {
      newArray[i] = `${numbers[i]} - integer`;
    }
  }
  console.log(newArray);
  console.log(numbers);
}

console.log(floored(numbers));

function ceiled(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 !== 0) {
      console.log(numbers[i]);
      console.log(Math.ceil(numbers[i]));
    } else {
      console.log(`integer - ${numbers[i]}`);
    }
  }
}

console.log(ceiled(numbers));
