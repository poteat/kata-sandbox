type Filter<T extends unknown[], N> = T extends []
  ? []
  : T extends [infer H, ...infer R]
  ? H extends N
    ? Filter<R, N>
    : [H, ...Filter<R, N>]
  : T;

type Has<T extends unknown[], X> = X extends T[number] ? true : false;

export class Set<Elements extends number[] = []> {
  private elements: number[] = [];

  public insert<SpecificValue extends number>(
    x: SpecificValue
  ): asserts this is Has<
    this extends Set<infer E> ? E : never,
    SpecificValue
  > extends true
    ? Set<Elements>
    : Set<[...Elements, SpecificValue]> {
    this.elements.push(x);
  }

  public remove<SpecificValue extends number>(
    x: SpecificValue
  ): asserts this is Set<Filter<Elements, SpecificValue>> {
    this.elements = this.elements.filter((y) => x === y);
  }

  public has<SpecificValue extends number>(
    x: SpecificValue
  ): Has<this extends Set<infer E> ? E : never, SpecificValue> {
    return this.elements.includes(x) as any;
  }

  public value(): this extends Set<infer E> ? E : never {
    return this.elements as any;
  }
}

const set: Set = new Set();

set.insert(2);
set.insert(4);
set.insert(8);
set.remove(4);

const hasResult1 = set.has(8); // true

const hasResult2 = set.has(4); // false

const result = set.value(); // [2, 8]
