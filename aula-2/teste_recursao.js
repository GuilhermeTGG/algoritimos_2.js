function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

async function incrementaNumero(numero){
    console.log(numero)
    await dorme(400)
  
    if (numero === 15) {
            return 'finalizou'
    }
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)
