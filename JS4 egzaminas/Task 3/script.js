/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

//variables
//DOM variables
const usersOutput = document.querySelector('#output');
const buttonElement = document.querySelector('#btn');

//Functions
const showGithubUsers = () => {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((users) => {
      console.log(users);
      let output = '';

      for (user of users) {
        output += `
          <div class="user-item">
            <img src="${user.avatar_url}">
            <div class="user-info">
                <h4>${user.login}</h4>
            </div>
          </div>
          `;
        usersOutput.innerHTML = output;
      }
    });
};

//Events
buttonElement.addEventListener('click', showGithubUsers);
