import { chain } from "lodash";

/**
 * Given a record of strings to numbers, find the key which corresponds to the
 * most minimal element. If there are multiple minimums, return the first. If
 * there exists no minimum, return undefined.
 *
 * @param record Record to find the minimal key from.
 */
export function minimalKey<T extends string>(record: Record<T, number>) {
  return chain(record)
    .map((value, key) => ({ value, key }))
    .minBy("value")
    .value().key as T;
}
