import { calculateAverage } from "../AvgPts.js";

describe("Calculating Average", () => {
  test("should return the average as integer", () => {
    expect(calculateAverage(1, 2, 3, 4, 5, 6, 8)).toBe(4);
  });
});
