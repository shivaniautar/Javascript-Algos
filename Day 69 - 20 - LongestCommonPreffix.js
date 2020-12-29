// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

//Objective is to find the longest common prefix between words in a list.

let strs = ["flower","flow","flight"]


//O(n) solution that continuously modifies the prefix until it's the prefix
//of every word.

if (strs.length == 0) {
    return ''
}

let prefix = strs[0]

for (let string of strs) {
    //As long as it's not the prefix, keep cutting off characters from the prefix.
    while (string.indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1)
    }
    
    if (prefix.length == 0) {
        return ''
    }
}

return prefix