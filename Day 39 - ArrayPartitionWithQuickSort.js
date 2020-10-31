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
//       console.log("Pivot Value: " + arrayPartition(arr));
//       console.log(arr);






function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    var index;
    // lower slice start idx = 0 end slice index -1
    // upper slice start idx = index end idx = arr.length-1
    if (arr.length>1){
        index = arrayPartition(arr,startIdx,endIdx);
        if(startIdx < index-1){
            quickSort(arr,0,index-1)
        }
        if(endIdx>index){
            quickSort(arr,index,endIdx)
        }
    }
    return arr;
  }
  
  console.log(quickSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]