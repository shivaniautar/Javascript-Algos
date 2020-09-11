/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
]
const currInv1 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

const newInv2 = []
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currentInv) {
    for (var i = 0; i < newInv.length; i++) {
        var found = false;
        for (var j = 0; j < currentInv.length; j++) {
            if (newInv[i].name === currentInv[j].name) {
                currentInv[j].quantity += newInv[i].quantity;
                found = true;
                break;
            }
        }
        if (!found) {
            currentInv.push(newInv[i]);
        }
    }
    return currentInv;
}

console.log(updateInventory(newInv1, currInv1));
console.log(updateInventory(newInv2, currInv2));
console.log(updateInventory(newInv3, currInv3));

/* ******************************************************************************** */

/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes"
const strB1 = "eys"
// const expected1 = true

const strA2 = "yes"
const strB2 = "eYs"
// const expected2 = true

const strA3 = "no"
const strB3 = "noo"
// const expected3 = false

const strA4 = "silent"
const strB4 = "listen"
// const expected4 = true

function isAnagram(s11, s22) {
    var s1 = s11.toLowerCase();
    var s2 = s22.toLowerCase();
    var status = false;
    if (s1.length == s2.length){
        for(var i =0; i<s1.length-1;i++){
            for(var j=0;j<s2.length-1;j++){
                if(s1[i].includes(s2[j])){
                    status = true;
                    continue;
                }
            }
        }
    } 
  return status;
}

console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));