export const languagesAndCompStudiesGrade = (score) => {

    let grade;

    if (score <= 100 && score >= 75) {
        grade = "A";
    } else if (score <=74 && score >= 65) {
        grade = "B";
    } else if (score <=64 && score >= 55) {
        grade = "C";
    } else if (score <=54 && score >= 45) {
        grade = "Pass";
    } else if (score >= 0 && score <= 44){
        grade = "Sup"
    } else {
        grade = "Invalid Score"
    }
    return grade;
}

languagesAndCompStudiesGrade(80)