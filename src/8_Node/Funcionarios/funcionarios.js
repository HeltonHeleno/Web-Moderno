const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)
})