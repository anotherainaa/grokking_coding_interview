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
- skip duplicate numbers as it will produce duplicate triplets
- return all the triplets

this one is a O(N2)

*/

func searchPair(nums []int, target int, left int, triplets [][]int) [][]int {
	right := len(nums) - 1

	for left < right {
		currentSum := nums[left] + nums[right]

		if currentSum == target { // found the triplet
			triplets = append(triplets, []int{-target, nums[left], nums[right]})
			left += 1
			right -= 1
			for left < right && nums[left] == nums[left-1] {
				left += 1
			}

			for right < left && nums[right] == nums[right+1] {
				right -= 1
			}

		} else if target > currentSum {
			left += 1
		} else {
			right -= 1
		}
	}

	return triplets
}

func sumToZero(nums []int) [][]int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	results := [][]int{}
	var p = &results
	fmt.Println(*p)

	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		results = searchPair(nums, -nums[i], i+1, results)
	}
	fmt.Println(&results)

	return results
}

func main() {
	fmt.Println(sumToZero([]int{-3, 0, 1, 2, -1, 1, -2}))
}
