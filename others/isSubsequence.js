// https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1


/*
Problem
Input: string s and string t, s must be a subsequence of t 
Output: boolean representing true or false depending if s is a subsequence of t

Algorithm
- iterate through string s and t
  - if letter in t matches s, move s pointer 
- if left pointer is equal to string left return true, else, return false

- key to take care here is handling boundaries.

*/

var isSubsequence = function(s, t) {
  let leftBound = s.length;
  let rightBound = t.length;
  
  let left = 0;
  let right = 0;
  
  while (left < leftBound && right < rightBound) {
      if (s[left] === t[right]) {
          left += 1;
      }
      right += 1;
  }
  
  return left === leftBound;
};