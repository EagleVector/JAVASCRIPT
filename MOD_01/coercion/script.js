let x;
x = 5 + '5';
console.log(x, typeof x);

x = 5 + Number('5');
console.log(x, typeof x);

x = 5 * '5';
console.log(x, typeof x);

x = Number(true);
console.log(x, typeof x);

x = Number(false);
console.log(x, typeof x);

x = 10 + undefined;
console.log(x);