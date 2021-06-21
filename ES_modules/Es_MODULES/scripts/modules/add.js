//ES6 modules:
// -- adding export:
//    - default export (COULD BE ONLY ONE)
//    --> one line arrorw funkcija NEveiks
export default function addTwoNumbers(a, b) {
  return a + b;
}
// const addTwoNumbers = (a, b) => a + b;
// export default addTwoNumbers;

//    - name export (CAN BE AS MUCH AS NEEDED) -> arrorw funkcija veiks

//ES5
export function addThreeNumbers(a, b, c) {
  return a + b + c;
}
//ES6
export const addFourNumbers = (a, b, c, d) => {
  return a + b + c + d;
};
