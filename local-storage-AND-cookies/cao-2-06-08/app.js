// 1 ------ Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

// variables
const form1 = document.querySelector('#form-1');
const btnSave = document.querySelector('#btnSave');
const userName = document.querySelector('#userName');
const currentNameinCookies = document.querySelector('#currentNameInCookies');
const btnDelete = document.querySelector('#btnDelete');
const brtDeleteWrapper = document.querySelector('#deleteNameWrapper');

if (document.cookie) {
  renderForm();
} else {
  form1.style.display = 'block';
}

// functions
function renderForm() {
  form1.style.display = 'none';
  brtDeleteWrapper.style.display = 'block';
  currentNameinCookies.innerText = document.cookie.split('=')[1];
}

const saveNameToCookies = (e) => {
  e.preventDefault();
  document.cookie = `name = ${userName.value}`;
  form1.reset();
  renderForm();
};

// events
btnSave.addEventListener('click', saveNameToCookies);
btnDelete.addEventListener('click', () => {
  document.cookie += '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  form1.style.display = 'block';
  brtDeleteWrapper.style.display = 'none';
  currentNameinCookies.innerText = '';
});
