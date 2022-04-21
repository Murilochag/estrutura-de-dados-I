
// method sort ordenando um array de objetos do seu projeto
const personagemObj = [
    {nome: 'luke skywalker', raça: 'humano'},
    {nome: 'ahsoka tano', raça: 'togruta'},
    {nome: 'leia organa', raça: 'humano'},
    {nome: 'c3-p0', raça: 'droide'},
    {nome: 'darth vader', raça: 'humano'},
    {nome: 'r2d2', raça: 'droide'}
]

function ordenarRaca(a, b) {
    if(a.raça > b.raça) {return 1};
    if(a.raça < b.raça) {return -1};
    return 0;
}
function ordenarNome(a, b) {
    if(a.nome > b.nome) {return 1};
    if(a.nome < b.nome) {return -1};
    return 0;
}

console.log('\nordenação por raça:\n',personagemObj.sort(ordenarRaca))
console.log('\nordenação por nome:\n',personagemObj.sort(ordenarNome))

// localeCompare
personagem = ['darth Vader','Luke skywalker','princesa Leia','C3-PO','general Grievous']

console.log('\nordenar somente com o .sort()\n',personagem.sort())
console.log('\nordenar com localeCompare()\n',personagem.sort((a, b) => a.localeCompare(b)))



