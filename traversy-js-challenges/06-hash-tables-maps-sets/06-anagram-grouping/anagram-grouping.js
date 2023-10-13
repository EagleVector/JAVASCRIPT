function anagramGrouping(words) {
  const anagramGroups = new Map();
  for (const word of words) {
    // serializing each string
    const sortedWords = word.split('').sort().join('');
    
    if (anagramGroups.has(sortedWords)) {
      // clubbing similar strings
      anagramGroups.get(sortedWords).push(word);
    } else {
      // independent string array
      anagramGroups.set(sortedWords, [word])
    }
  }
  
  return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;
