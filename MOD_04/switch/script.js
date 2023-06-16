const d = new Date(2022, 3, 10, 21, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;

  case 2:
    console.log('It is February');
    break;

  case 3:
    console.log('It is March');
    break;

  default:
    console.log('It is not Jan, Feb or March');
}


switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  
  case hour < 18:
    console.log('Good AfterNoon');
    break;

  default:
    console.log('Good Night');
}

// function calculator(num1, num2, operator) {
//   let result = 0;
//   if (operator == '+') {
//     result = num1 + num2;
//   }

//   else if (operator == '-') {
//     result = num1 - num2;
//   }

//   else if (operator == '*') {
//     result = num1 * num2;
//   }

//   else if (operator == '/') {
//     result = num1 / num2;
//   }

//   else {
//     return "Invalid operator"
//   }

//   return result;

// }

// console.log(calculator(9, 4, '&'));

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+' :
      result = num1 + num2;
      break;

    case '-' :
      result = num1 - num2;
      break;

    case '*' :
      result = num1 * num2;
      break;

    case '/' :
      result = num1 / num2;
      break;  

    default:
      return "Invalid Operator";
  }
  return result;
}

console.log(calculator(4, 3, '*'));

// Truthy and Falsy Values in JS

const email = '';
if(email) {
  console.log('You passed the test');
}

// Falsy values in JS:
// null
// undefined
// "" or ''
// 0
// NaN
// false

// Rest all of them are truthy
// Truthy 
// true
// '0'
// empty objects
// []
// {}
// function () {}

// Truthy and falsy caveats

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children you have');
}

// Checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
}
else {
  console.log('No post to list');
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

// Strict Equality (===)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);