const name = "Cherry";

const age = 26;

const gpa = 7.59;

const Pass = true;

const arr1= [1, 2, 3, 4, 5];

const arr2 = ['abc', 'def', 'ghi', 'jkl'];

const output = arr2;

console.log(output, typeof(output));

// Primitive Data are stored in the stack

let myName = "Cherry";
let myAge = 26;

console.log(myName, myAge);

let petName = myName;
petName = "Sunny";

console.log(petName, myName);

//Reference Data Type --> Important 

let info = {
  name: "Brad",
  age: 40
};

console.log(info);

let form = info;
form.name = "Bradley";

// Updates the value in the heap memory

console.log(form);
console.log(info);

let amount = '100';

// Change String to Number

// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);

//amount = amount.toString();
// Temporary wrapper of the primitive data type.

amount = String(amount);

console.log(amount, typeof amount);

let amt = '99.96';

amt = parseFloat(amt);
console.log(amt);

// Convert number to boolean

bool = Boolean(amt);
console.log(bool);

let namex = "Hello";

namex = Number(namex);

console.log(namex);

// NaN

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + 1);
console.log('hgfds' * 2);