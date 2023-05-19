// const user = 'Cherry';
// console.log(user);

// Global variable pollution

// Handle it with IIFE

(function () {
  const user = 'Cherry';
  console.log(user);
  const hello = () => console.log('Hello ' + user);
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Sunny');

(function hello() {
  console.log('Hello');
})();

(function greet(name) {
  console.log('Hello ' + name);
})('Shawn');

// Challenge: 1
function getCelcius(temp) {
  return (temp - 32) * 5/9;
}
console.log(String(getCelcius(98.7)) + " \xB0" + 'C');

// Challenge: 2
const minmax = numbers => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers)
})

console.log(minmax([1, 2, 3, 4, 5]));

// Challenge: 3 (IIFE)

(function () {
  const area = (length, breadth) => console.log(`The area of a rectangle with length ${length} and breadth ${breadth} is ${length * breadth}`);
  area(10, 2);
})();