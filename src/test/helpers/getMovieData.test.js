import getMovieData from "../../utils/helpers/getMovieData";

describe("test for getMovieData helper", () => {
  test("must return an array of objects", async () => {
    const movie = await getMovieData("");
    expect(movie.length).toBe(20);
  });
});
