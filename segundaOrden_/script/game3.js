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

const arrmemoria = ['a','b','c','d','e','f','g','h','i','j']
const arrtexte = new Stack
const pilha2 = new Stack

function sorteio(tamanho) {
    return parseInt(Math.random() * (tamanho - 1) + 1)
   }
function empilharArr(arr) {
    return arr[4] + '<br>' + arr[3] + '<br>' + arr[2] + '<br>' + arr[1] + '<br>' + arr[0] 
}
function esconderPilha() {
  document.getElementById('array').innerHTML = ''
}

function sortearMemoria() {
    arrtexte.clear()
    pilha2.clear()
    for(let i = 0; i < 5; i++) {
        j = sorteio(arrmemoria.length)
        arrtexte.push(arrmemoria[j])
    }
    document.getElementById('array').innerHTML = empilharArr(arrtexte.toArray())
    }

function verificarTopo() {
  esconderPilha()
  var captarpilha = document.getElementById('captarpilha').value
  if(captarpilha === arrtexte.peek()){
    arrtexte.pop()
    pilha2.push(captarpilha)
    document.getElementById('array').innerHTML =
    document.getElementById('mensagem').innerHTML = 'patabens'
    document.getElementById("resultadoPilha").innerHTML = empilharArr(pilha2.toArray())
    }
    else if(arrtexte.toArray().includes(captarpilha)) {
        document.getElementById('mensagem').innerHTML = 'a palavra existe na pilha mas está no local errado'
      } 
      else {
        document.getElementById('mensagem').innerHTML = 'palavra não existe na pilha ou foi escrita de forma errada'
      }
    }
  //if() {}

//sortearMemoria()
//var imput = 1

//console.log(arrtexte.size())
//console.log(arrtexte.toArray()[arrtexte.size() - 1])
//function testarAcerto() {
    
//}