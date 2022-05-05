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

///////////////////////////////////////////////////////////

const pilhaDecToBin = new Stack;

function decTobin(dec) {
   // let dec = numDec
    let resto
    let bin = ''

    while(dec > 0) {
        resto = Math.floor(dec % 2 ) // resto
        pilhaDecToBin.push(resto)
        dec = Math.floor(dec / 2 )
    }

    while(! pilhaDecToBin.isEmpty()) {
        bin += (pilhaDecToBin.pop())
    }

    return console.log(bin)
}

decTobin(10)