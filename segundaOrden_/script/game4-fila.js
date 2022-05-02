class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }

////////////////////////////////////////////////////////////

const arrmemoria = ['a','b','c','d','e','f','g','h','i','j']
const arrtexte = new Queue
const pilha2 = new Queue

function sorteio(tamanho) {
    return parseInt(Math.random() * (tamanho - 1) + 1)
   }
function enfileirarArr(obj) {
    return obj.toString()
}
function esconderPilha() {
  document.getElementById('pilha').innerHTML = ''
}

function sortearMemoria() {
    arrtexte.clear()
    pilha2.clear()
    for(let i = 0; i < 5; i++) {
        j = sorteio(arrmemoria.length)
        arrtexte.enqueue(arrmemoria[j])
    }
    document.getElementById('pilha').innerHTML = arrtexte.toString()
    }

function verificarTopo() {
  esconderPilha()
  var captarpilha = document.getElementById('captarpilha').value
  if(captarpilha === arrtexte.peek()){
    arrtexte.dequeue()
    pilha2.enqueue(captarpilha)
    document.getElementById('pilha').innerHTML =
    document.getElementById('mensagem').innerHTML = 'parabens'
    document.getElementById("resultadoPilha").innerHTML = pilha2.toString()
    }
    else{
        document.getElementById('mensagem').innerHTML = 'ops.. tente outra palavra'
    }
    }