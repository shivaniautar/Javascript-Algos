// 29. Divide Two Integers
// Medium

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note:

// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
 

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.
// Example 3:

// Input: dividend = 0, divisor = 1
// Output: 0
// Example 4:

// Input: dividend = 1, divisor = 1
// Output: 1
 

// Constraints:

// -231 <= dividend, divisor <= 231 - 1
// divisor != 0



//Objective is to divide two integers without the use of * or /

let dividend = 10
let divisor = 3


//O(n) solution (since worst case is divisor == 1) where we use repeated subtraction

if (dividend == -2147483648 && divisor == -1) {
    return 2147483647
}

let temp = Math.abs(dividend)
let temp2 = Math.abs(divisor)
let result = 0

while (temp >= temp2) {
    temp -= temp2
    result++
}

if (dividend < 0 && divisor < 0) {
    return result
} else if (dividend < 0 || divisor < 0) {
    return -result
} else {
    return result
}


//O(logn) solution where we repeatedly subtract powers of two and bit shift

if (dividend == -2147483648 && divisor == -1) {
    return 2147483647
}

let sign = dividend > 0 ^ divisor > 0 ? -1 : 1

let dvd = Math.abs(dividend)
let dvs = Math.abs(divisor)
let ans = 0

while (dvd >= dvs) {
    let temp = dvs
    let tempRes = 1
    
    while (temp << 1 <= dvd) {
        temp <<= 1
        tempRes <<= 1
    }
    dvd -= temp
    ans += tempRes
}    

return sign * ans