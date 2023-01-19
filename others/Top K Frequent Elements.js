/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Mental model of approaches 
1 - Most used - sort for O n log n
2 - Use heap - for O k log n, k representing the k 
3 - Use a bucket sort for On time. 
  - the key to using bucket sort is understanding that the index represents the frequency where we add stuff to it. 
  - then we return the most frequenct value
  - why is it useful? Because the upper boundary of the bucket is bounded by the length of array

*/