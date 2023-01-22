/*
https://leetcode.com/problems/merge-two-sorted-lists/submissions/882992360/


Problem
- Heads of two linked list
- Merge the two lists in one sorted list 
- list should be made by splicing together the nodes of the first two lists
- splice together the nodes of the first two lists 

Output
Return the head of the merged linked list 

- Input - Two linked lists
- Merge them together with sorted values

Rules
- splice together the nodes to create a sorted list 

Approach 
- create a dummy head 
- point the current node to the dummy head 
- iterate through list1 and list2
    -   if list1 is smaller
        - attach list1 to next of current node 
        - move list1 to next node
    - else 
        - attach list2 to next of current node
        - move list2 to next node
    - set current node to next node
- if we get to the end, most likely list 1 or 2 may have nodes attached to them (in sorted order)
- therefore we attach it to the end of the list
- return new head - next of dummy head. 

*/
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode();
    let current = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next; 
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummyHead.next;
};
