



let novoValor = Math.round(3.41) // ARREDONDA CORRETAMENTE (NESTE CASO: 3)
let novoValor2 = Math.round(3.67) // ARREDONDA CORRETAMENTE (NESTE CASO: 4)

let forcandoBaixo = Math.floor(3.99) // SEMPRE ARREDONDA PARA BAIXO
let forcandoCima = Math.ceil(3.01) // SEMPRE ARREDONDA PARA CIMA

let absoluto = Math.abs( - 9.291293 ) // RETORNA O ABSOLUTO (POSITIVO)

let minimo = Math.min(4,6,3,1,5,7,4,2,13,11) // RETORNA QUAL O MENOR
let maximo = Math.max(4,6,3,1,5,7,4,2,13,11) // RETORNA QUAL O MAIOR

let random = Math.random() // RETORNA NUMERO ALEATORIO ENTRE 0 E 1

// PARA ESCOLHER UM NÚMERO RANDÔMICO ENTRE 0 E 100 POR EXEMPLO, FAZEMOS:
let random100 = Math.floor(Math.random() * 100)
// ELE MULTIPLICA O VALOR ENTRE 0 E 1 POR 100
// E ARREDONDA PARA BAIXO, PARA NUNCA PASSAR DE 100