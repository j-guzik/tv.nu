import fetch from "node-fetch";
import { HttpError } from "../utils/HttpError";
import { NotFoundError } from "../utils/NotFound";
import { FetchProgramsParameters } from "../../models/models";

const API_URL = "https://stage-api-frontend.tv.nu/programs?";

async function fetchApi<T>(pathname: string, filter?: string) {
  const response = await fetch(`${pathname}${filter}`);

  if (response.status === 404) {
    throw new NotFoundError();
  }

  if (response.status >= 400) {
    throw new HttpError("Bad response", response.status);
  }

  return response.json() as Promise<T>;
}

async function fetchAllProgramsParameters(category: string) {
  return fetchApi<FetchProgramsParameters>(
    API_URL,
    ["orderBy=views", "programType=" + category].join("&")
  );
}

export { fetchAllProgramsParameters };
