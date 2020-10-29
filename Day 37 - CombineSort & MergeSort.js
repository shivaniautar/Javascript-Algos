
//COMBINE SORT AND MERGE SORT

/**
 * takes in two sorted arrays
 * returns a new sorted array with the combined elements
 */

function combineSortedArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i<arr1.length; i++){
      newArr.push(arr1[i]);
    }
    for (let j = 0; j<arr2.length; j++){
      newArr.push(arr2[j]);
    }
    return newArr.sort();
    // your code here
  }
  
  console.log(combineSortedArrays([2, 4, 6], [1, 3, 5])); // should log [1, 2, 3, 4, 5, 6]
  console.log(combineSortedArrays([1], [3])); // should log [1, 3]
  console.log(combineSortedArrays([1], [])); // should log [1]
  
  
  
  
  /**
   * takes in an UNSORTED array
   * divide and conquer approach
   * returns a sorted array
   * function is recursive
   * it uses combineSortedArrays internally
   */
  
//   function mergeSort(arr) {
//     if (arr.length<= 1){
//       return arr;
//     }
//     else {
//       newArr = arr.slice(math.floor(arr.length/2));
//       newArr2 = arr.slice(0, math.floor(arr.length/2));
//       return mergeSort(newArr)
//     }
//     // your code here
//   }
  
  
//   // 1  2   3  4
//   [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
//   [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]
  
//   console.log(mergeSort([1, 5, 2, 8, 3, 4]));
//   // should log [1, 2, 3, 4, 5, 8]


  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const sliceIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, sliceIndex);
    const secondHalf = arr.slice(sliceIndex);
    return combineSortedArrays(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]