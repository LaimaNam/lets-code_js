//Variables
const footer = document.querySelector('footer');
const data = document.querySelector('#current-year');
//Functions
const addBackground = () => {
  // -- changing footer gackground color based on  page

  if (location.href.includes('index.html'))
    footer.style.backgroundColor = 'var(--dark-color)';
  if (location.href.includes('html.html'))
    footer.style.backgroundColor = 'var(--html-color)';
  if (location.href.includes('css.html'))
    footer.style.backgroundColor = 'var(--css-color)';
  if (location.href.includes('js.html'))
    footer.style.backgroundColor = 'var(--js-color)';
};

const addCurrentData = () => (data.innerText = new Date().getFullYear());

//events
document.addEventListener('DOMContentLoaded', () => {
  addBackground();
  addCurrentData();
});
