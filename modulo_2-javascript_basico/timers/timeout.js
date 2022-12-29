

// CRIAMOS FORA PARA TER ESCOPO GLOBAL
let timer

// ASSIM QUE A PAGINA FOR CARREGADA, CASO VOCÊ NÃO DEFINA NENHUM EVENTO
// PARA QUE ISSO ACONTEÇA, ELE ESPERA X SEGUNDOS (EM MILISSEGUNDOS) E
// EXECUTA O QUE ESTIVER DENTRO DA FUNÇÃO

function rodar(){
    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Rodou'
    }, 2000)
}

function parar(){
    clearTimeout(timer)
    document.querySelector('.demo').innerHTML = 'Você parou'
}