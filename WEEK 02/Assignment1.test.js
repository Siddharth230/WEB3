// Unit test for DecimalToBinary function
const DecimalToBinary = require("./Assignment1.js");

test("DecimalToBinary should return 0 for binary input '0'", () => {
  expect(DecimalToBinary("0")).toBe(0);
});

test("DecimalToBinary should return 1 for binary input '1'", () => {
  expect(DecimalToBinary("1")).toBe(1);
});

test("DecimalToBinary should return 255 for binary input 11111111", () => {
  expect(DecimalToBinary("11111111")).toBe(255);
});
