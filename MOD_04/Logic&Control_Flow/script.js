if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is not true');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {

  console.log(`${x} is not equal to ${y}`);

}

if (x != y) {
  const z = 20;
  console.log(z);
}

// console.log(z);

// ShortHand if 

if (x > y) console.log('x is greater than y'), console.log('I will be printing as well');
else console.log('x is smaller than y');

const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
}
else {
  console.log("Good night");
}

// Nested-if 

if (hour < 12) {
  console.log("Good morning");

  if (hour === 6) {
    console.log("wake up!");
  }
} else if (hour < 18) {
  console.log("Good Afternoon");
}
else {
  console.log("Good night");
  if (hour >= 20) {
    console.log('zzzzzzzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth');
}
