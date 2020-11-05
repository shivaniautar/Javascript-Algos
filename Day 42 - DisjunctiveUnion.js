/**
 * takes in two arrays
 * returns a NEW array
 * with elements that ONLY APPEAR in one array
 * elements in the input arrays NEED NOT BE SORTED
 * the ordering of your output array NEED NOT BE SORTED
 * BONUS: allow it to take in a 2D array
 */

// function disjunctiveUnion(arr1, arr2) {

// }

// console.log(disjunctiveUnion([1, 2], [1, 2]));
// // should log [] since 1 and 2 are in both
// console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
// // should log [3]


// function disjunctiveUnionBonus(arr) {
//   // your code here
// }

// console.log(disjunctiveUnionBonus([
//   [1, 2, 3],
//   [4, 5, 6],
//   [1, 2, 5, 6]
// ]));
// // should log [3, 4] or [4, 3]


function disjunctiveUnion(arr1, arr2) {
    let newArr = [];
    let obj = {};
    for (let i=0; i < arr1.length; i++) {
        obj[arr1[i]] = 1;
    }
    for (let j=0; j < arr2.length; j++) {
        if (obj.hasOwnProperty(arr2[j])) obj[arr2[j]] += 1;
        else obj[arr2[j]] = 1;
    }
    for (key in obj) {
        if (obj[key] === 1) newArr.push(parseInt(key));
    }
    return newArr;
}