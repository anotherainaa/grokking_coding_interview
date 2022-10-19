/*
Problem Statement

Given a binary tree, populate an array to represent the averages of all of its levels.

Approach 
- using a queue, start at the root 
- for each level, we average the values of each node. 
- we add that results. 

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_level_averages(root) {
  const result = [];
   
  if (root === null) {
    return result;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      levelSum += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push((levelSum / levelSize).toFixed(1));
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${find_level_averages(root)}`);