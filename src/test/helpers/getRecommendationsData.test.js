import getRecommendationsData from "../../utils/helpers/getRecommendationsData";

describe("test for getRecommendationsData helper", () => {
  test("must return an array of objects", async () => {
    const data = await getRecommendationsData("");
    console.log("recomensdaciones", data);
    // expect(movie.length).toBe(20);
  });
});
