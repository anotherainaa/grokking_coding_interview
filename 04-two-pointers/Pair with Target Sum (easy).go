package main

import "fmt"

/*
Given an array of sorted numbers and a target sum,
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair)
such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

Problem
- Input: Array of sorted numbers, an a target number whereby two pairs should equal to the target
- Output: Array of two numbers, the indexes representing the pair that adds up to given target

Example
Input: [1, 2, 3, 4, 6], target=6
Output: 2 + 4 = 6, index of 2 and 4 are 1 and 3 [1, 3]

Input: [2, 5, 9, 11], target=11
Output: 2 + 9 = 11, [0, 2]

- Note that the numbers are sorted.
- Edge cases?
- Can we return the same index number or should I expect the array to always have more than one number?
- What values to return if we can't find the combination? Is it [-1, -1]?

Input: [11], target = 11
Output: [0, 0]

Input: [2, 3, 5], target = 6
Output: [-1, -1] ????

Data Structure
- Array of numbers.

Approaches - Algorithm

Brute force
- For each number, create another loop to find the matching pair
- Roughly quadratic time - O N2

Binary search
- Note there is a binary search way to do this. whereby we look for the second number using binary search
- This would produce O N log N time complexity, because for each N, we binary search for the second number.

Optimal approach - Two pointers
- We start with the beginning and end.
- If the total is more than the target, we move the right pointer forward.
- If the total is less than target, we move the left pointer forward
- Stop if the pointers cross?

[1, 2, 3, 4, 6]
    l
          r
  target 6 = less, move l
  found, set indices[0] to l, indices[1] to r

  return indices
*/

func findTargetSumIndices(numbers []int, target int) []int {
	indices := []int{-1, -1}

	left := 0
	right := len(numbers) - 1

	for left < right {
		// if left > right {
		// 	break
		// }

		sum := numbers[left] + numbers[right]

		if sum == target {
			// indices[0] = left
			// indices[1] = right
			// break
			return []int{left, right}
		}

		if sum > target {
			right--
		}

		if sum < target {
			left++
		}

	}

	return indices
}

func main() {
	fmt.Printf("Hello\n")
	fmt.Println(findTargetSumIndices([]int{1, 2, 3, 4, 6}, 6))
	fmt.Println(findTargetSumIndices([]int{2, 5, 9, 11}, 11))
	fmt.Println(findTargetSumIndices([]int{11}, 11))
	fmt.Println(findTargetSumIndices([]int{2, 3, 5}, 6))
}
