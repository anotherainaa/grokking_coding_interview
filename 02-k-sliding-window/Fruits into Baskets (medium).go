package main

import "fmt"

/*
Problem Statement
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.


Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

- Mental model is to keep picking fruit, if there are 3 unique letters, we gotta remove the one infront.

Approach
- create a window, keep adding to window and adding frequency of each fruit
- if the unique fruit (unique keys) are more than 2
	- we need to remove the left most fruit
	- if the left most fruit is 0, remove it from the hashmap(why? this will help with counting unique fruits)
	- move the start window
- compare the maximum amount of fruits up until now (greedy approach)
- return max length

the key problem is to make sure that we know how to count unique characters and when to remove it
from the window. and how to count the max length.
- this producses O(N + N) - note how we use keys to check where by we have to grab the keys from map every time.




*/

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

func fruitBasket(fruits []string) int {
	maxFruits := 0
	windowStart := 0
	fruitFrequency := make(map[string]int)

	for windowEnd := 0; windowEnd < len(fruits); windowEnd++ {
		rightFruit := fruits[windowEnd]

		_, found := fruitFrequency[rightFruit]
		if found {
			fruitFrequency[rightFruit] = 0
		}

		fruitFrequency[rightFruit] += 1

		for len(fruitFrequency) > 2 {
			leftFruit := fruits[windowStart]
			fruitFrequency[leftFruit] -= 1

			if fruitFrequency[leftFruit] == 0 {
				delete(fruitFrequency, leftFruit)
			}
			windowStart += 1
		}

		maxFruits = max(maxFruits, windowEnd-windowStart+1)
	}
	return maxFruits
}

func main() {
	fmt.Println("Hello")
	fmt.Println(fruitBasket([]string{"A", "B", "C", "A", "C"}))
	fmt.Println(fruitBasket([]string{"A", "B", "C", "B", "B", "C"}))
}
