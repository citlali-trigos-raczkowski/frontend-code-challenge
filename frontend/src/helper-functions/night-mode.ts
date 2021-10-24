import { NightModeType } from "@/types/component-types";

export const getNightModeOn = (): boolean => {
  const value = document.documentElement.getAttribute("data-theme") === "dark";
  return value;
};

export const setNightMode = (modeValue: NightModeType): string => {
  document.documentElement.setAttribute("data-theme", modeValue);
  localStorage.setItem("theme", "dark");
  const nextOption = modeValue === "dark" ? "Light" : "Dark";
  return nextOption;
};
