/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: dict.has_key(key)
*/

// const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
  var counter = 0;
  var newDictionary = {};
  for(var i =0; i<arr.length;i++){
    if (newDictionary.hasOwnProperty(arr[i])){
      newDictionary[arr[i]]+=1
    }
    else{
      newDictionary[arr[i]]=1
    }
  }
  return newDictionary;
}
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
console.log(frequencyTableBuilder(arr2));

const arr3 = []
console.log(frequencyTableBuilder(arr3));

/* ******************************************************************************** */

/*
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

// const str1 = "This is a test"
// const expected1 = "test a is This"

function reverseWordOrder(wordsStr) {}