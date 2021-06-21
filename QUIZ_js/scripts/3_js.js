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
let index = 0;
let score = 0;

//-- fetching data (questions from data folfer to questions array)
import fetchData from './modules/fetch.js';
import startQuiz from './modules/startQuiz.js';
import showNextQuestion from './modules/showNextQuestion.js';
import setNextQuestion from './modules/setNextQuestion.js';

fetchData('../data/JS_questions.json', questions);

//Events
document.addEventListener('DOMContentLoaded', () => {
  startBtnElement.style.backgroundColor = 'var(--js-color)';
});
startBtnElement.addEventListener('click', () => {
  startQuiz(
    startBtnElement,
    quizQuestionElement,
    resultElement,
    score,
    index,
    questions
  );
});
nextBtnElement.addEventListener('click', () => {
  // index = showNextQuestion(questions, score, index);
  index++;
  showNextQuestion(questions, score, index);
});
