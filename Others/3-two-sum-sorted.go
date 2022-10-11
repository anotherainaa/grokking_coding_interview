/*
approach
- need to use two pointers.
- and go from front and from back

[2,7,11,15]
 l
      r
- 2 + 15 is more than target, therefore move the back forward
- 2 + 11 is more than target, therefore move the back forward
- 2 + 7 is equal to target therefore return the value.


*/

func twoSum(numbers []int, target int) []int {
	left := 0
	right := len(numbers) - 1

	for {
		if numbers[left]+numbers[right] == target {
			return []int{left + 1, right + 1}
		}

		if numbers[left]+numbers[right] > target {
			right -= 1
		}

		if numbers[left]+numbers[right] < target {
			left += 1
		}

		if left == len(numbers) {
			break
		}
	}
	return []int{0, 0}
}