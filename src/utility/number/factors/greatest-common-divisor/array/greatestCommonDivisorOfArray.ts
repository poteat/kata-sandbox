import { greatestCommonDivisor } from "../greatestCommonDivisor";

/**
 * Given an array of one or more elements, find the greatest common divisor of
 * every element in the array.
 *
 * @param array Array of numbers to calculate the GCD of.
 */
export function greatestCommonDivisorOfArray(array: number[]) {
  if (array.length === 0) {
    throw new Error(`Cannot calculate the GCD of an empty array.`);
  }

  return array.reduce(
    (previousGCD, x) => greatestCommonDivisor(previousGCD, x),
    array[0]
  );
}
