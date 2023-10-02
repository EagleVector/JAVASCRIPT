function isPalindrome(str) {

  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());

  const reversedStr = reverseStringFunction(formattedStr);

  return formattedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0)
  return (
		(code >= 48 && code <= 57) || // Numbers 0-9
		(code >= 97 && code <= 122) // Lowercase letters a-z
	)
}

function reverseStringFunction(str) {
  let revStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}

module.exports = isPalindrome;
