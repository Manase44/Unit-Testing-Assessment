export const sciencesGrade = (score) => {
    
    let grade;
    
    if (score <= 100 && score >= 70) {
        grade = "A";
    } else if (score <=69 && score >= 60) {
        grade = "B";
    } else if (score <=59 && score >= 50) {
        grade = "C";
    } else if (score <=49 && score >= 40) {
        grade = "D";
    } else if (score >= 0 && score <= 39){
        grade = "Sup"
    } else {
        grade = "Invalid Score"
    }
    return grade;
}

