package main

import "fmt"

/*
Problem Statement

Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]

*/

func squaring_sorted_array(nums []int) []int {
	left := 0
	right := len(nums) - 1
	results := []int{}

	for {
		fmt.Println(left, right)
		rightSquared := nums[right] * nums[right]
		leftSquared := nums[left] * nums[left]

		if rightSquared > leftSquared {
			results = append([]int{rightSquared}, results...)
			right--
		} else {
			results = append([]int{leftSquared}, results...)
			left++
		}

		if left > right {
			break
		}
	}
	return results
}

func main() {
	fmt.Println(squaring_sorted_array([]int{-2, -1, 0, 2, 3}))
	fmt.Println(squaring_sorted_array([]int{-3, -1, 0, 1, 2}))

}
