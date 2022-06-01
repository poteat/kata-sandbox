export function parse(data: string): number[] {
  let v = 0;
  const ret: number[] = [];

  [...data]
    .filter((c) => "idso".includes(c))
    .forEach((x) => {
      switch (x) {
        case "i":
          v++;
          break;

        case "d":
          v--;
          break;

        case "s":
          v *= v;
          break;

        case "o":
          ret.push(v);
          break;
      }
    });
  return ret;
}
