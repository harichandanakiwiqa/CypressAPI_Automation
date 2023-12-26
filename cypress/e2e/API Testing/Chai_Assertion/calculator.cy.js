const { myCalc } = require("../Chai_Assertion/calc.cy");
const expect = require("chai").expect;

describe("Basic Tests", () => {
  it.only("Sum- should return correct output with positive values", () => {
    const result = myCalc.sum(10, 20);

    expect(result).to.be.equal(30);
  });
  it("Sub- should return correct output with positive values", () => {
    const result = myCalc.sub(30, 20);
    console.log(result);
    expect(result).to.be.equal(10);
  });
  it("Mul- should return correct output with positive values", () => {
    const result = myCalc.mul(3, 2);
    expect(result).to.be.equal(6);
  });
});
