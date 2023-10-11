const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubleNumbers);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sumNumbers = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sumNumbers)


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

const ele = numbers.forEach((num) => {
  console.log(num);
});



 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

const firstOddNumber = numbers.find((num) => {
  return num % 3;
});

console.log(firstOddNumber);


/**
 * some: Checks if at least one array element satisfies a condition.
 */

const divBy5 = numbers.some((num) => {
  return num % 5 === 0;
});

console.log(divBy5);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const range = numbers.every((num) => {
  return (num >= 0 && num <= 9);
});

console.log(range);