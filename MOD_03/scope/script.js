// window.alert('Hello')
// window is a default main class of JS
// when we declare our variables with var, it gets added with the window object


// Global scope
let x = 100;

console.log(x, 'in global');

function fun1() {
  console.log(x, 'in function');
  console.log(window.innerHeight);
}

fun1();

function fun2() {
  // Local scope
  const y = 50;
  console.log(x + y);
}

// Variable Shadowing

function fun3() {
  const x = 1;
  const y = 20;
  console.log(x + y);
}

fun2();
fun3();

// Block Scope. var is not block level scoped. We want variables to be block scoped

if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

for (var i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);

console.log(c);

// Function Scope. var is function scoped.

function fun() {
  let d = 4;
  console.log(d);
  const e = 5;
  console.log(e);
  var f = 6;
  console.log(f);
}

fun();
// console.log(f);


// Nested Scope
// In case of nested blocks, child can inherit the parents variables but the reverse is not true

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(x);
}

// Function Declaration

function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression

const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(50));

// Hoisting: Calling function before being declared --> Normal function declaration possible. 
// Not possible in function expression.
