// ---------------- Functional programming ------------------

//----variables
const funcHeadline = document.querySelector('#func-headline');
const funcBtn = document.querySelector('#func-btn');

//----func
const toggleFuncHeadline = () => {
  if (!funcBtn.classList.contains('clicked')) {
    funcHeadline.style.display = 'none';
    funcBtn.innerText = 'Show';
    funcBtn.classList.add('clicked');
  } else {
    funcHeadline.style.display = 'block';
    funcBtn.innerText = 'Hide';
    funcBtn.classList.remove('clicked');
  }
};
// ---- events
funcBtn.addEventListener('click', toggleFuncHeadline);

// -------------------- O O P -----------------------------

// class'es
class ToggleHeadline {
  constructor(headline, button) {
    (this.headline = headline), (this.button = button), (this.text = text);
  }

  toggleOOPHeadline() {
    if (!this.button.classList.contains('clicked')) {
      this.headline.style.display = 'none';
      this.button.innerText = 'Show';
      this.button.classList.add('clicked');
    } else {
      this.headline.style.display = 'block';
      this.button.innerText = 'Hide';
      this.button.classList.remove('clicked');
    }
  }
}
// variables
const oopHeadline = document.querySelector('#oop-headline');
const oopBtn = document.querySelector('#oop-btn');

const oopHeadlineAnother = document.querySelector('#oop-headline-another');
const oopBtnAnother = document.querySelector('#oop-btn-another');

// --- class'es instances
const toggleComponent = new ToggleHeadline(oopHeadline, oopBtn, 'Hide');
const toggleComponentAnother = new ToggleHeadline(
  oopHeadlineAnother,
  oopBtnAnother,
  'Hide again'
);

// --- events
oopBtn.addEventListener('click', () => toggleComponent.toggleOOPHeadline());
oopBtnAnother.addEventListener('click', () =>
  toggleComponentAnother.toggleOOPHeadline()
);
