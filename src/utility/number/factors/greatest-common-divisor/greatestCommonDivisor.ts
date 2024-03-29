import { isSafeInteger } from "lodash";

/**
 * Given two integers, compute the largest number which divides both of them
 * equally, i.e. results in an integral number.
 *
 * @param a First number to find GCD of.
 * @param b Second number to find GCD of.
 */
export function greatestCommonDivisor(a: number, b: number) {
  if (![a, b].every((x) => isSafeInteger(x) && x > 0)) {
    throw new Error(
      `Cannot get the GCD of non-integral or non-positive numbers`
    );
  }

  const gcd = (a: number, b: number): number => {
    const min = Math.min(a, b);
    const remainder = a > b ? a : b % min;

    return remainder ? gcd(min, remainder) : a;
  };

  return gcd(a, b);
}
