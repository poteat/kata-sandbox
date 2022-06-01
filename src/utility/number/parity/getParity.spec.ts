import { getParity } from "./getParity";

it("Basic test", () => {
  expect(getParity(1)).toBe("odd");
  expect(getParity(2)).toBe("even");
});

it("Error test", () => {
  expect(() => getParity(NaN)).toThrow();
});
