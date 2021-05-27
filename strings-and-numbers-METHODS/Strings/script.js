// Atsidarome script.js failą ir sukuriame kintamąjį “userInfoOutput”, kuriam priskiriame index.html faile esantį <div> su id=”main”;

const userInfoOutput = document.querySelector('#main');

// Susikurkite objektą “user”, kuriam nurodykite šias savybes: vardas, pavardė;

let user = {
  name: 'Laima',
  surname: 'Namajunaite',
};

// Kintamąjam userInfoOutput naudojant “.innerHTML =” DOM nuosavybę ir atgalinius klavišus (backticks) t.y. ``, sukurkite H2 tag, kuris, nurodo “User Information” ir <p> tag’ą, kuriame pateiktas, toks sakinys “Vartotojo vardas yra (vardas), o pavardė (pavardę).”
userInfoOutput.innerHTML = `
<h2>User Information</h2>
<p>Vartotojo vardas yra ${user.name}, o pavardė ${user.surname}.</p>
`;
