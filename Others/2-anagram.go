package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	table := make(map[byte]int)

	for i := 0; i < len(s); i++ {
		table[s[i]] += 1
	}

	for i := 0; i < len(t); i++ {
		table[t[i]] -= 1

		val, _ := table[t[i]]
		if val < 0 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
	fmt.Println(isAnagram("cat", "ace"))
}
