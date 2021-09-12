import sumStr from "./sumWords";

test("turn two stings into numbers and add them together", () => {
  expect(sumStr("2", "6")).toBe(8);
});
