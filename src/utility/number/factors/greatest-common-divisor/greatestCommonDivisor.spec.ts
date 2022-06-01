import { greatestCommonDivisor } from "./greatestCommonDivisor";

it("Basic test", () => {
  expect(greatestCommonDivisor(32, 64)).toBe(32);
  expect(greatestCommonDivisor(3, 4)).toBe(1);
});
