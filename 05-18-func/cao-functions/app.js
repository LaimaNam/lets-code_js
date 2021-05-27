// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

function hello(string) {
  alert(string);
}

// Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
function randomNum() {
  return Math.floor(Math.random() * 5 + 1);
}
console.log(randomNum());

// 3 - Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

function stringSum(fName, sName) {
  return fName.length + sName.length;
}
console.log(stringSum("Laima", "Namajunaite"));

// 4 - Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.

function alphaArrayIndex(index) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (index <= 25) {
    return alphabet[index];
  } else {
    return "alphabet contains 25 letters, please choose index number from 0 to 25";
  }
}

console.log(alphaArrayIndex(0));

// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function answer(num1, num2, operator) {
  if (operator === "sum") {
    return num1 + num2;
  } else if (operator === "sub") {
    return num1 - num2;
  } else if (operator === "div") {
    return num1 / num2;
  } else if (operator === "multi") {
    return num1 * num2;
  } else {
    return "In the third parameter please use one of these operators: sum, sub, div or multi";
  }
}

console.log(answer(31, 1, "sum"));

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randNum() {
  return Math.floor(Math.random() * 10 + 1);
  //   return 2;
}

function randNumSquare(someNum) {
  return someNum ** 2;
}

console.log(randNumSquare(randNum()));
