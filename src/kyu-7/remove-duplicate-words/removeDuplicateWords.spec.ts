import { removeDuplicateWords } from "./removeDuplicateWords";

it("Basic test", () => {
  expect(
    removeDuplicateWords(
      "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    )
  ).toStrictEqual("alpha beta gamma delta");
});
