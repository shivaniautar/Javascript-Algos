// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0







        const reverse = x => {
            let y;
            // check for negative
            if(x<0){
                y=x.toString().split('').reverse();
                y.unshift('-');
                y.pop();
                y = parseInt(y.join(''));
                // check for 32 bit outside of bounds
                if(y< -2147483648){
                    return 0 
                }
                // positive case
            }else{
                y=parseInt(x.toString().split('').reverse().join(''))
                // check for 32 bit outside of bounds
                if(y> 2147483647){
                    return 0 
                }
            }
            console.log(y);
            return y
        }

        reverse(-10)
        reverse(102)