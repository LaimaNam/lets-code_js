// 1 ------Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi, laima, everything is ok - i am preventintg Default!");

  const bonus = 50;
  const years = Number(document.querySelector("#yearsWorking").value);

  console.log(typeof years);
  const h2 = document.querySelector("h2");

  if (years >= 20) {
    h2.textContent = `Your bonus is ${bonus + 150}`;
  } else if (years >= 10) {
    h2.textContent = `Your bonus is ${bonus + bonus}`;
  } else {
    h2.textContent = "Sorry, no bonus ";
  }

  form.reset();
});
