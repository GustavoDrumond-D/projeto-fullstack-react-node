const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}
function postCriarLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}
function patchAtualizaLivro(modificacoes, id){
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livros.findIndex(livro => livro.id === id);
    const conteudoMudado = {
        ...livros[indiceModificado],
        ...modificacoes
    }
    livros[indiceModificado] = conteudoMudado;
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}
function deleteLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}
module.exports = {
    getTodosLivros,
    getLivroPorId,
    postCriarLivro,
    patchAtualizaLivro,
    deleteLivroPorId
}