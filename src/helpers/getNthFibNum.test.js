import getNthFibNum from "./getNthFibNum";

describe("getNthFibNum(n)", () => {
  it("Should return 1 as first Fibonacci number.", () => {
    expect(getNthFibNum(1)).toEqual(1);
  });

  it("Should return 1 as second Fibonacci number.", () => {
    expect(getNthFibNum(2)).toEqual(1);
  });

  it("Should return 144 as twelfth Fibonacci number.", () => {
    expect(getNthFibNum(12)).toEqual(144);
  });
});
