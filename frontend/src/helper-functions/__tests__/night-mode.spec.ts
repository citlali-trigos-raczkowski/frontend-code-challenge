import { getNightModeOn, setNightMode } from "../night-mode";

test("Fn getNightModeOn and setNightMode work as expected", () => {
  const nextOption = setNightMode("dark");
  expect(nextOption).toEqual("Light");
  expect(getNightModeOn()).toEqual(true);

  const followingOption = setNightMode("light");
  expect(followingOption).toEqual("Dark");
  expect(getNightModeOn()).toEqual(false);
});
