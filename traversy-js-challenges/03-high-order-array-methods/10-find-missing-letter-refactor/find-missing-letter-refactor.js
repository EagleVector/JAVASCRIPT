function findMissingLetter(arr) {
  const charUnicode = arr.map((char) => char.charCodeAt(0));
  const missingEle = charUnicode.find((element, index) => element !== charUnicode[0] + index);
  const missingChar = String.fromCharCode(missingEle - 1);

  return missingChar;

}

module.exports = findMissingLetter;
