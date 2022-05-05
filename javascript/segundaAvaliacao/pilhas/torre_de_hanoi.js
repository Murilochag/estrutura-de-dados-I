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

//////////////////////////////////////////////////////

const torre1 = new Stack; // origem
const torre2 = new Stack; // destino
const torre3 = new Stack; // alxiliar

//const max = 4

torre1.push(3)
torre1.push(2)
torre1.push(1)

function printtorre(o, d, a) {
  console.log(`___________\nOriginal: ${o} \nAlxiliar: ${a}\nDestinio: ${d}\n___________`)
}

function torreHanoi(n, o, d, a) {

  if(n > 0) {
      torreHanoi(n - 1, o, a, d)

      d.push(o.pop())
      printtorre(o, d, a)
      torreHanoi(n - 1, a, d, o)
      printtorre(o, d, a)

  }

}

torreHanoi(n = torre1.size(),torre1,torre2,torre3)