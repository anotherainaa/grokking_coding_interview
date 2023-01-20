// https://leetcode.com/problems/guess-number-higher-or-lower/submissions/881825278/

 /*
Rule
- guess the number picked by the API 
- the number is between 1 < pick < n 
- the key here is that, we don't know the target 
- the api will tell is if the target is high lower or the correct number 

algorithm 
- binary search
    - if api return 0, we've found the target, return num
    - if api returns -1, that means the current num is higher than the picked number
        - therefore we need to search left, set right to mid
    - if api return 1, the num is lower than the current num
        - therefore we need to search right. set left to mid 


 */

        var guessNumber = function(n) {
          let left = 1;
          let right = n;
        
          while (left <= right) {
              let mid = left + Math.floor((right - left) / 2);
        
              if (guess(mid) === 0) {
                  return mid;
              } else if (guess(mid) === -1) {
                  right = mid - 1;
              } else  {
                  left = mid + 1;
              }
          }  
        };