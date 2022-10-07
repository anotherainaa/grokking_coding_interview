package main

/*
Problem Statement

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

Input
- array and K value representing the maximum sub-array number
Output
- output array representing the maximum sum


Approach
- K Sliding window

subtract the element going out the window
add the new elemnt and compare max.



*/

import (
	"fmt"
	"math"
)

func maxSubArray(nums []int, k int) int {
	maxSum := 0
	windowSum := 0
	windowStart := 0

	for windowEnd := 0; windowEnd < len(nums); windowEnd++ {
		windowSum += nums[windowEnd]

		if windowEnd >= k-1 {
			maxSum = int(math.Max(float64(maxSum), float64(windowSum)))
			windowSum -= nums[windowStart]
			windowStart++
		}
	}

	return maxSum
}

func main() {
	fmt.Println(maxSubArray([]int{2, 1, 5, 1, 3, 2}, 3))
}
