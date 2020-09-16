/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

function removeDuplicatesUnsorted(arr){
    var dict = {}
    var new_arr = []
    for(var i=0;i<arr.length;i++){
      if(!dict.hasOwnProperty(arr[i])) {
        dict[arr[i]] = 1;
        new_arr.push(arr[i])
      }
    }
    return new_arr;
  }
  
  function removeDuplicates(arr) {
    var i=0;
    while(i < arr.length){
      if(arr[i] === arr[i+1]){
        arr.splice(i+1,1)
        continue
      }
      else{
          i++
      }
    }
    return arr
  }
    
    console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
    // should log [1, 2, 3, 4, 5]
  
  /* ******************************************************************************** */
  
  /*
    Array: Mode
  
    Create a function that, given an array of ints,
    returns the int that occurs most frequently in the array.
  
    What if there are multiple items that occur the same number of time?
      - return all of them (in an array)
      - what if all items occur the same number of times?
        - return empty array
  */
  
 function findAllModes(arr) {
    var freq_table = {};
    var new_arr =[]
    for (var i = 0; i < arr.length; i++) {
      if (freq_table.hasOwnProperty(arr[i]) === false) {
        freq_table[arr[i]] = 1
      }
      else{
        freq_table[arr[i]] += 1;
      }
    }
    
    var checker = 1
    for(var j=0; j<arr.length;j++){
        if(freq_table[arr[j]] > checker){
            while(new_arr.length>0){
              new_arr.pop()
            }
            new_arr.push(arr[j]) 
            checker = freq_table[arr[j]]
        }
        else if(freq_table[arr[j]] === checker){
  
            new_arr.push(arr[j])
        }
  
    }
    arr = removeDuplicatesUnsorted(arr)
    new_arr=removeDuplicatesUnsorted(new_arr)
    if(arr.length===new_arr.length){
        return []
    }
    if(new_arr.length === 1){
        return new_arr[0]
    }
    else{
      return new_arr
    }
  }
  
  console.log(findAllModes([1, 2, 3, 4])); // should log []
  console.log(findAllModes([1, 1, 3, 4])); // should log 1
  console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
  console.log(findAllModes([3,1,4,2,3,1]));
