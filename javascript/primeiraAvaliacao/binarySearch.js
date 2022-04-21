let arr = [];
let start = 0;
let target = 10000;

for(let j = 1; j <= 10000; j++) {
    arr.push(j)
}

console.log(arr)

let end = arr.length - 1;

console.time();

function binarySearch(arr, start, end, target) {
    if (start > end) return false;
    let midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === target) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, end, target);
}
console.timeEnd();

console.log(binarySearch(arr,start,end,target));

//console.timeEnd();