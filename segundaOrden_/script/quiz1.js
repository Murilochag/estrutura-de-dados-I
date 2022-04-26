let captar = "gabriel"
let contador = 0

nome = ['murilo','murillo','paula','gabriel']

for(let j = 0; j <= nome.length; j++) {
    if(nome[j] === captar) {
        personagemStr = nome[j]
    }
    else{console.log('erro aqu')}
}

//for(let i = 0; i <= 30; i++) {
    function procurar() {
        //captar = document.getElementById('nome').value;
        if (captar === personagemStr) {
            //document.getElementById('texto').innerHTML = 'murilo'
            contador++
            console.log(personagemStr)
        }
    }
    procurar()
//}
