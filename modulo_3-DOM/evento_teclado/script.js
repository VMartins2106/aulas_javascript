function soltou(event){
    // COMO É UMA FUNÇÃO A SER EXECUTADA EM UM EVENTO, ELA SEMPRE RETORNA UM PARÂMETRO
    // ENTÃO PODEMOS PEGAR OS DETALHES DELE
    console.log(event.code) // RETORNA A TECLA ESPECIFICA, EXEMPLO: keyA, Enter, ArrowDown
    // O 'CODE' RETORNA QUAL ALT FOI APERTADO (RIGHT,LEFT), POR EXEMPLO
    console.log(event.key) // RETORNA A TECLA, EXEMPLO: keyA, Enter, ArrowDown
    // O 'KEY' RETORNA APENAS ALT, POR EXEMPLO
    console.log("Shift ?" + event.shiftKey) // VERIFICA SE O SHIFT ESTAVA APERTADO (bool)
    console.log("CONTROL ?" + event.ctrlKey) // VERIFICA SE O SHIFT ESTAVA APERTADO (bool)
    console.log("ALT ?" + event.altKey) // VERIFICA SE O SHIFT ESTAVA APERTADO (bool)
}

// FAZENDO PELO JS

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)
// document.addEventListener('keyup', soltou) AQUI NÃO IMPORTA ONDE ESTEJA, POIS ESTÁ NO DOCUMENTO