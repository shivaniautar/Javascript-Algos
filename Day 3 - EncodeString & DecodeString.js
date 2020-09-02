/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

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

function join(arr, separator) {
    var newStrr = '';
    for(var i=0; i<arr.length-1; i++){
        newStrr += arr[i]+ separator
    }
    newStrr += arr[i]
    return newStrr
}

test = join([1,2,3], ", ")
console.log(test)

test1 = join([1], ", ")
console.log(test1)

test2 = join([], ", ")
console.log(test2)

/* ******************************************************************************** */

/*
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

// var str1 = "aaaabbcddd"
// var expected1 = "a4b2c1d3"

// var str2 = ""
// var expected2 = ""

// var str3 = "a"
// var expected3 = "a"

// var str4 = "bbcc"
// var expected4 = "bbcc"

function encodeStr(str) {
    var newStr = "";
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        }
        else if (str[i] !== str[i+1]) {
            newStr += str[i] + count;
            count = 1;
        }
        else if (i === str.length - 1){
            newStr += str[i] + count;
        }
    }
    return (newStr.length < str.length) ? newStr : str;
}

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abc')); // should log 'abc'
  //*condition ? value_if_true : value_if_false
  //*c = (a < b) ? a : b;

/* ******************************************************************************** */

/*
  String Decode
*/

// var str1 = "a3b2c1d3"
// var expected1 = "aaabbcddd"

function decodeStr(str) {
    var newstr = ''
    var char = ''
    var count = ''
    for (var i = 0; i<str.length; i++){
        if (isNaN(str[i])) {
            char = str[i];
        }
        else {
            count += str[i]
            if (isNaN(str[i+1])) {
                newstr += char.repeat(parseInt(count));
                count = '';
            }
        }
    }
    return newstr;
}

console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a1b10')); // should log 'abbbbbbbbbb'