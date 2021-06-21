import showQuestions from './showQuestions.js';
import resetState from './resetState.js';

const setNextQuestion = (questions, score, index) => {
  resetState();
  showQuestions(questions, score, index);
};

export default setNextQuestion;
