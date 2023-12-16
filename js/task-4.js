// 3  (reduce()) Необхідно одержати загальну суму балів студентів.
let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

const total = studentRecords.reduce(function (acc, student) {
  return student.marks + acc;
}, 0);
console.log(total);
