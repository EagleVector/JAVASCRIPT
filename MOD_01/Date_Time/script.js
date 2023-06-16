let d = new Date();;

d = d.toString();

console.log(d);

// d = new Date(2021, 1, 10, 12, 30, 0);
d = new Date('2023-05-16 1:30:00');

console.log(d);

//Time in miliseconds
d = Date.now();
console.log(d);

// Time passed in seconds
d = d / 1000;
console.log(d);

// Time passed in minutes
d = d / 60;
console.log(d);

// Time passed in hours
d = d / 60;
console.log(d);

// Time passed in days
d = d / 24;
console.log(d);

// Time passed in week
d = d / 7;
console.log(d);

// Time passed in months
d = d / 5;
console.log(d);

// Time passed in years
d = d / 12;
console.log(d);