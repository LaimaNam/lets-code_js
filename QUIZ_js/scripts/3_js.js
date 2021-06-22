//Variables
// -- DOM elements
const startBtnElement = document.querySelector('#start-btn');
const nextBtnElement = document.querySelector('#next-btn');
const quizQuestionElement = document.querySelector('#quiz__question');
const resultElement = document.querySelector('#result');

// -- logic
let questions = [];

let quizState = {
  index: 0,
  score: 0,
};

// -- imports from modules
import fetchData from './modules/fetch.js';
import startQuiz from './modules/startQuiz.js';
import showNextQuestion from './modules/showNextQuestion.js';
import changeBgColor from './modules/changeBgColor.js';

// -- data fetch imported from fetch.js
fetchData('../data/JS_questions.json', questions);

//Events
document.addEventListener('DOMContentLoaded', () => {
  changeBgColor(startBtnElement, 'var(--js-color)');
});

startBtnElement.addEventListener('click', () => {
  startQuiz(
    startBtnElement,
    quizQuestionElement,
    resultElement,
    quizState,
    questions,
    'btn-js'
  );
});

nextBtnElement.addEventListener('click', () => {
  showNextQuestion(questions, quizState, 'btn-js');
});
