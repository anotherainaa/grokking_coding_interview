Problem
Input: array of integers and target
Output: Number representing the index if the target is found. 
- if not found, return the index where it would be if it were inserted in order 

Rules 
- Find the index where the target is found, return index
- If target is not found, return the index where the value would belong. 
- must write the code in log N time. which means use binary search 

Data Structure
- Binary search will need lowBoundary, high Boundary and middle pivot 

Approach - Algorithms 
- Use binary search to find target
- if we don't find target, then we need to find the index of target using the left/right/pivot values 
- the 

[1, 3] t = 2

- pivot = 1
- it's not 3, 2 is smaller than nums[mid]
- therefore, we set right to 0
- mid = 0 
- mid is not equal to target, at this point, left is 0 and right is also 0 

- we return left, because the search stops when left is larger than right 
- which would be the actual place where the number needs to be


*/

var searchInsert = function(nums, target) {    
    let left = 0;
    let right = nums.length - 1;

    let mid;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};