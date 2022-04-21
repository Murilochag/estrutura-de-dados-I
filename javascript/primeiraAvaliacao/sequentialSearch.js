num = []
max = 10000

for(let j = 1; j <= max; j++) {
    num.push(j)
}

console.log(num)

console.time()

function sequentialSearch(array, value) {
    for(let i = 0; i <= array.length; i++) {
        if(array[i] === value) {
            return array[i];
        }
    }
    return DOES_NOT_EXIST;
}
console.timeEnd();

console.log(sequentialSearch(num,10000))

//console.timeEnd();