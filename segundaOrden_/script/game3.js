class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    toArray() {
      return this.items;
    }
  
    toString() {
      return this.items.toString();
    }
  }
//////////////////////////////////////////////////////////////////////

const arrmemoria = [1,2,3,4,5,6,7,8,9]
const arrtexte = new Stack

function sorteio(tamanho) {
    return parseInt(Math.random() * (tamanho - 1) + 1)
   }
function empilharArr(arr) {
    return arr[0] + '<br>' + arr[1] + '<br>' + arr[2] + '<br>' + arr[3] + '<br>' + arr[4] 
}

function sortearMemoria() {
    arrtexte.clear()
    for(let i = 0; i < 5; i++) {
        j = sorteio(arrmemoria.length)
        arrtexte.push(arrmemoria[j])
    }
    document.getElementById('array').innerHTML = empilharArr(arrtexte.toArray())
    }

function verificarTopo() {
    
    if(imput === arrtexte.toArray()[arrtexte.size() - 1]){
        arrtexte.pop()
        return console.log('tudo certo!!!') //arrtexte.pop
    }
}

sortearMemoria()
var imput = 1
console.log(arrtexte)
verificarTopo()
console.log(arrtexte)
console.log(arrtexte)

//console.log(arrtexte.size())
//console.log(arrtexte.toArray()[arrtexte.size() - 1])
//function testarAcerto() {
    
//}