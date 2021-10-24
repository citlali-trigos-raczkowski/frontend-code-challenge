import { isNotEmpty } from "@/helper-functions/format-strings";
import { LogStatusErrortype, LogGenericErrorType } from "@/types/api-types";

const consolethis = (value: string): void => console.log(value);

export const logStatusError = ({
  functionName,
  status,
  statusText,
  queryString,
}: LogStatusErrortype): void => {
  const queryInsert = isNotEmpty(queryString)
    ? `with query string ${queryString} `
    : "";
  consolethis(
    `Response status ${status} for ${functionName} ${queryInsert}. Status text: ${statusText} `
  );
};

export const logGenericError = ({
  errorMessage,
  functionName,
}: LogGenericErrorType): void => {
  consolethis(`Error found in ${functionName}: ${errorMessage}`);
};
