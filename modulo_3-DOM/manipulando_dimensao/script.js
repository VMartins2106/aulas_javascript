let largura = document.querySelector('.texto').offsetWidth
// LARGURA DE TODA A DIV, SEJA O QUE ESTIVER LÁ, E TAMBÉM SEU RESPECTIVO CSS
let altura = document.querySelector('.texto').offsetHeigth
// ALTURA DE TODA A DIV, SEJA O QUE ESTIVER LÁ, E TAMBÉM SEU RESPECTIVO CSS

let larguraCerta = document.querySelector('.texto').clientWidth
// LARGURA DE TODA A DIV MENOS A SCROLLBAR
let alturaCerta = document.querySelector('.texto').clientHeight
// AINDA A ALTURA PURA

let LarguraScroll = document.querySelector('.texto').scrollWidth
// TAMANHO REAL
let alturaScroll = document.querySelector('.texto').scrollHeight
// ALTURA REAL

let posicaoScrollVertical = document.querySelector('.texto').scrollTop
// MOSTRA ONDE O SCROLL VERTICAL ESTÁ NA HORA QUE O CÓDIGO FOR ACIONADO
let posicaoScrollHorizontal = document.querySelector('.texto').scrollLeft
// MOSTRA ONDE O SCROLL HORIZONTAL ESTÁ NA HORA QUE O CÓDIGO FOR ACIONADO

let posicaoScrollJanela = window.scrollY
// MOSTRA ONDE O SCROLL VERTICAL DA JANELA ESTÁ NA HORA QUE O CÓDIGO FOR ACIONADO


window.scrollY(0,0)
// REDIRECIONA O SCROLL E COLOCA ELE NESTA POSIÇÃO