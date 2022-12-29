class Person {

    // variavel em classe é declarada sem let, var ou const
    _age = 0 // está fora do constructor, então não é parâmetro e se inicia para TODOS com este valor

    steps = 0

    // nome de classe começa com letra maiúscula
    constructor(name,lastName){ // EXECUTADA SEMPRE QUE A FUNÇÃO FOR INICIADA
        // MESMA FUNÇÃO DO __init__ no python
        this.name = name
        this.lastName = lastName
        // this se refere ao proprio objeto
    }

    // AÇÕES
    takeAStep(){
        this.steps++
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this._age = newAge
        }else{
            console.log('Idade inválida (utilize números válidos)')
        }
    }

    //GETTER AND SETTER
    get age(){
        return this._age
    }
    set age(x){
        if (typeof x == 'number'){
            this._age = x
        }
    }

    get fullName(){
        return `${this.name} ${this.lastName}`
    }

}

let pessoa1 = new Person("João","Silva")
let pessoa2 = new Person("Maria","Cunha")
let pessoa3 = new Person("Pedro","Oliveira")

console.log(`${pessoa1.name}`)

pessoa2.age = 20 // ALTERANDO A IDADE PADRÃO FORNECIDA PELA CLASSE

console.log(`${pessoa2.name} tem ${pessoa2.age}`)
console.log(`${pessoa3.name} tem ${pessoa3.age}`)

// ALTERANDO STEPS, UTILIZANDO UMA AÇÃO

pessoa1.takeAStep()
pessoa1.takeAStep()
pessoa1.takeAStep()
pessoa2.takeAStep()
console.log(`Passos de ${pessoa1.name}: ${pessoa1.steps}`)
console.log(`Passos de ${pessoa2.name}: ${pessoa2.steps}`)
console.log(`Passos de ${pessoa3.name}: ${pessoa3.steps}`)

// ALTERANDO A IDADE, UTILIZANDO UMA AÇÃO

pessoa1.setAge(52)
console.log(`${pessoa1.name} tem ${pessoa1.age} anos`) // AQUI NÃO TEM O '_' POIS ESTÁ EXECUTANDO FUNÇÃO

// CHAMANDO O GET E RETORNANDO O NOME COMPLETO, SETANDO IDADE NOVA
pessoa1.age = 30
console.log(`${pessoa1.fullName} tem ${pessoa1.age} anos`)

// -------------------------------------------------------------------------------------//

// CLASSE CRIADA PARA EXEMPLIFICAR A HERANÇA. CLASSE PAI
class Pessoa {
    age = 0
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`${this.name} diz OI`)
    }
    sayBy(){
        console.log(`${this.name} diz tchau`)
    }
}
// classe que HERDA os dados de Pessoa
class Student extends Pessoa {

    constructor(name,ra){        
        super(name)// 'SUPER' SEMPRE SE RELACIONA COM A CLASSE USADA NO 'EXTENDS'
        this.ra = ra
    }
    sayHi(){
        console.log(`${this.name} é um estudante e diz OI`)
    }
    sayBy(){
        super.sayBy()
    }
}

//HERANÇA
let p4 = new Student('Victor',1)
// isto é possivel, pois está sendo mandado um nome e um ra, porém como a classe Student
// está herdando da Pessoa, o nome é armazenado e puxada para Student, e a age é herdada
// automaticamente, pois está fora do constructor
// o ra é da própria classe Student
console.log(`${p4.name} tem ${p4.age} anos e o ra é #${p4.ra}`)
p4.age = 30
console.log(`${p4.name} tem ${p4.age} anos e o ra é #${p4.ra}`)

let p5 = new Student("Pedro",2)
console.log(`${p5.name} tem ${p5.age} anos e o ra é #${p5.ra}`)
p4.sayHi() // SE SOBRESCREVERMOS A FUNÇÃO, A PRIORIDADE É SEMPRE DA FUNÇÃO ATUAL, E NÃO DA HERDADA
p5.sayHi() // SE NÃO TIVER, AI PUXA DA HERDADA, SE TIVER LÁ

p5.sayBy() // PUXAMOS O CONTEÚDO DA FUNÇÃO HERDADA PARA A ATUAL COM O 'SUPER'
p5.sayBy()

// -------------------------------------------------------------------------------------//

// VARIÁVEL / MÉTODO ESTÁTICO

class Static {

    static hands = 1

    age = 0

    constructor(name){
        this.name = name
    }
    sayHi(){
        if (Static.hands == 1){
            console.log(`Oi eu sou ${this.name} e tenho ${Static.hands} mão`)
        }else{
            console.log(`Oi eu sou ${this.name} e tenho ${Static.hands} mãos`)
            // NÃO USAMOS O THIS, POIS ELE NÃO ESTÁ SE REFERINDO A PESSOA ESPECIFICA
            // USAMOS O NOME DA CLASSE, POIS SE REFERE A TODOS QUE PERTENCEM A ELA, COMO UMA POPULAÇÃO
        }
    }
    // função estatica:
    static sayBy(){
        console.log(`TCHAU`)
    }
}

let p6 = new Static('Victor')
// console.log(`Oi eu sou ${p6.name} e tenho ${Static.hands} mãos`) TAMBÉM FUNCIONA FORA
p6.sayHi()
// PARA ALTERAR, USAMOS: (MAS GERALMENTE NUNCA É ALTERADO)
Static.hands = 2
p6.sayHi()
//CHAMANDO A FUNÇÃO ESTÁTICA
Static.sayBy() // SÓ PODEMOS CHAMAR PELA CLASSE, POIS SÓ ELA TEM A FUNÇÃO

// -------------------------------------------------------------------------------------//

// FACTORY

class Factory {

    age = 0

    constructor(name){
        this.name = name
    }
}

// FACTORY É UMA FUNÇÃO QUE CRIA ALGO DE UMA CLASSE, ADICIONA ALGO (OU NÃO) E RETORNA 
// PODENDO CRIAR TUDO COM UMA LINHA DE CÓDIGO (ABAIXO)
function createPerson(name,age){
    let p = new Factory(name)
    p.age = age
    return p
}

let p7 = createPerson('Victor',18) // CRIANDO COM ESTA LINHA

console.log(`${p7.name} tem ${p7.age} anos`)