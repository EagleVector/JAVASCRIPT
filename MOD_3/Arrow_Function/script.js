// Arrow Function

function add(a, b) {
  return a + b;
}

// convert it into an arrow fn

const add_arr = (a, b) => {
  return a + b;
};

// Implicit return
const subtract = (a, b) => a - b;

// single param --> remove ()

const double = a => 2 * a;

console.log(add(5, 4));
console.log(subtract(6, 9));
console.log(double(6));

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
// Callbacks: Pass function into another function

numbers.forEach(n => console.log(n));