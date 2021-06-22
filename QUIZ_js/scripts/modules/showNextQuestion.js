import setNextQuestion from './setNextQuestion.js';

const showNextQuestion = (questions, state, btnClass) => {
  state.index++;
  setNextQuestion(questions, state, btnClass);
};

export default showNextQuestion;
