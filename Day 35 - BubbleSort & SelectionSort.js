 /**
 * takes in an array
 * returns THE SAME array sorted
 * compares adjacent elements
 * and swaps positions if necessary
 * largest elements "bubble" to the top
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
    for (var j = arr.length - 1; j > 0; j--){
      for(var i = 0; i < j; i++){
        if (arr[i] > arr[i + 1]){
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  /**
   * takes in an array
   * returns THE SAME array sorted
   * each time through, select the smallest element
   * at the end, swap it with the element at the current position
   */
  
  function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++){
      var minIdx = i;
  
      for (var j = i + 1; j < arr.length; j++){
        if (arr[minIdx] > arr[j]){
            minIdx = j;
        }
      }
  
      if (minIdx != i){
        var temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }
    return arr;
  }
  
  console.log(selectionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  