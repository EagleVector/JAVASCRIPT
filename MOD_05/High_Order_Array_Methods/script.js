// ARRAY FOR EACH

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Prototype Chaining
//console.log(socials.__proto__);

socials.forEach(function (item, index, arr) {
  console.log(`${index} - ${item}`, arr);
})

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Prototype Chaining on Array of Objects
const socialObj = [
  {name : 'Twitter', url : 'https://twitter.com'},
  {name : 'Facebook', url : 'https://facebook.com'},
  {name : 'Linkedin', url : 'https://linkedin.com'},
  {name : 'Instagram', url : 'https://instagram.com'}
]

socialObj.forEach((item) => console.log(item));

// It gives us objects inside the array

// ARRAY FILTER

const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];

const evenNos = numbers.filter(number => number % 2 === 0);
console.log(evenNos);

let evenNum = [];
numbers.forEach(number =>  {
  if (number % 2 === 0) {
    evenNum.push(number);
  }
});

console.log(evenNum);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const retcomp = companies.filter((comp) => comp.category == 'Retail');
console.log(retcomp);

// Get the companies that started in or after 1980 and ended in or before 2005

const periodcomp = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(periodcomp);

// Get companies that lasted 10 years or more.

const durcomp = companies.filter((company) => company.end - company.start >= 10);
console.log(durcomp);

// ARRAY MAP 

const numbersarr = [1, 2, 3, 4, 5];

const doublenumbers = numbersarr.map((number) => number * 2);
console.log(doublenumbers);

let arrfinal = [];
const doublenos = numbersarr.forEach((number) => {
  arrfinal.push(number * 2);
});
console.log(arrfinal);

function double(number) {
  arrx = [];
  numbersarr.forEach((number) => {
    arrx.push(number * 2);
  })
  console.log(arrx);
};

double(numbersarr);

// Create an array of Company names

const compname = companies.map((company) => company.name);
console.log(compname);

// Create an array with just company and category

const compcat = companies.map((company) => {
  return {
    name: company.name,
    category: company.category
  }
});

console.log(compcat);

// Create an array of length of each company in years

const compyrs = companies.map((comp) => comp.end - comp.start);
console.log(compyrs);

// Create an array of objects with name and length of each company in years

const compnameyrs = companies.map((comp) => {
  return {
    name : comp.name,
    span : comp.end - comp.start + ' years'
  }
});

console.log(compnameyrs);

// Chain map methods

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squareDouble = num
.map((sqrt) => Math.sqrt(sqrt))
.map((double) => double * 2)
.map((triple) => triple * 3);

console.log(squareDouble);

// Chain multiple different methods

const evendouble = num
.filter((number) => number % 2 === 0)
.map((numb) => numb * 2);

console.log(evendouble);

// ARRAY REDUCE

const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nos.reduce(function (accumulator, currentVal) {
  return accumulator + currentVal;
}, 0);

console.log(sum);

const sumx = nos.reduce((acc, curr) => acc + curr, 0);
console.log(sumx);

// Using for loops

function summ(numarr) {
  let acc = 0;

  for (let num = 0; num <= numarr.length; num++) {
    acc = acc + num;
  }
  console.log(acc);
}

summ(nos);

const cart = [
  { id: 1, name: 'Product 1', price: 120},
  { id: 2, name: 'Product 2', price: 150},
  { id: 3, name: 'Product 3', price: 175}
]

const total = cart.reduce(function (acc, product) {
  return acc + product.price
}, 0);

console.log(total);

const information = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@gmail.com',
    phone: '444-444-4444',
    age: 19
  },
  {
    firstName: 'Josh',
    lastName: 'Koe',
    email: 'josh@gmail.com',
    phone: '555-555-5555',
    age: 23
  },
];

const underAge = information
.filter((agelim) => agelim.age <= 25)
.map((info) => {
  return {
    name : `${info.firstName} ${info.lastName}`,
    email: info.email
  }
});

console.log(underAge);

// Adding all the positive numbers

const nummix = [2, -30, 50, 20, -12, -9, 7];

const posnum = nummix
.filter((num) => num > 0)
.reduce((acc, curr) => acc + curr, 0);

console.log(posnum);

const words = ['coder', 'programmer', 'developer'];

const capitalStr = words.map((word) => {
  return word[0].toUpperCase() + word.substring(1)
});

console.log(capitalStr);