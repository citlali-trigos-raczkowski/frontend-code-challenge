import { createPokemonTypeList, getFilterValue } from "../format-pokemon-types";
import {
  TestingGetFilterType,
  TestingCreatePokemonType,
} from "../../types/test-types";

const testingGetfilterValues: TestingGetFilterType[] = [
  { input: "hello", expectedOutput: "hello" },
  { input: "", expectedOutput: "all" },
  { input: null, expectedOutput: "all" },
];

const baseExpectedOutput = [
  {
    text: "No Filter",
    value: "all",
  },
  {
    text: "Filter by type",
    value: null,
    disabled: true,
  },
];
const testingCreatePokemonTypeList: TestingCreatePokemonType[] = [
  {
    input: ["fire", "water"],
    expectedOutput: [
      ...baseExpectedOutput,
      { text: "fire", value: "fire" },
      { text: "water", value: "water" },
    ],
  },
  { input: [], expectedOutput: baseExpectedOutput },
];

test("Fn testingCreatePokemonTypeList returns expected values", () => {
  testingCreatePokemonTypeList.forEach((test: TestingCreatePokemonType) => {
    expect(createPokemonTypeList(test.input)).toEqual(
      expect.arrayContaining(test.expectedOutput)
    );
  });
});

test("Fn getFilterValue returns expected values", () => {
  testingGetfilterValues.forEach((test: TestingGetFilterType) => {
    expect(getFilterValue(test.input)).toEqual(test.expectedOutput);
  });
});
