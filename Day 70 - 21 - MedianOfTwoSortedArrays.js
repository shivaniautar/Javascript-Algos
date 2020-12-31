// Median of Two Sorted Arrays
// Hard

// 8765

// 1352

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000
// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

//Objective is to find the median of two sorted arrays


let nums1 = [1,3]
let nums2 = [2,4]

//O(log(min(m, n))) solution

function getMedian(nums1, nums2) {
    //Make sure that the second argument is always longer than the first
    if (nums1.length > nums2.length) {
        return getMedian(nums2, nums1)
    }

    let x = nums1.length 
    let y = nums2.length 

    let low = 0
    let high = x 

    while (low <= high) {
        //Partition the two arrays such that they are of equal length
        let partitionX = (low + high) / 2 | 0
        let partitionY = (x + y + 1) / 2 - partitionX | 0

        //Find the right and left extremes for the X and Y partitions
        let maxLeftX = (partitionX == 0) ? -Infinity : nums1[partitionX - 1] 
        let minRightX = (partitionX == x) ? Infinity : nums1[partitionX]

        let maxLeftY = (partitionY == 0) ? -Infinity : nums2[partitionY - 1] 
        let minRightY = (partitionY == y) ? Infinity : nums2[partitionY]

        //If the partitions are sorted correctly...
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            //If there are an even total number of elements...
            if ((x + y) % 2 == 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
            //If there are an odd total number of elements...
            } else {
                return Math.max(maxLeftX, maxLeftY)
            }
        //Right side heavy, move to left
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1
        //Left side heavy, move to right
        } else {
            low = partitionX + 1
        }
    }
}
return getMedian(nums1, nums2)