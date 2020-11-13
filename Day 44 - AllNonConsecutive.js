/**
 * takes in an array of integers
 * returns an array of TWO INDICES
 * the indices should point to the two elements
 * that add up to the given sum
 * assume that there is only one solution
 * numbers can only be used once
 */

function sumTwo(arr, sum) {
    var firstIndex =-1;
    var secondIndex =-1; 
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        let first = arr[i];
        for(var j=i;j<arr.length;j++){
            let second = arr[j];
            if((first + second)==sum){
                firstIndex = i;
                secondIndex = j;
            }
        }
    }
    if(firstIndex == -1 && secondIndex == -1){
        return "No Sum Found"
    }
    else{
        newArr.push(firstIndex);
        newArr.push(secondIndex);
        return newArr;
    }
  }


  
  console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
  
  
  /**
   * takes in an array of integers
   * returns an ARRAY of OBJECTS
   * with each one having two key/value pairs: the index and the number
   * the array should have ONLY non-consecutive values
   * the first element of the array is NEVER considered non-consecutive
   */
  
  function allNonConsecutive(arr) {
    var newArr=[];
    
    for(var i=1;i<arr.length;i++){ 
        if(arr[i] != arr[i+1]-1){ 
            var nonConsecutive = {
                i:i+1,
                n:arr[i+1]
            };
            // nonConsecutive.i=i
            // nonConsecutive.n=arr[i]
            newArr.push(nonConsecutive);
            
        }
    }
    newArr.pop();
    return newArr;
  }
  
//

  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives