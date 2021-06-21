const resetState = () => {
  const answersBtnsElement = document.querySelector('#answers-btns');
  const nextBtnElement = document.querySelector('#next-btn');

  nextBtnElement.classList.add('hide');
  //   console.log(answersBtnsElement.firstChild);
  while (answersBtnsElement.firstChild) {
    answersBtnsElement.removeChild(answersBtnsElement.firstChild);
  }
};

export default resetState;
