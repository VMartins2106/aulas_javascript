function clicou(){
    const div = document.querySelector('#teste')
    const ul = div.querySelector('ul')

    ul.children[0].append("(alterado)") // CONTINUA SELECIONADO, POIS APENAS ADICIONA
    // APPEND É MUITO MAIS RÁPIDO, PORÉM:
    // SÓ FUNCIONA PARA TEXTO, TUDO QUE ESTIVER NO APPEND É INTERPRETADO COMO TEXTO
    // ul.children[0].innerHTML += "(alterado)" // TIRA A SELEÇÃO, POIS ELE MUDA TUDO E POEM DE NOVO

    let newLi = document.createElement("li")
    newLi.innerText = "Nova linha adicionada"

    // NESTE CASO FUNCIONARIA SEM O CHILD, POIS CRIAMOS UM ELEMENTO NO DOCUMENTO E INSERIMOS TEXTO NELE
    ul.appendChild(newLi) // COM APPEND CHILD PODEMOS ADICIONAR HTML NO FINAL
    // DO OUTRO JEITO, FARIAMOS: ul.innerHTML += "<li>Nova linha adicionada</li>"

    ul.prepend(newLi) // O PREPEND ADICIONA ALGO NO COMEÇO 

    for (let i = 0; i< 5; i++){
        let newLi = document.createElement("li")
        newLi.innerText = `linha ${i} adicionada`
        ul.append(newLi)
    }

}