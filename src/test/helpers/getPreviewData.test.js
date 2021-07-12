import getPreviewData from "../../utils/helpers/getPreviewData";

describe("test for getPreviewData helper", () => {
  test("must return an object", async () => {
    const preview = await getPreviewData("");
    expect(preview.id).toBe(84958);
  });
});
