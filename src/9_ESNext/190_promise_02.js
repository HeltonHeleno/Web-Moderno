
setTimeout(function(){
  console.log('Executando Callback...')
  
  setTimeout(function() {
    console.log('Executando Callback...')
    
    setTimeout(function() {
      console.log('Executando Callback...')
      
    }, 2000)

  }, 2000)

}, 2000)