import { countBy } from "lodash";

import { getParity } from "../../../number/parity/getParity";
import { ParityCount } from "../types/ParityCount";

/**
 * Given an array of integral numbers, return an accounting of the relative
 * amount of even and odd numbers in the array.
 *
 * @param array Array to count parity of.
 */
export function countByParity(array: number[]) {
  return countBy(array, getParity) as ParityCount;
}
