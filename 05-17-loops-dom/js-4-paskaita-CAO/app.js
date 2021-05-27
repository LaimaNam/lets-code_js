// for, do, while

function myNameCounter() {
  let i = 0;
  while (i < 3) {
    console.log(`${i} - Laima`);
    i++;
  }
}

// execution code bent viena karta pasileidzia su do while (tuo skiriasi nuo fr ir do)

function doWhileFunctionExercise() {
  let a = 1;
  do {
    console.log(a);
    a++;
  } while (a <= 5);
}

/* 

Sukurkite kintamąjį (let combo = ""). 

- Kiekvieną kartą paleidus loopą į combo prisirašo jūsų vardas (t.y. combo += "Petras" viduje while loop). 

- Sukurkite programą, kur bus kintamasis (const times = 5), kuris nurodys kiek kartų combo atsiras jūsų vardas. 

- Jei skaičius 0 ar neigiamas - vis tiek bent vieną kartą atsiras jūsų vardas.

Pvz:
times = 0; combo = "Petras"
times = 1; combo = "Petras"
times = 2; combo = "PetrasPetras"
times = 3; combo = "PetrasPetrasPetras" 
*/

function pushNameToString() {
  let combo = "";
  const times = 7;
  counter = 0;

  while (counter < times) {
    combo = combo + "Laima";
    counter++;
  }
  console.log(combo);
}

console.log("----------------------------------");

function mathObject() {
  let cos = Math.cos(0);
  console.log(cos);

  // math.random() - sugeneruoja skaiciu nuo 0 iki 1
  // math.floor() - suapvalina i mazesne puse
  // kad gautum random skaiciu be kableliu reikia padauginti is 10 random skaiciu, suapvalinti ji, ir jei norime rand skaiciaus butent iki 10, butina prideti 1 ar panasiai.

  //  ---- Sukurk random skaičių tarp 1 ir 5 (įskaitant abu). Pasitikrink su console.log().
  const random1 = Math.floor(Math.random() * 5) + 1;
  console.log(random1);
  // -----Sukurk random skaičių tarp 5 ir 12 (įskaitant abu). Pasitikrink su console.log().
  const random2 = Math.floor(Math.random() * 7) + 5;
  console.log(random2);
}

// Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).
console.log("----------------------------------");

function winOrLoose() {
  let randNum = Math.floor(Math.random() * 5) + 1;
  if (randNum === 3) {
    alert("You are a winner!");
  } else {
    console.log(randNum);
  }
}
// winOrLoose();

/* Patobulink programą, kad atsirastų daugiau prizų (naudok switch statement vietoj if-else).

1/15 tikimybė laimėti automobilį
3/15 tikimybė laimėti televizorių
5/15 tikimybė laimėti 2 eurus

kitais atvejais - nieko nelaimi
*/

function winOrLooseButBetter() {
  let randNum = Math.random() * 15;
  console.log(randNum);
  switch (true) {
    case randNum < 1:
      console.log(`${randNum} - your lucky number! You won a car!!Congratz!`);
      break;
    case randNum < 3:
      console.log(`${randNum} - your lucky number! you won a TV!!`);
      break;
    case randNum < 5:
      console.log(`${randNum} - your lucky number! you won 2eur! Oh well`);
      break;
    default:
      console.log("meh, sorry, you haven't won anything");
      break;
  }
}
