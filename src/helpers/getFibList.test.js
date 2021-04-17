import getFibList from "./getFibList";

describe("fibList(n)", () => {
  it("Should start at 1.", () => {
    const obj = { 1: 1 };

    expect(getFibList(1)).toEqual(obj);
  });
});
