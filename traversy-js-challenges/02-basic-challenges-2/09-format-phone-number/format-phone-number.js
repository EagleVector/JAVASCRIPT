function formatPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return;
    }
  }
  let numStr = numbers.join('');
  return '(' + numStr.slice(0, 3) + ')' + ' ' + numStr.slice(3, 6) + '-' + numStr.slice(6, 10);
}

module.exports = formatPhoneNumber;
