// write loop that iterates from 0 to 20 and does console.log() if iteration value is even number

// for (i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

console.log("-------------------------------");

for (counter = 2; counter < 20; counter += 2) {
  console.log(counter);
}

console.log("-------------------------------");

for (let count = 1; count <= 20; count++) {
  count % 2 === 0 ? console.log(`${count} is even`) : null;
}
console.log("-------------------------------");

for (counter = 2; counter <= 20; counter++) {
  console.log(counter++);
}

console.log("---------------looping through array----------------");

// let arr = ["Labas", "vakaras", "ponios", "ir", "ponai"];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

console.log("-------------while loop------------------");

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

console.log("-------------------------------");
// isspaustindi tik lyginius ciklus

let b = 1;

while (b <= 20) {
  if (b % 2 === 0) {
    console.log(b);
  }
  b++;
}

console.log("-------------do while------------------");

let c = 1;
do {
  if (c % 2 !== 0) {
    console.log(c);
  }
  c++;
} while (c < 10);

console.log("----------------------------------");
// go through array with for loop and flip booleans to opposite value

let arrBool = [true, false, true, true, false, false, true, false];
console.log(arrBool);
for (i = 0; i < arrBool.length; i++) {
  if (arrBool[i] === true) {
    arrBool[i] = false;
  } else {
    arrBool[i] = true;
  }
}

console.log(arrBool);

// for (i = 0; i < arrBool.length; i++) {
//   arrBool[i] = !arrBool[i];
// }

// console.log(arrBool);

document.getElementById("header-1").textContent = "Howday everyone!";
document.getElementById("hero-p").textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

document.getElementById("hero-p").style.color = "rgb(100, 15, 205)";

const hero = document.querySelector(".hero");

hero.style.height = "200px";
hero.style.maxWidth = "80%";
hero.style.margin = "auto";
hero.style.backgroundColor = "rgb(219, 185, 250)";
hero.style.border = "1px solid black";
hero.style.textAlign = "center";
