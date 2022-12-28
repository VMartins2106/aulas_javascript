document.write("Criando formulário com JavaScript")

class Form {

    itens = []

    method = 'GET'

    constructor(container, method, action){
        this.container = document.querySelector(container)
        this.method = method
        this.action = action
    }

    addItem(item){
        this.itens.push(item)
    }

    render(){
        let formElement = document.createElement('form')
        formElement.setAttribute('method', this.method)
        formElement.setAttribute('action', this.action)

        for (let i in this.itens){
            this.itens[i].render(formElement)
        }

        this.container.appendChild(formElement)
    }

}

class Input {

    _type = 'text'
    required = false

    constructor(name,label){
        this.name = name
        this.label = label
    }

    get type() {
        return this._type
    }
    set type(t){
        if(['text','password','email','submit'].includes(t)){
            this._type = t
        }else{
            throw new Error(`Input "${t}" type does not exist`)
        }
    }

    render(formElement){
        let el = document.createElement('input')
        el.type = this.type
        el.name = this.name
        el.placeholder = this.label
        el.required = this.required
        formElement.appendChild(el)
    }

}
class Button extends Input{
    constructor(label){
        super('',label)
        this.type = 'submit'
    }
    render(formElement){
        let el = document.createElement('input')
        el.type = this.type
        el.value = this.label
        formElement.appendChild(el)
    }
}

//IMPLEMENTAÇÃO
let form = new Form(".formArea",'POST','https://site.com.br')

//email
let email = new Input("email",'Digite seu e-mail')
email.type = 'email'
email.required = true
form.addItem(email)

//senha
let senha = new Input('password','Digite sua senha')
senha.type = 'password'
form.addItem(senha)

//botão
let button = new Button('Enviar')
form.addItem(button)

form.render()