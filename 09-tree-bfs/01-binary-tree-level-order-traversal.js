/*
Problem Statement

Given a binary tree, populate an array to represent its level-by-level traversal. 
You should populate the values of all nodes of each level from left to right in separate sub-arrays.

   1
  2 3
4 5 6 7
output: [[1], [2, 3], [4, 5, 6, 7]]

algorithm
- push the root node to the queue
- iterate until the queue is empty
- in each iteration, count the elements in the queue, we can call it something like levelSize (number of nodes in this level)
- remove levelsize nodes from the queue and push their value in an array to represent the current level 
- after removing each node from the queue, insert both of its children into the queue
- if the queue, is not empyt, repeat from step 3

*/

const Deque = require('../node_modules/collections/deque');
console.log(Deque)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();

  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      } 
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      
    }
    result.push(currentLevel);
  }

  return result
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);