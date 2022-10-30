export interface FetchProgramsParameters {
  meta: Meta;
  data: TVProgram[];
}

export interface Meta {
  status: number;
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  perPage: number;
  hasNext: boolean;
}

export interface TVProgram {
  id: number;
  title: string;
  imageLandscape: string;
  genres: string[];
  playProviders: Providers[];
  imdb: Rating;
}

export interface Rating {
  rating: string;
}

export interface Providers {
  name: string;
}
