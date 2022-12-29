



// REAPROVEITANDO

//NORMALMENTE
function adicionar(numeros){
    console.log(numeros)
}
adicionar(5)

// TIPO *ARGS DO PYTHON:

function adicionarVarios(...numeros){
    console.log(numeros)
}
adicionarVarios(5,12,24,4,12,13,14,12,312,3,1)

// USANDO UM FOR, POR EXEMPLO:
function adicionarVariosFor(...numeros){
    for (let i in numeros){
        console.log(numeros[i])
    }
}
adicionarVariosFor(5,12,24,4,12,13,14,12,312,3,1)