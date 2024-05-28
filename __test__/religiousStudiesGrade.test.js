import { religiousStudiesGrade } from "../religiousStudiesGrade.js";

describe("Religious Studies Grading", () => {
  test("should return A if score is between 80 and 100", () => {
    expect(religiousStudiesGrade(85)).toBe("A");
  });
  test("should return B if score is between 70 and 79", () => {
    expect(religiousStudiesGrade(75)).toBe("B");
  });
  test("should return C if score is between 60 and 69", () => {
    expect(religiousStudiesGrade(66)).toBe("C");
  });
  test("should return Pass if score is between 50 and 59", () => {
    expect(religiousStudiesGrade(57)).toBe("Pass");
  });
  test("should return Sup if score is below 50", () => {
    expect(religiousStudiesGrade(17)).toBe("Sup");
  });
  test("should return Invalid score if score is greater than 100 and less than 0", () => {
    expect(religiousStudiesGrade(200)).toBe("Invalid Score");
  });
});
