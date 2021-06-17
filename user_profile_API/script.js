// Atkurkite vartotojų profilius iš šio api: https://api.github.com/users

// Viso: 16 user'ių su nuotrauka ir login

const USER_API_URL = 'https://api.github.com/users';
//variables
//DOM variables
const userOutput = document.querySelector('#user-profiles-wrapper');

//functions

const showAllUsers = () => {
  return fetch(USER_API_URL)
    .then((response) => response.json())
    .then((users) => {
      let output = '';
      users = users.slice(0, 16);
      for (let user of users) {
        output += `
          <div class="user-item" id="user-${user.id}">
            <img src="${user.avatar_url}">
            <div class="user-info">
                <h4>${user.login}</h4>
            </div>
          </div>
          `;
        userOutput.innerHTML = output;

        fetch(user.url)
          .then((response) => response.json())
          .then((singleUser) => {
            const userBox = document.querySelector(`#user-${user.id}`);
            const location = document.createElement('p');
            location.innerText = singleUser.location;
            userBox.append(location);
          });
      }
    });
};

//events
document.addEventListener('DOMContentLoaded', showAllUsers);
