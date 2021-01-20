//18 4Sum
// Medium

// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []
 

// Constraints:

// 0 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

//Objective is to find the number of 4 values, one chosen from A, B, C, and D,
//that add up to 0

let A = [ 1, 2],
B = [-2,-1],
C = [-1, 2],
D = [ 0, 2]


//O(n^2) solution that maps over the sum of tuples in A and B first,
//then finds the complements in C and D's tuples.

let count = 0
let map = {}

//Map out the frequency of every sum in A and B
for (let val of A) {
    for (let val2 of B) {
        let sum = val + val2
        
        if (map[sum] == undefined) {
            map[sum] = 1
        } else {
            map[sum]++
        }
    }
}

//Find the complements in C and D
for (let val of C) {
    for (let val2 of D) {
        let target = -(val + val2)
        
        if (map[target]) {
            count += map[target]
        }
    }
}

return count