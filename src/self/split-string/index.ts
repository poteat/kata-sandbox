export type Split<S extends string> = S extends ""
  ? []
  : S extends `${infer C}${infer R}`
  ? [C, ...Split<R>]
  : never;

export type Join<T extends string[]> = T extends []
  ? ""
  : T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? `${Head}${Join<Tail extends string[] ? Tail : []>}`
    : never
  : never;

const join = (x: string[]): string =>
  x.length === 0 ? "" : `${x[0]}${join(x.slice(1))}`;

export type Invert<T extends Record<string, unknown>> = {
  [key in keyof T as T[key] extends string ? T[key] : never]: T[key];
};

export type Unique<
  T extends string[],
  R extends Record<string, string> = {},
  O extends string[] = []
> = T extends []
  ? O
  : T extends [infer Head, ...infer Tail]
  ? Unique<
      Tail extends string[] ? Tail : [],
      R & Invert<{ _: Head }>,
      Head extends string ? (R[Head] extends string ? O : [...O, Head]) : []
    >
  : never;

export type DedupeString<S extends string> = Join<Unique<Split<S>>>;

export type Result = DedupeString<"qufoobarqux">;
