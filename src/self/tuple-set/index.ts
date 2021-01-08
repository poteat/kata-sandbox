/* eslint-disable eslint-comments/disable-enable-pair */
/* We don't actually extend the global Set object, so false-positive: */
/* eslint-disable no-use-extend-native/no-use-extend-native */

/**
 * Filter out every element matching N in the tuple T.
 */
type Filter<T extends unknown[], N> = T extends []
  ? []
  : T extends [infer H, ...infer R]
  ? H extends N
    ? Filter<R, N>
    : [H, ...Filter<R, N>]
  : T;

/**
 * Determine whether any elements matching N exist in the tuple T. If we find
 * one, return early. (short-circuit)
 */
type Exists<T extends unknown[], E> = E extends T[number] ? true : false;

/**
 * The internal type associated with an instance of a Set.
 */
export type SetInstance<Elements extends number[] = []> = {
  insert<SpecificValue extends number>(
    x: SpecificValue
  ): SetInstance<[...Filter<Elements, SpecificValue>, SpecificValue]>;

  remove<SpecificValue extends number>(
    x: SpecificValue
  ): SetInstance<Filter<Elements, SpecificValue>>;

  has<SpecificValue extends number>(
    x: SpecificValue
  ): Exists<Elements, SpecificValue>;

  value(): Elements;
};

/**
 * The Set constructor type. We wrap the instance type in order to prevent
 * visibility of method function types before construction has occurred.
 */
export type Set = {
  new (): SetInstance;
};

/**
 * The Set runtime class implementation, devoid of higher-level types in order
 * to make the runtime code as clear as possible to read.
 */
const Set = (class {
  private set: number[] = [];

  public insert(x: number) {
    this.set = [...this.set.filter((y) => y !== x), x];
    return this;
  }

  public remove(x: number) {
    this.set = this.set.filter((y) => y !== x);
    return this;
  }

  public has(x: number) {
    this.set.includes(x);
    return this;
  }

  public value() {
    return [...this.set];
  }
} as unknown) as Set;

/**
 * --------------------------------------------------------------------------
 *   Examples / Driver Code
 * --------------------------------------------------------------------------*/

/**
 * Example 1: Tuple Insertion
 */
type Ex1_Original = [2, 4, 8];
type Ex1_NewElement = 10;
type Ex1_ResultantArray = [...Ex1_Original, Ex1_NewElement];

/**
 * Example 2: Type-level Set Insertion
 */
const Ex2 = new Set().insert(2).insert(4).value();

/**
 * Example 3: Tuple Removal
 */
type Ex3_Original = [2, 4, 8];
type Ex3_ResultantArray = Filter<Ex3_Original, 2>;

/**
 * Example 4: Type-level Set Removal
 */
const Ex4 = new Set().insert(2).insert(4).remove(2).value();

/**
 * Example 5: Type-level Element Existence Checks
 */
type Ex5_1 = [2, 4, 8];
type Ex5_1_HasFour = Exists<Ex5_1, 4>; // true

type Ex5_2 = number[];
type Ex5_2_HasFour = Exists<Ex5_1, 4>; // boolean

/**
 * Example 6: Type-level Set Existence Checking
 */
const Ex5_1 = new Set().insert(2).insert(4).insert(8).has(4); // true
const Ex5_2 = new Set().insert(2).remove(2).has(2); // false
