export const removeSlashes = (inputString: string): string =>
  inputString.replace(/\\|\//g, "");

export const isNotEmpty = (inputString: string | null): boolean => {
  if (inputString && inputString.trim()) return true;
  return false;
};
