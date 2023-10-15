function longestConsecutiveSequence(nums) {
  let longestSequence = 0;
  const numSet = new Set(nums); 

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }
      longestSequence = Math.max(currentSequence, longestSequence);
    }
  }
  return longestSequence;
}

module.exports = longestConsecutiveSequence;
