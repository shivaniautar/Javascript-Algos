function unionSortedArrays(arr1, arr2) {
    let it1 = 0;
    let it2 = 0;
    let newArr = []

    while (it1 < arr1.length && it2 < arr2.length){
        if (arr1[it1] == arr2[it2]){
            newArr.push(arr1[it1]);
            it1++;
            it2++;
        }
        if (arr1[it1] < arr2[it2]){
            it1++;
        }
        if (arr1[it1] > arr2[it2]){
            it2++;
        }
    }
    return newArr;
}
console.log(unionSortedArrays([1, 2, 2, 3,3], [2, 2,3, 3 4])); // should log [2, 2]

function unionSortedArraysDedupe(arr1, arr2) {
    let newArr = unionSortedArrays(arr1, arr2);
    let newNewArr = []
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] == newArr[i+1]){
            newNewArr.push(newArr[i])
        }
    }
    return newNewArr;
}
console.log(unionSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4])); // should log [2]

function diagonalDifference(twoDArray) {
    let line1 = 0;
    let line2 = 0;
    for (let i = 0; i < twoDArray.length; i++){
        line1 += twoDArray[i][i];
        line2 += twoDArray[twoDArray.length - 1 - i][i]
    }
    return Math.abs(line1-line2);
}
console.log(diagonalDifference([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])); //return 0