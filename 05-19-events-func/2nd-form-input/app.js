const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // sustbadys persikrovima
  event.preventDefault();

  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target[0]);
  //   console.log(event.target[0].value);

  let firstName = document.querySelector(".fName");
  let inputValue = firstName.value;
  //   ------
  //   let h1 = document.createElement("h1");
  //   h1.textContent = inputValue;
  //   document.body.appendChild(h1);
  //   -------
  let h2 = document.querySelector(".inputValueh2");
  h2.textContent = inputValue;
});

let firstName = document.querySelector(".fName");
console.log(firstName);
firstName.addEventListener("blur", () => {
  console.log("hey");
  firstName.style.backgroundColor = "hotpink";

  firstName.style.border = "none";
});
