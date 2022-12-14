/*
Problem Statement

Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, 
then right to left for the next level and keep alternating in the same manner for the following levels.

Approach 
- start with the root, push the root node into a queue
- while the queue isn't empty, determine the levelSize based on the length of the queue
- in each iteration, we need to know we are moving leftToRight 
  - if we are moving leftToRight then we would push each node value into a currentLevel array 
  - if we are not moving leftToRight then we would append each node value to the front of currentLevel array
- we append the currentLevel to the result
- repeat steps
- return results

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const result = [];

  if (root === null) {
    return result
  }

  const queue = [];
  queue.push(root);

  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

    }
    result.push(currentLevel);
    leftToRight = !leftToRight;
  }
  return result
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);