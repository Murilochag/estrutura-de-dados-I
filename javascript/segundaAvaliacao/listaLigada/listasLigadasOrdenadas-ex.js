const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
  };
  
function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }
  
function defaultEquals(a, b) {
    return a === b;
  }

class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
  }

  //import { Compare, defaultCompare, defaultEquals } from '../util';
  //import LinkedList from './linked-list';

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
  
class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
      super(equalsFn);
      this.equalsFn = equalsFn;
      this.compareFn = compareFn;
    }
    push(element) {
      if (this.isEmpty()) {
        super.push(element);
      } else {
        const index = this.getIndexNextSortedElement(element);
        super.insert(element, index);
      }
    }
    insert(element, index = 0) {
      if (this.isEmpty()) {
        return super.insert(element, index === 0 ? index : 0);
      }
      const pos = this.getIndexNextSortedElement(element);
      return super.insert(element, pos);
    }
    getIndexNextSortedElement(element) {
      let current = this.head;
      let i = 0;
      for (; i < this.size() && current; i++) {
        const comp = this.compareFn(element, current.element);
        if (comp === Compare.LESS_THAN) {
          return i - 1; // mudei aqui
        }
        current = current.next;
      }
      return i;
    }
  }

// ciando a lista que irá armazenar as perguntas
const listaPergunta = new SortedLinkedList;

// inserindo elemntos fora de ordem
listaPergunta.push('0 - qual o nome do filme (em ingles) obi wan tem sua primeira aparição?')
listaPergunta.push('2 - quem matou o lider supremo snoke?')
listaPergunta.push('1 - qual o nome do pai de boba fett?')

// imprimindo elementos na ordem:
console.log(listaPergunta.toString())

//inserindo elementos pelo index
listaPergunta.insert('3 - quantos filhos darth vader/anakin teve com padmé?', 3)

console.log(listaPergunta.toString())

// pegando o index do elemento
console.log(listaPergunta.getIndexNextSortedElement('2 - quem matou o lider supremo snoke?'))