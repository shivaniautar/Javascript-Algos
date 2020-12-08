// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.


// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
var removeElement = function(nums, val) {
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]===val) nums.splice(i,1)
    }
    return nums.length;
};

console.log(removeElement([3,2,2,3],3));