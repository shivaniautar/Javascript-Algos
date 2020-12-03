/**
 * @param {string} str1
 * @param {string} str2
 * consisting of lowercase characters and backspaces (#)
 * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
 * BONUS: solve in O(n)
 */

function backspaceStringCompare(str1, str2) {
    let newStr1 = [], newStr2 =[];
  
    for (let i = 0; i<str1.length;i++){
      let char = str1.charAt(i);
      char !== "#"? newStr1.push(char) : newStr1.pop()
    }
    for (let j = 0; j<str2.length;j++){
      let char = str2.charAt(i);
      char !== "#"? newStr2.push(char) : newStr2.pop()
    }
    for (let k = 0; k<newStr1.length;k++ ){
      if (newStr1[i] !== newStr2[i]) return false
    }
  return true;
  
  
  }
    //MY TRY:
    // let newArr1 = str1.split("") 
    // let newArr2 = str2.split("") 
    // for (let i = 0; i < str1.length; i++) {
    //   if (newArr[i] === '#') {
    //     newArr1[i] = ""
    //     newArr1[i - 1] =""
    //     return newArr1
    //   }
    //   else { i++}
    // }
    // for (let j = 0; j < str2.length; j++) {
    //   if (newArr2[i] === '#') {
    //     newArr2[i] = ""
    //     newArr2[i - 1] = ""
    //     return newArr2
    //   }
    //   else { j++}
    // }
    // if (newArr1 === newArr2) {
    //   return true
    // }
  
  
  console.log(backspaceStringCompare('ab#c', 'ad#c'));
  // should log true - they both become 'ac'
  
  console.log(backspaceStringCompare('ab##', 'c#d#'));
  // should log true - they both become ''
  
  console.log(backspaceStringCompare('a##c', '#a#c'));
  // should log true - they both become 'c'
