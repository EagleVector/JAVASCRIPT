// let marks = 70;

// if (marks > 40) {
//   console.log("You have passed the test");
// }

// if (marks > 60) {
//   console.log("You have goat an A")
// }

// else {
//   console.log("You have failed the test");
// }

// isPrimeMember = false;

// if (isPrimeMember) {
//   console.log("You have access to all the premium content")
// }

// if (!isPrimeMember) {
//   console.log("Please buy a premium membership")
// }

// Disney + Hotstar.

let isPremiumMember = true;
let isDiscoveryMember = false;
let isAccornMember = false;

if (isPremiumMember) {
  if (isDiscoveryMember) {
    if (isAccornMember) {
      console.log("You have an access to Hotstar + Accorn + Discovery content");
    }
    else {
      console.log("You have access to Hotstar + Discovery content");
    }
  }
  else {
    console.log("You have access to Hotstar content only");
  }
}
else {
  console.log("Please buy a membership");
}
