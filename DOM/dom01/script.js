// ELEMENTU KURIMAS SU JS ir ATVAIZDAVIMAS DOKUMENT(DOM) -  1 budas

// document.createElement() -sukuriama html tag'a
let h1 = document.createElement('h1');
let p = document.createElement('p');
let button = document.createElement('button');

// document.createTextNode() - sukuriamas tekstinis turinys/mazgas
let h1Text = document.createTextNode('Hellooooooooo');
let pText = document.createTextNode('Lorem ipsum lorem ipsum lorem ipsum');
let btnText = document.createTextNode('Click me!');

// element.setAttribute() - prideda elementui atributa
h1.setAttribute('id', 'headline');

// element.getAttribute() - gauna tributo verte

console.log(h1.getAttribute('id'));

// element.hasAttribute() - tikrina ar turi atributa
console.log(h1.hasAttribute('id'));

// element.removeAttribute() - naikina atributa
h1.removeAttribute('id');

//  node.appendChild() - prie node pridedamas papildomas elmentas arba turinys
h1.appendChild(h1Text);
p.appendChild(pText);
button.appendChild(btnText);

// sukurtos HTML zymos su tekstiniu turiniu talpinamos dokumente

let main = document.querySelector('main');
main.appendChild(h1);

main.appendChild(p);
main.appendChild(button);

// ---------------------------------------------------------------
// ELEMENTU KURIMAS SU JS ir ATVAIZDAVIMAS DOKUMENT(DOM) -  2 budas
let div = document.createElement('div');

div.innerHTML = `
<h1>Hello world antras budas</h1>
<p>Lorem lorem</p>
<label>Your name</label>
<input type="text">
<button id="btn">click me</button>`;

main.appendChild(div);

// ----------------------------------------------------------------
// ELEMENTU KURIMAS SU JS ir ATVAIZDAVIMAS DOKUMENT(DOM) -  3 budas

let div2 = document.createElement('div');
let p2 = document.createElement('p');
let btn2 = document.createElement('button');

p2.innerText = '----------trecias budas--------------';
btn2.textContent = 'click me';

div2.appendChild(p2);
div2.appendChild(btn2);
main.appendChild(div2);

//praktinis pvz su elemento sukurimu

//variables
let formContainer = document.querySelector('.form-container');
let form = document.querySelector('#form');
let nameInput = document.querySelector('#name-input');
// function
function showGreeting(e) {
  e.preventDefault();

  let name = nameInput.value;

  let messageTag = document.createElement('p');
  messageTag.innerText = `Hello ${name} , how are u?`;

  formContainer.appendChild(messageTag);

  //   element.removeChile() - pasalina elementa
  formContainer.removeChild(form);
}
// events
form.addEventListener('submit', showGreeting);
