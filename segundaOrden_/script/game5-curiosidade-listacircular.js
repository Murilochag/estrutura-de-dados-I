//import { defaultEquals } from '../util';
//import LinkedList from './linked-list';
//import { Node } from './models/linked-list-models';

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

// tstando lista circulares
const listaCuriosidade = new CircularLinkedList; //criando a lista

//inserindo elementos
listaCuriosidade.push('1 <br>Yoda possui um n??mero de dedos diferentes em alguns filmes. Enquantonos epis??dios V, VI e III ele possui 4 dedos, no epis??dio I ele s?? tinha 3 em  cadam??o.')
listaCuriosidade.push('2 <br>Muitas das constru????es feitas para gravar as cenas de Tatooine ainda est??oem p?? na Tun??sia. Algumas s??o habitadas, inclusive.')
listaCuriosidade.push('3 <br>Luke Sky walker deveria se chamar Luke Starkiller.')
listaCuriosidade.push('4 <br>A  linguagem  dos  jawas  foi  baseada  em  uma  vers??o  acelerada  dalinguagem Zulu, um dos idiomas oficiais da ??frica do Sul.')
listaCuriosidade.push('5 <br>A roupa usada por Bossk, o ca??ador de recompensas, j?? tinha sido usadaem Doctor Who.')
listaCuriosidade.push('6 <br>A esp??cie de Yoda nunca foi nomeada.')
listaCuriosidade.push('7 <br>A palavra ???ewok??? nunca foi dita em  voz alta nos filmes da s??rie')
listaCuriosidade.push('8 <br>???O Retorno de Jedi??? quase foi chamado de ???A Vingan??a de Jedi???.')
listaCuriosidade.push('9 <br>O  comunicador  usado por Qui-Gon Jinn era,  na verdade, um  barbeadormodificado.')


function imprimir() {
    document.getElementById('curiosidade').innerHTML = listaCuriosidade.correrLista()

}