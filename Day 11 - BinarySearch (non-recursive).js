/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview):
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

function binarySearch(sortedNums, searchNum) {
    var middleNum = Math.floor((sortedNums.length)/2);
    if(searchNum<=sortedNums[middleNum]){
        for(var i=0;i<=middleNum;i++){
            if(sortedNums[i] == searchNum){
                return true;
            }
        }
    }
    if(searchNum>sortedNums[middleNum]){
        for(var j=middleNum;j<=sortedNums.length-1;j++){
            if(sortedNums[j] == searchNum){
                return true;
            }
        }
    }
  return false
}
console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
console.log(binarySearch(nums4, searchNum4));



// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
const expected4 = 4

function binarySearch(sortedNums, searchNum) {
    var count=0;
    var middleNum = Math.floor((sortedNums.length)/2);
    if(searchNum<=sortedNums[middleNum]){
        for(var i=0;i<=middleNum;i++){
            if(sortedNums[i] == searchNum){
                count= count+1;
                continue;
            }
          return count;
        }
    }
    if(searchNum>sortedNums[middleNum]){
        for(var j=middleNum;j<=sortedNums.length-1;j++){
            if(sortedNums[j] == searchNum){
                count=count+1;
                continue;
            }
        return count;
        }
    }
  return count;
}
console.log(binarySearch(nums4, searchNum4));