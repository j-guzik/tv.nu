import _ from "lodash";
import { TVProgram } from "../models/models";

export const sortProgramsByOrder = (
  programs: TVProgram[],
  order: boolean | "asc" | "desc"
) => {
  const orderBy = _.orderBy(programs, ["imdb"], [order]);
  return orderBy;
};
