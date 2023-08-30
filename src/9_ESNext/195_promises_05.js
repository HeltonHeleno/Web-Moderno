function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if(Math.random() < chanceErro){
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }      
    } catch (e) {
        reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.1)
  .then(v => `Valor: ${v}`)
  .then( 
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
  )
  .catch(err => cconsole.log(`Erro: ${err}`))
  .then(() => console.log('Fim'))