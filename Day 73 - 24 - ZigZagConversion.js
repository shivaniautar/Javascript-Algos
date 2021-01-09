// 6. ZigZag Conversion
// Medium


// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000


//Objective is to change a string into a zigzag pattern and return the new
//string that is the concatenation of all of the new rows

let s = "PAYPALISHIRING", numRows = 3


//O(n + r) solution where n is the length of the string and r is the number of rows

//If only one row or string don't zigzag
if (numRows == 1 || s.length < numRows) {
    return s
}

let rows = []
let reverse = false
let total = ''
let count = 0

for (let i = 0; i < numRows; i++) {
    rows[i] = []
}

for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i])
    reverse ? count-- : count++
    
    //If we've reached the top or bottom, reverse direction
    if (count == 0 || count == numRows - 1) {
        reverse = !reverse
    }
}

for (let arr of rows) {
    for (let letter of arr) {
        total += letter
    }
}

return total