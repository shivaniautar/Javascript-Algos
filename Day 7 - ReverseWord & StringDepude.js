/*
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
// const expected1 = "abcABC"

const str2 = "helloo"
// const expected2 = "helo"

function stringDedupe(str) {
  let temp='';
  for(let i=0; i< str.length;i++){
    if(temp.includes(str[i])){
      continue;
    } else{
      temp+= str[i];
    }
  }
  return temp;
}

console.log(stringDedupe(str1));

console.log(stringDedupe(str2));

/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello"
// const expected1 = "olleh"

const str2 = "hello world"
// const expected2 = "olleh dlrow"

const str3 = "abc def ghi"
// const expected3 = "cba fed ihg"

function reverseWords(str) {
  var newStr = '';
  var newList= str.split(" ");
  for(var i=0; i<=newList.length-1;i++){
    var word =newList[i];
    for(var j=word.length-1; j>=0;j--){
      newStr+= word[j];
    }
    newStr+=" ";
  }
  return newStr;
}
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));