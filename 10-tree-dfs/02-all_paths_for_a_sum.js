const Deque = require('../node_modules/collections/deque');

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findPaths(root, sum) {
  const allPaths = [];
  findPathsRecursive(root, sum, [], allPaths);
  return allPaths;
}

function findPathsRecursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }

  currentPath.push(currentNode.val);

  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push([...currentPath]);
  } else {
    // traverse the left sub-tree
    findPathsRecursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    // traverse the right sub-tree
    findPathsRecursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = findPaths(root, sum);

console.log(result); 