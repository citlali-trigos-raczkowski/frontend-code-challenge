import { removeSlashes, isNotEmpty } from "../format-strings";
import {
  TestingIsNotEmptyType,
  TestingRemoveSlashesType,
} from "../../types/test-types";

const testingRemoveSlashes: TestingRemoveSlashesType[] = [
  { input: "///", expectedOutput: "" },
  { input: "a/b/c", expectedOutput: "abc" },
  { input: " a b / c", expectedOutput: " a b  c" },
  { input: "/pokemon//", expectedOutput: "pokemon" },
];

const testingIsNotEmpty: TestingIsNotEmptyType[] = [
  { input: "hello", expectedOutput: true },
  { input: " ", expectedOutput: false },
  { input: null, expectedOutput: false },
  { input: "", expectedOutput: false },
];

test("Fn removeSlashes returns expected values", () => {
  testingRemoveSlashes.forEach((test: TestingRemoveSlashesType) => {
    expect(removeSlashes(test.input)).toEqual(test.expectedOutput);
  });
});

test("Fn isNotEmpty returns expected values", () => {
  testingIsNotEmpty.forEach((test: TestingIsNotEmptyType) => {
    expect(isNotEmpty(test.input)).toEqual(test.expectedOutput);
  });
});
