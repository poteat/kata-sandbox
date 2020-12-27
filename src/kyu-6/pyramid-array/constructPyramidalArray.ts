import { times } from "lodash";

/**
 * Given a non-negative integer N, construct an array composed of N elements,
 * whereby each of those elements is an array of (i + 1) size, where i is the
 * index of the current element. Each sub-array is composed of the number one.
 *
 * e.g.
 *  0 => []
 *  1 => [[1]]
 *  2 => [[1], [1,1]]
 * etc.
 *
 * @param n Non-negative integer representing the length of the resultant array.
 */
export function constructPyramidalArray(n: number) {
  return times(n, (i) => times(i + 1, () => 1));
}
