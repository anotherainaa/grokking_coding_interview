class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function hasPath(root, sum) {
  if (root === null) {
    return false
  }

  if (root.val === sum && root.left === null && root.right === null) {
    return true
  }

  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
}


// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree has path: ${hasPath(root, 23)}`);
// console.log(`Tree has path: ${hasPath(root, 16)}`);

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Tree has path: ${hasPath(root, 10)}`);
console.log(`Tree has path: ${hasPath(root, 11)}`);