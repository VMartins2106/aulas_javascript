
// CRIAMOS FORA PARA TER ESCOPO GLOBAL
let timer

function comecar(){
    // CRIA UM TIMER QUE EXECUTA A FUNÇÃO INFORMADA (SEM PARENTESES) A CADA TEMPO QUE ESTIVER NO 
    // SEGUNDO PARÂMETRO, EM MILISSEGUNDOS: 1000 -> 1 SEGUNDO 
    // ESTA FUNÇÃO É INIFNITA
    timer = setInterval(showTime,1000)
}
function parar(){
    clearInterval(timer)
}

// TIMERS

// FUNÇÃO QUE PEGA A DATA, SELECIONA O QUE QUEREMOS E TRANSCREVE NO HTML
function showTime(){
    let d = new Date()

    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()

    let txt = h + ':' + m + ':' + s

    document.querySelector('.demo').innerHTML = txt
}

