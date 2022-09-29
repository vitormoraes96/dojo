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

  it("must insert IIV and return 3", () => {
    expect(romanNumbers("IIV")).toBe(3);
  });

  it("must insert III and return 3", () => {
    expect(romanNumbers("III")).toBe(3);
  });

  it("must insert IIIV and return 2", () => {
    expect(romanNumbers("IIIV")).toBe(2);
  });

  it("must insert VII and return 7", () => {
    expect(romanNumbers("VII")).toBe(7);
  });

  it("must insert VIII and return 8", () => {
    expect(romanNumbers("VIII")).toBe(8);
  });

  it("must insert LXII  and return 62", () => {
    expect(romanNumbers("LXII")).toBe(62);
  });

  it("must insert CLVIII and return 158", () => {
    expect(romanNumbers("CLVIII")).toBe(158);
  });

  it("must insert MCXX and return 1120", () => {
    expect(romanNumbers("MCXX")).toBe(1120);
  });

  it("must insert IX  and return 9", () => {
    expect(romanNumbers("IX")).toBe(9);
  });

  it("must insert XC  and return 90", () => {
    expect(romanNumbers("XC")).toBe(90);
  });
});
