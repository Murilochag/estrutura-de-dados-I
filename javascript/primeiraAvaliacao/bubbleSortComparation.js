num = []
max = 10000

for(let j = 1; j <= max; j++) {

   i = parseInt(Math.random() * (100 - 1) + 1);

    num.push(i)
}

console.log(num) // printar array não ordenado

console.time()

function bubbleSortNum(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
            if(items[j] > items[j+1]) {
               var tmp = items[j]; 
               items[j] = items[j+1]; 
               items[j+1] = tmp; 
            }
        }        
    }
} 

bubbleSortNum(num)

console.timeEnd() // contador tempo de execucao ms

console.log(num)