

let pessoa = {
    nome: 'Victor',
    idade: 90
}
console.log(pessoa + 'Isto é um objeto JSON')

let pessoa2 ={
    nome: 'Victor',
    idade: 90,
    caracteristicas: ['sorridente','maravilhoso'] 
}
console.log(pessoa2 + 'Isto é um objeto JSON que possui um array')

let pessoa3 ={
    nome: 'Victor',
    idade: 90,
    caracteristicas: ['sorridente','maravilhoso'],
    estetica: {
        altura: 1.70,
        peso: 80
    }
}
console.log(pessoa2 + 'Isto é um objeto JSON que possui um objeto')

//-----------------------------------------------------------------------

let jsonTransformado = JSON.parse('{"nome": "Victor","idade": 90,"caracteristicas": ["sorridente","maravilhoso"],"estetica": {"altura": 1.70,"peso": 80}}')
// TEM QUE ESTAR EM UMA SÓ LINHA
// KEYS E VALUES TEM QUE TER ASPAS DUPLA, NUMBER NÃO

console.log(jsonTransformado + "Possui todas as propriedades de um objeto, pois é")

let stringTransformada = JSON.stringify(pessoa3 ={nome: 'Victor',idade: 90,caracteristicas: ['sorridente','maravilhoso'],estetica: {altura: 1.70,peso: 80}})
// NÃO É OBRIGATÓRIO TER APENAS UMA LINHA
console.log(stringTransformada)

let res = '{"lista":["Victor","Victor Martins"]}'
let resJson = JSON.parse(res)
console.log(resJson)

//-----------------------------------------------------------------------

// CÓDIGO SINCRONO E ASSINCRONO

// CÓDIGO SINCRONO, POIS ESPERA A PROCEDÊNCIA DAS LINHAS
// SÓ EXECUTA A PRÓXIMA QUANDO A ATUAL FOR FINALIZADA
let nome = 'Victor'
let sobre = 'Martins'
let completo = nome + ' ' + sobre

// CÓDIGO ASSINCRONO
// EXECUTA A PRÓXIMA INDEPENDENTEMENTE
let nome2 = 'Victor'
let sobre2 = 'Martins'
//let temperatura = Maquininha.pegarTemperatura() CODIGO ASSINCRONO
let completo2 = nome2 + ' ' + sobre2

//-----------------------------------------------------------------------

// CALLBACKS

function alertar(){
    console.log("Opa, tudo bem?")
}

let nome3 = 'Victor'
let sobrenome3 = 'Martins'
setTimeout(alertar, 2000) // SÓ EXECUTA O ALERTAR DEPOIS DE 2 SEGUNDOS
console.log(`Nome completo: ${nome3} ${sobrenome3}`)
// PORÉM ESTA LINHA NÃO ALTERA A PROCEDÊNCIA, POIS EXECUTA ESTA LINHA ^

//-----------------------------------------------------------------------

// PROMISES

// PROMESSA, DE QUE ALGUMA HORA ALGO IRÁ CHEGAR, OU NÃO
function pegarTemperatura(){
    return new Promise(function(resolve,reject){
        console.log("pegando temperatura...")

        setTimeout(function(){
            resolve('40 na sombra')
        }, 2000)        
    })
}

// EXEMPLO CÓDIGO ASSINCRONO COM PROMISSE

console.log("codigo antes")                   // CÓDIGO EXECUTADO

let temp = pegarTemperatura()                 // CÓDIGO EXECUTADO

console.log("codigo durante")                 // CÓDIGO EXECUTADO

// USAMOS O '.then()' PARA PEGAR O RESULTADO
temp.then(function(resultado){                // CÓDIGO PREPARADO
    console.log("Temperatura: " + resultado)
}) 
temp.catch(function(error){                   // CÓDIGO PREPARADO
    console.log("Eita, deu erro")
})

console.log("codigo depois")                  // CÓDIGO EXECUTADO

//-----------------------------------------------------------------------

// FETCH COM Async e Await

// USANDO O SITE jsonplaceholder PARA UTILIZAR UMA API QUE RETORNA JSON
// PARA FINS DE ESTUDO E PROTOTIPAGEM DE CÓDIGO
// NESTE EXEMPLOS PEGAMOS O JSON 'posts', MAS NESTE SITE TEM OUTROS...

// O async faz com que se torne assíncrono, se fosse variável, seria assim:
/*
    let loadPosts = async () => {

    }
*/

async function loadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando...'

    // FETCH RETORNA UMA PROMISE
    // 2 PARÂMETROS: URL(obrigatorio) E OBJETO(opcional)
    // FAZENDO COM AWAIT:
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()
    montarBlog(json)

    /* SE FOSSE FAZER SEM O AWAIT, FICARIA ASSIM:
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json() // TRANSFORMA EM JSON E RETORNA PROMISE
        })
        .then(function(json){ // ESTE THEN É DO .json(), POIS RETORNA UMA PROMISE
            // console.log(json) CARREGA O JSON
            document.getElementById("posts").innerHTML = json.length + " posts"
            montarBlog(json)
            // COMO É UMA LISTA, PODEMOS USAR OS MÉTODOS DELA
            // ESCRVEEMOS NA DIV COM ID 'posts' O TAMANHO DA LISTA JSON
        })
        .catch(function (error) {
            console.log("Deu erro!")
        })
    */
}

function montarBlog(json){
    let html = ''

    for (let i in json){
        html+='<h3>'+json[i].title+'</h3>' // PUXANDO BOY E TITLE DO JSON
        html+= json[i].body+'<br>'         // CARREGADO DO SITE
        html+= '<hr>'
    }

    document.getElementById("posts").innerHTML = html
}