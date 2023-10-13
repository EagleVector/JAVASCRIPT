// const nameMap = new Map();
const nameMap = new Map([
  [1, 'John'],
  [2, 'Jane'],
  [3, 'Joe']
]);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'empty function'],
  [emptyObj, 'empty object']
]);

console.log(map2);

console.log(nameMap);
console.log(nameMap.get(2));

console.log(map2.get(myFunction));
console.log(map2.get(emptyObj));

nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');

console.log(nameMap);

console.log(nameMap.has(4));
console.log(nameMap.has(6));

nameMap.set(6, 'Micky');
console.log(nameMap.has(6));

nameMap.delete(6);
console.log(nameMap.has(6));

console.log(nameMap.size);

// Iterating through the map
for (const [key, value] of map2) {
  console.log(key, value);
}

nameMap.forEach((key, value) => console.log(key, value));

console.log(nameMap.keys());
console.log(nameMap.values());

nameMap.clear();
console.log(nameMap.size);

console.log(map2.keys());
console.log(map2.values());

map2.clear();
console.log(map2.size);