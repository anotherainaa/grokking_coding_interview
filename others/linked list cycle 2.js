/*
https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1

Input: head of linkedlist (pos is not passed as parameter but used internally)
return value , string 'no cycle' or 'tail connects to node index {node}`

use fast and slow pointers 
- if we reach the end, there is no cycle
- if we never reach the end, return ??/ 

- how to keep the position 
    - keep an array with 3, 2, 0 , 4
    - when fast and slow are the same, we check the position of the array
- note that this will use O(N) memory


Algorithm

- first part of the algorithm is to find the intersection... 
    - if it doesn't exist, return null 

- the second part of the algorithm is to use the intersection to find the entrance. 
    - place intersect as pointer 2
    - place pointer 1 at entrace
    - when pointer 1 === pointer 2, we are at the entrance.

 */

var getIntersect = function(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
          return slow
      }
  }

  return null;
}

var detectCycle = function(head) {
    if (head === null) return null;

    let intersect = getIntersect(head);

    if (intersect === null) {
        return null;
    }

    let pointer1 = head;
    let pointer2 = intersect;

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
};