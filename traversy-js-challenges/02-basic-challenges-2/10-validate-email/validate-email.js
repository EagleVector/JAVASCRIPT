function validateEmail(email) {
  return email.slice(1).includes('@') && email.includes('.')
}

module.exports = validateEmail;
