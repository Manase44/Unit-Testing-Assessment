import { sciencesGrade } from "../scienceGrade.js";

describe("Science Subjects Grading", () => {
  test("should return A if score is between 70 and 100", () => {
    expect(sciencesGrade(80)).toBe("A");
  });
  test("should return B if score is between 60 and 69", () => {
    expect(sciencesGrade(65)).toBe("B");
  });
  test("should return C if score is between 50 and 59", () => {
    expect(sciencesGrade(56)).toBe("C");
  });
  test("should return D if score is between 40 and 49", () => {
    expect(sciencesGrade(43)).toBe("D");
  });
  test("should return Sup if score is between 0 and 39", () => {
    expect(sciencesGrade(17)).toBe("Sup");
  });
  test("should return Invalid score if score is greater than 100 and less than 0", () => {
    expect(sciencesGrade(200)).toBe("Invalid Score");
  });
});
