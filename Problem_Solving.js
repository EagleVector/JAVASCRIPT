// ODD OR EVEN

// let x = 54;
// if (x % 2 === 0) {
//   console.log("EVEN");
// } else {
//   console.log("ODD");
// }

// MINIMUM OF THE THREE NOS

// let a = 10;
// let b = 15; 
// let c = 3;

// if (a < b && a < c) {
//   console.log("Minimum: " + a);
// } else if (b < a && b < c) {
//   console.log("Minimum: " + b);
// } else {
//   console.log("Minimum: " + c);
// }

// Q. WAP number n divisible by the number m?

// let n = 24;
// let m = 4;

// if (n % m === 0) {
//   console.log("n is divisible by m");
// } else {
//   console.log("n is not divisible by m");
// }

// Total number of factors of a number

// let num = 24;

// let count = 0;
// let i = 1;
// while(i * i < 24) {
//   if (num % i === 0) {
//     count++;
//   }
//   i++;
// }
// console.log("Total number of factors of num: " + count*2);

// Multiple check

// let m = 56;
// let n = 8;

// if (m % n === 0) {
//   console.log("n is a multiple of m");
// } else {
//   console.log("n is not a multiple of m");
// }

// Valid voter

// let age = 25;

// if (age > 18) {
//   console.log("Valid Voter");
// } else {
//   console.log("InValid Voter");
// }

// let age = 12;

// const vote = (age > 18) ? console.log("Valid Voter") : console.log("Invalid Voter");

// Leap Year

// let year = 2023;

// if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     console.log("Leap Year");
//   } else {
//     console.log("Not a Leap Year");
//   }
// } else if (year % 4 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// No of digits in a num

// let num = 4;

// if (num / 10 < 1) {
//   console.log("Given number is a single digit number");
// } 

// let num2 = 34;

// if (num2 / 1 >= 10 && num2 / 100 < 1) {
//   console.log("Given number is a double digit number");
// } 

// let num3 = 412;

// if (num3 / 1 >= 100 && num3 / 1000 < 1) {
//   console.log("Given number is a triple digit number");
// }

// Absolute of a number

// let num = -4;
// console.log(Math.abs(num));

// Round Off

// let num = 25.6;
// console.log(Math.round(num));

// Ceil of a number

// let num = 18.9999;
// console.log(Math.ceil(num));

// Q. WAP to do the following things as for input n number:
// -> if even, then add 2.
// -> if odd, then add 1.

// let num = 43;

// let opr = (num % 2 === 0) ? console.log(num + 2) : console.log(num + 1);

// Q. WAP to calculate the commission of sale person as follow:
// 1. sale is greater than 10000 -- 5%
// 2. sale is in between 8k-10 -- 4%
// 3. sale is in between 5k-8k -- 3%
// 4. sale is less than 5k -- 2%

// let totalSales = 7500;
// let commission;

// if (totalSales > 10000) {
//   commission = totalSales * 0.05;
// } else if(totalSales > 8000) {
//   commission = totalSales * 0.04;
// } else if(totalSales > 5000) {
//   commission = totalSales * 0.03;
// } else {
//   commission = totalSales * 0.02;
// }

// console.log("Total commission of the sales person: " + commission);

// Q. WAP to return the count of digits for an input.
// Example
// Input - 123
// Output - 3

// let num = 123;
// count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }
// console.log(count);

// Q. WAP to return the sum of digits for an input.
// Example
// Input - 123
// Output - 6

// let input = 123;

// let sum = 0;

// while (input > 0) {
//   let rem = input % 10;
//   sum = sum + rem;
//   input = Math.floor(input / 10);
// }

// console.log(sum);

// Q. WAP to return the multiplication of digits for an input.
// Example
// Input - 1234
// Output - 24

// let input = 1234;

// let prod = 1;

// while (input > 0) {
//   let rem = input % 10;
//   prod = prod * rem;
//   input = Math.floor(input / 10);
// }

// console.log(prod);

// Q. WAP to return the reserve the number 
// Example
// Input - 123
// Output - 321

// let num = 123;
// let rev = 0;

// while (num > 0) {
//   let rem = num % 10;
//   num = Math.floor(num / 10);
//   rev = rev * 10 + rem;
// }

// console.log(rev);
