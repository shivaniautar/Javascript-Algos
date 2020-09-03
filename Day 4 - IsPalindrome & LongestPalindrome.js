//  Members: [Alex Lee, Kristen S, Kim G, Paul F., Stephen Lebel, Shivani Autar] /*
//  String: Reverse
//  Implement reverseString(str)
//  Input: 'abc'
//  Output: 'cba'
//  */

//  function reverseString(str) {
//      var newStr = ""
//     for (var x=str.length - 1
//           x >= 0
//           x--) {
//          newString += str[x]
//      }
//     return newStr
//  }

//  var reverseStringTestCase = "abc"
//  var reverseStringReturnValue = reverseString(reverseStringTestCase)
//  console.log(reverseStringReturnValue)

//  ************************************************
//  def reverse(str):
// str = ""
//  for i in s:
// str = i + str
//  return str

//  splicing
//  'hello world'[::-1]

//  /*
//  Acronyms
//  Create a function that, given a string, returns the string’s acronym
//  (first letter of each word capitalized).
// Do it with .split first if you need to, then try to do it without
//  input: 'The quick brown fox, jumped over the lazy dog.'
//  output: 'TQBFJOTLD'
//  Hint: string.toUpperCase()
//  */

//  function stringAcronym0(str) {
//      let result = "",
//     grabFirst = true
//      for (let i=0
//           i < str.length
//           i++) {
//          if (
//              grabFirst & &
//              ((str >= "a" & & str <= "z") | | (str >= "A" & & str <= "Z"))
//          ) {
//              result += str[i].toUpperCase()
//              grabFirst = false
//          } else if (str[i] == " ") {
//              grabFirst = true
//          }
//      }
//      return result
//  }

//  function stringAcronym(str) {
//      let words = str.split(" ")
//      // split is a function attached to string objects that breaks it into an array
//      // it takes a delimiting character as an argument indicating where each split occurs.
//      let result = ""
//     for (let i=0
//           i < words.length
//           i++) {
//          result += words[i][0].toUpperCase()
//      }
//      return result
//  }

// var stringAcronymTestCase = "The quick brown fox, jumped over the lazy dog."
// var stringAcronymReturnValue = stringAcronym(stringAcronymTestCase)
//  console.log(stringAcronymReturnValue)

//  ************************************************

//  /*
//  Case insensitive string comparison
//  const test1StrA = "ABC"
//  const test1StrB = "abc"
//  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
//  */

//  function caseInsensitiveCompare(str1, str2) {
//      return str1.toUpperCase() == str2.toUpperCase()
//  }

//  var caseInsensitiveCompareTestCase = "abc"
//  var caseInsensitiveCompareReturnValue = stringAcronym(
//      caseInsensitiveCompareTestCase
//  )
//  console.log(caseInsensitiveCompareReturnValue)


//  Given an arr and a separator string, output a string of every item in the array separated by the separator.

//  No trailing separator at the end
//  Default the separator to a comma with a space after it if no separator is provided

// Kristen San Martin
// Stephen Lebel
//Kimberley
// Alex
// Paul
//Shivani

// var arr1 = [1, 2, 3]
// var separator1 = ", "
// var expected1 = "1, 2, 3"

// var arr2 = [1, 2, 3]
// var separator2 = "-"
// var expected2 = "1-2-3"

// var arr3 = [1, 2, 3]
// var separator3 = " - "
// var expected3 = "1 - 2 - 3"

// var arr4 = [1]
// var separator4 = ", "
// var expected4 = "1"

// var arr5 = []
// var separator5 = ", "
// var expected5 = ""

// function join(arr, separator) {
//     str =""
//     for (var i = 0; i < arr.length-1; i++) {
//         str += arr[i] + separator
//     }
//     str += arr[arr.length-1]
//     return str
// }

// console.log(join([1, 2, 3],","))

// *******************************************************

// String Encode

// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb"= > "b2"),
// return the original string.


// // var str1 = "aaaabbcddd"
// // var expected1 = "a4b2c1d3"

// // var str2 = ""
// // var expected2 = ""

// // var str3 = "a"
// // var expected3 = "a"

// // var str4 = "bbcc"
// // var expected4 = "bbcc"

// function encodeStr(str) {
//     count = 0
//     newStr = str
//     editedStr = ""
//     for (var i = 1; i < newStr.length; i++){
//         if (newStr[0] == newStr[i])
//         count++;
//         else {
//             editedStr += newStr[0] + count
//             newStr = newStr.slice(0,count)
//         }
//     }
//     return editedStr
// }
// console.log(endcodeStr)

// *******************************************************

// String Decode


// var str1 = "a3b2c1d3"
//  var expected1 = "aaabbcddd"

// function decodeStr(str) {
//    // code here
//}


/*
 String: Is Palindrome

 Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a"
const expected1 = true

const str2 = "racecar"
const expected2 = true

const str3 = "Dud"
const expected3 = false

const str4 = "oho!"
const expected4 = false


var newstring = ''
function isPalindrome(str) {
    for (var i = str.length-1; i >= 0; i--){
        newstring += str[i];
    }
    return str == newstring;
}
console.log(isPalindrome(str1))
console.log(isPalindrome(str3))

/***********************************************************/
// This function uses recursion to reverse the string
function reverse(str){
  if (str === "") {
    return str
  } else {
    return reverse(str.substr(1)) + str[0]
  }
}

//******************************************************* */

//ANOTHER METHOD FOR ISPALINDROME BY GOING THROUGH AND COMPARING EACH INDEX THROUGH THE ORIGINAL STRING

// function isPalindrome(str) {
//   if(str.length%2==0){
//       for(i=0;i<str.length - i;i++){
//           if (str[i] !== str[str.length - i - 1]) {
//               return false;
//           }
//       }
//   }
//   else{
//       for(i=0; i<(str.length-1)/2; i++){
//           if (str[i]!==str[str.length - i-1]){
//               return false;
//           }
//       }
//   }
//   return true;
// }

/* ******************************************************************************** */

/*
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring.

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const str1 = "what up, daddy-o?"
const expected1 = "dad"

const str2 = "uh, not much"
const expected2 = "u"

const str3 = "Yikes! my favorite racecar erupted!"
const expected3 = "e racecar e"

function longestPalindromicSubstring(str) {
  // code here

}


function longestPalindromicSubstring(str) {
  // code here
  for (let i = 0; i <  str.length; i++) {
    for (let j = str.length -1; j >= 0; j--) {
      if (isPalindrome(str.substr(i, j)) {
        return true;
      }
    }
  }
  return false;
}


for ()



