function highestScoringWord(str) {
  if (!inputValidated(str)) {
    return;
  }
  inputArr = str.split(' ');

  wordScore = [];
  for (let i = 0; i < inputArr.length; i++) {
    score = 0;
    for (let j = 0; j < inputArr[i].length; j++) {
      score = score + inputArr[i].charCodeAt(j);
    }
    wordScore.push(score);
  }

  return inputArr[maxScoreIndex(wordScore)];
}

function inputValidated(str) {
  return /[a-z ]/.test(str);
}

function maxScoreIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

module.exports = highestScoringWord;
