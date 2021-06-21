import selectAnswer from './selectAnswer.js';

const showQuestions = (questions, score, index) => {
  const question = questions[index];
  console.log(questions[index]);
  const questionelement = document.querySelector('#question');
  const answersBtnsElement = document.querySelector('#answers-btns');

  questionelement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn', 'btn-js');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', (e) => {
      selectAnswer(e, questions, score, index);
    });

    answersBtnsElement.appendChild(button);
  });
};

export default showQuestions;
