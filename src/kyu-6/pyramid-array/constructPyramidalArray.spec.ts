import { constructPyramidalArray } from "./constructPyramidalArray";

it("Basic test", () => {
  expect(constructPyramidalArray(0)).toStrictEqual([]);
  expect(constructPyramidalArray(1)).toStrictEqual([[1]]);
  expect(constructPyramidalArray(2)).toStrictEqual([[1], [1, 1]]);
});
