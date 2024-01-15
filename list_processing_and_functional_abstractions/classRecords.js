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

/*
 * GOAL: given student records, calculate student grades and summary
 * information for each exam
 *
 * INPUT: Object with students as keys and student data as values
 * - further, student data is an object with id and scores as keys
 *   score's value is an object with exams and exercises as keys, and
 *   arrays of scores as values
 *
 * OUTPUT: class Records object with 2 keys: studentGrades and Exams
 *          - studentGrades: array of student grades in order
 *          - exams: array of objects with data on each exam
 *
 * RULES:
 *  EXPLICIT
 *  - exercises can be any number, but sum total will always be out of 100
 *  - There are always 4 exams, each with a fixed score of 100
 *  - weighting is 65% exams, 35% exercises
 *  - Letter Grades:
 *      A: 93-100
 *      B: 85-92
 *      C: 77-84
 *      D: 69-76
 *      E: 60-68
 *      F: 0-59
 *  - Report student's grade as "Number (letter)", so "93 (A)"
 *
 *  IMPLICIT
 *  - Exam summary data is: Average, min, max
 *  - do not modify original object
 *
 *  DATA STRUCTURES
 *    - sub array for student grades
 *    - sub objects for exam data
 *
 *  ALGORITHM
 *    - What kind of problem?
 *      - Exercises: reduce all exercises to total score out of 100
 *      - Exams: transform 4 exam scores into single average for student
 *      - Exams: Compute average, min, and max
 *      - Student Data: Transform given student data into array of student grades
 *
 *    - What helper methods do I want?
 *      - studentExamAverage
 *        - given array of exams, compute the average
 *        - reduce exams to sum
 *        - divide sum by length of exam array
 *        - return that value
 *      - studentExerciseTotal
 *        - given an array of exercise values, reduce them to a single sum
 *      - computeStudentGrade
 *        - Given an exam average and an exercise total, apply weights
 *        and round result to come up with student grade
 *      - formatStudentGrade
 *        - Given an integer, return a formatted grade "87 (B)"
 *      - compute exam statistics
 *        - given array of exam numbers
 *            compute average
 *            find min, max
 *        - return object with average, min, max
 *      - extractExamScores (for passing into exam statistics)
 *
 *  - MAIN LOGIC
 *    - For each student, compute and add their score to student grades
 */

function sumGrades(grades) {
  return grades.reduce((total, grade) => total + grade);
}

function roundGrade(grade) {
  return Math.round(grade);
}

function letterGrade(grade) {
  const A_LIMIT = 93;
  const B_LIMIT = 85;
  const C_LIMIT = 77;
  const D_LIMIT = 69;
  const E_LIMIT = 60;
  const F_LIMIT = 0;

  if (grade >= A_LIMIT) return 'A';
  if (grade >= B_LIMIT) return 'B';
  if (grade >= C_LIMIT) return 'C';
  if (grade >= D_LIMIT) return 'D';
  if (grade >= E_LIMIT) return 'E';
  if (grade >= F_LIMIT) return 'F';
}

function formatGrade(grade) {
  let rounded = roundGrade(grade);
  let letter = letterGrade(rounded);
  return `${rounded} (${letter})`;
}

function calculateExamScore(exams) {
  let sum = sumGrades(exams);
  return sum / exams.length;
}

function calculateStudentGrade(scores) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;

  let examScore = calculateExamScore(scores.exams);
  let exerciseScore = sumGrades(scores.exercises);
  let finalGrade = (examScore * EXAM_WEIGHT + exerciseScore * EXERCISE_WEIGHT);
  return finalGrade;
}

function summarizeExam(exam) {
  let min = Math.min(...exam);
  let max = Math.max(...exam);
  let average = sumGrades(exam) / exam.length;

  return {
    average,
    min,
    max,
  };
}

function parseExamScores(exams) {
  let groupedExams = [];

  exams.forEach(exam => {
    for (let i = 0; i < exam.length; i += 1) {
      groupedExams[i] = (groupedExams[i] || []);
      groupedExams[i].push(exam[i]);
    }
  });

  return groupedExams;
}

function calculateExamStatistics(exams) {
  let examScores = parseExamScores(exams);
  return examScores.map(summarizeExam);
}

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let exams = [];

  let students = Object.keys(scores);
  students.forEach(student => {
    let studentData = scores[student];
    let grade = calculateStudentGrade(studentData.scores);
    let formattedGrade = formatGrade(roundGrade(grade))
    studentGrades.push(formattedGrade);

    exams.push(studentData.scores.exams);
  });

  let examStatistics = calculateExamStatistics(exams);

  return {
    studentGrades,
    exams: examStatistics,
  };
}

console.log(generateClassRecordSummary(studentScores));

/*
returns:
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
