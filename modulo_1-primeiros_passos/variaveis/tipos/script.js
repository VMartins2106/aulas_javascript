let idade = 90 // NUMBER --> USAMOS '.' PARA DEMARCAR UM FLOAT EM OUTRAS LINGUAGENS
let nome = "Victor" // STRING
let logado = true // BOOLEAN (com a inicial MINUSCULA)
let nomes = ["victor","joão","maria","carlos",30,true,45.3] // ARRAY (também é um object)
let objeto = {
    nome: "Victor",
    idade: 18
} // OBJETO --> MESMO ESQUEMA DE UM DICIONÁRIO EM PYTHON

// console.log(typeof objeto) //EXIBINDO O TIPO DA VARIÁVEl

// USAMOS DUAS BARRAS PARA ADICIONAR UM COMENTÁRIO DE LINHA ÚNICA
/*
USAMOS O '/*' E DEPOIS '* /' PARA COMENTÁRIOS DE LINHAS MULTIPLAS
*/

// REATRIBUINDO UM VALOR A MESMA VARIÁVEL COM LET
let nomeLet = "Victor"
console.log(nomeLet)

nomeLet = "João"
console.log(nomeLet)

// REATRIBUINDO UM VALOR A MESMA VARIÁVEL COM VAR
var nomeVar = "Victor"
console.log(nomeVar)

nomeVar = "João"
console.log(nomeVar)
// DIFERENÇA ENTRE LET E VAR POSTERIORMENTE

// ISSO DÁ ERRO, O CONST ATRIBUI UM VALOR ATÉ O FINAL DOS TEMPOS, SEM PODER ALTERÁ-LA
const nomeConst = "Victor"
console.log(nomeConst)

nomeConst = "João"
console.log(nomeConst)