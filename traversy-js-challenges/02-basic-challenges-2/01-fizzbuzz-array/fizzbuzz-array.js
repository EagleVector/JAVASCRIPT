function fizzBuzzArray(num) {
  let arr = [];
  if (num < 1 && num > 100) {
    return;
  }
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("FizzBuzz");
    }
    else if (i % 5 === 0) {
      arr.push("Buzz");
    }
    else if (i % 3 === 0) {
      arr.push("Fizz");
    }
    else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = fizzBuzzArray;
