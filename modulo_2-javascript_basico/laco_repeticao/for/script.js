for(let n = 0 ;n < 10;n++){
    console.log('Frase qualquer'+n)
}

let cores = ['Preto', 'Branco', 'Azul','Vermelho']

for(let n = 0 ;n < cores.length;n++){
    console.log('Cor: '+ cores[n])
}

// OU  (BEM MELHOR)

for (let i in cores){
    console.log('Cor: '+ cores[i])
}

// OU (JÁ PEGA O CONTEÚDO DIRETO)

for (let cor of cores){
    console.log(cor)
}

// EM LISTA COM OJBETOS

let listaOBJ = [
    { nome: 'preto', qtd: 10},
    { nome: 'azul', qtd: 5},
    { nome: 'vermelho', qtd: 15}
]

for (let cor of listaOBJ){
    console.log(`Nome: ${cor.nome} - ${cor.qtd}`)
}
// OU
for (let i in listaOBJ){
    console.log(listaOBJ[i].nome)
}

// ALTERANDO AS CORES PARA MAIUSCULO

for (let i in listaOBJ){
    listaOBJ[i].nome = listaOBJ[i].nome.toUpperCase()
}
console.log(listaOBJ)