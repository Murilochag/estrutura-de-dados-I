// personagens
const imprimir = document.querySelector('h1')

class Personagem {
    constructor(nome, raca, planeta, categoria) {
     this._nome = nome;
     this._raca = raca;
     this._planeta = planeta;
     this._categoria = categoria;
    }
    imprimirPersonagem(){
        return (`Nome: ${this._nome}  <br> Planeta: ${this._planeta} <br> Raça: ${this._raca} <br> categoria: ${this._categoria}`)
    }
}

//classe objetos
class Obj {
    constructor(nome, tipo) {
     this._nome = nome;
     this._tipo = tipo;
    }
    imprimirObj(){
        return (`Nome: ${this._nome} <br> Tipo: ${this._tipo}`)
    }
    
}

//personagens:
  //murilo
const murilo = new Personagem('Murilo','humano','tatooine','jedi')
  //paula
const paula = new Personagem('Paula','humano','naboo','senadora')

//objetos:
   //estrela da morte
const estrelaDaMorte = new Obj('Estrela da morte','arma | estação bélica')


var captar = ""
function chamar (){
    captar = document.getElementById('nome').value;
    if (captar === "murilo" || captar === "Murilo") { document.getElementById('texto').innerHTML = murilo.imprimirPersonagem()}
    else if (captar === "paula" || captar === "Paula") {document.getElementById('texto').innerHTML = paula.imprimirPersonagem()}
    else if(captar==="estrela da morte") {document.getElementById('texto').innerHTML = estrelaDaMorte.imprimirObj()
    } else {document.getElementById('texto').innerHTML = "desculpe, nome inválido"}
    
}
