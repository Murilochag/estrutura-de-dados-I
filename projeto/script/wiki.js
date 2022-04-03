// personagens *uso de dois metodos*
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

const murilo = new Personagem('Murilo','humano','tatooine','jedi')
const imprimirMurilo = murilo.imprimirPersonagem()

const paula = new Personagem('Paula','humano','naboo','senadora')
const imprimirPaula = paula.imprimirPersonagem()

//imprimir.innerHTML = imprimirMurilo

var captar = ""
function chamar (){
    captar = document.getElementById('nome').value;
    if (captar === "murilo" || captar === "Murilo") { document.getElementById('texto').innerHTML = imprimirMurilo}
    else if (captar === "paula" || captar === "Paula") {document.getElementById('texto').innerHTML = imprimirPaula
    } else {document.getElementById('texto').innerHTML = "desculpe, nome inválido"}
    //document.getElementById('texto').innerHTML = imprimirMurilo
}
