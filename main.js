import { languagesAndCompStudiesGrade } from "./languagesCompGrade.js";
import { religiousStudiesGrade } from "./religiousStudiesGrade.js";
import { sciencesGrade } from "./scienceGrade.js";
import { calculateAverage } from "./AvgPts.js";

export const calculateGradesAndAverage = (input) => {
  let Mathematics = sciencesGrade(input.math);
  let English = languagesAndCompStudiesGrade(input.eng);
  let Kiswahili = languagesAndCompStudiesGrade(input.kis);
  let Physics = sciencesGrade(input.phy);
  let Chemistry = sciencesGrade(input.che);
  let ReligiousStudies = religiousStudiesGrade(input.re);
  let Computer = languagesAndCompStudiesGrade(input.comp);

  let AveragePoints = calculateAverage(
    input.math,
    input.eng,
    input.kis,
    input.phy,
    input.che,
    input.re,
    input.comp,
  );

  return {
    name: input.name,
    Math: Mathematics,
    Eng: English,
    Kis: Kiswahili,
    Phy: Physics,
    Che: Chemistry,
    Re: ReligiousStudies,
    Comp: Computer,
    AvgPts: AveragePoints,
  };
};

console.log(
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
);
