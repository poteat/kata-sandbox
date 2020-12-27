import { chain } from "lodash";

/**
 * Given a string, remove all duplicate words, only leaving the first instance
 * of each word. Words are delimited by spaces.
 *
 * @param s String to remove duplicate words for.
 */
export function removeDuplicateWords(s: string) {
  return chain(s).split(" ").uniq().join(" ").value();
}
