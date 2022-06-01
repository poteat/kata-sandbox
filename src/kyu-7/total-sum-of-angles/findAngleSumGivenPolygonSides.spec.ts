import { findAngleSumGivenPolygonSides } from "./findAngleSumGivenPolygonSides";

it("Basic test", () => {
  expect(findAngleSumGivenPolygonSides(3)).toBe(180);
  expect(findAngleSumGivenPolygonSides(4)).toBe(360);

  expect(() => findAngleSumGivenPolygonSides(2)).toThrow();
});
