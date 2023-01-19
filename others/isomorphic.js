/*
Link: https://leetcode.com/problems/isomorphic-strings/

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

======= 

Problem 
Input: two strings, 
Output: boolean, true or false depending on if they're isomoprhic 

Rules 
- Isomorphic - if the characters in s can be replaces to get t. 
- we have to preseve the order of characters. 
- no two characters may map to the same character. 

Examples
Input: s = "egg", t = "add"
Output: true

This is true, because we can change 
e => a
g => d
g => d

same amount of characters as well same amount of frequency of characters

Input: s = "foo", t = "bar"
Output: false

foo
1 f and 2 os 

bar
1 b, 1 a and 1 r 

rule is same amount of character but not the same amount of frequency of characters

Input: s = "paper", t = "title"
Output: true

p => t
a => i
p => t
e => l
r => e

as long as you have same amount of characters and they map to a character on the other side, they are isomorphic 

banana => papaya 
1 b, 2n, 3a 
1 y, 2p, 3a
false => because order not preserved.

add => egg
true 

add => gge 
false

banana => create
this is false 

add
  a

egg
  b

- the first letter, I assume everything just works 
- the second letter, it's a different letter than the first one, therefore check if the second string also has a different letter than the one before
- third letter. 

  a
add
gge
  b      



{
  a: g,
}

I check if d is mapped to something - I'm using the key to check the value
I check if g is mapped to something - I'm using the value to check the key


a maps to g
d maps to g, but it shouldn't because a already mapped to g before

Data Structure 
- HashMap to keep the mapped letters 
- Going to use that for comparison and then return booleans
- Two pointers to go through both strings 

Algorithm 
- Declare letterMap object (hash) to keep the mapped letters
- Declare two pointers, a and b and they both start at 0 
- Iterare through both strings at once. 
  - check if the character exists in the map - use the character from first string and check if it already exists in the key and if it maps to the same character in the second string 
  - check the other way around, check the character in the second string doesn't already exist in the object. 
    - if there is a match, and the values are not the same, return false 
  - Map the character from the first string to the second character 
    - if the value already exists, return false
  - increament a and b
- return true 

*/

// function isomorphicString(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let letterMap = {};

//   for (let i = 0; i < str1.length; i++) {
//     let str1Char = str1[i];
//     let str2Char = str2[i];

//     // if the letter exists in the map, I need to check that it matches the second character
//     if (letterMap[str1Char] === str2Char) continue; 

//     // console.log(letterMap);

//     // if it doesn't exist as a key, I need to make it doesn't exist as a value
//     if (!letterMap[str1Char]) {
//       // console.log(letterMap);
//       if (!Object.values(letterMap).includes(str2Char)) {
//         letterMap[str1Char] = str2Char
//       } else {
//         return false
//       }
//     } else {
//       // console.log("str1", str1Char);
//       // console.log("str2", str2Char);
//       return false;
//     }
//   }
//   return true;
// }

// Re-creating an optimal solution using two hashes 
// This solves the extra steps incurred when checking the mapping from string t to a.

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (!mapStoT[sChar] && !mapTtoS[tChar]) {
      mapStoT[sChar] = tChar;
      mapTtoS[tChar] = sChar;  
    }
    
    if (mapStoT[sChar] !==  tChar || mapTtoS[tChar] !== sChar) {
      return false
    }

  }
  return true
}


console.log(isIsomorphic("add", "egg")); // true
console.log(isIsomorphic("add", "ggg")); // false
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("banana", "papaya")); // false
console.log(isIsomorphic("banana", "create")); // false