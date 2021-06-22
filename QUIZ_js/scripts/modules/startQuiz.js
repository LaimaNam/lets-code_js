import setNextQuestion from './setNextQuestion.js';

const startQuiz = (
  startBtnElement,
  quizQuestionElement,
  resultElement,
  state,
  questions,
  btnClass
) => {
  startBtnElement.classList.add('hide');
  quizQuestionElement.classList.remove('hide');

  // -- resetting score and index
  if (!resultElement.classList.contains('hide')) {
    resultElement.classList.add('hide');
    state.score = 0;
  }

  state.index = 0;

  setNextQuestion(questions, state, btnClass);
};

export default startQuiz;
