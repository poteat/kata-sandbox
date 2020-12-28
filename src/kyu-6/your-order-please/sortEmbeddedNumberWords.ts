import { chain } from "lodash";

/**
 * Given a string, return the first instance of a consecutive series of numbers
 * forming a non-negative integer. If no such instance exists, return undefined.
 *
 * @param s String from which to extract an integer.
 */
export function extractInteger(s: string) {
  return ((x) => (x ? Number(x[0]) : undefined))(s.match(/\d+/));
}

/**
 * Given a string of space-delimited words, whereby each word is embedded with
 * a numeral, sort those words into a new collection of words in increasing
 * order of the embedded numeral. Each numeral is an positive integer.
 *
 * The embedded numerals must be preserved.
 *
 * e.g. "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
 *
 * @param s String composed of words to sort via embedded numerals.
 */
export function sortEmbeddedNumberWords(s: string) {
  return chain(s)
    .split(" ")
    .map((word) => ({ word, numeral: extractInteger(word) }))
    .sortBy("numeral")
    .map("word")
    .join(" ")
    .value();
}
