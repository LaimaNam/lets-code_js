import setNextQuestion from './setNextQuestion.js';

const startQuiz = (
  startBtnElement,
  quizQuestionElement,
  resultElement,
  score,
  index,
  questions
) => {
  startBtnElement.classList.add('hide');
  quizQuestionElement.classList.remove('hide');

  // -- resetting score and index
  if (!resultElement.classList.contains('hide')) {
    resultElement.classList.add('hide');
    score = 0;
  }

  index = 0;

  setNextQuestion(questions, score, index);
};

export default startQuiz;
