import "@testing-library/jest-dom/extend-expect";
import { sortProgramsByOrder } from "../helpers/helpers";
import { programs } from "../models/mock";

describe("sort programs", () => {
  test("should return sorted articles by date ascending", () => {
    const sortedPrograms = sortProgramsByOrder(programs, "asc");

    expect(Number(sortedPrograms[0].imdb.rating)).toBeLessThan(
      Number(sortedPrograms[1].imdb.rating)
    );
  });

  test("should return sorted articles by date descending", () => {
    const sortedPrograms = sortProgramsByOrder(programs, "desc");

    expect(Number(sortedPrograms[0].imdb.rating)).toBeGreaterThan(
      Number(sortedPrograms[1].imdb.rating)
    );
  });
});
