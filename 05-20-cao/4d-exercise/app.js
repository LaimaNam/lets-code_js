// Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi, laima, everything is ok - i am preventintg Default!");
  let h2 = document.querySelector("h2");
  let agreedOnLetters = e.target.elements.agreeEmails.checked;
  let email = document.querySelector("#userEmail").value;
  if (agreedOnLetters) {
    h2.textContent = `E-mail ${email} successfully registered`;
  } else {
    h2.textContent = "Registration unsuccessful!";
  }
  form.reset();
});
