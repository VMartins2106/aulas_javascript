
// MANIPULAÇÃO DE STRING

let nome = 'Victor de Almeida Martins'

console.log(nome.length) // QUANTOS CARACTERES TEM NA STRING

console.log(nome.indexOf('Lacerda')) // RETORNA EM QUAL POSIÇÃO AQUILO PASSADO *COMEÇA*
// CASO NÃO ENCONTRE, SEMPRE IRÁ RETORNAR -1

console.log(nome.substring(0,10)) // EXTRAI TUDO DA POSIÇÃO X ATÉ A POSIÇÃO Y
//                     X, Y

console.log(nome.slice(0,10)) // EXTRAI TUDO DA POSIÇÃO X ATÉ A POSIÇÃO Y
//                     X, Y
// O SLICE ACEITA INDICES NEGATIVOS, PARA COMEÇAR DO FINAL PARA O COMEÇO

console.log(nome.substr(9,15)) // JUNTA O SUBSTRING E O SLICE, AMBOS FUNCIONAM AQUI

console.log(nome.replace('Martins','Silva')) 
// PROCURA O PRIMEIRO PARÂMETRO E SUBSTITUI PELO SEGUNDO

console.log(nome.toUpperCase()) // COLOCA TODA A STRING EM MAIUSCULA

console.log(nome.toLowerCase()) // COLOCA TODA A STRING EM MINUSCULA

console.log(nome.concat(' Silva')) // JUNTA O PARÂMETRO À STRING
// ACEITA QUANTOS PARÂMETROS VOCÊ ENVIAR

console.log(nome.trim()) // TIRA TODOS OS ESPAÇOS DA STRING 

console.log(nome.charAt(3)) // ENCONTRA O CARACTER DA POSIÇÃO ENVIADA COMO PARÂMETRO

console.log(nome[3]) // ENCONTRA O CARACTER DA POSIÇÃO ENVIADA COMO PARÂMETRO

console.log(nome.split(' ')) // CORTA A STRING ONDE TIVER O PARÂMETRO ENVIADO E
// JUNTA TUDO SEPARADAMENTE EM UM ARRAY

// -----------------------------------------------------------------------------------

// MANIPULAÇÃO DE NUMBER 

let num = 10

console.log(num.toString()) // TRANSFORMA O NUMBER EM STRING

console.log(num.toFixed(2)) // CORTA AS CASA DECIMAIS E DEIXA APENAS A QUANTIDADE
// ENVIADA COMO PARÂMETRO

console.log(parseInt(num)) // TRANSFORMA EM INT
console.log(parseFloat(num)) // TRANSFORMA EM FLOAT E PRESERVA OS DECIMAIS

// -----------------------------------------------------------------------------------

// MANIPULAÇÃO DE ARRAY

let lista = ['Ovo','Farinha','Corante','Massa']

console.log(lista.toString()) // TRANSFORMA O ARRAY EM STRING (SEPARADO POR VIRGULA)

console.log(lista.join('-')) // TRANSFORMA O ARRAY EM STRING (SEPARADO PELO PARÂMETRO ENVIADO)

console.log(lista.indexOf('Massa')) // PROCURA O INDEX DO PARÂMETRO, SE NÃO ACHAR RETORNA -1

console.log(lista.pop()) // RETIRA O ULTIMO ITEM

console.log(lista.shift()) // RETIRA O PRIMEIRO ITEM

console.log(lista.push('Prato')) // ADICIONA O PARÂMETRO AO ARRAY

console.log(lista.length) // TAMANHO DO ARRAY

console.log(lista.splice(1,1)) // REMOVE A PARTIR DO PRIMEIRO PARÂMETRO
//                         X      E REMOVE X ITENS

let lista2 = ['Prato','Liquidifcador','Forno']

console.log(lista.concat(lista2)) // JUNTA DOIS ARRAYS

console.log(lista.sort()) // ORDENA EM ORDEM ALFABETICA

let ordenado = lista.sort()

console.log(ordenado.reverse()) // INVERTE A ORDEM

let listaNum = [45,4,9,16,25]
let listaNum2 = []

listaNum2 = lista.map(function(item) { // O MAP PERCORRE TODO O ARRAY E APLICA O QUE ESTIVER
    return item*2                      // NA FUNÇÃO PARA TODOS OS ITENS
})

// OUTRA FORMA DE FAZER A MESMA COISA QUE O MAP FAZ: 
for (let i in lista){
    lista2.push(lista[i]*2)
}

lista2 = lista.filter(function(item){ // O FILTER PERCORRE TODO O ARRAY E FILTRA CADA ITEM
    return item<20                    // COM O QUE VOCE PASSAR NA FUNÇÃO
})

lista2 = lista.every(function(item){  // O FILTER PERCORRE TODO O ARRAY E VERIFICA CADA ITEM
    return item>20 ? true : false    // COM O QUE VOCE PASSAR NA FUNÇÃO, RETORNANDO TRUE (TODOS)
})                                    // E FALSE PARA CASO ALGUM DÊ FALSE

lista2 = lista.some(function(item){  // O FILTER PERCORRE TODO O ARRAY E VERIFICA CADA ITEM
    return item>20 ? true : false    // COM O QUE VOCE PASSAR NA FUNÇÃO, RETORNANDO TRUE (ALGUM)
})                                   // E FALSE PARA CASO NENHUM DÊ TRUE

lista2 = lista.find(function(item){  // O FILTER PERCORRE TODO O ARRAY E PROCURA O QUE VOCÊ QUER
    return item==16 ? true : false    // ASSIM QUE ACHAR ELE JÁ PARA ( RETORNA O VALUE )
})

lista2 = lista.findIndex(function(item){  // O FILTER PERCORRE TODO O ARRAY E PROCURA O QUE VOCÊ QUER
    return item==16 ? true : false     // ASSIM QUE ACHAR ELE JÁ PARA ( RETORNA O INDEX )
})