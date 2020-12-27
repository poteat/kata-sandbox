/**
 * Given an array, remove all duplicate entries, such that only one instance of
 * a given value will exist.
 *
 * @param array Array to remove duplicates in.
 */
export function unique<T>(array: T[]) {
  return [...new Set(array)];
}
