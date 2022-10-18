
/*

do the same as before, but in reverse. 

- put the root of tree in queue 
- 

*/

const Deque = require('../node_modules/collections/deque');

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
    return result
  }

  const queue = new Deque();
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      } 

      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      } 

    }
    result.unshift(currentLevel);
  }
  return result
}



const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);