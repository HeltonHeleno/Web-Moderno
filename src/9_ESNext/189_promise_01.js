let a =1 
console.log(a)

let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia','Carlos','Daniel'])
})

p.then(function(valor) {
  console.log(valor)
})

//p.then(valor => console.log(valor))

p 
    .then(valor =>valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))