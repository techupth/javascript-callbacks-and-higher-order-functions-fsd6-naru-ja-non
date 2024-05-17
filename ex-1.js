// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let salary of array) {
    operation(salary);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function addEach5000(salary) {
  newEmployeeSalaries.push(salary + 5000);
}

// Using `forEach` function here

forEach(employeeSalaries, addEach5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
