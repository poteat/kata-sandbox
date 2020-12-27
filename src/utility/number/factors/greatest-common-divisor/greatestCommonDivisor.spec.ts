import { greatestCommonDivisor } from "./greatestCommonDivisor";

it("Basic test", () => {
  expect(greatestCommonDivisor(32, 64)).toStrictEqual(32);
  expect(greatestCommonDivisor(3, 4)).toStrictEqual(1);
});
