const nameSet = new Set(['john', 'jane', 'joe', 'jerry']);

console.log(nameSet);

nameSet.add('joe');

console.log(nameSet);

for (const name of nameSet) {
  console.log(name);
}

nameSet.delete('jane');

console.log(nameSet);

const nameArr = Array.from(nameSet);
console.log(nameArr);

const newSet = new Set(nameArr);

console.log(newSet)