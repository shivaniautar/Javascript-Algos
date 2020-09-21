// Recursion

// Base case(s)
// return value or function call
// Forward movement
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

function sumArr(nums) {
    if (nums.length < 2){
        return nums[0]
    } else {
        return nums[nums.length - 1] + sumArr(nums.slice(0, nums.length - 1)) 
    }
}


// console.log(sumArr(nums1))

/* ******************************************************************************** */

/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num1 = 5
const expected1 = 15
// Explanation: (1+2+3+4+5)

const num2 = 2.5
const expected2 = 3
// Explanation: (1+2)

const num3 = -1
const expected3 = 0

function recursiveSigma(num) {
    if (num < 1) {
        return 0
    } else if (num < 2) {
        return 1
    } else {
        return Math.floor(num) + recursiveSigma(Math.floor(num - 1))
    }
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))