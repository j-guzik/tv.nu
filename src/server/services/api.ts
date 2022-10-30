import fetch from "node-fetch";
import { HttpError } from "../utils/HttpError";
import { NotFoundError } from "../utils/NotFound";
import { FetchProgramsParameters } from "../../models/models";

const API_URL = "https://stage-api-frontend.tv.nu/programs?";

async function fetchApi<T>(pathname: string, filter?: string, limit?: number) {
  const response = await fetch(`${pathname}${filter}${limit}`);

  if (response.status === 404) {
    throw new NotFoundError();
  }

  if (response.status >= 400) {
    throw new HttpError("Bad response", response.status);
  }

  return response.json() as Promise<T>;
}

async function fetchAllProgramsParameters() {
  return fetchApi<FetchProgramsParameters>(
    API_URL,
    ["orderBy=views", "programType=movie,series"].join("&")
  );
}

export { fetchAllProgramsParameters };
