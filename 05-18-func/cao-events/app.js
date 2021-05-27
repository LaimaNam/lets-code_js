// Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")
// Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

function sayHello() {
  alert("Hi!");
}
// document.querySelector(".btn").addEventListener("click", sayHello);

// Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.
document.querySelector(".btn").addEventListener("click", addTextAboutMe);

function addTextAboutMe() {
  document.querySelector("hero-text").textContent =
    "Norime, kad mūsų puslapiai būtų labiau dinaminiai... na, mokame jau ten pasikoreguoti tekstą, pajudinti elementus - bet reikia atsiklausti vartotojo. Būtent įvairiausi įvykiai, kurie pas vartotoją vyksta - JS eventai, kurių galime klausytis ir pagal tai paleisti funkcijas.";
}

// 4 -----Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).

// elementus laikantis divas
// let div = document.createElement("div");
// div.style.border = "1px solid black";
// div.style.margin = "20px";
// div.style.padding = "10px";
// document.body.appendChild(div);

// tekstas su skaiciumi
// let h1 = document.createElement("h1");
// let h1Text = document.createTextNode("1");
// h1.appendChild(h1Text);
// div.appendChild(h1);

// mygtukas
// let button = document.createElement("button");
// button.setAttribute("id", "numBtn");
// let buttonText = document.createTextNode("Click me for random num");
// button.appendChild(buttonText);
// div.appendChild(button);

document.querySelector("#numBtn").addEventListener("click", numPlus);

function numPlus() {
  let h1 = document.querySelector("h1");
  let num = Number(h1.textContent);
  return (h1.textContent = num + 1);
}

//  5 ---Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

document.querySelector("#paragraphNotcopy").addEventListener("copy", doNotCopy);

function doNotCopy() {
  alert("Please do not copy my content!");
}

// 6 ----- Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.

document
  .querySelector("#numGeneratorBtn")
  .addEventListener("click", numGenerator);

function numGenerator() {
  let randNum = Math.floor(Math.random() * 101 + 1);
  return (document.querySelector("#numgeneratorText").textContent =
    "this is your random number " + randNum);
}

// 7 ---- Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".
let ageCheckerBox = document.querySelector(".ageCheckerBox");
ageCheckerBox.style.margin = "50px";

let ageCheckerText = document.querySelector("#ageCheckerText");

let button1 = document
  .querySelector("#moreThan18")
  .addEventListener("click", () => {
    ageCheckerText.textContent = "Alus";
  });
let button2 = document
  .querySelector("#lessThan18")
  .addEventListener("click", () => {
    alert("nepilnametis - nieko neturim");
  });

// 8 ----- Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

function loadnumber() {
  let randNum = Math.floor(Math.random() * 3 + 1);
  console.log(randNum);
  return randNum;
}

let loadnum = loadnumber();

function checkIfRigth() {
  let btnTextToNum = Number(this.textContent);

  if (btnTextToNum === loadnum) {
    alert("Yay");
    location.reload();
  } else {
    alert("Nay");
    location.reload();
  }
}

document
  .querySelector("#guesNumberBox :nth-child(1)")
  .addEventListener("click", checkIfRigth);
document
  .querySelector("#guesNumberBox :nth-child(2)")
  .addEventListener("click", checkIfRigth);
document
  .querySelector("#guesNumberBox :nth-child(3)")
  .addEventListener("click", checkIfRigth);

// 9 -------Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko". Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".

function changeText() {
  let h2 = document.querySelector("#doNotClickText");
  return (h2.textContent = "you obviously not listening to me...");
}

document
  .querySelector("#changeTextOnClick :nth-child(2)")
  .addEventListener("click", changeText);
document
  .querySelector("#changeTextOnClick :nth-child(3)")
  .addEventListener("click", changeText);
document
  .querySelector("#changeTextOnClick :nth-child(4)")
  .addEventListener("click", changeText);

// 10 ------- Sukurkite h1, jam duokite 150vh aukštį (ir 150vh line-height). Pasakykite vartotojui, kad puslapio nejudintų. Tačiau, jei jis su pelytę pajudės - išmeskite "kiek galime neklausyti"..

let h1Change = document.querySelector("#changeTextOnScroll");
h1Change.style.height = "150vh";
h1Change.style.lineHeight = "150vh";

h1Change.addEventListener("mousemove", () => {
  h1Change.textContent = "nu kodėl neklausai???";
});

h1Change.addEventListener("mouseleave", () => {
  h1Change.textContent = "do not move!!!";
});
