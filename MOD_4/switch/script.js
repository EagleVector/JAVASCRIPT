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