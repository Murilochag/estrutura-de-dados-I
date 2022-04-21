
personagem = ['darth vader','luke','leia','han solo']

// indexof
var input = 'leia'

var posicao = personagem.indexOf(input) + 1

if(personagema.indexOf(input) === 0) {
    console.log('palavra correta!!!\n',input,'está na posição',posicao)
    console.log()
}
else if((posicao > 1) & (posicao < (personagem.length + 1))) {
    console.log('tente novamente\n',input,'está na posição:',posicao)
} else {console.log('palavra inválida')}

// lastIndexOf
var input2 = 'luke'
personagem.push(input2)

console.log('o personagem',input2,'foi introduzido na posição:',personagem.lastIndexOf(input2) + 1)

// find e findIndex
function acheLuke(element){
    return element == 'luke'
}
console.log(personagem.find(acheLuke))
console.log(personagem.findIndex(acheLuke))

//includes

personagem = ['darth vader','luke','leia','han solo']

var input = 'han solo'

console.log(input,'está na lista?')
personagem.includes(input) ? console.log('sim :)') : console.log('não :(')