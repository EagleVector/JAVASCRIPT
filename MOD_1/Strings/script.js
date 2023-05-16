let name = "Cherry";

const age = 26;

let x = "I am " + name + " and " + "I am " + age + " years old";

console.log(x);

// Template Literals(ES6) `----`

x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);

// String properties and methods

console.log(typeof x);

// Converting string into an object

let str = new String("Hi! There");
console.log(typeof x);

console.log(str);

res = x.toLowerCase();
console.log(res);

res = str.toUpperCase();
console.log(res);

res = x.substring(0, 4);
console.log(res);

res = x.charAt(5);
console.log(res);

res = str.slice(-10, -6);
console.log(res);

let s = '                Hello World!       ';
s = s.trim();
console.log(s);

s = s.substring(0,5);
console.log(s);

// s = s.charAt(1);
// console.log(s);

s = s.indexOf('o');
console.log(s);

// s = s.includes("Hell");
// console.log(s);

// let myString = 'developer';
// myString = myString.replace('d', 'D');
// console.log(myString);

// const myString = 'developer';
// let strn = myString;
// strn = strn.replace('d', 'D');
// console.log(strn);

const myString = 'developer';
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);