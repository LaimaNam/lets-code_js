// 1 ---- uzduotis
//H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

const myName = document.querySelector('h1');
myName.addEventListener('click', () => {
  myName.style.fontSize = '64px';
  myName.style.textAlign = 'center';
  myName.style.color = 'blue';
});

// 2 ------ uzduotis
//  Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const jumpingBtn = document.querySelector("#jumping-btn");
// let jumpingButton = true;

// function jumpTopLeftCorner() {
//   jumpingBtn.style.position = "absolute";
//   jumpingBtn.style.top = "0";
//   jumpingBtn.style.left = "0";
//   jumpingBtn.style.bottom = "auto";
//   jumpingBtn.style.right = "auto";
//   jumpingButton = false;
// }

// function jumpBottomRightCorner() {
//   jumpingBtn.style.position = "absolute";
//   jumpingBtn.style.bottom = "0";
//   jumpingBtn.style.right = "0";
//   jumpingBtn.style.top = "auto";
//   jumpingBtn.style.left = "auto";

//   jumpingButton = true;
// }

// let click = 0;
// jumpingBtn.addEventListener("click", () => {
//   if (jumpingButton) {
//     jumpTopLeftCorner();
//   } else {
//     jumpBottomRightCorner();
//   }
// });

// 3 ----- uzduotis
// Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.
const jumpingBtn = document.querySelector('#jumping-btn');
jumpingBtn.style.padding = '10px 30px';
jumpingBtn.style.border = 'none';
jumpingBtn.style.backgroundColor = 'skyblue';

let click = 0;

function jumpTopLeftCorner() {
  jumpingBtn.style.position = 'absolute';
  jumpingBtn.style.top = '0';
  jumpingBtn.style.left = '0';
  jumpingBtn.style.bottom = 'auto';
  jumpingBtn.style.right = 'auto';
  click = 1;
}
function jumpTopRightCorner() {
  jumpingBtn.style.position = 'absolute';
  jumpingBtn.style.top = '0';
  jumpingBtn.style.left = 'auto';
  jumpingBtn.style.bottom = 'auto';
  jumpingBtn.style.right = '0';
  click = 2;
}

function jumpBottomRightCorner() {
  jumpingBtn.style.position = 'absolute';
  jumpingBtn.style.bottom = '0';
  jumpingBtn.style.right = '0';
  jumpingBtn.style.top = 'auto';
  jumpingBtn.style.left = 'auto';

  click = 3;
}

function jumpBottomLeftCorner() {
  jumpingBtn.style.position = 'absolute';
  jumpingBtn.style.bottom = '0';
  jumpingBtn.style.right = 'auto';
  jumpingBtn.style.top = 'auto';
  jumpingBtn.style.left = '0';

  click = 0;
}

jumpingBtn.addEventListener('click', () => {
  if (click === 0) {
    jumpTopLeftCorner();
  } else if (click === 1) {
    jumpTopRightCorner();
  } else if (click === 2) {
    jumpBottomRightCorner();
  } else if (click === 3) {
    jumpBottomLeftCorner();
  }
});

// 4 ------ uzduotis
// Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.
let str = document.querySelector('#userName');

str.addEventListener('input', () => {
  let valueOfInput = str.value;
  console.log(valueOfInput.length);
  if (valueOfInput.length <= 2) {
    document.body.style.backgroundColor = 'red';
  } else {
    document.body.style.backgroundColor = 'green';
  }
});

// 5 ---- uzduotis
// Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

const colorBtn = document.querySelector('#colorZeBtn');
colorBtn.style.padding = '10px 30px';
colorBtn.style.border = 'none';
colorBtn.style.cursor = 'pointer';

colorBtn.addEventListener('click', () => {
  let colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];

  //   colorBtn.style.backgroundColor =
  //     colors[Math.floor(Math.random() * colors.length)];

  colorBtn.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});

// Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.
