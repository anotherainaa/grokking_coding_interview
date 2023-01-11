package main

import (
	"fmt"
	"math"
)

/*
Problem Statement

Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Problem
Input: array of integers, and a target sum
Output: integer, representing the smaller number of subarray equal or greaten than sum
Example
[2, 1, 5, 2, 3, 2], S=7

[5, 2] - 7, smallest subarray
anything attached to this would be greater than 7 such as
1, 5, 2
5, 2, 3
the challenge is to figure out the smallest at which we can find the sum greater than or equal to target

Edge cases
What to do if we can't find any? - Return -1 ??? or 0? There is not such thing as 0 snallest subarry

Approach

# Brute force
- Create all the subarrays, find the one greater than or equal to the sum
- return smallest
- quadratic?

# Sliding window
- We start with the first item, and left and right pointers
- it's possible for a window to be size 1.
- therefore it should be possible for both pointers to be at the same position

[2, 1, 5, 2, 3, 2]
    l
       r
do the greedy approach - we keep 2, 1, 5 or 3
r reached the end, we
we finish when l reaches the end

[2, 1, 5] = 5
       l
       r

windowstart and windowend start at the same place
- check if it's larger than sum
- if so, keep the subarray length

- if it's larger than sum, move r.
- if it's smaller than sum, move l

- if l reaches the end, break out

- return smallest
*/

func smallestSubArraySum(numbers []int, target int) int {
	smallest := math.Inf(0)

	windowStart := 0
	windowSum := 0

	for windowEnd := 0; windowEnd < len(numbers); windowEnd++ {
		windowSum += numbers[windowEnd]

		for windowSum >= target {
			smallest = math.Min(smallest, float64(windowEnd-windowStart+1)) // write own Min function?
			windowSum -= numbers[windowStart]
			windowStart += 1
		}
	}

	return int(smallest)
}

func main() {
	fmt.Println(smallestSubArraySum([]int{2, 1, 5, 2, 3, 2}, 7))
}
