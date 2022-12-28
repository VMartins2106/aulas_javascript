let fruits = ['Maça','Uva','Banana','Laranja']

console.log(fruits)
console.log(fruits.length)

fruits.push("Kiwi") // ADICIONA
console.log(fruits)
console.log(fruits.length)

fruits.pop() // EXCLUI O PRIMEIRO
console.log(fruits)
console.log(fruits.length)

fruits.shift() // EXCLUI O ULTIMO
console.log(fruits)
console.log(fruits.length)

console.log(fruits.join(', ')) // NÃO ALTERA, APENAS RETORNA ADICIONANDO O QUE QUISERMOS

fruits[0] = "Pêra"
console.log(fruits)
console.log(fruits.length)

fruits[fruits.length] = "Maracujá" // ADICIONANDO PELO METODO LENGTH
console.log(fruits)
console.log(fruits.length)
fruits[fruits.length -1] = "Mamão" // ALTERANDO PELO METODO LENGTH
console.log(fruits)
console.log(fruits.length)

// ORDENAÇÃO DE ARRAYS

fruits.sort() // ORDENA EM ORDEM ALBABÉTICA
console.log(fruits)

fruits.sort() // ORDENA EM ORDEM ALBABÉTICA
fruits.reverse() // INVERTE A ORDEM
console.log(fruits)

// EXEMPLO MAIS COMPLEXO

let carros = [
    { brand: 'Fiat', year: 2022},
    { brand: 'Bmw', year: 2018},
    { brand: 'Ferrari', year: 2020}
]

carros.sort((a,b) => {
    // FUNÇÃO DENTRO DO SORT
    // APENAS RETORNA 3 VALORES:
    // - : DIMINUI O INDICE, DESCE ELE 
    // 0 : NÃO ALTERA NADA
    // + : AUMENTA O INDICE, SOBE ELE

    // a E b SÃO COMO SE FOSSE UM ITEM E SEU POSTERIOR, ORGANIZANDO TODO O ARRAY

    /* UMA FORMA DE FAZER:

    if(a.year > b.year){
        return 1
    } else if( a.year<b.year ){
        return -1
    } else{
        return 0
    }*/

    // OU:
    return a.year - b.year // POIS RETORNA OU UM VALOR NEGATIVO, OU NULO, OU POSITIVO
})

/* também poderiamos fazer assim: 
carros.sort((a,b) => a.year - b.year)
*/

/* Para colocar o mais novo primeiro
carros.sort((a,b) => b.year - a.year)
*/

console.log(carros)

// ITERAÇÃO COM OS ARRAYS

// gera um novo array, então precisa ser armazenado
let bigFruits = fruits.filter((item) => {
    return item.length>4
    
    /* OU:
    if(item.length>4){
        return true
    }else{
        return false
    }
    */
}) 

console.log(bigFruits)

// função filter completa: 
let aa = fruits.filter((value, index, array) => {
    // value -> retorna o conteudo
    // index -> retorna o index
    // array -> retorna o array inteiro
}) 

// tem os mesmos argumentos do filter
let ok = fruits.every((value) => {

    // só retorna true se TODOS os itens do array satisfazerem aquela condição

    return value.length > 3
    /*
    if(value.length>3){
        return true
    }else{
        return false
    }
    */
})

if (ok){
    console.log('Todos são maiores que 3')
} else{
    console.log('Todos não são maiores que 3')
}

// tem os mesmos argumentos do filter
let someOfThem = fruits.some((value) => {

    // só retorna true se ALGUM os itens do array satisfazerem aquela condição

    return value.length > 3
    /*
    if(value.length>3){
        return true
    }else{
        return false
    }
    */
})

if (someOfThem){
    console.log('Algum é maior que 3')
} else{
    console.log('Nenhum  é maior que 3')
}

if(fruits.includes('Uva')){ // ISTO PESQUISA SE NAQUELE ARRAY TEM OQ VC PASSOU COMO PARÂMETRO
    console.log('Tem uva')
} else{
    console.log("Não tem uva")
}