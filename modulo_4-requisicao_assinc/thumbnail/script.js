function mostrar(){
    let imagem = document.getElementById('imagem').files[0]
    // PEGAMOS A PRIMEIRA IMAGEM

    // CRIAMOS A IMAGEM E MANDAMOS A SRC DELA COMO URL
    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width=600

    // MANDAMOS A TAG IMG COM A URL NA SRC PARA A DIV
    document.getElementById("area").appendChild(img)
}