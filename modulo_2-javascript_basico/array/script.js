let colors = ['blue','red','green']

console.log(colors)
console.log(colors[0]) 

let idades = [10,20,30]

let nomes = ['victor','biel','b']

let lista = ['carro',30,true,nomes]
console.log(lista)
console.log(lista[3][0])

// DESCONSTRUINDO ARRAYS

let array = ['Victor Martins', 'Victor', 'Martins', '@mxrtinsrx']

let [nomeCompleto, nome, sobrenome, instagram] = array

console.log(nomeCompleto, nome, sobrenome, instagram)

// RESGATANDO APENAS AS INFORMAÇÕES DESEJADAS:

let [nomeComp, , , insta] = array

console.log(nomeComp, insta)