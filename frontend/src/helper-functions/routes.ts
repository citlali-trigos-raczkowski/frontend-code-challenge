export const reRouteto = (pathName: string): void => {
  window.location.assign(pathName);
};

export const getPathname = (): string => window.location.pathname;
