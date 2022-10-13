package main

import (
	"fmt"
	"sort"
)

/*
Problem Statement

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

approach
- similar to three sum approach

General idea
- sort the slice
- take the first number and find the pair from remanining numbers that equal to zero when added with first number
- return all the triplets

this one is a O(N2)

*/

func searchPair() {

}

func sumToZero(nums []int) [][]int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	fmt.Println(nums)

	return [][]int{[]int{0, 0, 0}}
}

func main() {
	fmt.Println(sumToZero([]int{-3, 0, 1, 2, -1, 1, -2}))
}
