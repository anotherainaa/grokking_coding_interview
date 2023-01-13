/*
# Problem Statement

Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

===================

## Understandig the Problem

Input: String, integer K
- string with characters (what is in the characters?)
- integer representing the maximum number of distinct characters
Output: Number
- representing the length of the longest substring in it 

### Rules
- find longest substring where by the maximum distinct characters is determined by given integer K 
- K must be more than 1, can it be more than the word itself? 

### Edge cases
- empty string? 
- assume no spaces or invalid characters 
- assume K will not equal to 0 or longer than the actual string? 

## Examples
"araaci",  K = 2
answer = 4, because in "araa" there are only 2 distinct characters, max length of 4

"araaci",  K = 1
answer = 2, because in "aa" there are only 1 distinct characters with max length of 2

"babababa", K = 2
answer = 8

Approach 
1 - brute force
  - generate all the sustrings of the string 
  - for each substring, count the number of characters and if it matches K, check if it is the maximum 
  - (greedy approach)


2 - efficient way - O(N)

K = 2
"araaci"
       a
     b

length = 2
max = 4

variables
- 2 pointers
- count of characters?  to determine when I've reached more than K
- ending condition - when fast runner reaches the end

Algorithm 

First attempt
- iterate through chars
- set character in object to true 
- if the number of characters in object is > more than K
  - get the longestSubstr by comparing current position of A minus position of B 
  - check if it's more than max, replace max if it is 
- if pointerA is larger than > chars.length,
  - check number of characters 
  - if less than k
  - compare max
  - break out 
- return maximum length

Refactored
- to avoid repetitive code, as we add characters, we shrink it if it is larger than k
  - whenever the charcters is not larger than k, we will check the longest substring through greedy approach

Difference with first algorithm
- make the code dry. 
- first code has more lines and more opprtunities to have bugs, especially at the end condition.
- note that we can also use frequency to keep track of existing characters. 
  - the main difference is handling 

Things that could be improved
- variable names - can use left and right, or windowStart and End to help differentiate the beginngin and end
- hashMap name can be characterExists or charFrequency


araaci
     a
  b

max Length = 4
hash 

c
i
wrong answer
*/



function longestDistinctCharsSubstring(chars, k) {
  let pointerA = 0;
  let longest = 0;
  let charactersObj = {};

  for (let pointerB = 0; pointerB < chars.length; pointerB++) {
    let rightChar = chars[pointerB];

    if (!(rightChar in charactersObj)) {
      charactersObj[rightChar] = 0;
    }
    charactersObj[rightChar] += 1;

    while (Object.keys(charactersObj).length > k) {
      const leftChar = chars[pointerA];

      charactersObj[leftChar] -= 1;

      if (charactersObj[leftChar] === 0) {
        delete charactersObj[leftChar];
      }
      pointerA++
    }

    longest = Math.max(longest, pointerB - pointerA + 1);
  }

  return longest;
}

console.log(longestDistinctCharsSubstring('araaci', 2));
console.log(longestDistinctCharsSubstring('araaci', 1));
console.log(longestDistinctCharsSubstring('bababa', 2));
console.log(longestDistinctCharsSubstring('cbbebi', 3));
