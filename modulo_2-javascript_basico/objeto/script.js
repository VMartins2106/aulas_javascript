let nome = 'Victor'
let nomes = ['Victor','Pedro']
let personagem  = { // ISTO É UM OBJETO
    nome: 'Victor',
    idade: 18,
    pais: 'Brasil',
    olhos: ['preto','azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}
console.log(personagem.nome)
console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`)
console.log(personagem.caracteristicas.forca)
console.log(personagem.caracteristicas.magia)
console.log(personagem.caracteristicas.stamina)
console.log(personagem.olhos[0])

// ALTERANDO

personagem.nome="VITAO"
console.log(personagem.nome)

personagem.caracteristicas.forca +=5
console.log(personagem.caracteristicas.forca)

personagem.olhos.push('verde')
console.log(personagem.olhos)

// EXEMPLO MAIS COMPLEXO

let person = {
    nome: 'Victor',
    idade: 18,
    carros: [
        {
            modelo: 'Fiat',
            cor: 'Preto'
        },
        {
            modelo: 'Honda',
            cor: 'cinza'
        },
        {
            modelo: 'Civic',
            cor: 'Branco'
        }
    ]
}
console.log(person.carros[2].modelo)

// FUNÇÕES DENTRO DE OBJETOS

let pessoa = {
    nome: 'Victor',
    sobrenome: 'Martins',
    idade: 18,
    tudo: function(){
        return `${this.nome} ${this.sobrenome}, ${this.idade} anos`
    }
}
console.log(pessoa.tudo())
// CASO USE () =>, O 'THIS' NÃO EXISTE, ENTÃO NAO TEM COMO ACESSAR NADA DALI DE DENTRO