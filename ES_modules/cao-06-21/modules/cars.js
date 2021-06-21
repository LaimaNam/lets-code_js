const carsFunction = (app) => {
  let arr = ['BMW', 'VW', 'AUDI', 'MB'];
  //   let item = array.map((item) => item)
  app.innerHTML += `
  <ul>
  ${arr.map((item) => `<li>${item}</li>`).join('')}
  </ul>`;
};

export default carsFunction;
