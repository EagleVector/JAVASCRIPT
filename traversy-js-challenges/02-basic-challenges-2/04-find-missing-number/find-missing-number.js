function findMissingNumber(arr) {
	let uniqueArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!uniqueArr.includes(arr[i])) {
			uniqueArr.push(arr[i]);
		}
	}
	let count = uniqueArr.length;
	// let arrSum = 0;
	// for (let j = 0; j < count; j++) {
	//   arrSum += uniqueArr[j];
	// }
	// let missingNum = [(count + 1) * (count + 2)] / 2 - arrSum;

	// return missingNum;
	let temp;

	for (let j = 0; j < count - 1; j++) {
		for (let k = 0; k < count - j - 1; k++) {
			if (uniqueArr[k] > uniqueArr[k + 1]) {
				temp = uniqueArr[k];
				uniqueArr[k] = uniqueArr[k + 1];
				uniqueArr[k + 1] = temp;
			}
		}
	}
	for (let l = 0; l < uniqueArr.length; l++) {
		if (uniqueArr[l] !== uniqueArr[l + 1] - 1) {
			return uniqueArr[l] + 1;
		}
	}
  return uniqueArr[uniqueArr.length - 1] + 1;
}

module.exports = findMissingNumber;
