/**
 * A type representing a numerical count of the parity of elements underlying
 * some structure. Each record has a non-negative integral value corresponding
 * to the amount of elements which possess the associated parity.
 */
export type ParityCount = {
  even: number;
  odd: number;
};
