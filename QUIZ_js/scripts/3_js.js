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

  index = 0;

  setNextQuestion();
};

// --- reseting "NEXT QUESTION" button and setting new question
const setNextQuestion = () => {
  showNextQuestion(questions[index]);
};

// --- selecting answer (by clicking on it's button)
const selectAnswer = () => {
  return;
};

// -- showing question and answers from questions array
const showQuestions = () => {
  return;
};

// -- showing next question (after clicking "NEXT QUESTION")
const showNextQuestion = (question) => {
  questionelement.innerText = question.question;
  console.log(question.answer);

  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.style.backgroundColor = 'var(--js-color)';
    console.log(answer.correct);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    answersBtnsElement.appendChild(button);
  });
};

//Events
document.addEventListener('DOMContentLoaded', () => {
  startBtnElement.style.backgroundColor = 'var(--js-color)';
  nextBtnElement.style.backgroundColor = 'var(--js-color)';
});
startBtnElement.addEventListener('click', startQuiz);
