// sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi, laima, everything is ok - i am preventintg Default!");

  let num = Number(document.querySelector("#num").value);
  let name = document.querySelector("#fName").value;
  let ul = document.querySelector("ul");

  for (i = 1; i <= num; i++) {
    let li = document.createElement("li");
    li.textContent = `${name} ${i}`;
    ul.appendChild(li);
  }
  form.reset();
});
