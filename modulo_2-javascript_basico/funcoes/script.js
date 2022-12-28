function gravidade() {
    console.log("A gravidade do planeta é: ")
    console.log(9.8)
}

gravidade()

// FUNÇÕES COM PARÂMETROS

function somar(n1,n2){
    let soma = n1+n2
    console.log("Soma: " + soma)
}

somar(10,90)

function nomeCompleto(nome,sobrenome){
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto('Victor','Martins')
nomeCompleto('B','Helder')

// RETORNO DE UMA FUNÇÃO

function nomeCompleto(nome,sobrenome){
    let nomeCompleto = nome + ' ' + sobrenome
    return nomeCompleto
}
let nomeInteiro = nomeCompleto('Função','return')
console.log(nomeInteiro)
// ou
console.log(nomeCompleto('Função','return'))

// FUNÇÃO COM RETORNO CONDICIONAL

function maiorDeIdade(idade){
    if(idade>=18){
        return true
    }else{
        return false
    }
}

let verificacao = maiorDeIdade(70)

if (verificacao){
    console.log("É maior de idade")
}else{
    console.log("É menor de idade")
}

// ARROW FUNCTIONS --> MESMO RESULTADO, PORÉM DE FORMAS DIFERENTAS

/* função tradicional:
function somar(x,y){
    return x+y
}
console.log(somar(20,5))
*/
// arrow functions:
const soma = (x,y) => {
    return x + y
}
console.log(soma(20,5))
// ou até mesmo
const sub = (x,y) => x - y
console.log(sub(20,5))
// CASO AS CHAVES SEJAM ABERTAS, É OBRIGATÓRIO CONTÉR UM RETURN

// VARIÁVEIS DENTRO E FORA DE FUNÇÕES
function add(){
    let count = 0
    count += 1
}
add()
add()
add()

// console.log(count) isso irá gerar um erro, pois count só existe na função

let count = 0

function adicionar(){
    count += 1
}
adicionar()
adicionar()
adicionar()

console.log(count) // AGORA SIM ISTO FUNCIONA

let countt = 0

function adicionar(){
    let countt = 1
    countt += 10
}
adicionar()
adicionar()
adicionar()

console.log(countt) // ISTO IRÁ RETORNAR ZERO, POIS ATRIBUI APENAS O QUE ESTÁ FORA DA FUNÇÃO

// FUNÇÕES DENTRO DE FUNÇÕES

function addSquare(a,b){

    /*function square(x){
        return x*x
    }  OU */ 
    // const square = (x) => x*x  OU 
    const square = (x) => {
        return x*x
    }

    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB
}

console.log(addSquare(2,3))