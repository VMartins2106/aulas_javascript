let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
]
console.log(`Total de ingredientes: ${ingredientes.length}`)

ingredientes.push('cebola') // ADICIONA
console.log(ingredientes)
console.log(`Total de ingredientes: ${ingredientes.length}`)

ingredientes.pop() // REMOVE O ULTIMO
console.log(ingredientes)
console.log(`Total de ingredientes: ${ingredientes.length}`)

ingredientes.shift()
console.log(ingredientes) // REMOVE O PRIMEIRO
console.log(`Total de ingredientes: ${ingredientes.length}`)