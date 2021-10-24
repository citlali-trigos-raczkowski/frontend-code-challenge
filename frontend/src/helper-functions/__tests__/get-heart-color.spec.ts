import { getHeartColor } from "../get-heart-color";

import { TestingGetHeartColorType } from "../../types/test-types";

const testingGetHeartColor: TestingGetHeartColorType[] = [
  { input: false, expectedOutput: "gray" },
  { input: true, expectedOutput: "pink" },
];

test("Fn getHeartColor returns expected values", () => {
  testingGetHeartColor.forEach((test: TestingGetHeartColorType) => {
    expect(getHeartColor(test.input)).toEqual(test.expectedOutput);
  });
});
