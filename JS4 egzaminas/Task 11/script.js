const BASE_URL = 'https://melon-potent-period.glitch.me/skills';
//Variables
//DOM Elements
const outputElement = document.querySelector('#table-body');

//Functions

//--Get skills
const showSkills = () => {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .then((skills) => {
      //   console.log(skills);
      let output = '';
      for (skill of skills) {
        output += `
          <tr id="${skill.id}">
            <td>${skill.id}</td>
            <td>${skill.skill}</td>
            <td><button class="deleteBtn" data-id="${skill.id}">Delete</button></td>
          </tr>
          `;
      }

      outputElement.innerHTML = output;

      //delete skill event
      const deleteAction = document.querySelectorAll('.deleteBtn');
      deleteAction.forEach((btn) => btn.addEventListener('click', deleteSkill));
    });
};

// -- Delete skill
const deleteSkill = (e) => {
  let id = e.target.dataset.id;
  console.log(id);

  return fetch(BASE_URL.slice(0, -1) + '/' + id, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showSkills();
    });
};

//Events
document.addEventListener('DOMContentLoaded', showSkills);
