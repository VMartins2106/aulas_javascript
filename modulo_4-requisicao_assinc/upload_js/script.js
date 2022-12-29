async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0]
    // RETIRA O '[0]' CASO O MULTIPLE ESTEJA ATIVADO NO INPUT TYPE FILE

    // PARA UPLOAD DE ARQUIVOS TEMOS DE USAR A CLASSE 'FormData()'
    // E ADICIONAMOS NELA TUDO QUE QUEREMOS
    let body = new FormData()
    body.append('title','titulo teste')
    body.append('arquivo',arquivo)

    // APENAS EXEMPLO, DARÁ ERRO POIS ESSE SITE NÃO EXISTE E CASO EXISTISSE TERIA
    // QUE ESTAR PLENAMENTE PREPARADO PARA RECEBER O ARQUIVO QUE ESTÁ SENDO ENVIADO
    let req = await fetch('https://www.meusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers:{
            'Content-Type': 'multipart/form-data' // LINHA OBRIGATÓRIO PARA UPLOAD
        }
    })

}