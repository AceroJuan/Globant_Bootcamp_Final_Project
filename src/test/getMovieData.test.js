import getMovieData from "../utils/helpers/getMovieData";

describe("test for getMovieData helper", () => {
  test("must return an url for a image", async () => {
    const url = await getMovieData();
    console.log("test movie data", url);
    const actual = { name: "component name", type: "form" };
    expect(url).toMatchObject(actual);
  });
});
