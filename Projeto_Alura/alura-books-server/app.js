const express = require("express");
const app = express();
const rotaLivros = require('./rotas/livro')

app.use('/livros', rotaLivros)

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})