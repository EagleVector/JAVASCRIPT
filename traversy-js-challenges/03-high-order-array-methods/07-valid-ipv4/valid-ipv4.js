const isValidIPv4 = (input) => {
  const ipArr = input.split('.');
  if (ipArr.length !== 4) {
    return false;
  }
  const ipVerify = ipArr.every((num) => num >= 0 && num <= 255 && num[0] !== '0');
  return ipVerify;
};

module.exports = isValidIPv4;
