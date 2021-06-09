// -- 1. Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      return `${this.name} is old enough to drink`;
    } else {
      return `${this.name} is not aloud to drink alcohol`;
    }
  }
}

const p1 = new Person('Petras', 16);
console.log(p1.compareAge());

//  -- 2 . Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.

const filterOnlyNumbers = (arr) => {
  return arr.filter((element) => !isNaN(element));
};

let array = [1, 5, 'a', 'g', 'z', 6];
console.log(filterOnlyNumbers(array));
// [1, 5, "a", "g", "z", 6]); // [1, 5, 6]

// -- 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).

// 3. 1 checking if symbol or number
const doubleLetter = (str) => {
  return str
    .split('')
    .map((item) => (isLetter(item) ? item + item : item))
    .join('');
};

const isLetter = (str) => {
  let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  return isNaN(str) && !str.match(format);
};

console.log(isLetter('1'));

// 3. 2 checking if letter
const doubleLetter2 = (str) => {
  //   let isLetter = /[a-zA-Z]/g;

  //   return str
  //     .split("")
  //     .map((item) => (item.match(isLetter) ? item + item : item))
  //     .join("");

  return str
    .split('')
    .map((item) => (isLetter2(item) ? item + item : item))
    .join('');
};

const isLetter2 = (str) => {
  return (str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z');
};

// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"
console.log(doubleLetter('Petras 123 + Slekys'));
console.log(doubleLetter2('Petras 123 + Slekys'));

// -- 4 Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.
console.log('-------- 4 ---------');

// check if number
const isNumber = (str) => {
  return str >= '0' && str <= '9';
};
// check if letter
const isLetter3 = (str) => {
  return (str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z');
};
// logic
const verifyPostcode = (str) => {
  if (str.length !== 5) {
    return false;
  }

  // tikrina postcode
  return !str.split('').some((element, index) => {
    //   tikrina ar elementas yra netinkamas

    // tikrina ar elementas yra tarpas
    if (element == ' ') {
      return true;
    }
    // tikrina ar pirmi trys elementai nera numbers
    if (index < 3 && !isNumber(element)) {
      return true;
    }
    // tikrina ar paskutiniai du elementai nera numeriai ir nera raides
    if (index >= 3 && !isNumber(element) && !isLetter3(element)) {
      return true;
    }
    //   jeigu visas salygas praskipino(returnina false) - poscode geras
    return false;
  });
};

console.log('should be true: ', verifyPostcode('123ab'));
console.log('should be true: ', verifyPostcode('569lw'));
console.log('should be false: ', verifyPostcode('123hvgchga'));
console.log('should be true: ', verifyPostcode('12311'));
console.log('should be false: ', verifyPostcode('1 3ab'));

// ----kosto variantas
let postCodeCheck = (code) => {
  if (
    code.length === 5 &&
    code.split('').every((e) => e !== ' ') && //does not have spaces
    code.split('').filter(Number).length >= 3 //doeas not have more than 2 non numeric
  ) {
    return true;
  } else {
    return false;
  }
};
console.log('Kosto variantas: ', postCodeCheck('12a5b'));

//  5 --- Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
console.log('--------------5------------');
const jazzify = (arr) => {
  return arr.map((e) => (e.slice(-1) !== '7' ? e + 7 : e));
};

console.log(jazzify(['G', 'F', 'C'])); //➞ ["G7", "F7", "C7"]

console.log(jazzify(['Dm', 'G', 'E', 'A'])); // ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])); // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([]));
