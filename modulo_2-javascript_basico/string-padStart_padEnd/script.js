



// FUNCIONA COM ARRAY E COM OBJETO

let telefone = '5'

console.log( telefone.padEnd(9, '*') )
// ELE PREENCHE AO FINAL CASO A STRING NÃO TENHA O NÚMERO DE CARACTERES INFORMADO NO PRIMEIRO PARÂMETRO
// E PREENCHE TODOS OS CARACTERES FALTANTES COM O QUE VOCÊ O-INFORMAR NO SEGUNDO PARÂMETRO

// CASO JÁ TENHA, ELE SUBSTITUI

console.log( telefone.padStart(9, '*') )
// ELE PREENCHE AO COMEÇO CASO A STRING NÃO TENHA O NÚMERO DE CARACTERES INFORMADO NO PRIMEIRO PARÂMETRO
// E PREENCHE TODOS OS CARACTERES FALTANTES COM O QUE VOCÊ O-INFORMAR NO SEGUNDO PARÂMETRO

// EXEMPLO PRÁTICO

let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4)
let firstsDigits = cartao.slice(0,3)

let cartaoMascarado = lastDigits.padStart(16,'*')
let cartaoMascarado2 = firstsDigits.padStart(16,'*')

console.log("Este é o seu cartão (final) ? " + cartaoMascarado)
console.log("Este é o seu cartão (começo) ? " + cartaoMascarado2)