type Impossible = never;

type AppendToLast<X extends string[], S extends string> = X extends [
  ...infer I,
  infer L
]
  ? L extends string
    ? [...I, `${L}${S}`]
    : Impossible
  : Impossible;

type Split<
  S extends string,
  D extends string,
  State extends string[] = [""]
> = S extends ""
  ? State
  : S extends `${infer C}${infer R}`
  ? C extends D
    ? Split<R, D, [...State, ""]>
    : Split<R, D, AppendToLast<State, C>>
  : Impossible;

export type SplitIncludingDelimiters<
  Source extends string,
  Delimiter extends string
> = Source extends ""
  ? []
  : Source extends `${infer FirstPart}${Delimiter}${infer SecondPart}`
  ? Source extends `${FirstPart}${infer UsedDelimiter}${SecondPart}`
    ? UsedDelimiter extends Delimiter
      ? Source extends `${infer FirstPart}${UsedDelimiter}${infer SecondPart}`
        ? [
            ...SplitIncludingDelimiters<FirstPart, Delimiter>,
            UsedDelimiter,
            ...SplitIncludingDelimiters<SecondPart, Delimiter>
          ]
        : never
      : never
    : never
  : [Source];

// type Foo = Split<"foor bar qux et al ignis dei", " ">;

type Bar = SplitIncludingDelimiters<
  "foor bar qux et al ignis dei foor bar quxcccccccccccczssssssssssssssssss",
  " "
>;
