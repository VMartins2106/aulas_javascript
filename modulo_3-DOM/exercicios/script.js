function apertou(event){
    tecla = event.key
    if(tecla=='Enter'){
        const ul = document.querySelector('ul')
        const newLi = document.createElement('li')
        newLi.innerHTML = (input.value)
        ul.appendChild(newLi)
        input.value = ''
    }
}

const input = document.querySelector('input')
input.addEventListener('keydown', apertou)
