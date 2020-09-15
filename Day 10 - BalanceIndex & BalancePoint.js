/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3]
// const expected1 = 2

const nums2 = [9, 9]
// const expected2 = -1

const nums3 = [9, 9, 1,1, 15, 17, 3]
// const expected2 = 4


function balanceIndex(nums) {
    for(var bpoint=0; bpoint<nums.length-1;bpoint++){
        var leftSum = 0;
        var rightSum = 0;
        //LEFT SUM
        for(var left=0; left<bpoint; left++){
            leftSum+= nums[left];
        }
        //RIGHT SUM
        for(var right=nums.length-1; right>bpoint; right--){
            rightSum+= nums[right];
        }
        if(leftSum === rightSum){
          return bpoint;
        }
    }
  return -1
}
console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
console.log(balanceIndex(nums3));

/* ******************************************************************************** */

/*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

const nums1 = [1, 2, 3, 4, 10]
// const expected1 = true
// // Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1]
// const expected2 = false

function balancePoint(nums) {
    let i, leftSum, rightSum;
    rightSum=0;
    for(i=0;i<nums.length;i++){
        rightSum+=nums[i];
    }
    leftSum=0;
    for(i=0;i<nums.length-1;i++){
        leftSum+=nums[i];
        rightSum-=nums[i];
        if(leftSum == rightSum){
            return true;
        }
    }
    return false;
}

console.log(balancePoint(nums1));
console.log(balancePoint(nums2));