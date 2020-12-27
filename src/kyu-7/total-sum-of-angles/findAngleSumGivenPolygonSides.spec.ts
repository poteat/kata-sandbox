import { findAngleSumGivenPolygonSides } from "./findAngleSumGivenPolygonSides";

it("Basic test", () => {
  expect(findAngleSumGivenPolygonSides(3)).toStrictEqual(180);
  expect(findAngleSumGivenPolygonSides(4)).toStrictEqual(360);

  expect(() => findAngleSumGivenPolygonSides(2)).toThrow();
});
