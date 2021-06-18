//Variables
//Dom elements
const wrapper = document.querySelector('#wrapper');

//Functions

//adds beckground to main > #wrapper
const addBackgroundToWrapper = () => {
  // -- changing main > #wrapper gackground color based on  page
  if (location.href.includes('html.html'))
    wrapper.style.backgroundColor = 'var(--html-color)';
  if (location.href.includes('css.html'))
    wrapper.style.backgroundColor = 'var(--css-color)';
  if (location.href.includes('js.html'))
    wrapper.style.backgroundColor = 'var(--js-color)';
};

//events
document.addEventListener('DOMContentLoaded', () => {
  addBackgroundToWrapper();
});
