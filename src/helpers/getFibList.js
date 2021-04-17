import getNthFibNum from "./getNthFibNum";

const getFibList = (n) => {
  let fibs = {};
  let start = 1;
  while (start <= n) {
    fibs[start] = getNthFibNum(start);
    start++;
  }
  return fibs;
};

export default getFibList;
