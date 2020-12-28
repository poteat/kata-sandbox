/**
 * Given an integral number, return the parity, i.e. evenness or oddness.
 *
 * Non-integral numbers result in an error being thrown.
 *
 * @param x Number to determine parity for.
 */
export function getParity(x: number) {
  if (!Number.isSafeInteger(x)) {
    throw new TypeError(`Cannot calculate parity of non-integral number.`);
  }

  return x % 2 === 0 ? "even" : "odd";
}
