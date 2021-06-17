const EXPERIENCE_API = 'http://64.227.127.73/experiences';

const SKILLS_API = 'http://64.227.127.73/skills';

//Variables
const experienceBox = document.querySelector('#experience-data');
const codingSkillsBox = document.querySelector('#coding-skills');

const showExperience = () => {
  return fetch(EXPERIENCE_API)
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        const singleData = document.createElement('div');
        singleData.setAttribute('class', 'singleExperienceInformation');
        const leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'leftDiv');
        const rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'rightDiv');
        // left div:
        const workYear = document.createElement('h4');
        const company = document.createElement('h4');
        company.setAttribute('class', 'company');

        workYear.innerText = `${element.startYear} - ${element.finishYear}`;
        company.innerText = element.companyName;
        //right div:
        const position = document.createElement('h4');
        const description = document.createElement('p');
        position.innerText = element.position;
        description.innerText = element.description;
        description.setAttribute('class', 'description');

        // append data
        rightDiv.append(position, description);
        leftDiv.append(workYear, company);
        singleData.append(leftDiv, rightDiv);
        experienceBox.append(singleData);
      });
    });
};

const showSkills = () => {
  return fetch(SKILLS_API)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((skill) => {
        const singleSkillWrapper = document.createElement('div');
        const skillTextWrapper = document.createElement('div');
        skillTextWrapper.setAttribute('class', 'skillTextWrapper');
        const skillName = document.createElement('h5');
        skillName.setAttribute('class', 'skillName');
        const skillNumber = document.createElement('h5');
        skillNumber.setAttribute('class', 'skillNumber');
        const skillBarWrapper = document.createElement('div');
        skillBarWrapper.setAttribute('class', 'skillBarWrapper');
        const skillBar = document.createElement('div');
        skillBar.setAttribute('class', 'skillBar');

        skillName.innerText = skill.title;
        skillNumber.innerText = `${skill.level}%`;
        skillBar.style.width = `${skill.level}%`;

        //append
        skillBarWrapper.append(skillBar);
        skillTextWrapper.append(skillName, skillNumber);
        singleSkillWrapper.append(skillTextWrapper, skillBarWrapper);
        codingSkillsBox.append(singleSkillWrapper);
      });
    });
};

const showData = () => {
  showExperience();
  showSkills();
};

document.addEventListener('DOMContentLoaded', showData);
