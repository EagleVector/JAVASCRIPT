class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

// Setting the left and right of root node a.
a.left = b;
a.right = c;

// Setting the left and right of node b.
b.left = d;
b.right = e;

// Setting the left node of node c.
c.right = f;

module.exports = TreeNode;