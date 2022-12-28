/*
Calcule a porcentagem entre 2 números
exemplo: 25% de 40 é 10
fórmula da porcentagem: (y/x) * 100
uso da função

let x = 40
let y = 10
let pct = calcPct(x,y)
console,log(´${pct}% de ${x} é ${y}´)
*/

function calcPct(x,y){
    let porcentagem = x/y * 100
    return porcentagem
}

let x = 20
let y = 400
let pct = calcPct(x,y)
console.log(`${pct}% de ${y} é ${x}`)

/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
uso da função
*/

function calcularImovel(metragem, quartos){
    let valor = metragem * 3000
    if(quartos===1){
        valor = valor
    }else if (quartos===2){
        valor = valor*1.2
    }else if (quartos===3){
        valor = valor*1.5
    }
    return valor
}

let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem,quartos)
console.log(`A casa custa R$ ${preco}`)

/*
Crie uma função que valide usuário e senha
Usuário correto: pedro
Senha correta: 123
*/

//Uso da função:

function validar(usuario,senha){
    if ((usuario === 'pedro') && (senha == 123)){
        return true
    }else{
        return false
    }
}

let usuario = 'victor'
let senha = '1234'
let validacao = validar(usuario.toLowerCase(),parseInt(senha))
if (validacao){
    console.log("Acesso concedido!")
}else{
    console.log("Acesso negado!")
}