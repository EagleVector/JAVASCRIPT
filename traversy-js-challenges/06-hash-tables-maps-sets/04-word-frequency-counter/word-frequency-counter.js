function wordFrequencyCounter(str) {
  // Fixing the input
  const words = str.toLowerCase().split(/\W+/);

  // Creating an empty Map to store the word and its frequency. Inbuilt JS Map
  const wordFreqMap = new Map();

  for (const word of words) {
    // skip the empty word
    if (word === '')  continue;

    // In case of match, increment the frequency of word by 1
    if (wordFreqMap.has(word)) {
      wordFreqMap.set(word, wordFreqMap.get(word) + 1);
    } else {
      // 1st occurence -> freq 1
      wordFreqMap.set(word, 1);
    }
  }
  // return the map
  return wordFreqMap;
}

module.exports = wordFrequencyCounter;
