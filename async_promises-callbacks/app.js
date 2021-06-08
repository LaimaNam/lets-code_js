// Variables
const usersOutput = document.querySelector('#output');
// Promises (ES6)
// --** simple Promise example **--
// --- creating promise

let simplePromise = new Promise((resolve, reject) => {
  // arba kazkas ivyko, arba neivyko
  let userName = 'Peter';

  if (userName === 'Peter') {
    resolve({ message: 'Success', name: userName });
  } else {
    reject('Failed');
  }
});

// console.log('one');

// then - resolve
// catch - reject
// ------using promise (asynchroninis)
// simplePromise
//   .then((result) =>
//     console.log(`Message is ${result.message} and name is ${result.name}`)
//   )
//   .catch((error) => console.log(error));

// console.log('two');

// --** more complex Promise example **--
// PROBLEM: need to update users lists asynchronously
// --- 1. problem solving using using callbacks (old way)
const users = [
  { name: 'Peter', surname: 'Griffin' },
  { name: 'Lois', surname: 'Griffin' },
  { name: 'Chris', surname: 'Griffin' },
  { name: 'Meg', surname: 'Griffin' },
  { name: 'Stewie', surname: 'Griffin' },
];
function getUsers() {
  setTimeout(() => {
    let output = '';

    users.forEach((user) => {
      output += `
        <ul>
        <li>Name: ${user.name}</li>
        <li>Surname: ${user.surname}</li>
        </ul>
        `;
    });

    usersOutput.innerHTML = output;
  }, 3000);
}

// getUsers();

function createUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 3000);
}

// createUser({ name: 'Brian', surname: 'something' }, getUsers);

// --- 2. problem solving using using Promises (new way)
function getUsersWithPromise() {
  setTimeout(() => {
    let output = '';

    users.forEach((user) => {
      output += `
          <ul>
          <li>Name: ${user.name}</li>
          <li>Surname: ${user.surname}</li>
          </ul>
          `;
    });

    usersOutput.innerHTML = output;
  }, 3000);
}
getUsersWithPromise();

function createUserWithPromise(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      let success = true;

      if (success) {
        resolve(console.log('Success'));
      } else {
        reject('ERROR: unavble to add user');
      }
    }, 3000);
  });
}

createUserWithPromise({ name: 'Brian', surname: 'something' })
  .then(getUsersWithPromise)
  .catch((error) => console.log(error));

// Async / Await
// --- 2.1 problem solving using using Async/await (new way)
// ---- Async / Await / Fetch
