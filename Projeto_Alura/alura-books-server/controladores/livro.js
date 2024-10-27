function getLivros(req, res) {
    try{
        res.send("Requisição do tipo GET")
    } catch (error) {
        res.status(500).send(error.masage)
    }
}

module.exports = {
    getLivros
}