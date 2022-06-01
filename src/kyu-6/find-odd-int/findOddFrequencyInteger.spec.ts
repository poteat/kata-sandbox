import { findOddFrequencyInteger } from "./findOddFrequencyInteger";

it("Basic test", () => {
  expect(
    findOddFrequencyInteger([
      20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
    ])
  ).toBe(5);
});
