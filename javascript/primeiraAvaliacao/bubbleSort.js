function bubbleSort(items) {
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

bubbleSort(personagem);

console.log(personagem);