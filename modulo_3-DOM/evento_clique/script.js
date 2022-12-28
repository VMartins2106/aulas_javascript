function clicou(){
    console.log("Clicou no botão - botão")
}

let botao = document.querySelector('.botao')
botao.addEventListener("click", clicou)
/*

FORMAS DE ADICIONAR UM CLICK

botao.addEventListener("click", clicou)

OU 

botao.addEventListener("click", function() {
    clicou()
})

OU 

botao.addEventListener("click", () => {
    clicou()
})

*/
