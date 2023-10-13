function phoneNumberDirectory(phoneNumbers) {
  // In built JS map
  const directory = new Map();

  for (entry of phoneNumbers) {
    // fixing input
    const [name, phoneNumber] = entry.split(':');
    // mapping
    directory.set(name, phoneNumber);
  }
  return directory;
}

module.exports = phoneNumberDirectory;
