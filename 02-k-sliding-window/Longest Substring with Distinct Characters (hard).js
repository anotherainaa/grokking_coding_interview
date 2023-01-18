

/*
Problem Statement

Given a string, find the length of the longest substring, which has all distinct characters.

 Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".

Key 
- A character frequency should never go beyond 1, if so we need to subtract left letter until it reaches 1 or less


*/

function nonRepeatSubstring(str) {
  let left = 0;
  let chars = {};

  results = 0;

  for (let right = 0; right < str.length; right += 1) {
    rightChar = str[right];

    if (!chars[rightChar]) {
      chars[rightChar] = 0
    }

    chars[rightChar] += 1

    while (chars[rightChar] > 1) {
      leftChar = str[left];
      chars[leftChar] -= 1;
      left += 1
    }

    results = Math.max(results, right - left + 1);
  }
  return results;
}

console.log(nonRepeatSubstring("aabccbb"));
console.log(nonRepeatSubstring("abbbb"));