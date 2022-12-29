



// REAPROVEITANDO

let numeros = [1,2,3,4]
let array = [numeros,5,6,7] // O ARRAY É UM ELEMENTO DO NOVO ARRAY
let outros = [...numeros,5,6,7] // JUNTA OS ARRAYS
let mesmoArray = [...numeros] // É O MESMO ARRAY

// PARA OBJETOS:

let info = {
    nome: 'Victor',
    sobrenome: 'Martins',
    idade: 18
}

let novaInfo = {
    ...info, // JUNTA O OBJETO A ESTE NOVO
    cidade: 'Caieiras',
    estado: 'São Paulo',
    pais: 'Brasil'
}