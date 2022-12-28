function clicou(){
    const div = document.querySelector('#teste')
    const ul = div.querySelector('ul')

    // ASSIM INSERIMOS TEXTO
    ul.before("Texto qualquer ") // está adicionando antes que o ul começa
    ul.after("Texto qualquer ") // está adicionando assim que o ul acaba

    // INSERINDO ELEMENTOS
    const newButton = document.createElement('button')
    newButton.innerHTML = 'Botão criado'

    ul.after(newButton)

    const newUl = document.createElement('ul')
    newUl.innerHTML = '<li>Linha adicionada</li><li>Linha adicionada</li>'

    ul.after(newUl)

    // TUDO QUE FOR FEITO É ADICIONADO AO UL, ENTÃO DAQUI PRA FRENTE O AFTER/BEFORE TERÁ UM NOVO VALOR

    const newLi = document.createElement('ul')
    newLi.innerHTML = '<li>Linha adicionada de novo'

    ul.after(newLi)

}