
let contador = 0

const personagem = ['murilo','murillo','paula','gabriel'];

//var captper = "aa"
//captper = document.getElementById('captar').value

function rodarQuiz1() {
        captper = document.getElementById('captar').value
        
        if(personagem.includes(captper)) {
            document.getElementById('texto2').innerHTML = ("parabês "+ captper + " pertence a star wars!")

        }
        else {
            document.getElementById('texto2').innerHTML = (captper)
        }
    }
