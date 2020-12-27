import { greatestCommonDivisorOfArray } from "../../utility/number/factors/greatest-common-divisor/array/greatestCommonDivisorOfArray";
import { leastCommonMultiple } from "../../utility/number/factors/least-common-multiple/leastCommonMultiple";
import { Fraction } from "./types/Fraction";

/**
 * Given an array of fractions, rewrite all fractions to have a common
 * denominator, such that none of the underlying numerical values are changed.
 *
 * For an array of fractions, the final denominator will be least common
 * multiple of all constituent denominators.
 *
 * Returns fractions as a string, e.g.
 *  [[1, 2], [1, 3], [1, 4]] => "(6,12)(4,12)(3,12)"
 *
 * We first scale up the fractions via finding the least common multiple of the
 * denominators. We then perform a final reduction via dividing by the greatest
 * common divisor of every numerator (and the remaining one denominator).
 *
 * This last reduction step is necessary to transform the fractions into
 * irreducible form.
 *
 * @param fractions Array of fractions to transform.
 */
export function transformFractionsToCommonDenominator(fractions: Fraction[]) {
  if (fractions.length === 0) {
    return "";
  }

  const lcm = leastCommonMultiple(fractions.map((x) => x[1]));

  const scaledUpFractions = fractions.map(([numerator, denominator]) => {
    const scale = lcm / denominator;
    return [numerator * scale, denominator * scale];
  });

  const finalDivisor = greatestCommonDivisorOfArray([
    ...scaledUpFractions.map((x) => x[0]),
    lcm,
  ]);

  return scaledUpFractions
    .map(([numerator, denominator]) => [
      numerator / finalDivisor,
      denominator / finalDivisor,
    ])
    .map((x) => `(${x.join(",")})`)
    .join("");
}
