function defaultEquals(a, b) {
    return a === b;
  }
  
  class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(equalsFn = defaultEquals) {
      this.equalsFn = equalsFn;
      this.count = 0;
      this.head = undefined;
    }
    push(element) {
      const node = new Node(element);
      let current;
      if (this.head == null) {
        // catches null && undefined
        this.head = node;
      } else {
        current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = node;
      }
      this.count++;
    }
    getElementAt(index) {
      if (index >= 0 && index <= this.count) {
        let node = this.head;
        for (let i = 0; i < index && node != null; i++) {
          node = node.next;
        }
        return node;
      }
      return undefined;
    }
    insert(element, index) {
      if (index >= 0 && index <= this.count) {
        const node = new Node(element);
        if (index === 0) {
          const current = this.head;
          node.next = current;
          this.head = node;
        } else {
          const previous = this.getElementAt(index - 1);
          node.next = previous.next;
          previous.next = node;
        }
        this.count++;
        return true;
      }
      return false;
    }
    removeAt(index) {
      if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
          this.head = current.next;
        } else {
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }
        this.count--;
        return current.element;
      }
      return undefined;
    }
    remove(element) {
      const index = this.indexOf(element);
      return this.removeAt(index);
    }
    indexOf(element) {
      let current = this.head;
      for (let i = 0; i < this.size() && current != null; i++) {
        if (this.equalsFn(element, current.element)) {
          return i;
        }
        current = current.next;
      }
      return -1;
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return this.count;
    }
    getHead() {
      return this.head;
    }
    clear() {
      this.head = undefined;
      this.count = 0;
    }
    toString() {
      if (this.head == null) {
        return '';
      }
      let objString = `${this.head.element}`;
      let current = this.head.next;
      for (let i = 1; i < this.size() && current != null; i++) {
        objString = `${objString},${current.element}`;
        current = current.next;
      }
      return objString;
    }
  }
  
///////////////////////////////////////////////////

  // criando a lista
  const listarespostas = new LinkedList;

  //inserindo elemntos na lista
  listarespostas.push('a new hope') // 0
  listarespostas.push('jango fett') // 1 
  listarespostas.push('kylo ren') // 2
  listarespostas.push('2') // 3
  listarespostas.push('grogu') // 4
  


//////////////////////////////////////////

function verificar0() {
    var resposta0 = document.getElementById('captarResp').value

    if (resposta0 === listarespostas.getElementAt(0).element) {

        document.getElementById('mensagem').innerHTML = 'proximo caminho: <a href="/segundaOrden_/html/game/game6/game6-1.html">clique aqui</a>'
    } else {
        document.getElementById('mensagem').innerHTML = 'ops, tente novamente até acertar e encontar o caminho'
    }
}

function verificar1() {
    var resposta1 = document.getElementById('captarResp').value

    if (resposta1 === listarespostas.getElementAt(1).element) {

        document.getElementById('mensagem').innerHTML = 'proximo caminho: <a href="/segundaOrden_/html/game/game6/game6-2.html">clique aqui</a>'
    } else {
        document.getElementById('mensagem').innerHTML = 'ops, tente novamente até acertar e encontar o caminho'
    }
}

function verificar2() {
    var resposta2 = document.getElementById('captarResp').value

    if (resposta2 === listarespostas.getElementAt(2).element) {

        document.getElementById('mensagem').innerHTML = 'proximo caminho: <a href="/segundaOrden_/html/game/game6/game6-3.html">clique aqui</a>'
    } else {
        document.getElementById('mensagem').innerHTML = 'ops, tente novamente até acertar e encontar o caminho'
    }
}

function verificar3() {
    var resposta3 = document.getElementById('captarResp').value

    if (resposta3 === listarespostas.getElementAt(3).element) {

        document.getElementById('mensagem').innerHTML = 'proximo caminho: <a href="/segundaOrden_/html/game/game6/game6-4.html">clique aqui</a>'
    } else {
        document.getElementById('mensagem').innerHTML = 'ops, tente novamente até acertar e encontar o caminho'
    }
}

function verificar4() {
    var resposta4 = document.getElementById('captarResp').value

    if (resposta4 === listarespostas.getElementAt(4).element) {

        document.getElementById('mensagem').innerHTML = 'proximo caminho: <a href="/segundaOrden_/html/game/game6/tesouro.html">clique aqui</a>'
    } else {
        document.getElementById('mensagem').innerHTML = 'ops, tente novamente até acertar e encontar o caminho'
    }
}