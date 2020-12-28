import { getParity } from "../getParity";

/**
 * Given a number, return whether or not that number is odd.
 *
 * @param x Number to determine oddness for.
 */
export function isOdd(x: number) {
  return getParity(x) === "odd";
}
