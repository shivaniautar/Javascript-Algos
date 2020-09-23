/*
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

// const str1 = "abc"
// const expected1 = "cba"

// const str2 = ""
// const expected2 = ""

function reverseStr(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
    }
}

// console.log(reverseStr(str1))
// console.log(reverseStr(str2))

/* ******************************************************************************** */

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// add params if needed for recursion
function binarySearch(sortedNums, searchNum) {
    let middle = Math.floor(sortedNums.length / 2)
    if (searchNum == sortedNums[middle]) {
        return true
    } else if (sortedNums.length <=1){
        return false
    } else {
        if (searchNum > sortedNums[middle]) {
            return binarySearch(sortedNums.slice(middle + 1, sortedNums.length), searchNum)
        } else {
            return binarySearch(sortedNums.slice(0, middle), searchNum)
        }
    }
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))

