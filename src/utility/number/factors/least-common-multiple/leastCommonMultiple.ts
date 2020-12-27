import { times } from "lodash";

import { findMinimalIndex } from "../../../array/boundaries/search/findMinimalIndex";
import { arrayHasUnequalElements } from "../../../array/equality/arrayHasUnequalElements";
import { calculateArrayProduct } from "../../../array/product/calculateArrayProduct";

/**
 * Given an array of integers, find the least common multiple. The LCM is the
 * smallest number that every constituent number may be multiplied to, given an
 * integral multiplier.
 *
 * e.g. [3, 5] => 15
 *      [2, 3, 4] => 12
 *
 * To do this, we use an efficient and simple method of successively increasing
 * multipliers until we find a set of multipliers that all result in the same
 * number, e.g.
 *
 *  [2, 3, 4] ** [1, 1, 1] => [2, 3, 4]
 *               [2, 1, 1] => [4, 3, 4]
 *               [2, 2, 1] => [4, 6, 4]
 *               [3, 2, 1] => [6, 6, 4]
 *               [3, 2, 2] => [6, 6, 8]
 *               [4, 2, 2] => [8, 6, 8]
 *               [4, 3, 2] => [8, 9, 8]
 *               [5, 3, 2] => [10, 9, 8]
 *               [5, 3, 3] => [10, 9, 12]
 *               [5, 4, 3] => [10, 12, 12]
 *               [6, 4, 3] => [12, 12, 12] **
 *
 * Non-integral or non-positive numbers are rejected to prevent infinite loop.
 *
 * @param array Array of numbers to find the LCM of.
 */
export function leastCommonMultiple(array: number[]) {
  if (array.length === 0) {
    throw new Error(`Cannot compute the LCM of an empty array.`);
  }

  if (!array.every((x) => Number.isSafeInteger(x) && x > 0)) {
    throw new Error(
      `Cannot compute the LCM of non-integral or non-positive numbers.`
    );
  }

  const scalars = times(array.length, () => 1);

  let arrayProduct: number[];

  while (
    ((arrayProduct = calculateArrayProduct(array, scalars)),
    arrayHasUnequalElements(arrayProduct))
  ) {
    const minimalIndex = findMinimalIndex(arrayProduct);
    scalars[minimalIndex]++;
  }

  return arrayProduct[0];
}
