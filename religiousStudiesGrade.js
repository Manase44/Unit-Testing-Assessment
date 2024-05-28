export const religiousStudiesGrade = (score) => {
  let grade;

  if (score <= 100 && score >= 80) {
    grade = "A";
  } else if (score <= 79 && score >= 70) {
    grade = "B";
  } else if (score <= 69 && score >= 60) {
    grade = "C";
  } else if (score <= 59 && score >= 50) {
    grade = "Pass";
  } else if (score >= 0 && score <= 49) {
    grade = "Sup";
  } else {
    grade = "Invalid Score";
  }
  return grade;
};
