import { languagesAndCompStudiesGrade } from "../languagesCompGrade.js";

describe("Languages / Computer Studies Grade", () => {
  test("should return A if the score is between 75 and 100", () => {
    expect(languagesAndCompStudiesGrade(82)).toBe("A");
  });
  test("should return B if the score is between 65 and 74", () => {
    expect(languagesAndCompStudiesGrade(66)).toBe("B");
  });
  test("should return C if the score is between 55 and 64", () => {
    expect(languagesAndCompStudiesGrade(60)).toBe("C");
  });
  test("should return Pass if the score is between 45 and 54", () => {
    expect(languagesAndCompStudiesGrade(50)).toBe("Pass");
  });
  test("should return Sup if the score is below 45", () => {
    expect(languagesAndCompStudiesGrade(20)).toBe("Sup");
  });
  test("should return Invalid Score if the score is above 100 and below 0", () => {
    expect(languagesAndCompStudiesGrade(-45)).toBe("Invalid Score");
  });
});
