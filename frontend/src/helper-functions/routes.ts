export const reRouteto = (pathName: string): void => {
  window.location.pathname = pathName;
};

export const getPathname = (): string => window.location.pathname;
