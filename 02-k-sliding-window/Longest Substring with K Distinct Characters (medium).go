package main

/*
Problem Statement

Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

==========
Input: string of chracters, K representing distinct characters that a substring should have
Output: integer, representing the length of the substring with K distinct characters

Example/Test cases

longestSubstringWithKChars("araaci", 2)  // 4
### because araa would have 2 characters and be the longest substring

longestSubstringWithKChars("araaci", 2) // 2 because "aa"
"araaci", K=1

longestSubstringWithKChars("cbbebi", 3) //
// cbbeb => 5
// bbebi => 5
both substrings have 3 distinct characrers

Question
- If K == 0? Answer should be 0?
- If empty string, answer should be 0?
- Handling any unwanted data?
- assume all lower characters?
- what about special characters?
- will there be spaces?

Approach
Brute force
- find all the substrings
- filter the substring with distinct characters matching K
- return the longest one.
- a quadratic approach

optimal approach
- sliding window

araaci
- keep adding to the string
- when the number of characters is more than k
	- need to remove character to ensure substring has k distinch characters
	- need to check what is the longest substring so far, greedy approach
- return longest when you reach the end.

How do you check the number of distinct characters?
- going through each character one by one would result in N * number of characters time complexity
- therefore we need to remember the frequency of characters seen,
	- and remove characters as we go to ensure O N timing
- use a hashMap to remeber the characters
- remove the number of character when reducing the window size

when the hashmap distinct characters is more than K
- first we need to remove the frequency of the left most character
- if the character reaches 0, we remove the character from hashmap
- else, we need to keep removing characters (go back to start of this loop) while moving the windowStart



*/

// function for checking longer substring? / compare to length / max

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

func longestSubstringWithKChars(chars []string, k int) int {
	longest := 0

	substring := ""
	for windowEnd := 0; windowEnd < len(chars); windowEnd++ {
		substring += chars[windowEnd]

		// Note that checking distinct characters will produce N * N steps
	}

	return longest
}

func main() {

}
