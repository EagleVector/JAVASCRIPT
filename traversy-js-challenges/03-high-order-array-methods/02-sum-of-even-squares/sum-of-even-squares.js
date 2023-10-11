function sumOfEvenSquares(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((total, num = 0) => total + num);
}

module.exports = sumOfEvenSquares;
