function clicou(){
    const div = document.querySelector('#teste')
    // CHILDREN --> ELEMENTOS DENTRO DAQUILO
    console.log(div.children) // RETORNA (ARRAY) OS FILHOS IMEDIATOS, PRIMEIRO GRAU 
    console.log(div.children[0].children) // RETORNA OS FILHOS IMEDIATOS DA PRIMEIRA POSIÇÃO DO ARRAY

    
    const ul = div.querySelector('ul')
    console.log(ul.innerHTML) // retorna TODO o conteúdo, por exemplo: <li>Algum item</li>

    ul.children[0].innerHTML = "<li>Item <strong>alterado</strong> !</li>" // ALTERANDO EM HTML
    ul.children[1].innerText = "<li>Item <strong>alterado</strong> !</li>" // ALTERANDO EM TEXTO
    ul.children[0].innerHTML += "<strong>ADICIONADO</strong>" // ADICIONANDO EM TEXTO
    ul.children[1].innerText += "ADICIONADO" // ADICIONANDO EM TEXTO

    const div2 = document.querySelector('#teste2')
    const ulOuter = div2.querySelector('ul')
    ulOuter.children[0].outerHTML = "<strong>Alterado outer !</strong><br><br>"
    ulOuter.children[0].innerHTML += "<strong>ADICIONADO outer</strong>" // ADICIONANDO EM TEXTO
    ulOuter.children[1].innerText = "<li>Item <strong>alterado outer</strong> !</li>" // ALTERANDO EM TEXTO
    ulOuter.children[1].innerText += "ADICIONADO outer" // ADICIONANDO EM TEXTO
    // PEGA TUDO QUE TEM DO PRÓPRIO ELEMENTO ATÉ SEU FECHAMENTO
    // AS PROPRIEDADES ACIMA TAMBÉM FUNCIONAM COM OUTER
}