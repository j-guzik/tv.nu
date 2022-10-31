import { TVProgram } from "../models/models";
import { fetchAllProgramsParameters } from "../server/services/api";

export const getAllPrograms = async (category: string) => {
  const { data } = await fetchAllProgramsParameters(category);
  const programs: TVProgram[] = data.map((program) => {
    return {
      id: program.id,
      title: program.title,
      imageLandscape: program.imageLandscape,
      genres: program.genres,
      playProviders: program.playProviders,
      imdb: program.imdb,
    };
  });

  return programs;
};
