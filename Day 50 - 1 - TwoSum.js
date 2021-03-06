// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
function twoSum(nums, target) {
    var arr = [];
    for(var i =0;i<=nums.length; i++){
        var sum = nums[i] + nums[i+1]
        if (sum == target) {
            arr.push([i]);
            arr.push([i+1]);
            return arr;
        }
        else{
            continue
        }
    }
};
    
console.log(twoSum([2,7,11,15], 9));


// Input: nums = [3,2,3], target = 6
// Output: [0,2]


//Nested Loop


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var arr = [];
    for(var i =0;i<=nums.length; i++){
        for(var j =1;i<=nums.length; j++){
        var sum = nums[i] + nums[j]
        if (sum == target) {
            arr.push([i]);
            arr.push([j]);
            return arr;
        }
        else{
            continue
        }
        }
        
    }
};
    
// console.log(twoSum([3,2,3], 6));