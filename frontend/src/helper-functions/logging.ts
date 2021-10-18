import { isNotEmpty } from "@/helper-functions/format-strings";

type logStatusErrortype = {
  functionName: string;
  status: number;
  statusText: string;
  queryString: string | null;
};

type logGenericErrorType = {
  errorMessage: string;
  functionName: string;
};

export const logStatusError = ({
  functionName,
  status,
  statusText,
  queryString,
}: logStatusErrortype): void => {
  const queryInsert = isNotEmpty(queryString)
    ? `with query string ${queryString} `
    : "";
  console.log(
    `Response status ${status} for ${functionName} ${queryInsert}. Status text: ${statusText} `
  );
};

export const logGenericError = ({
  errorMessage,
  functionName,
}: logGenericErrorType): void => {
  console.log(`Error found in ${functionName}: ${errorMessage}`);
};
