//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let qualifiedStudents = 0;

  for (let score of array) {
    if (score > 70) {
      qualifiedStudents++;
    }
  }
  return operation(qualifiedStudents);
}

function qualifiedMessage(qualifiedStudents) {
  if (qualifiedStudents >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = console.log(
  `นักเรียนห้องที่ 1 ${atLeastFive(studentScoresRoom1, qualifiedMessage)} `
);
let scoreRoom2Result = console.log(
  `นักเรียนห้องที่ 2 ${atLeastFive(studentScoresRoom2, qualifiedMessage)} `
);
let scoreRoom3Result = console.log(
  `นักเรียนห้องที่ 3 ${atLeastFive(studentScoresRoom3, qualifiedMessage)} `
);
