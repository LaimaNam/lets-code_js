// Sukurkite index.html ir script.js failus. Index.html failo viduje bus matoma 3 mygtukai (<button>) ir vienas blokas atvaizdavimui (<div>). Priklausomai nuo paspausto mygtuko, atvaizavimo bloke bus matomi:
// -posts arba;
// -comments arba
// -toods
// Posts, Comments arba Toodos endpoint'us rasite šiame API: https://jsonplaceholder.typicode.com

// API endpoint -----
// const GET_DATA = 'https://jsonplaceholder.typicode.com/';

// // VARIABLES------
// const postsBtn = document.querySelector('#get-posts-btn');
// const commentsBtn = document.querySelector('#get-comments-btn');
// const todosBtn = document.querySelector('#get-todos-btn');
// const output = document.querySelector('#output');

// // EVENTS ------

// postsBtn.addEventListener('click', () => {
//   return fetch(GET_DATA + 'posts')
//     .then((response) => response.json())
//     .then((result) => {
//       const filtered = [];
//       for (i = 0; i <= 10; i++) {
//         filtered[i] = result[Math.floor(Math.random() * result.length)];
//       }
//       output.innerHTML = filtered.reduce((output, currentPost) => {
//         output += `
//         <div>
//           <h3> ${currentPost.title}</h3>
//           <p>${currentPost.body}</p>
//         </div>
//         `;
//         return output;
//       }, '');
//     })
//     .catch((err) => console.log(err));
// });

// commentsBtn.addEventListener('click', () => {
//   return fetch(GET_DATA + 'comments')
//     .then((response) => response.json())
//     .then((result) => {
//       output.innerHTML = result.slice(0, 10).reduce((output, currenComment) => {
//         output += `
//                   <div>
//                     <h3> ${currenComment.name}</h3>
//                     <p>${currenComment.body}</p>
//                   </div>
//                   `;
//         return output;
//       }, '');
//     })
//     .catch((err) => console.log(err));
// });

// todosBtn.addEventListener('click', () => {
//   return fetch(GET_DATA + 'todos')
//     .then((response) => response.json())
//     .then((result) => {
//       output.innerHTML = result.slice(0, 10).reduce((output, currenTodo) => {
//         output += `
//                     <div>
//                       <h3> ${currenTodo.title}</h3>
//                       <p>${
//                         currenTodo.completed ? 'completed' : 'need to do'
//                       }</p>
//                     </div>
//                     `;
//         return output;
//       }, '');
//     })
//     .catch((err) => console.log(err));
// });

// --------- SECOND VERSION ----
// API endpoint
// -- posible endpoint endings: /posts /commnets /todos
let API_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
// Variables
const btns = document.querySelectorAll('.btn');
const outputElement = document.querySelector('#output');
// Functions
const getData = (e) => {
  return fetch(API_ENDPOINT + e.target.dataset.type)
    .then((response) => response.json())
    .then((data) => {
      let result = data.slice(0, 20);
      let output = '';
      for (let item of result) {
        output += `
        <h3>${item.title ? item.title : item.name}</h3>
        <p>${item.body ? item.body : item.completed}</p>
        `;
      }
      outputElement.innerHTML = output;
    });
};
// Events
btns.forEach((btn) => btn.addEventListener('click', getData));

// 2 -------------

// Sukurkite items.json failą iš duoto masyvo su objektais;
// Padarykite kreipimąsį jūsų items.json dokumentą ir index.html dokumente atvaizduokite infomraciją iš jo (tik užkrovus puslapį)

// variables
const dataFromFile = document.querySelector('#data-from-file');

// events
document.addEventListener('DOMContentLoaded', () => {
  fetch('items.json')
    .then((response) => response.json())
    .then((data) => {
      dataFromFile.innerHTML = data
        .filter((element) => element.id % 2 !== 0)
        .reduce((output, currentData) => {
          output += `
        <ul>
         ${currentData.title}
          <li>${currentData.desc}</li>
        </ul>
        `;
          return output;
        }, '');
    });
});
