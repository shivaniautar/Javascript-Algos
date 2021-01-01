// 69. Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1


/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let x = 1;
    let y = 0;
    let min = area;
    let result = [];
    
    while (x * x <= area) {
        
        if (area % x == 0) {
            y = area / x;
            
            if (y - x <= min) {
                min = y - x;
                result = [y, x];
            }
        }

        x++    
    }
    
    return result
};