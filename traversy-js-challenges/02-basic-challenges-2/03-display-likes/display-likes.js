function displayLikes(names) {
  
  let count = names.length;

  for (let i = 0; i < count; i++) {
    names[i] = names[i].toString();
  }

    if (count > 3) {
			return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
		} else if (count === 3) {
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
		} else if (count === 2) {
			return `${names[0]} and ${names[1]} like this`;
		} else if (count === 1) {
			return `${names[0]} likes this`;
		} else {
      return `no one likes this`
    }

}

module.exports = displayLikes;
