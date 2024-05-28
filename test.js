import { sciencesGrade } from "./scienceGrade.js";

const test = (object) => {
  console.log(sciencesGrade(object.eng));
};

test({
  name: "Dennis Doe",
  math: 80,
  eng: 65,
  kis: 101,
  phy: 67,
  che: 56,
  re: 89,
  comp: 82,
});
