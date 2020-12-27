import { leastCommonMultiple } from "./leastCommonMultiple";

it("Basic test", () => {
  expect(leastCommonMultiple([2, 3, 4])).toStrictEqual(12);
});
