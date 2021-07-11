import getCreditsData from "../../utils/helpers/getCreditsData";

describe("test for getCreditsData helper", () => {
  test("must return an array of objects", async () => {
    const credits = await getCreditsData();
    expect(credits.id).toBe();
  });
});
