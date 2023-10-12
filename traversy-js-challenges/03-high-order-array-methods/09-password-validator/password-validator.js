function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const passwordCharArr = password.split('');

  const hasUpperCase = passwordCharArr.some((char) => char >= 'A' && char <= 'Z');
  const hasLowerCase = passwordCharArr.some(char => char >= 'a' && char <= 'z');
  const hasDigits = passwordCharArr.some(char => char >= '0' && char <= '9');

  return hasUpperCase && hasLowerCase && hasDigits;
}

module.exports = validatePassword;
