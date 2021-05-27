// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
// <h2> tag’as su tekstu;
// <p> tag’as su tekstu;
// <ul> tag’as, kurio viduje yra vienas <li>
// <p> tag’as su tekstu;

let mainDiv = document.querySelector('#main');

mainDiv.innerHTML = `
<h2>H2 tag</h2>
<p>First p tag</p>
<ul><li>First li item</li></ul>
<p>Second p tag</p>`;
