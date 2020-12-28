import { minimalKey } from "../../utility/collection/boundaries/record/minimalKey";
import { countByParity } from "../../utility/collection/parity/counting/countByParity";
import { getParity } from "../../utility/number/parity/getParity";

/**
 * Given an array of integers, find the first element whose parity belongs to
 * the minority parity of the array. That is, if most elements are even, return
 * the first odd number. If there are no elements, return undefined.
 *
 * If there are an equal number of even and odd numbers, a number of arbitrary
 * parity is returned.
 *
 * @param array Array from which to find a parity outlier
 */
export function findParityOutlier(array: number[]) {
  const parityCount = countByParity(array);
  const mostCommonParity = minimalKey(parityCount);
  return array.find((x) => getParity(x) === mostCommonParity);
}
