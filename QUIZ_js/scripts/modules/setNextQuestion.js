import showQuestions from './showQuestions.js';
import resetState from './resetState.js';

const setNextQuestion = (questions, state, btnClass) => {
  resetState();
  showQuestions(questions, state, btnClass);
};

export default setNextQuestion;
