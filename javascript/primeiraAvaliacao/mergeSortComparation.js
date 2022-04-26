num = []
max = 10;

for(let j = 1; j <= max; j++) {

   i = parseInt(Math.random() * (100 - 1) + 1);

    num.push(i)
}

console.log(num) // printar array não ordenado

console.time()

//code by: https://flaviocopes.com/merge-sort-javascript/#:~:text=Merge%20sort%20is%20a%20sorting,to%20arrays%20of%201%20element.
_mergeArrays = (a, b) => {
    const c = []
  
    while (a.length && b.length) {
      c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
  
    //if we still have values, let's add them at the end of `c`
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
  
    return c
  }
  
mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
  }
  
mergeSort(num)

console.timeEnd()

console.log(mergeSort(num))