const selectAnswer = (e, questions, score, index) => {
  const answersBtnsElement = document.querySelector('#answers-btns');
  const nextBtnElement = document.querySelector('#next-btn');
  const startBtnElement = document.querySelector('#start-btn');
  const resultElement = document.querySelector('#result');

  let correct = e.target.dataset.correct;
  if (correct) {
    e.target.classList.add('correct');
    e.target.innerHTML += ` <i class="fas fa-check"></i>`;
    score++;
  } else {
    e.target.classList.add('wrong');
    e.target.innerHTML += ` <i class="fas fa-times"></i>`;
  }

  Array.from(answersBtnsElement.children).forEach(
    (btn) => (btn.disabled = true)
  );

  if (questions.length > index + 1) {
    nextBtnElement.classList.remove('hide');
  } else {
    startBtnElement.innerText = 'RESTART QUIZ';
    startBtnElement.classList.remove('hide');
    resultElement.classList.remove('hide');

    if (score === questions.length) {
      resultElement.innerHTML = `
        <h1><i class="fas fa-trophy"></i></h1>
        <h3>Congrats! You scored maximum from ${questions.length} questions!</h3>
        `;
    } else if (score < questions.length / 2) {
      resultElement.innerHTML = `
        <h1><i class="fas fa-sad-tear"></i></h1>
        <h3>You really need to improve your CSS skills! You scored ${score} from ${questions.length} questions!</h3>
        `;
    } else {
      resultElement.innerHTML = `
          <h1><i class="fas fa-rocket"></i></h1>
          <h3>Nice job! Your score is ${score} from ${questions.length}. Don't stop learning!</h3>
          `;
    }
  }
};

export default selectAnswer;
