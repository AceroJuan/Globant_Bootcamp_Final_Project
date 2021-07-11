import getTvShowsData from "../../utils/helpers/getTvShowsData";

describe("test for getTvShowsData helper", () => {
  test("must return an array of objects", async () => {
    const tvShow = await getTvShowsData("");
    expect(tvShow.length).toBe(20);
  });
});
