const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
  const strArr = str.toLowerCase().split(/\W+/);
  const wordFreq = new HashTable();

  for (const word of strArr) {
    if (wordFreq.has(word)) {
      wordFreq.set(word, wordFreq.get(word) + 1);
    } else {
      wordFreq.set(word, 1);
    }
  }

  return wordFreq.get(word.toLowerCase());
}

module.exports = wordInstanceCounter;
