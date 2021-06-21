const addNumbers = (...args) =>
  args.reduce((total, currentItem) => (total += currentItem), 0);

export default addNumbers;
