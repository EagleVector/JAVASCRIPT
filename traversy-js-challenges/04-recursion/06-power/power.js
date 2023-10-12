function power(base, exponent) {
  if (base < 0 || exponent < 0) {
    return;
  }

  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

module.exports = power;
