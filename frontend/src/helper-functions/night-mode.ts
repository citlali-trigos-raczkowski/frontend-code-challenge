export const getNightModeOn = (): boolean => {
  const value = document.documentElement.getAttribute("data-theme") === "dark";
  console.log("value: ", value);
  return value;
};

type NightModeType = "dark" | "light";

export const setNightMode = (modeValue: NightModeType): string => {
  document.documentElement.setAttribute("data-theme", modeValue);
  localStorage.setItem("theme", "dark");
  const nextOption = modeValue === "dark" ? "Light" : "Dark";
  return nextOption;
};
