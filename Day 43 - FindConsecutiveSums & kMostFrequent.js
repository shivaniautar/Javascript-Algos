/**
 * takes in an array of integers
 * and a given sum
 * returns an array of ALL the consecutive integers
 * that make the sum
 * BONUS: what if there are zeros in the input array?
 */

function findConsecutiveSums(arr, sum) {
    let newarr = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        let j = i;
        while(count < sum){
            count += arr[j];
            j++;
        }
        if(sum === count){
            newarr.push(arr.slice(i,j));
            while(arr[j] === 0){
                j++;
                newarr.push(arr.slice(i,j));
            }
        }
        count = 0;
    }
    return newarr;
}
console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
// should log [
//   [2, 5, 3, 6],
//   [3, 6, 7]
// ]


/**
 * takes in an array of integers
 * and an integer
 * returns an array of the "k" most frequent values
 * the input array WON'T NECESSARILY BE IN ORDER
 * the output array NEED NOT BE ORDERED
 * you can assume there's always a valid answer
 */

function kMostFrequent(arr, k) {
    var freq = {}
    var newArr = []
    for (var i =0; i<arr.length; i++){
        if (freq.hasOwnProperty(arr[i])){
            freq[arr[i]]++;
        }
        else{
            freq[arr[i]]= 1;
        }
    }
    var max;
    var maxKey;
    for (var j =0; j<k; j++){
        max = 0;
        for (var key in freq){
            if (freq[key]>max){
                maxKey=key;
                max=freq[key];
            }
        }
        newArr.push(parseInt(maxKey));
        delete freq[maxKey];
    }
    return newArr;
}



console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
// should log [1, 2]

console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
// should log [0]

console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
// should log [1, 2, 3] in any order