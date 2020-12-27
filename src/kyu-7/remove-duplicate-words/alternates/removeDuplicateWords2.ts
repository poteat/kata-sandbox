import { unique } from "../../../utility/array/uniqueness/unique";

/**
 * Given a string, remove all duplicate words, only leaving the first instance
 * of each word. Words are delimited by spaces.
 *
 * @param s String to remove duplicate words for.
 */

export function removeDuplicateWordsAlternate(s: string) {
  return unique(s.split(" ")).join(" ");
}
