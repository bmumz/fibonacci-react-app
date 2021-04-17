const getNthFibNum = (n) => {
  if (n <= 0) {
    throw Error("n cannot be 0 or a negative integer.");
  }
  if (n > 500) {
    throw Error("n cannot be greater than 500.");
  }
  if (n <= 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }

  let currentNum = 0;
  let pastNum1 = 1;
  let pastNum2 = 1;

  for (let i = 3; i <= n; i++) {
    currentNum = pastNum1 + pastNum2;
    pastNum2 = pastNum1;
    pastNum1 = currentNum;
  }
  return currentNum;
};

export default getNthFibNum;
