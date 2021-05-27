//  1 -----

// const h1 = document.createElement('h1');
// h1.innerText = 'Laima';
// h1.style.color = 'skyblue';
// document.body.appendChild(h1);

// 2 ----- Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

// function createUl() {
//   let ul = document.createElement('ul');
//   carList = ['Lexus', 'BMW', 'Audi'];

//   document.body.appendChild(ul);
//   carList.forEach((element) => {
//     let li = document.createElement('li');
//     li.innerHTML = li.innerHTML + element;
//     ul.appendChild(li);
//   });
// }

// createUl();

// 3 ------

document.body.style.backgroundColor = 'skyblue';

// Main block
const main = document.createElement('main');
main.style.border = '1px solid black';
main.style.margin = '10rem auto 0 auto';
main.style.padding = '1rem';
main.style.width = '50%';
main.style.backgroundColor = 'white';
main.style.borderRadius = '0.5rem';
main.style.textAlign = 'center';
document.body.append(main);

// IMG
const img = document.createElement('img');
img.src =
  'https://images.unsplash.com/photo-1621844150753-57d5ac9a62cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1231&q=80';
main.append(img);
img.style.width = '10rem';
img.style.height = '10rem';
img.style.borderRadius = '50%';
img.style.objectFit = 'cover';
img.style.marginTop = '-6.5rem';

// TEXT
const h2 = document.createElement('h2');
h2.innerText = 'Trent Walton';
h2.style.margin = '10px';
main.append(h2);

const h3 = document.createElement('h3');
h3.innerText = 'Founder & 1/3 of @paravelinc';
h3.style.margin = '5px';
main.append(h3);

const whereLive = document.createElement('h3');
whereLive.innerText = 'Austin, TX';
main.append(whereLive);

// --------------------table 1 --------------------------->
function createTable(rows, cols) {
  for (i = 1; i <= rows; i++) {
    const div1 = document.createElement('div');
    const table = document.querySelector('#table');
    div1.style.display = 'flex';
    div1.style.justifyContent = 'center';
    table.appendChild(div1);
    for (col = 1; col <= cols; col++) {
      const div = document.createElement('div');
      div.style.width = '40px';
      div.style.height = '20px';
      div.style.border = '1px solid black';
      div1.appendChild(div);
    }
  }
}

createTable(5, 6);

// ---------------------- table 2 ------------->
function createSecondTable() {
  const table = document.createElement('table');
  table.style.width = '160px';
  table.style.height = '160px';
  table.style.margin = 'auto';

  for (row = 1; row <= 5; row++) {
    const tr = document.createElement('tr');
    tr.style.border = '1px solid black';

    for (cell = 1; cell <= 5; cell++) {
      const td = document.createElement('td');
      td.style.border = '1px solid black';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

createSecondTable();
