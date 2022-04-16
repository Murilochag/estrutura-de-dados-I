var frase = document.querySelector('h1');

    // imprimir curiosidade aleatótia sobre star wars
    function imprimir() {

       function sorteio() {
         return Math.random() * (6 - 1) + 1;
        }

        const A = parseInt(sorteio())
        console.log(A)

        if( A === 1) {frase.innerHTML = "1"}
        if( A === 2) {frase.innerHTML = "2"}
        if( A === 3) {frase.innerHTML = "3"}
        if( A === 4) {frase.innerHTML = "4"}
        if( A === 5) {frase.innerHTML = "5"}
    }