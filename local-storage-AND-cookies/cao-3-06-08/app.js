// 3 ------ Sukurkite puslapį, kuriame būtų forma su vienu input - fullName.
// ---Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array.
// ---Šį array išsaugo localStorage. Po forma, tegul būna lentelė, būtent joje atsivaizduoja informacija iš localStorage array.

// variables
const fullName = document.querySelector('#userFullName');
const tableDataName = document.querySelector('#name');
const tableDataSurname = document.querySelector('#surname');

// functions
const someFunc = (e) => {
  e.preventDefault();
  let fullname = fullName.value.trim();
  const firstName = fullname.split(' ')[0];
  const surname = fullname.replace(firstName, '');
  let users = [
    {
      name: firstName,
      userSurname: surname,
    },
  ];
  localStorage.setItem('name', users[0].name);
  localStorage.setItem('surname', users[0].userSurname);

  tableDataName.innerText = localStorage.getItem('name');
  tableDataSurname.innerText = localStorage.getItem('surname');
};

// event
fullName.addEventListener('input', someFunc);
