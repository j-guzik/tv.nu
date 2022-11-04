export type FetchProgramsParameters = {
  meta: Meta;
  data: TVProgram[];
};

export type Meta = {
  status: number;
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  perPage: number;
  hasNext: boolean;
};

export type TVProgram = {
  id: string;
  title: string;
  imageLandscape: string;
  genres: string[];
  playProviders: Providers[];
  imdb: Rating;
};

export type Rating = {
  rating: string;
};

export type Providers = {
  name: string;
};
