/*
https://leetcode.com/problems/find-pivot-index/submissions/881667354/?envType=study-plan&id=level-1

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

Problem
Input: array of nums
Output: an index representing the pivot whereby the left of the num is equal to right of the num

Rules
- find the pivot or middle index whereby the sum of the left side of array to the right side is equivalent
- if there isn't a pivot index, return  -1 
- the index can be the first index 0, and can be the last index of array
    - why? because the sum will equal to 0 when it is out of bounds. 
    - therefore if the right elements next to the first index sums to 0, we return 0
    - same works for the last index

Data Structure
- the ongoing sum of the left and right need to be kept

Algorith,
- Iterate through the entire array, 
    - for each element to the left side increment left sum
    - for each element to the right side increment right sum
- if the right sum and left sum are equivalent, return the index 

Time complexity - O(N2) because we would sum the entired array within a loop

O N + N approach
- get the sum of the entire array
- we iterate through the array
- remove the current item from the total which would equal to the right sum
- if the right sum is equal to left sum then return index
- we create a left sum to add up with current item

- return -1

*/

var pivotIndex = function(nums) {
    for (let index = 0; index < nums.length; index++) {
        let leftSum = nums.slice(0, index).reduce((acc, elem) => acc + elem, 0);
        let rightSum = nums.slice(index + 1, nums.length).reduce((acc, elem) => acc + elem, 0);

        if (leftSum === rightSum) {
            return index;
        }
    }
    return -1;
};

var pivotIndex2 = function(nums) {
    let rightSum = 0;

    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        
        if (rightSum - leftSum === 0) {
            return i
        }

        leftSum += nums[i];
    }
    return -1;
};
