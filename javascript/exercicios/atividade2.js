// personagens *uso de dois metodos*
class Personagem {
    constructor(nome, raca, planeta) {
     this._nome = nome;
     this._raca = raca;
     this._planeta = planeta;
    }
    nomePersonagem(){
        console.log('nome: ' + this._nome)
    }
}

let murillo = new Personagem('murilo', 'humano', 'terra')
murillo.nomePersonagem()

var murilo = new Personagem('murilo', 'humano', 'terra')
console.log(murilo._raca);

// objetos
class Obj {
    constructor(tipo) {
     this._tipo = tipo;
    }
    
}
var estrelaDaMorte = new Obj('arma')
console.log(estrelaDaMorte._tipo);

//droides *uso de herança*
class Droide extends Personagem {
    constructor(nome, raca, planeta, modelo) {
     super(nome, raca, planeta)
     this._modelo = modelo;
    }
}
var r2d2 = new Droide('r2d2', 'droid', 'naboo', 'droide astromecãnico')
console.log(r2d2._planeta)