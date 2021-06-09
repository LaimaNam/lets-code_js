// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(e => console.log(e.message))

// 1 ----- Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):

// viariables
let userCard = document.querySelector('#contentWrapper');
let img = document.querySelector('#userAvatar');
let fullName = document.querySelector('#fullName');
let age = document.querySelector('#age');
let email = document.querySelector('#email');

// getting data
const loadUserData = async () => {
  fetch('https://randomuser.me/api/')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((result) => {
      let userResults = result.results[0];
      let userName = userResults.name.first;
      let userSurname = userResults.name.last;

      img.src = userResults.picture.large;
      fullName.textContent = userName + ' ' + userSurname;
      age.textContent = `${userResults.dob.age} years old`;
      email.textContent = userResults.email;
    });
};

loadUserData();
