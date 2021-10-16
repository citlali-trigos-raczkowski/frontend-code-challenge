export const RemoveSlashes = (inputString: string): string =>
  inputString.replace(/\\|\//g, "");
