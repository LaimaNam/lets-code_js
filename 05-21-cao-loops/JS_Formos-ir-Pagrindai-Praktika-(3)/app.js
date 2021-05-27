// 1 --------------- Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
// L
// L
// L
// L L L L

// 3. paskutinėje eilėje spausdinti tiek L raidžių

function goodOne(num) {
  // yra num eiluciu
  // jei eilute yra nuo 1 iki num-1, spaudinti L
  for (i = 1; i < num; i++) {
    console.log("L" + i);
  }
  // jei eilute yra num, sukonstruosti stringa is num L raidziu
  lraides = "";
  // sita eilute pakartoti num kartu
  for (l = 1; l <= num; l++) {
    lraides = lraides + "L ";
  }

  console.log(lraides);
}

console.log(goodOne(4));

// 2 --------Sukurkite tokią pačią funkciją, bet kad spausdintų I raidę. Vartotojas gali įrašyti tik nelyginį teigiamą skaičių, kitaip išmeta klaidą.
// pvz.:
// I I I I I
// I
// I
// I
// I I I I I

const form2 = document.querySelector("#form-2");

form2.addEventListener("submit", printLetter);

function printLetter(e) {
  e.preventDefault();
  let chosenNum = e.target.elements.chosenNum.value;
  let div = document.querySelector("#letter");

  if (chosenNum % 2 !== 0 && chosenNum > 0) {
    const stringOfI = createString("I ", chosenNum);
    let firstRow = document.createElement("span");
    firstRow.style.display = "block";
    firstRow.textContent = stringOfI;
    div.appendChild(firstRow);

    for (a = 2; a < chosenNum; a++) {
      let middleRows = document.createElement("span");
      middleRows.style.display = "block";
      middleRows.textContent = "I";
      div.appendChild(middleRows);
    }

    createString("I ", chosenNum);
    let lastRow = document.createElement("span");
    lastRow.style.display = "block";
    lastRow.textContent = stringOfI;
    div.appendChild(lastRow);
  } else {
    div.textContent = "error! You must choose odd and positive number!";
  }
  form2.reset();
}

//  function for creating a string
function createString(str, num) {
  letter = "";
  for (i = 1; i <= num; i++) {
    letter = letter + str;
  }
  return letter;
}

// 3-------------Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

let blurInput = document.querySelector("#blurEventInput");

blurInput.addEventListener("blur", () => {
  let valueInput = blurInput.value;
  if (valueInput === "") {
    return;
  }
  let div = document.querySelector("#nameBox");
  //nuskaitau reiksme is divo (pirma karta reiksme tuscia)
  let oldText = div.textContent;
  // pakeiciu dive esancio texto tašką => kablelį
  let newText = oldText.replace(".", ", ");
  // prie dive esancio teksto pridedu nauja value su tašku.
  newText = newText + valueInput + ".";
  // pakeičiu divo teksta
  div.textContent = newText;
});

// 4 ----------------- Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.

let form4 = document.querySelector("#form-4-ex");

form4.addEventListener("submit", checkNumber);

function checkNumber(e) {
  e.preventDefault();
  console.log("its ok im preventing default");

  let firstNum = document.querySelector("#first-num").value;
  let firstNumCheck = Math.abs(100 - firstNum);

  let secondNum = document.querySelector("#second-num").value;
  let secondNumCheck = Math.abs(100 - secondNum);

  if (firstNum !== secondNum) {
    if (firstNumCheck < secondNumCheck) {
      alert(firstNum);
    } else {
      alert(secondNum);
    }
  } else {
    alert("both numbers are the same value!");
  }
}

// 5 ------Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).
// 6 ----Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

const form5 = document.querySelector("#form-5-ex");

let luckyNum = Math.floor(Math.random() * 5 + 1);
console.log(luckyNum);
let attempts = 0;
form5.addEventListener("submit", checkIfLucky);

function checkIfLucky(e) {
  e.preventDefault();
  let userGuess = Number(document.querySelector("#userGuess").value);

  attempts = attempts + 1;
  if (userGuess === luckyNum) {
    alert(`you guessed right! congrats! you guessed from ${attempts} attempt`);
    attempts = 0;
    console.log((luckyNum = Math.floor(Math.random() * 5 + 1)));
  } else {
    alert("sorry, it's not the lucky number!");
  }
}
