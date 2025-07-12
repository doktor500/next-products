import { capitalize } from "lodash";

export const format = (value: string) => {
  return capitalize(value.toLowerCase()).replace("_", " ");
};
