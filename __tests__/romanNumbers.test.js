import romanNumbers from "../src/romanNumbers";

describe("Roman Numbers", () => {
  it("must insert I and return 1", () => {
    expect(romanNumbers("I")).toBe(1);
  });

  it("must insert V and return 5", () => {
    expect(romanNumbers("V")).toBe(5);
  });

  it("must insert II and return 2", () => {
    expect(romanNumbers("II")).toBe(2);
  });

  it("must insert VI and return 6", () => {
    expect(romanNumbers("VI")).toBe(6);
  });

  it("must insert IV and return 4", () => {
    expect(romanNumbers("IV")).toBe(4);
  });
});
