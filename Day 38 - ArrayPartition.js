//ARRAY PARTITION



/**
 * takes in an array, a start index, and an end index
 * picks a random pivot index around which values will be partitioned
 * returns an integer: the new "pivot" index
 * the array should be mutated by the function
 */

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    // your code here
    const pivot = arr[Math.floor(Math.random ()*arr.length)]
    while (arr[startIdx] <= arr[endIdx]) {
    while (arr[startIdx]<arr[pivot]) {startIdx++;}
    while (arr[endIdx]>arr[pivot]) {endIdx--;}}
    if (startIdx <= endIdx) {
     [arr[startIdx], arr[pivot] == arr[endIdx], arr[pivot]]
      let temp=arr[startIdx];
      arr[startIdx]=arr[endIdx];
      arr[endIdx]=temp;
      //if (pivot < math.floor(arr.length/2)) { pivot++}
      //if (pivot > math.floor(arr.length/2)) { pivot--}
      //  if (arr[startIdx]> arr[pivot] & arr[endIdx] < arr[pivot])
    }
    return pivot;
  }
  
  // Math.random() returns a number from 0 up to but excluding 1
  
  const arr = [1, 5, 8, 4, 2, 6]
  console.log(arrayPartition(arr)); // should log an index between 0 and 5
  console.log(arr); // should be mutated and partitioned around the returned index
  
  // all values should be partitioned around the returned pivot index
  // for example, if your function chooses a pivot of 3,
  // the returned pivot should be 2 (the new pivot index)
  // the array might now be [1, 2, 4, 8, 5, 6]
  // 4 has all smaller values to its left and all greater values to its right
  
  
  // GRIFFANS SOLUTION:
  function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIdx = Math.floor(Math.random() * (endIdx + 1));
    let pivot = arr[pivotIdx];
  
    while (startIdx < endIdx) {
      while(arr[startIdx] < pivot){
        startIdx++;
      }
      while (arr[endIdx] > pivot){
        endIdx--;
      }
      if (startIdx < endIdx) {
        let temp = arr[startIdx];
        arr[startIdx] = arr[endIdx];
        arr[endIdx] = temp;
      }
    }
    return startIdx;
  }
  
  const arr = [1, 5, 8, 4, 2, 6]
  console.log("Pivot Value: " + arrayPartition(arr));
  console.log(arr);