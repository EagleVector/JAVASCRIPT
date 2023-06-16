let x;
let d = new Date();

x = d.toString();
console.log(x);

x = d.valueOf();
console.log(x);

x = d.getFullYear();
console.log(x);

x = d.getMonth() + 1;
console.log(x);

x = d.getDate();
console.log(x);

x = d.getDay();
console.log(x);

x = d.getHours();
console.log(x);

x = d.getMinutes();
console.log(x);

x = d.getSeconds();
console.log(x);

x = d.getMilliseconds();
console.log(x);

// Custom date
d = new Date();
dt = `${d.getDate()} - ${d.getMonth() + 1} - ${d.getFullYear()}`
console.log(dt);

//Date Format API

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = d.toLocaleString('default', {month: 'short'});
console.log(x);

// The one to use

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})
console.log(x);