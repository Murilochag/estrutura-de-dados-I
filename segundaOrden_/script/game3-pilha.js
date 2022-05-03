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

const arrmemoria = ['leia','luke','vader','rey','poe','finn','yoda','sabine','zeb','lando','solo','maul','hera']
const pilha1 = new Stack
const pilha2 = new Stack

function sorteio(tamanho) {
    return parseInt(Math.random() * (tamanho))
   }
function empilharArr(arr) {
    return arr[4] + '<br>' + arr[3] + '<br>' + arr[2] + '<br>' + arr[1] + '<br>' + arr[0] 
}
function esconderPilha() {
  document.getElementById('array').innerHTML = ''
}

function sortearMemoria() {
    pilha1.clear()
    pilha2.clear()
    for(let i = 0; i < 5; i++) {
        j = sorteio(arrmemoria.length)
        pilha1.push(arrmemoria[j])
    }
    document.getElementById('array').innerHTML = empilharArr(pilha1.toArray())
    }

function verificarTopo() {
  esconderPilha()
  var captarpilha = document.getElementById('captarpilha').value
  if(captarpilha === pilha1.peek()){
    pilha1.pop()
    pilha2.push(captarpilha)
    document.getElementById('array').innerHTML = 'boa sorte'
    document.getElementById('mensagem').innerHTML = 'parabéns'
    document.getElementById("resultadoPilha").innerHTML = empilharArr(pilha2.toArray())
    }
    else if(pilha1.toArray().includes(captarpilha)) {
        document.getElementById('mensagem').innerHTML = 'a palavra existe na pilha mas está no local errado'
      }
    else if(captarpilha.length <= 0) {
      document.getElementById('mensagem').innerHTML = 'ops... você não entrou com nehuma palavra'
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