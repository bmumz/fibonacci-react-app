const getNthFibNum = (n) => {
  if (n <= 1) {
    return n;
  }
  return getNthFibNum(n - 1) + getNthFibNum(n - 2);
};

export default getNthFibNum;
