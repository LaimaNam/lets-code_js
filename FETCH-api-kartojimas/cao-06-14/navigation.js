// variables
const navigation = document.querySelector('nav > ul');

//Functions
function populateMenu() {
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');

  let a1 = document.createElement('a');
  let a2 = document.createElement('a');

  a1.href = 'index.html';
  a2.href = 'add.html';

  a1.innerText = 'Home Page';
  a2.innerText = 'Add Car';

  li1.append(a1);
  li2.append(a2);

  //-- adding new elements to nav
  navigation.append(li1, li2);
}
//Events
document.addEventListener('DOMContentLoaded', populateMenu);
