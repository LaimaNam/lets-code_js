import showQuestions from './showQuestions.js';
import resetState from './resetState.js';

const setNextQuestion = (questions, state) => {
  resetState();
  showQuestions(questions, state);
};

export default setNextQuestion;
