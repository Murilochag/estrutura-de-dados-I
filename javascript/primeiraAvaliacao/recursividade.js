personagem = ['darth vader','luke skywalker','leia','han solo','c3-po']


function imprimirArray(arr, n) {

    if(n === 0) {return undefined}
    
    console.log(arr[n--])

    imprimirArray(arr, n)


}

imprimirArray(personagem,3)
