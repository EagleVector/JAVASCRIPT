const myMap = new Map();

myMap.set('name', 'Cherry');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);
console.log(myMap);

// Maps are iterable

const peopleMap = new Map();
peopleMap.set('cherry', {phone: '111-111-1111', email: 'cherry@gmail.com'});
peopleMap.set('sunny', {phone: '222-222-2222', email: 'sunny@gmail.com'});
peopleMap.set('bunny', {phone: '333-333-3333', email: 'bunny@gmail.com'});

peopleMap.forEach((people) => console.log(people.email));

console.log(peopleMap.keys());

console.log(peopleMap.values());

console.log(peopleMap.entries());

const iterator = peopleMap.values();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);