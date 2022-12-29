



// FUNCIONA COM ARRAY E COM OBJETO

let lista = ['ovo','farinha','açúcar','manteiga']

console.log(Object.keys(lista)) // RETORNA OS ÍNDICES DE CADA ELEMENTO DA LISTA
console.log(Object.values(lista)) // RETORNA OS VALORES DE CADA ELEMENTO DA LISTA

console.log(Object.entries(lista)) 
// O ENTRIES PEGA CADA ELEMENTO E FAZ UMA NOVA LISTA
// O PRIMEIRO ITEM SERÁ O INDICE
// O SEGUNDO ITEM SERÁ O VALOR

// COM OBJETOS:

let pessoa = {
    nome: 'Victor',
    sobrenome: 'Martins',
    idade: 18
}

console.log(Object.keys(pessoa)) // RETORNA AS CHAVES DE CADA ELEMENTO DA LISTA
console.log(Object.values(pessoa)) // RETORNA OS VALORES DE CADA ELEMENTO DA LISTA

console.log(Object.entries(pessoa)) 
// O ENTRIES PEGA CADA CHAVE E VALOR E FAZ UMA NOVA LISTA
// O PRIMEIRO ITEM SERÁ O CHAVE
// O SEGUNDO ITEM SERÁ O VALOR