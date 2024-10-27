const {Router} = require('express');
const {getLivros} = require('../controladores/livro')

const router = Router();

router.get('/', getLivros);

router.post('/', (req,res) => {
    try{
        res.send("Requisição do tipo POST")
    } catch (error){
        res.status().send(error.masage)
    }
});

router.patch('/', (req,res) => {
    try{
        res.send("Requisição do tipo PATCH")
    } catch (error){
        res.status().send(error.masage)
    }
});

router.delete('/', (req,res) => {
    try{
        res.send("Requisição do tipo DELETE")
    } catch (error){
        res.status().send(error.masage)
    }})

module.exports = router;
