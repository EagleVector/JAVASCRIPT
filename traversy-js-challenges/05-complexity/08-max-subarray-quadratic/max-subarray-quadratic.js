function maxSubarraySum(arr, k) {
  if (k < 1 || k > arr.length) {
    return;
  }
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum = sum + arr[j];
    }
    if (sum > maxSum) {
			maxSum = sum;
		}
  }
  return maxSum;
}

module.exports = maxSubarraySum;
