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
        objString = `${objString} ← ${this.items[i]}`;
      }
      return objString;
    }
  }

////////////////////////////////////////////////////////////

const arrmemoria = ['leia','luke','vader','rey','poe','finn','yoda','sabine','zeb','lando','solo','maul','hera']
const fila1 = new Queue
const pilha2 = new Queue

function sorteio(tamanho) {
    return parseInt(Math.random() * (tamanho - 1) + 1)
   }
function enfileirarArr(obj) {
    return obj.toString()
}
function esconderPilha() {
  document.getElementById('fila').innerHTML = ''
}

function sortearMemoria() {
    fila1.clear()
    pilha2.clear()
    for(let i = 0; i < 5; i++) {
        j = sorteio(arrmemoria.length)
        fila1.enqueue(arrmemoria[j])
    }
    document.getElementById('fila').innerHTML = fila1.toString();
    }

function verificarTopo() {
  esconderPilha()
  var captarpilha = document.getElementById('captarpilha').value
  if(captarpilha === fila1.peek()){
    fila1.dequeue()
    pilha2.enqueue(captarpilha)
    document.getElementById('mensagem').innerHTML = 'parabéns'
    document.getElementById("resultadofila").innerHTML = pilha2.toString()
    }
    else if (captarpilha.length <= 0 ) {
      document.getElementById('mensagem').innerHTML = 'ops... você nao entrou com nehuma palavra'
    }
    else{
        document.getElementById('mensagem').innerHTML = 'ops.. tente outra palavra'
    }
    }