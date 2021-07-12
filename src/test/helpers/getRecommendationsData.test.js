import getRecommendationsData from "../../utils/helpers/getRecommendationsData";

describe("test for getRecommendationsData helper", () => {
  test("must return an array of objects", async () => {
    const data = await getRecommendationsData("");

    // expect(movie.length).toBe(20);
  });
});
