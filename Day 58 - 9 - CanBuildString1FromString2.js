/**
 * 
 * 
// Print in the console
console.log(letterCount)
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 * Ignoring case, can the characters from string 2 build string 1?
 */
//loop thru str 1
//add str[i] to table1
//if we encounter same value for str[i], increment the value of the key by 1
//loop thru str 2
//add str[j] to table 2
//if we encounter same value for str[j], increment the value of the key by 1
//compare the 2 tables

function canBuildString1FromString2(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  const table1={};
  const table2={};
  for(let i=0; i<str1.length;i++){
       if (table1[str1[i]]){
          table1[str1[i]]+=1;
      }
      else  table1[str1[i]]=1;
  }
  for(let j=0; j<str2.length;j++){
       if (table2[str2[j]]){
          table2[str2[j]]+=1;
      }
      else table2[str2[j]]=1;
  }
  for(let k in table2){
    if (table1.hasOwnProperty(k) && table2[k]>=table1[k]){
      continue;
    }
    else return false
  }
  return true;
}

'HELLO'.toLowerCase(); // returns 'hello'

console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
console.log(canBuildString1FromString2('hello', 'helo')); // should log false
console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true