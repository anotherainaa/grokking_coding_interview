 /*

 https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=level-1
 
Rules
- must return the middle of the linked list
- Question: how to know the middle? 
- we need to count the linked list 

- fast and slow pointer
- fast will move twice as fast, leaving slow in the middle when fast reaches the end. 

- return slow. 

 */

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
};