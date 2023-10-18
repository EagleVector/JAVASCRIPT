const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const A = new Node(3);
const B = new Node(9);
const C = new Node(20);
const D = new Node(15);
const E = new Node(7);

A.left = B;
A.right = C;
C.left = D;
C.right = E;

console.log(maxDepth(A));