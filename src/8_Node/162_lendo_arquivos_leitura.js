const fs = require('fs')

const caminho = __dirname + '/162_lendo_arquivos.json'

// sincrono..
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./162_lendo_arquivos.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta')
  console.log(arquivos)
})