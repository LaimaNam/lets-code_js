//Variables
// -- DOM elements
const startBtnElement = document.querySelector('#start-btn');
const nextBtnElement = document.querySelector('#next-btn');

const quizQuestionElement = document.querySelector('#quiz__question');
const questionelement = document.querySelector('#question');
const answersBtnsElement = document.querySelector('#answers-btns');
const resultElement = document.querySelector('#result');

// -- logic
let questions = [];
let index;
let score = 0;

//-- fetching data (questions from data folfer to questions array)
fetch('../data/JS_questions.json')
  .then((response) => response.json())
  .then((data) => questions.push(...data));

//Functions
// --- starting game (after pressing "START QUIZ")
const startQuiz = () => {
  startBtnElement.classList.add('hide');
  quizQuestionElement.classList.remove('hide');

  // -- resetting score and index
  if (!resultElement.classList.contains('hide')) {
    resultElement.classList.add('hide');
    score = 0;
  }

  index = 0;

  setNextQuestion();
};

// --- reseting "NEXT QUESTION" button and setting new question
const setNextQuestion = () => {
  resetState();

  showQuestions(questions[index]);
};

// --- selecting answer (by clicking on it's button)
const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;
  if (correct) {
    e.target.classList.add('correct');
    e.target.innerHTML += ` <i class="fas fa-check"></i>`;
    score++;
  } else {
    e.target.classList.add('wrong');
    e.target.innerHTML += ` <i class="fas fa-times"></i>`;
  }

  Array.from(answersBtnsElement.children).forEach(
    (btn) => (btn.disabled = true)
  );

  if (questions.length > index + 1) {
    nextBtnElement.classList.remove('hide');
  } else {
    startBtnElement.innerText = 'RESTART QUIZ';
    startBtnElement.classList.remove('hide');
    resultElement.classList.remove('hide');

    if (score === questions.length) {
      resultElement.innerHTML = `
      <h1><i class="fas fa-trophy"></i></h1>
      <h3>Congrats! You scored maximum from ${questions.length} questions!</h3>
      `;
    } else if (score < questions.length / 2) {
      resultElement.innerHTML = `
      <h1><i class="fas fa-sad-tear"></i></h1>
      <h3>You really need to improve your CSS skills! You scored ${score} from ${questions.length} questions!</h3>
      `;
    } else {
      resultElement.innerHTML = `
        <h1><i class="fas fa-rocket"></i></h1>
        <h3>Nice job! Your score is ${score} from ${questions.length}. Don't stop learning!</h3>
        `;
    }
  }
};

// -- showing question and answers from questions array
const showQuestions = (question) => {
  questionelement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn', 'btn-js');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);

    answersBtnsElement.appendChild(button);
  });
};

// -- showing next question (after clicking "NEXT QUESTION")
const showNextQuestion = () => {
  index++;
  setNextQuestion();
};

// -- reseting "NEXT QUESTION" button and answer buttons (removing previous ones)
const resetState = () => {
  nextBtnElement.classList.add('hide');
  //   console.log(answersBtnsElement.firstChild);
  while (answersBtnsElement.firstChild) {
    answersBtnsElement.removeChild(answersBtnsElement.firstChild);
  }
};

//Events
document.addEventListener('DOMContentLoaded', () => {
  startBtnElement.style.backgroundColor = 'var(--js-color)';
});
startBtnElement.addEventListener('click', startQuiz);
nextBtnElement.addEventListener('click', showNextQuestion);
