import setNextQuestion from './setNextQuestion.js';

const showNextQuestion = (questions, state) => {
  state.index++;
  setNextQuestion(questions, state);
};

export default showNextQuestion;
