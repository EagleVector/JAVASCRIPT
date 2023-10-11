function highestScoringWord(str) {
	if (!inputValidated(str)) {
		return;
	}

	const inputArr = str.split(' ');

	// Use map to calculate scores for each word
	const wordScore = inputArr
  .map(word => word.split('')
  .reduce((acc, char) => acc + mapLowerCaseToNumbers(char), 0)
	);

	const maxIndex = wordScore.indexOf(Math.max(...wordScore));

	return inputArr[maxIndex];
}

function mapLowerCaseToNumbers(char) {
	return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}


function inputValidated(str) {
	return /[a-z ]/.test(str);
}

module.exports = highestScoringWord;
