//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let scoreGreaterThan70 = array.filter((score) => score > 70);
  return operation(scoreGreaterThan70);
}

function checkQuality(scoreGreaterThan70) {
  if (scoreGreaterThan70.length >= 5) {
    return `ผ่านเกณฑ์ ✅`;
  } else {
    return `ไม่ผ่านเกณฑ์ ❌`;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, checkQuality);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkQuality);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkQuality);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);
