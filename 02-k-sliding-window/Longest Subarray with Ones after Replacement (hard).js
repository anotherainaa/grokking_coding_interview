
/*

Problem Statement

Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

Problem
Input- array of nums
Output- longest subarray with ones if you are allowed to replace k amount of os with 1. 

Example 1 - Longest One. 
6 because we replace 0 at index 5 

Approach 

0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1
               l
                              r
k  = 2


- keep adding to window
- if 0 is more than k, 
 - remove one letter from the beginning
 - check the max length between the one before current 0, 

*/

function longestOnesAfterReplacement(numbers, k) {
  let maxLength = 0;
  let windowStart = 0;
  let numFrequency = {};

  for (let windowEnd = 0; windowEnd < numbers.length; windowEnd += 1) {
    let rightNum = numbers[windowEnd];

    if (!numFrequency[rightNum]) {
      numFrequency[rightNum] = 0;
    }
    numFrequency[rightNum] += 1;

    // while there are more 0s than k, 
    // we need to remove the letter on the left until we've removed enough zeros
    while (numFrequency[0] > k) {
      let leftNum = numbers[windowStart];
      numFrequency[leftNum] -= 1
      if (numFrequency[leftNum] === 0) {
        delete numFrequency[leftNum]
      }
      windowStart++
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(longestOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(longestOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));