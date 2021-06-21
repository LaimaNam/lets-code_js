import setNextQuestion from './setNextQuestion.js';

const showNextQuestion = (questions, score, index) => {
  index++;
  setNextQuestion(questions, score, index);
  return index;
};

export default showNextQuestion;
