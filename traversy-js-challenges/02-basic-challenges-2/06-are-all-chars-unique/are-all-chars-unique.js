function areAllCharactersUnique(str) {
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;