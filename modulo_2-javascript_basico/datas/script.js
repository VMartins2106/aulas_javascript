let d = new Date()

// PEGA A DATA DO APARELHO QUE FOR USADO PARA ACIONAR O CÓDIGO

console.log(d) // DATA COMPLETO

console.log(d.toDateString()) // DATA MAIS RESUMIDA

console.log(d.toUTCString()) // TIRA O FUSO HORÁRIO

console.log(d.toString()) // TRANSFORMA EM STRING

let dParams = new Date(2020, 0, 1, 12, 30, 15)
// VOCÊ DEFINE O ANO, MES, DIA, HORA, MINUTO, SEGUNDO
// CUIDADO, O MES COMEÇA DE 0 E VAI ATÉ 11

let dParams2 = new Date('2020-0-1 12:30:15')
// TAMBÉM GERA A DATA INFORMADA (TEM QUE ESTAR NESTE FORMATO)

let dparams3 = new Date(2022, 2)
// O MÍNIMO PARA GERAR A DATA É ANO E MÊS, APENAS UM N FUNCIONA

let primeiraMarcacao = new Date(0)
// PRIMEIRA DATA AUTOMÁTICA

let marcacaoNegativa = new Date(-183618256426)
// MILISSEGUNDOS ANTES DA PRIMEIRA DATA

// MANIPULANDO ELA

let data = new Date()

console.log(data.getFullYear()) // RETORNA O ANO
console.log(data.getMonth()) // RETORNA O MÊS
console.log(data.getDay()) // RETORNA O DIA DA SEMANA ( 0 (domingo) A 6 (sabado) )
console.log(data.getDate()) // RETORNA O DIA
console.log(data.getHours()) // RETORNA AS HORAS
console.log(data.getMinutes()) // RETORNA OS MINUTOS
console.log(data.getSeconds()) // RETORNA OS SEGUNDOS
console.log(data.getMilliseconds()) // RETORNA OS MILISSEGUNDOS
console.log(data.getTime()) // RETORNA OS MILLISSEGUNDOS DA PRIMEIRA DATA (1970) ATÉ HOJE

let dataAtual = new Date.now() // PEGA O MOMENTO ATUAL (MILISSEGUNDOS TOTAIS

let date = new Date()

date.setFullYear(2022) // SETAMOS O ANO
date.setMonth(11) // SETAMOS O MÊS
date.setDay(15) // SETAMOS O DIA DA SEMANA
date.setDate(15) // SETAMOS O DIA
date.setDate( d.getDate() + 5 ) // PEGAMOS O DIA ATUAL E SOMAMOS 5
date.setHours( d.getHours() + 5 ) // PEGAMOS A HORA ATUAL E SOMAMOS 5
