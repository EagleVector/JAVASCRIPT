function findMissingLetter(arr) {
	if (arr.length === 0) {
		return '';
	}

	const indexArr = [];

	checkCase(arr);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 1) {
			return; // return undefined if length is greater than 1
		}
	}

	for (let l = 0; l < arr.length; l++) {
		indexArr.push(arr[l].charCodeAt());
	}

	for (let m = 0; m < indexArr.length - 1; m++) {
		if (indexArr[m] !== indexArr[m + 1] - 1) {
			return String.fromCharCode(indexArr[m] + 1);
		}
	}
}

function checkCase(arr) {
	const firstChar = arr[0];

	if (firstChar === firstChar.toUpperCase()) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] !== arr[j].toUpperCase()) {
				return; // return undefined if not all uppercase
			}
		}
	}

	if (firstChar === firstChar.toLowerCase()) {
		for (let k = 0; k < arr.length; k++) {
			if (arr[k] !== arr[k].toLowerCase()) {
				return; // return undefined if not all lowercase
			}
		}
	}
}

module.exports = findMissingLetter;
