function sayHello() {
  console.log("Hello World!");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(15, 20);

function sub(num1, num2) {
  return num1 - num2;
}

const ans = sub(10, 8);
console.log(ans);

function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser('Cherry'));

console.log(registerUser());

function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4, 5));

// Rest Parameters

function total_sum(...number) {
  let total = 0;

  for (const num of number) {
    total += num;
  }
  return total;
}

console.log(total_sum(1, 2, 3, 4, 5, 6, 7));

// Objects as parameters

function loginUser(user) {
  return `The user ${user.name} with the id
   of ${user.id} has just logged in.`
}

const user = {
  id: 23861,
  name: "Cherry"
}

console.log(loginUser(user));

console.log(loginUser({
  id: 24356,
  name: "Sunny"
}));

// Array as params
function getRandom(arr) {
  const idx =  Math.floor(Math.random() * arr.length);
  return arr[idx];
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));