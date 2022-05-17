var currenta
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
      return objString
    }
  }
  

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.contador = 0;
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    // set node.next to head - to have circular list
    node.next = this.head;
    this.count++;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // if no node  in list
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          // update last element
          this.head = node;
          current.next = this.head;
        }
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  correrLista() {
      if(this.contador === 0) {
        let b = `${this.head.element}`
        this.contador = 1
        currenta = this.head
        return b
      }
      currenta = currenta.next

    return currenta.element

  }
  
}

// criando lista circulars
const listaCircular = new CircularLinkedList;

//inserindo elementos
listaCircular.push('1 - Yoda possui um número de dedos diferentes em alguns filmes. Enquantonos episódios V, VI e III ele possui 4 dedos, no episódio I ele só tinha 3 em  cadamão.')
listaCircular.push('2 - Luke Sky walker deveria se chamar Luke Starkiller.')
listaCircular.push('3 - Muitas das construções feitas para gravar as cenas de Tatooine ainda estãoem pé na Tunísia. Algumas são habitadas, inclusive.')


//removendo elementos por index listaCircular.removeAt(1)


//inserindo o elemento que retiramos pelo index listaCircular.insert('2 - Luke Sky walker deveria se chamar Luke Starkiller.',1)

console.log(listaCircular.correrLista())
console.log(listaCircular.correrLista())
console.log(listaCircular.correrLista())
console.log(listaCircular.correrLista())
console.log(listaCircular.correrLista())

