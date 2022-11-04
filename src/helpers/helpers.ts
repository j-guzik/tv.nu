import _ from "lodash";
import { TVProgram } from "../models/types";

export const sortProgramsByOrder = (
  programs: TVProgram[],
  order: "asc" | "desc"
) => {
  const orderBy = _.orderBy(
    programs,
    (data) => {
      if (data.imdb === null) {
        if (order === "asc") {
          return 11;
        } else if (order === "desc") {
          return -1;
        }
      }
      return Number(data.imdb.rating);
    },
    [order]
  );

  return orderBy;
};
