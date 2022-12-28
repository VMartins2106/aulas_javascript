// WINDOW mexe com toda a janela, inclusive com a aba, o link da pagina e etc
// DOCUMENT mexe com tudo que tem naquela pagina

/* 

document.getElementsByTagName("h1")

ISTO RETORNA TODOS OS ELEMENTOS COM A TAG H1 EM FORMA DE ARRAY,
PODENDO SER LIDO E ARMAZENADO EM VARIÁVEIS

document.getElementById("teste")
ISTO RETORNA O ELEMENTO COM O ID ESPECIFICADO

document.getElementByClassName("teste")
ISTO RETORNA TODOS OS ELEMENTOS COM A CLASSE ESPECIFICADA

document.querySelector("#teste")
AQUI FUNCIONA COMO NO CSS: # -> ID
                           . -> CLASS
                           h1 -> TAG
( PORÉM RETORNA APENAS O PRIMEIRO QUE ACHAR )

document.querySelectorAll("li")
AQUI FUNCIONA COMO NO CSS: # -> ID
                           . -> CLASS
                           h1 -> TAG
( RETORNA TODOS QUE ACHAR )
( RETORN UM ARRAY )

document.querySelector("#teste2 ul li")
document.querySelectorAll("#teste2 ul li")
AQUI FUNCIONA COMO NO CSS: # -> ID
                           . -> CLASS
                           h1 -> TAG
( ESPECIFICA O CAMINHO E QUAL QUE É )
( O ALL RETORN UM ARRAY )

*/