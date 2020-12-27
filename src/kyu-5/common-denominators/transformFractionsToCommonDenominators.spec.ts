import { transformFractionsToCommonDenominator } from "./transformFractionsToCommonDenominators";

it("Basic test", () => {
  expect(
    transformFractionsToCommonDenominator([
      [1, 2],
      [1, 3],
      [1, 4],
    ])
  ).toStrictEqual("(6,12)(4,12)(3,12)");

  expect(
    transformFractionsToCommonDenominator([
      [1, 2],
      [4, 5],
      [3, 4],
      [6, 9],
      [7, 10],
    ])
  ).toStrictEqual("(30,60)(48,60)(45,60)(40,60)(42,60)");

  expect(transformFractionsToCommonDenominator([])).toStrictEqual("");
});
