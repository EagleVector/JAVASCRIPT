function reverseString(str) {
  if (!str.toLowerCase()) {
    return;
  }
  let revStr = '';
  let i = str.length - 1;
  while (i >= 0) {
    revStr = revStr + str[i];
    i--;
  }
  return revStr;
}

module.exports = reverseString;