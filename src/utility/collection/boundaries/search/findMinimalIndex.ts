/**
 * Given an array of numbers, find the index associated with the smallest
 * number. If multiple smallest numbers exist, return the first - if no smallest
 * number exists, return -1.
 *
 * @param array Array of numbers to determine the index of the smallest element.
 */
export function findMinimalIndex(array: number[]) {
  const min = Math.min(...array);
  return array.indexOf(min);
}
