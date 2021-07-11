import getPeopleData from "../../utils/helpers/getPeopleData";

describe("test for getPeopleData helper", () => {
  test("must return an array of objects", async () => {
    const people = await getPeopleData("");
    expect(people.length).toBe(20);
  });
});
