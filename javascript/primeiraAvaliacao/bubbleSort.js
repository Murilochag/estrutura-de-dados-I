// bubble sort com array de string

function bubbleSortSt(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
            if(items[j].length > items[j+1].length) {
               var tmp = items[j]; 
               items[j] = items[j+1]; 
               items[j+1] = tmp; 
            }
        }        
    }
} 

personagem = ['darth vader','luke skywalker','leia','han solo','c3-po']

bubbleSortSt(personagem);

console.log(personagem);


// bubble sort com array numérico

num = []
max = 10000

for(let j = 1; j <= max; j++) {
    num.push(j)
}

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

numeros = [1,6,8,4,3,2,7,9,5,10]

bubbleSortNum(numeros)

console.log(numeros)