import getNthFibNum from "./getNthFibNum";

describe("getNthFibNum(n)", () => {
  it("Should throw error if n is a negative integer.", () => {
    expect(() => getNthFibNum(-2)).toThrowError(
      "n cannot be 0 or a negative integer."
    );
  });

  it("Should throw error if n is 0.", () => {
    expect(() => getNthFibNum(0)).toThrowError(
      "n cannot be 0 or a negative integer."
    );
  });

  it("Should throw error if n is greater than 500.", () => {
    expect(() => getNthFibNum(550)).toThrowError(
      "n cannot be greater than 500."
    );
  });
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
