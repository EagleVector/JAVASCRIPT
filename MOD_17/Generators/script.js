// Functions that can be paused or resumed. Used to generate iterators

function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i]
  }
}

const teams = ['Royal Challengers Bangalore', 'Gujrat Titans', 'Lucknow Super Giants', 'Chennai Super Kings', 'Mumbai Indians', 'Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Delhi Capitals', 'Punjab Kings', 'Rajasthan Royals'];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const team of createTeamIterator(teams)) {
//   console.log(team);
// }

console.log([...createTeamIterator(teams)]);

const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);