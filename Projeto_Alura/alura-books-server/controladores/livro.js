const {getTodosLivros} = require('../servicos/livros')

function getLivros(req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

module.exports = {
    getLivros
}