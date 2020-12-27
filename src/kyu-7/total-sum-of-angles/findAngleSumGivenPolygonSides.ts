import { isSafeInteger } from "lodash";

/**
 * Given the number of sides of a two-dimensional polygon, return the total sum
 * of all interior angles.
 *
 * @param numberOfSides Numbers of sides to determine sum interior angle for.
 */
export function findAngleSumGivenPolygonSides(numberOfSides: number) {
  if (numberOfSides < 3 || !isSafeInteger(numberOfSides)) {
    throw new Error(`Cannot construct 2d polygon with ${numberOfSides} sides.`);
  }

  return (numberOfSides - 2) * 180;
}
