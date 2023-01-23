/*
https://leetcode.com/problems/reverse-linked-list/solutions/?envType=study-plan&id=level-1

Approach 
- to reverse as we iterate
- iterate through linked list (while not null)
    - keep the next node in a variable
    - link the current node to new "next" 
    - link previous to current node
    - link current node to next node
- return previous node (the last node - insetead of current which would point to null?)
 */


var reverseList = function(head) {
    let previousNode = null;
    let currentNode = head;

    while (currentNode !== null) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
};