// JavaScript is a single-threaded language and is synchronous in nature.
// The code is executed line by line.
// Two things happen 
// 1. Creation phase --> in memory (CP)
// 2. Execution phase. (EP)

let x = 100;
let y = 50;
// CP: x and y is allocated memory and stores undefined.
// EP: 100 stored in x and 50 stored in y --> allocated



// CP: getSum() function is allocated memory and stores all the code
// EP: skips completely the whole function
function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// CP: sum1 and sum2 is allocated memory and stores undefined.
// getting into the function: 
// for the individual function call again both the phases run:
// 1. CP: memory allocation + detting it to undefined
// 2. EP: argument passing + calculation
// 3. storing the result into sum1. 
// Everything happens in a single thread.
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);

console.log(sum1);
console.log(sum2);
