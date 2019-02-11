function solve(examPoints, hwCompleted, totalHw) {
    if (examPoints >= 400) {
        let maxGrade = 6;
        console.log(maxGrade.toFixed(2));;
    } else {
        let maxPoints = 100;
        let totalPoints = (examPoints / 400) * 90;
        totalPoints += 10 * (hwCompleted / totalHw);
        if (totalPoints > maxPoints) {
            totalPoints = maxPoints;
        }
        let grade = 3 + 2 * ((totalPoints - maxPoints / 5) / (maxPoints / 2));
        if (grade < 3) {
            grade = 2;
        }else if(grade > 6){
            grade = 6;
        }
        console.log(grade.toFixed(2));
    }
}

solve(50000, 10, 10);