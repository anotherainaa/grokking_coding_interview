 /*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/

Algorithm
- iterate through list, until next reaches the end 
- if current is not equal to next
  - point current.next to next
  - set current to next  (because we can skip any nodes in between since they would be duplicates
- advance next 

- if we get to the end and current.next is not null
    - we need to set it to null because it's a duplicate of the current 
- return head


 */

var deleteDuplicates = function(head) {
  if (head === null) return head; 

  let current = head; 
  let next = current.next;

  while (next !== null) {
    if (current.val !== next.val) {
      current.next = next;
      current = next;
    }
    next = next.next;
  }

  if (current.next !== null) {
    current.next = null;
  }

  return head;
}