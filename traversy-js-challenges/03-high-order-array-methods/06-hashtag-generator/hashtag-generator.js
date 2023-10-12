function generateHashtag(str) {
  if (str.length > 140 || str.trim().length === 0) {
    return false;
  }
  const strArr = str.split(' ');
  const capWordArr = strArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const genHashtag = capWordArr.reduce((acc, word) => acc + word, '#');

  return genHashtag;
}

module.exports = generateHashtag;
