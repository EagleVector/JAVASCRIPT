function maxSubarraySum(arr, k) {
  let leftPointer = 0;
  let rightPointer = k;

  let maxSum = Number.MIN_SAFE_INTEGER;

  while (rightPointer < arr.length) {
    let currSum = 0;
    for (let i = leftPointer; i < rightPointer; i++) {
      currSum = currSum + arr[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    leftPointer++;
    rightPointer++;
  }
  return maxSum;
}

module.exports = maxSubarraySum;
