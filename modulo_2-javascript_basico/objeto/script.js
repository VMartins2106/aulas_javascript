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

// DESCONSTRUINDO UM OBJETO

let pessoaObj = {
    nome: 'Victor',
    sobrenome: 'Martins',
    idade: 18,
    social: {
        facebook: 'sadsjkda',
        instagram: 'jsdhfdhf'
    }
}

/* AO INVÉS DE FAZERMOS ISSO:
let nome = pessoaObj.nome
let sobrenome = pessoaObj.sobrenome
let idade = pessoaObj.idade
*/
// FAZEMOS ISSO:
 
let { nome: nomePessoa, sobrenome: sobrenomePessoa, idade: idadePessoa = 0} = pessoaObj
// OS DOIS PONTOS E O NOVO NOME SERVE PARA RENOMEARMOS A VARIÁVEL
// AGORA TEMOS AS 3 VARIÁVEIS QUE QUEREMOS
// O IGUAL SERVE PARA CASO SEJA UNDEFINED, OU SEJA, VAZIO, COLOCAMOS UM VALOR PADRÃO

let { facebook, instagram } = pessoa.social
// PEGAMOS OS VALORES DO OBJETO DENTRO DO OBJETO

// PEGANDO VALORES NORMAIS E VALORES OBJETOS:
let { nome: nomeSocial, idade = 0, social:{instagram:insta}} = pessoa
// ENTRAMOS EM 'social' E INFORMAMOS, DENTRO DE CHAVES, O QUE QUEREMOS

let pessoaObjeto = {
    nome: 'Victor',
    sobrenome: 'Martins',
    idade: 18,
    social: {
        facebook: 'sadsjkda',
        instagram: {
            url: '@mxrtinsrx',
            seguidores: 90
        }
    }
}

//PEGANDO O VALOR DE UM OBJETO DENTRO DE UM OBJETO DENTRO DE UM OBJETO
let {social:{instagram:{url:instaFinal,seguidores}}} = pessoa

// RESGATANDO INFORMAÇÃO ATRAVÉS DE UMA FUNÇÃO
function pegarNomeCompleto(obj){
    let nome = obj.nome
    let sobre = obj.sobrenome
    return `${nome} ${sobre}`
}
console.log(pegarNomeCompleto(pessoaObjeto))
// ENVIAMOS QUAL É O OBJETO E RESGATAMOS DENTRO DA FUNÇÃO