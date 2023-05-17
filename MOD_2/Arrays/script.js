let x;

const arr = [374, 755, 398, 118, 289, 123];
console.log(arr, arr.length);


// Array constructor
const fruits = new Array('mango', 'grape', 'apple');
console.log(fruits);
console.log(fruits.length);
fruits[3] = 'pear';
fruits[fruits.length] = 'strawberry';
// fruits.length = 4


console.log(fruits);

x = arr[0] + arr[2];
console.log(x);

const numbers = [12, 45, 33, 29, 39];

numbers.push(143);
numbers.pop();
numbers.unshift(9);
numbers.shift();
numbers.reverse();
numbers.reverse();
x = numbers.includes(29);
x = numbers.indexOf(12);
x = numbers.indexOf(100);

x = numbers.slice(1,3);
console.log(x);

console.log(numbers);

x = numbers.splice(1,3);
console.log(x);
console.log(numbers);

x = arr.splice(1,4).reverse().toString().charAt(0);
console.log(x);

// Array Nesting

let x1;

let fruit = ['apple', 'mango', 'pear', 'papaya'];
let berries = ['strawberry', 'blueberry', 'raspberry'];

console.log(fruit, berries);

fruits.push(berries);

console.log(fruit);

x1 = fruit[0][1];

console.log(x1);

let allFruit = [fruit, berries];

x1 = allFruit[0][2];
x1 = allFruit[1][2]
console.log(x);

// Array Concatenation

x1 = fruit.concat(berries);

console.log(x1);

// Spread Operator (...)

x1 = [...fruit, ...berries];
console.log(x1);

// Flatten Arrays

const array = [1, 2, [3, 4], 5, [6, 7], 8];
x1 = array.flat();
console.log(x);

// Static Methods on array object

x1 = Array.isArray(x);
console.log(x);

x1 = Array.isArray('Hello');
console.log(x);

x1 = Array.from('Hello');
console.log(x);

const a = 1;
const b = 2;
const c = 3;

x1 = Array.of(a, b, c);
console.log(x1);

// Array Challenge1

const arr0 = [1, 2, 3, 4, 5];

arr0.push(6);
arr0.unshift(0);
arr0.reverse();

console.log(arr0);

// Array Challenge2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();

const arr3 = arr1.concat(arr2);

console.log(arr3);