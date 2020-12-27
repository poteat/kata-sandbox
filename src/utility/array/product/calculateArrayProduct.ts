/**
 * Given two arrays, calculate the pair-wise product of each number, forming a
 * new array.
 *
 * @param array1 First array to multiply.
 * @param array2 Second array to multiply.
 */
export function calculateArrayProduct(array1: number[], array2: number[]) {
  if (array1.length !== array2.length) {
    throw new Error("Cannot multiply arrays of unequal length.");
  }

  return array1.map((x, i) => x * array2[i]);
}
