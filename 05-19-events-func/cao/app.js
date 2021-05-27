// 1 --Susikuriame formą HTML. Neužmirštame mygtukui duoti type="submit".

// 2 ----Su JavaScript pasirenkame formą ir jai pritaikome addEventListener su submit event'u.
let form = document.querySelector("form");
form.addEventListener("submit", myFunction);

// Pasirašome funkciją, kuri pasileidžia submit eventui įvykus. Funkcija pasiima event kaip parametrą ir sustabdo default veiksmą (šiuo metu - formos duomenų siuntimą ir dėl to puslapio persikrovimą).
function myFunction(event) {
  event.preventDefault();
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target.elements.firstName);
  let firstName = document.querySelector("input[name=firstName]").value;
  let age = document.querySelector("input[name=age]").value;
  console.log(firstName);
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");

  h1.textContent = `Your age is: ${age}`;

  if (age >= 18) {
    h2.textContent = `You can drive, ${firstName}.`;
  } else if (age === "") {
    h2.textContent = `You didn't write yuor age, ${firstName}.`;
  } else {
    h2.textContent = `Learn to drive,  ${firstName}.`;
  }
  form.reset();
}

// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

let cinemaForm = document.querySelector("#cinemaForm");
cinemaForm.addEventListener("submit", ticketPrice);

function ticketPrice(e) {
  e.preventDefault();
  let age = document.querySelector("#age").value;
  let h3 = document.querySelector("#ticketPrice");
  let ticketPrice = 6;
  switch (true) {
    case age <= 16:
      h3.textContent = ticketPrice * 0.5;
      break;
    case age >= 60:
      h3.textContent = ticketPrice * 0.33;
      break;
  }

  cinemaForm.reset();
}

// Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

let armyCheckForm = document.querySelector("#armyCheck");
armyCheckForm.addEventListener("submit", armyCheck);

function armyCheck(event) {
  event.preventDefault();
  let age = document.querySelector("#legalAge").value;
  let showResult = document.querySelector("#result");
  let radioButtons = document.getElementsByName("criminalRecord");

  if (radioButtons[0].checked) {
    showResult.textContent =
      "sorry - no, people with criminal record can't go to the army.";
  } else if (radioButtons[1].checked && age > 18 && age < 30) {
    showResult.textContent = "You can go to army!";
  } else if (age < 18) {
    showResult.textContent = "You are too young";
  } else {
    showResult.textContent = "You are too old";
  }
}
