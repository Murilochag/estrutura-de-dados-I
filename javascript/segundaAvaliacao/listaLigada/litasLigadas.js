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

const resposta = new LinkedList; //criando a lista

//inserindo elementos
resposta.push('a new hope') // 0
resposta.push('jango fett') // 1 
resposta.push('kylo ren') // 2
resposta.push('2') // 3
resposta.push('grogu') // 4

//removendo com removeAt
resposta.removeAt(2)

// removendo com o remove
resposta.remove('2')

// inserindo com o insert
resposta.insert('kylo ren', 2)
resposta.insert('2', 3)


// imprimindo a a listo ou elemntos usando o toString e o getElementAt
console.log(resposta.toString())

console.log(resposta.getElementAt(2).element)

//indexOf que retorna o index do elemnto:
resposta.indexOf('grogu')

// verificando se a lista está vazia
resposta.isEmpty()

// verificando o tamanho da nossa lista resposta
resposta.size()

// pegando a cabeça (primeiro elemento da lista)
resposta.getHead()

// limpando a lista respostas
//resposta.clear()