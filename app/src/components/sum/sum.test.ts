import sum from "./sum";

describe("Sum", () => {
  it("should sum numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
