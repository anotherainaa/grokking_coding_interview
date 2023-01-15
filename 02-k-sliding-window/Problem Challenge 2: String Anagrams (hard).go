package main

import "fmt"

/*
Problem Statement

- Given a string and a pattern, find all anagrams of the pattern in the given string.

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

apporach 
- sliding window 

- keep a char frequency of pattern 
- keep a char frequency to check the window 
- keep adding characters to window
- add the frequency of character 

- if longer than pattern length, remove a character from the front and the frequency of characters

- check if the length is the same as pattern
- for each character, check that each character is equivalent to pattern characters. 

- if true, add index to array 

*/

func main() {
	fmt.Printf("======")
}
