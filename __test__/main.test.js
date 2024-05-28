import { calculateGradesAndAverage } from "../main.js";



describe("Main testing", () => {
  test("Should trow error if no object is passed", () => {
    expect(calculateGradesAndAverage()).toUndefined();
  });
});
