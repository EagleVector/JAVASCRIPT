// Logical Operators
console.log(10 > 20 && 30 > 15 && 40 > 30);

console.log(10 > 20 || 30 < 15);

// && - will return the first falsy value or last value

a = 10 && 20;
console.log(a);

a = 10 && 0 && 20;
console.log(a);

const posts = ['Post One', 'Post Two'];
console.log(posts[0]);

const postss = [];
console.log(postss[0]);
// This returns undefined which we dont want coz we want nothing to be displayed in console.


const post = [];
post.length > 0 && console.log(post[0]);
// Commonly used in react and stuffs

// || - will return the first truthy value or the last value.

b = 20 || 10;
n = 0 || 6;

console.log(b);
console.log(n);

// ?? - Returns the right side operand when the left is null or undefined.

c = 10 ?? 20;
c = 0 ?? 10;
c = '' ?? 5;
c = undefined ?? 9;

c = 10 ?? 20;
console.log(c);

// ||= assigns the right side value only if the left is a falsy value.

let x = false;

// if (!x) {
//   x = 10;
// }
// console.log(x);
x ||= 10;
console.log(x);

// &&= assigns the right side value only if the left is a truthy value.

let y = true;

// if (y) {
//   y = 8;
// }
y &&= 10
console.log(y);

// ??= assigns the right side value only if the left is null or undefined.

let z = undefined;
// if (!z) {
//   z = 20;
// }
// console.log(z);

z ??= 30;
console.log(z);

// ??= -> nullish coalishing operator

// Ternary Operator -> Shorter way of writing a conditional

const age = 26;

// Using an if statement
if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You can not vote');
}

// Using a ternary operator

age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// Assigning a conditional value to a variable

// const canVote = age >= 18 ? true : false;

const canVote = age >= 18 ? 'You can Vote' : 'You can not Vote';
console.log(canVote);

// Multiple Statements

// Usin if

// const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboad');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = 'login';
// }
// console.log(redirect);

// Using ternary op

const auth = true;

const redirect = auth == true ? (alert('Welcome to the dashboad'), '/dashboard') : (alert('Access Denied'), '/login');
console.log(redirect);

// ShortHand
// Combining the things with logical operators : use in react & JSX
auth && console.log('Welcome to the dashboard');