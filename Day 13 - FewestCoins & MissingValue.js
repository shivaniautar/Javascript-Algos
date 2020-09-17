/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/


// const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
      let coins = {}
      // check if integer
      if (cents % 1 != 0) {
          return "Cents cannot be decimal."
      }
      while (cents > 0) {
          if (cents >= 25) {
              if ('quarters' in coins) {
                  coins['quarters'] += 1;
                  cents -= 25;
              } else {
                  coins['quarters'] = 1;
                  cents -= 25;
              }
          } else if (cents >= 10) {
              if ('dimes' in coins) {
                  coins['dimes'] += 1;
                  cents -= 10;
              } else {
                  coins['dimes'] = 1;
                  cents -=10;
              }
          } else if (cents >= 5) {
              if ('nickels' in coins) {
                  coins['nickels'] += 1;
                  cents -= 5;
              } else {
                  coins['nickels'] = 1;
                  cents -= 5;
              }
          } else if (cents > 0) {
              if ('pennies' in coins) {
                  coins['pennies'] += cents;
                  cents -= cents;
              } else {
                  coins['pennies'] = cents;
                  cents -= cents;
              }
          }
      }
      return coins
  }
  
  // console.log(fewestCoinChange(cents1))
  // console.log(fewestCoinChange(cents2))
  // console.log(fewestCoinChange(cents3))
  // console.log(fewestCoinChange(cents4))
  
  
  /* ******************************************************************************** */
  
  /*
    Missing Value
    You are given an array of length N that contains, in no particular order,
    integers from 0 to N . One integer value is missing.
    Quickly determine and return the missing value.
  */
  
  const nums1 = [3, 0, 1]
  const expected1 = 2
  
  const nums2 = [3, 0, 1, 2]
  const expected2 = null
  // Explanation: nothing is missing
  
  /*
    Bonus: now the lowest value can now be any integer (including negatives),
    instead of always being 0.
  */
  
  const nums3 = [2, -4, 0, -3, -2, 1]
  const expected3 = -1
  
  const nums4 = [5, 2, 7, 8, 4, 9, 3]
  const expected4 = 6
  
  
  
  function selectionSort(arr) {
      let pos = 0;
      let temp = 0;
      for (let i = 0; i < arr.length; i++) {
          pos = i;
          for (let j = i; j < arr.length; j++) {
              if (arr[j] < arr[pos]){
                  pos = j;
              }
          }
          temp = arr[i];
          arr[i] = arr[pos];
          arr[pos] = temp;
      }
      return arr
  }
  
  
  function missingValue(nums) {
      let sortedArr = selectionSort(nums);
      for (let i = 0; i < sortedArr.length - 1; i++) {
          if ((sortedArr[i + 1]) != (sortedArr[i] + 1)) {
              return sortedArr[i] + 1;
          } 
      }
      return null;
  }
  
  console.log(missingValue(nums1))
  console.log(missingValue(nums2))
  console.log(missingValue(nums3))
  console.log(missingValue(nums4))
  
  