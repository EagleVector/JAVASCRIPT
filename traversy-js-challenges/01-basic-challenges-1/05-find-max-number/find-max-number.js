function findMaxNumber(arr) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

module.exports = findMaxNumber;
