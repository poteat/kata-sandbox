import { chain, isInteger } from "lodash";

import { isOdd } from "../../utility/number/parity/isOdd";

/**
 * Given a list of numbers, find the first instance of an integer which appears
 * an odd number of times. If there is no such integer, return `undefined`.
 *
 * @param array Array of numbers
 */
export function findOddFrequencyInteger(array: number[]): number | undefined {
  return chain(array)
    .filter(isInteger)
    .countBy()
    .pickBy(isOdd)
    .keys()
    .map(Number)
    .head()
    .value();
}
