const sym = Symbol();
const sym1 = Symbol('foo'); // Passing identifier inside a symbol
const sym2 = Symbol('bar');
const sym5 = Symbol('foo');

console.log(sym, sym1, sym2);
console.log(typeof sym);

console.log(sym1.description); // getting the unique identifier
console.log(sym.description);

console.log(Symbol('sym') === Symbol('sym'));
console.log(sym1 === sym5);

const user = {
  [Symbol('id')]: 1, // Cannot be modified
  name: 'cherry',
  email: 'kumarsubhambili3@gmail.com'
};

const user1 = {
  [Symbol('id')]: 1, // Cannot be modified
  name: 'cherry',
  email: 'kumarsubhambili3@gmail.com'
};
console.log(user1);

console.log(user.name === user1.name);
// console.log(user[Symbol('id')] === user1[Symbol('id')]);

user.id = 2;
console.log(user);

console.log(user[Symbol('id')]); // Cannot be accessed

console.log(user['name']);

console.log(Object.keys(user));

console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols

console.log(Object.getOwnPropertySymbols(user));

// Symbol.for

const sym3 = Symbol.for('fool');
const sym4 = Symbol.for('for');

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym));

console.log(sym1.toString());
console.log(sym3.toString());
console.log(sym4.toString());

console.log(sym1.valueOf());
console.log(sym2.valueOf());
console.log(sym4.valueOf());

console.log(Object.getOwnPropertyNames(Symbol));