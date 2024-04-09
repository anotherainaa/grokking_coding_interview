// Given an array of both positive and negative integers and a number K., The task is to check if any subarray with product K is present in the array or not.

// Examples:

// Input: arr[] = {-2, -1, 3, -4, 5}, K = 2
// Output: YES

// Input: arr[] = {3, -1, -1, -1, 5}, K = 3
// Output: YES

/*
// set minValue, maxValue and MaxProduct to first value in array

iterate from second item in array 
- if current value is less than 0.
- swap min valu and max value 

greedy approach
- grab the min value from min between current and product x min maxValue
- do the same with maxValue

- if max value ==k or min value == k
- return true

greedy appraoch
- set the max product - max up until now or maxValue

return false

*/

function maxProduct(arr, k) {
  let minValue = arr[0];
  let maxValue = arr[0];
  let maxProduct = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp = minValue;
      minValue = maxValue;
      maxValue = temp;
    }

    maxValue = Math.max(arr[i], maxValue * arr[i]);
    minValue = Math.min(arr[i], minValue * arr[i]);

    if (minValue === k || maxValue === k) {
      return true;
    }

    maxProduct = Math.max(maxProduct, maxValue);
  }
  return false;
}

console.log(maxProduct([-2, -1, 3, -4, 5], -3));
console.log(maxProduct([-2, -1, 3, -4, 5], 5));
console.log(maxProduct([3, -1, -1, -1, 5], 3));
console.log(maxProduct([-2, -1, 3, -4, 5], 5));
