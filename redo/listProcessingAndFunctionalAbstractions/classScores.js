/*
  GOAL: given an object of student scores, create a summary for the class

  INPUT: Object of student objects
  OUTPUT: object with student grades and exam averages

  RULES:
    Exams:
      each student has 4 exam scores
      each exam is out of 100
      exam total counts for 65% of grade
    Exercises:
      Number of exercises varies, but sum is always out of 100
      exercise total counts for 35% of grade
    Class summary:
      Need to generate average, max, and min for each exam
      student grades are reported "number (letter grade)"

  DATA STRUCTURES/ALGORITHM
    Kind of problem? 
      Reduction - turning a student record into a final score
                - turning a bunch of student scores into an array of scores
    Helper methods would I like
      calculateStudentGrade
        iterate through students in student score object
        add exams up and divide by 4
        add exercises up
        add exams multiplied by .65 to exercises multiplied by .35
        round
        look up exam letter
        return formatted number with letter
      getExamLetter
        INPUT: integer
        OUTPUT: letter
      calculateExamStatistics
      
    initialize array for studentGrades
    initialize array for examStatistics

*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = calculateStudentGrades(scores);
  return studentGrades;
}

function calculateStudentGrades(scores) {
  let studentGrades = [];
  Object.keys(scores).forEach(student => {
    let exams = scores[student]['scores']['exams'];
    let examTotal = exams.reduce((total, exam) => total + exam);
    let examAverage = examTotal / 4;
    let examWeighted = examAverage * .65;

    let exercises = scores[student]['scores']['exercises'];
    let exerciseTotal = exercises.reduce((total, exercise) => exercise + total);
    let exerciseWeighted = exerciseTotal * .35

    let numberGrade = Math.round(examWeighted + exerciseWeighted);
    let letterGrade = getLetterGrade(numberGrade);
    studentGrades.push(`${numberGrade} (${letterGrade})`);

  });

    return studentGrades;
}

function getLetterGrade(numberGrade) {
  if (numberGrade >= 93) {
    return 'A';
  } else if (numberGrade >= 85) {
    return 'B';
  } else if (numberGrade >= 77) {
    return 'C';
  } else if (numberGrade >= 69) {
    return 'D';
  } else if (numberGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
