/**
 * Given an array, return whether or not the array is composed of elements which
 * are not equal, i.e. if there are two or more unique elements.
 *
 * @param array Array to determine unequality for.
 */
export function arrayHasUnequalElements<T>(array: T[]) {
  return [...new Set(array)].length > 1;
}
