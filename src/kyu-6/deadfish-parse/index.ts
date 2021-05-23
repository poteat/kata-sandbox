type M = { v: number; out: number[] };

export function parse(data: string): number[] {
  return data
    .split("")
    .filter((c) => "idso".includes(c))
    .reduce<M>(
      (x, c) =>
        ({
          i: ({ v, out }: M) => ({ v: v + 1, out }),
          d: ({ v, out }: M) => ({ v: v - 1, out }),
          s: ({ v, out }: M) => ({ v: v * v, out }),
          o: ({ v, out }: M) => ({ v, out: [...out, v] }),
        }[c as "i" | "d" | "s" | "o"](x)),
      { v: 0, out: [] }
    ).out;
}
