package main

import "fmt"

/* use a hash for O(N) space and O(1) time

approach
- iterate through the nums
- for each number check if there is a corresponding number in the hash
- if there is, then return both index
- else return 0, 0 if it doens't exist

*/

func twoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		diff := target - nums[i]
		val, exists := hashMap[diff]

		if exists {
			return []int{val, i}
		}

		hashMap[nums[i]] = i
	}

	return []int{0, 0}
}

func main() {
	fmt.Println((twoSum([]int{3, 3}, 6)))
}
