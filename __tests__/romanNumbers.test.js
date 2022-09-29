import romanNumbers from "../src/romanNumbers";

describe("Roman Numbers", () => {
  it("must insert I and return 1", () => {
    expect(romanNumbers("I")).toBe(1);
  });
});
