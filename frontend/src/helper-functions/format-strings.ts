export const RemoveSlashes = (inputString: string): string =>
  inputString.replace(/\\|\//g, "");

export const isNotEmpty = (inputString: string | null): boolean => {
  return inputString ? inputString.length !== 0 : false;
};
