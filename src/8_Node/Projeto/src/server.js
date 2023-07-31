const express = require("express");

const app = express();

const port = 3333;
/*
app.get('/', (req, res) => {
    const message = 'hello Heltão'
    return res.send(`<h1>${message}</h1>`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/

app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Notebook', preco: 123.45}) // converter para JSON
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})