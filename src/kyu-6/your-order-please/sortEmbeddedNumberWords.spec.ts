import { sortEmbeddedNumberWords } from "./sortEmbeddedNumberWords";

it("Basic test", () => {
  expect(sortEmbeddedNumberWords("is2 Thi1s T4est 3a")).toBe(
    "Thi1s is2 3a T4est"
  );
});
