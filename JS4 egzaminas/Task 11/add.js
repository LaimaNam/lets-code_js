const BASE_URL = 'https://melon-potent-period.glitch.me/skills';

//Variables
//DOM Elements
const formElement = document.querySelector('form');

//Functions

const postData = (e) => {
  e.preventDefault();
  let skillValue = e.target.skill.value;
  console.log(skillValue);
  if (!skillValue) {
    return alert('Please fill in the skill field!');
  }

  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      skill: skillValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(`Skill ${skillValue} added!`);
      formElement.reset();
      window.location.href = 'index.html';
    });
};

//Events
formElement.addEventListener('submit', postData);
