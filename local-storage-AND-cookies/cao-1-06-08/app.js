// 2 ----- Į localStorage, įrašykite savo vardą, pavardę, aprašymą, linkus į FB, G+, Twitter, linką į nuotrauką. Informaciją galite įrašyti per console'ę, arba naudojant kodą projekte pirmą kart užkraunant puslapį. Vėliau susikurkite puslapį, kuris atvaizduos šią informaciją būtent taip:

let user = {
  name: 'Laima',
  surname: 'Nam',
  description: 'Visual artist',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi id iure ducimus a, dolorum illo recusandae, cum nihil, delectus assumenda animi fugiat odit sed corporis eaque quam. Architecto, molestiae! Nostrum totam, omnis dolorum delectus facere maxime numquam cum alias animi aliquid dicta debitis voluptatibus culpa velit optio? Corrupti, ratione?',
  socialMedia: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com',
    },
  ],
  avatar:
    'https://images.unsplash.com/photo-1609978204750-d5018aa878d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
};

localStorage.setItem('user', JSON.stringify(user));
let data = JSON.parse(localStorage.getItem('user'));
console.log(data);

// variables LOCAL STORAGE
let name = data.name;
let surname = data.surname;
let about = data.description;
let description = data.about;
let fb = user.socialMedia[0].url;
let linkd = user.socialMedia[1].url;

// variables DOM
let img = document.querySelector('#userAvatar');
let userName = document.querySelector('#user-name');
let userDescription = document.querySelector('#user-description');
let userInfo = document.querySelector('#user-info');
let facebook = document.querySelector('#fb');
let linkedin = document.querySelector('#linkedin');

// appending data to html
img.src = data.avatar;
userName.innerText = (name + ' ' + surname).toUpperCase();
userDescription.innerText = about;
userInfo.innerText = description;
facebook.href = fb;
linkedin.href = linkd;
