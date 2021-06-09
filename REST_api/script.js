// EXTERNAL API
// endpoint'as
const JSONPLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/posts';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//----------------------------OLD Version AJAX (XMLHttpRequest())------------------------------------

//------ Load Text File Information----
function loadTextFileXHR() {
  //creating XHR objekta
  let xhr = new XMLHttpRequest();

  //using XHR object .open() method
  // - arguments for .open(request type: GET/POST/PUT/DELETE - crud operations, url/file, async[true arba false - reik visad true]) :
  xhr.open('GET', 'sample.txt', true);

  //Handling request
  xhr.onload = function () {
    if (this.status === 200) {
      textOutput.innerText = this.responseText;
    } else if (this.status === 404) {
      textOutput.innerText = 'text not found';
    }
  };

  //sending request
  xhr.send();
}

//----------- Load User Information---------------------
function loadUserXHR() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'user.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      let user = JSON.parse(this.responseText);

      userOutput.innerHTML = `
      <ul>
      <li>ID: ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>E-mail: ${user.email}</li>
      </ul>
      `;
    }
  };

  xhr.send();
}

//------- Load Users information-----
function loadUsersXHR() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'users.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);
      // let output = '';
      // for (let user of users) {
      //   output += `
      //   <ul>
      //     <li>ID: ${user.id}</li>
      //     <li>Name: ${user.name}</li>
      //     <li>E-mail: ${user.email}</li>
      //   </ul>
      //   `;
      // }

      // usersOutput.innerHTML = output;
      usersOutput.innerHTML = users.reduce((output, currentUser) => {
        output += `
        <ul>
            <li>ID: ${currentUser.id}</li>
           <li>Name: ${currentUser.name}</li>
           <li>E-mail: ${currentUser.email}</li>
        </ul>
        `;

        return output;
      }, '');
    }
  };

  xhr.send();
}

//-- Load Users information
function loadPostsXHR() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', JSONPLACEHOLDER_URI, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let posts = JSON.parse(this.responseText).slice(0, 10);
      console.log(posts);
      postsOutput.innerHTML = posts.reduce((output, currentPost) => {
        output += `
        <div>
          <h3> ${currentPost.title}</h3>
          <p>${currentPost.body}</p>
        </div>
        `;
        return output;
      }, '');
    }
  };

  xhr.send();
}

//--------------------------------NEW VERSION AJAX (fetch())-----------------------------------------
// -- Getting data
// -----using FETCH API
// function loadPostsFETCH() {
//   return fetch(JSONPLACEHOLDER_URI)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((result) => {
//       let posts = result.slice(0, 10);

//       postsOutput.innerHTML = posts.reduce((output, currentPost) => {
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
// }

// ---using FETCH API and ASYNC AWAIT
// ES5 async function loadPostsFETCH() {}
// ES6
const loadPostsFETCH = async () => {
  try {
    let response = await fetch(JSONPLACEHOLDER_URI, { method: 'GET' });
    let posts = await response.json();
    console.log(posts);
    postsOutput.innerHTML = posts.slice(0, 10).reduce((output, currentPost) => {
      output += `
            <div>
              <h3> ${currentPost.title}</h3>
              <p>${currentPost.body}</p>
            </div>
            `;
      return output;
    }, '');
  } catch (err) {
    console.log(err);
  }
};

// -- Sending data
function sendPostFETCH() {
  return fetch(JSONPLACEHOLDER_URI, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json: charset=UTF-8',
    },
    body: JSON.stringify({
      userId: 1,
      title: 'My first title',
      body: 'My first body',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser.addEventListener('click', loadUserXHR);
btnGetUsers.addEventListener('click', loadUsersXHR);
// btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
