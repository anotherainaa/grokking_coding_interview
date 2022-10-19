/*
Problem Statement

Find the minimum depth of a binary tree. 
The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

Approach 
- traverse through each level
- at any point that a null is found, return the current depth size 
(including the current level if not already included)


*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_minimum_depth(root) {
  let minDepth = 0;
  
  if (root === null) {
    return minDepth;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    minDepth += 1;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left === null && currentNode.right === null) {
        return minDepth;
      }
      
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

    }
  }
  return minDepth
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Min Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Min Depth: ${find_minimum_depth(root)}`);