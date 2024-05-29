import { calculateGradesAndAverage } from "../main.js";

describe("Main testing", () => {
  test("Should return an object with the name, the grade, and the average points", () => {
    expect(
      calculateGradesAndAverage({
        name: "Dennis Doe",
        math: 80,
        eng: 65,
        kis: 48,
        phy: 67,
        che: 56,
        re: 89,
        comp: 82,
      }),
    ).toEqual({
      name: "Dennis Doe",
      Math: "A",
      Eng: "B",
      Kis: "Pass",
      Phy: "B",
      Che: "C",
      Re: "A",
      Comp: "A",
      AvgPts: 69,
    });
  });
});
