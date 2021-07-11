import getPersonData from "../../utils/helpers/getPersonData";

describe("test for getPersonData helper", () => {
  test("must return Scarlett Johansson id", async () => {
    const person = await getPersonData(1245);
    expect(person.id).toBe(1245);
  });
});
