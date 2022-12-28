function clicou(){
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    console.log(input.getAttribute('placeholder')) // TRAZ O QUE TEM NAQUELE ATRIBUTO

    if (input.hasAttribute('placeholder')){ // VERIFICANDO SE TEM O ATRIBUTO
        console.log("Tem placeholder SIM")
    } else{
        console.log("Não tem place holder")
    }

    input.setAttribute('placeholder','Placeholder alterado')
    // SE NÃO TIVER ELE CRIA
    // SE TIVER ELE ALTERA

    if(input.getAttribute('type') == 'text'){ // PEGA O ATRIBUTO, PARA CONDICIONAR ELE
        input.setAttribute('type','password') // MUDAMOS O TIPO DO INPUT
        botao.innerText = 'Mostrar senha' // MUDAMOS O TEXTO DO BOTÃO
    } else {
        input.setAttribute('type','text')
        botao.innerText = 'Ocultar senha'
    }
    

}