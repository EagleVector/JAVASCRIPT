function twoSum(nums, target) {

  const setNum = new Set();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (setNum.has(compliment)) {
      return [nums.indexOf(compliment), i];
    }

    setNum.add(nums[i]);
  }

  return [];
}

module.exports = twoSum;
