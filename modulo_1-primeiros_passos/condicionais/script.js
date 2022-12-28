let idade = 20

if (idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

let idadestr = "40"
if (idadestr == 40){
    console.log("Você tem 40 anos")
}

// == NÃO FAZ UMA PESQUISA TÃO RESTRITA, ENTÃO SE UMA STRING FOR IGUAL, ELE ACEITA
// SEM CONTAR QUE IRÁ CONCATER CASO SEJA STR

// SE FOR === O TIPO COMEÇA A IMPORTAR

if (idadestr === 40){
    console.log("Você de fato tem 40 anos")
}

// MULTICONFICIONAIS

if (idade >=18 ){
    if (idade<=60){
        console.log("Você é adulto")
    }
}

// DE UMA FORMA MELHOR:

if (idade >=18 && idade<=60){
    console.log("Você é de fato adulto")
}
if (idade >=18 || idade<=60){
    console.log("Você talvez é adulto")
}

// CONDICIONAL DUPLA
// ASSIM QUE CAIR TRUE EM UMA, ELA JÁ SAI DE TODAS AS OUTRAS
if (idade < 18){
    console.log("Você é duplamente criança")
} else if (idade >=18 && idade <60){
    console.log("Você é duplamente adulto")
} else if (idade >= 60){
    console.log("Você é duplamente idoso")
}

// BOOLEAN NO IF
let ok = true
if (ok){
    console.log("Era bem óbvio")
}else{
    console.log("Não era tão óbvio")
}

let verificacao = idade >= 18 && idade < 60
if (verificacao){
    console.log("Também era óbvio né")
}else{
    console.log("Ou nem tanto")
}
console.log(idade>18)

// CONFICIONAL TERNÁRIO

let isMember = false
let shipping = isMember ? 2 : 10
// IF DE UMA LINHA
// ? -> representa que o resultado é TRUE
// : indica o else
console.log(isMember ? 'Você é membro' : 'Você não é membro')
console.log("Frete: "+shipping)

let age = 18
let isAdult = (age>=18 && age<60) ? 'Sim' : 'Não'
console.log(isAdult)

// SWITCH CASE

let profession = "maluco"

console.log("Profissão: " + profession)

switch (profession){
    case "fiscal":
        console.log("Você é fiscal")
    break
    case "bombeiro":
        console.log("Você é bombeiro")
    break
    case "policial":
        console.log("Você é policial")
    break
    default:
        console.log("Você é "+profession)
    break
}